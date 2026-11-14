#!/usr/bin/env python3
"""Sample of Google Open Buildings 2.5D Temporal (2023 epoch) over the pilot
rectangle, and a per-footprint height ESTIMATE for the Overture buildings.

Source object: one 25 000 x 25 000 px, 0.5 m GeoTIFF of 865 MB
(gs://open-buildings-temporal-data/v1/geotiffs/3141c_2023_06_30/tile_F73tKZs3AmI.tif,
EPSG:32648, bands building_fractional_count / building_height / building_presence).
The original bytes are NOT stored in the repo (size). This script reads the pilot
window through HTTP range requests and writes:

  samples/normalized/buildings_height/open_buildings_25d_2023_pilot_2m.tif
      building_height + building_presence averaged from 0.5 m to 2 m — local
      working raster (26 MB, git-ignored), used for the per-footprint statistics.
  samples/normalized/buildings_height/open_buildings_25d_2023_pilot_4m_uint16.tif
      compact copy kept in the repo (4 m = the product's stated effective
      resolution; height in cm, presence in %) — a DERIVED raster.
  samples/normalized/buildings_height/overture_buildings_height_estimate.csv.gz
      per Overture footprint: median/p90 of the height raster inside the
      footprint, status "derived" (ML model output from Sentinel-2; NOT a survey).
  samples/normalized/validation/building_height_check.json
      coverage + comparison against the few OSM `building:levels` tags.

Licence: CC BY 4.0 or ODbL 1.0 (Google Research Open Buildings).
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

import numpy as np
import rasterio
import requests
from rasterio.enums import Resampling
from rasterio.features import rasterize
from rasterio.warp import transform_bounds
from rasterio.windows import from_bounds

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402
import importlib
norm = importlib.import_module("05_normalize")

log = C.get_logger("height")
OBJ = "v1/geotiffs/3141c_2023_06_30/tile_F73tKZs3AmI.tif"
URL = "https://storage.googleapis.com/open-buildings-temporal-data/" + OBJ
META = "https://storage.googleapis.com/storage/v1/b/open-buildings-temporal-data/o/" + OBJ.replace("/", "%2F")
OUT = C.NORM / "buildings_height"
FACTOR = 4          # 0.5 m -> 2 m
PRESENCE_MIN = 0.5  # only trust height where the model says "building"
M_PER_LEVEL = 3.3   # rough storey height used ONLY for the sanity comparison below


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--refresh", action="store_true")
    args = ap.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    tif = OUT / "open_buildings_25d_2023_pilot_2m.tif"
    if not tif.exists() or args.refresh:
        env = dict(GDAL_DISABLE_READDIR_ON_OPEN="EMPTY_DIR", CPL_VSIL_CURL_ALLOWED_EXTENSIONS=".tif",
                   CURL_CA_BUNDLE=os.environ.get("SSL_CERT_FILE", ""), GDAL_HTTP_MAX_RETRY="3", GDAL_HTTP_RETRY_DELAY="5")
        with rasterio.Env(**env):
            with rasterio.open("/vsicurl/" + URL) as src:
                b = transform_bounds("EPSG:4326", src.crs, *C.PILOT_BBOX, densify_pts=21)
                win = from_bounds(*b, transform=src.transform).round_offsets().round_lengths()
                h, w = int(win.height // FACTOR), int(win.width // FACTOR)
                log.info("reading window %s (overviews: %s) -> %dx%d", win, src.overviews(2), w, h)
                data = src.read([2, 3], window=win, out_shape=(2, h, w), resampling=Resampling.average)
                tr = rasterio.transform.from_origin(src.window_transform(win).c, src.window_transform(win).f,
                                                    src.res[0] * win.width / w, src.res[1] * win.height / h)
                prof = dict(driver="GTiff", height=h, width=w, count=2, dtype="float32", crs=src.crs, transform=tr,
                            compress="deflate", predictor=3, tiled=True, nodata=None)
                with rasterio.open(tif, "w", **prof) as dst:
                    dst.write(data.astype("float32"))
                    dst.set_band_description(1, "building_height_m_above_ground (mean of 0.5 m cells)")
                    dst.set_band_description(2, "building_presence (mean of 0.5 m cells)")
    # compact copy for the repo: 4 m, uint16 (height in cm, presence in %); the 2 m float raster stays local (git-ignored)
    small = OUT / "open_buildings_25d_2023_pilot_4m_uint16.tif"
    with rasterio.open(tif) as src:
        h4, w4 = src.height // 2, src.width // 2
        d = src.read(out_shape=(2, h4, w4), resampling=Resampling.average)
        prof = dict(driver="GTiff", height=h4, width=w4, count=2, dtype="uint16", crs=src.crs, compress="deflate", predictor=2, tiled=True,
                    transform=rasterio.transform.from_origin(src.transform.c, src.transform.f, src.transform.a * src.width / w4, -src.transform.e * src.height / h4))
        with rasterio.open(small, "w", **prof) as dst:
            dst.write(np.clip(np.nan_to_num(d[0]) * 100, 0, 65535).astype("uint16"), 1)
            dst.write(np.clip(np.nan_to_num(d[1]) * 100, 0, 100).astype("uint16"), 2)
            dst.set_band_description(1, "building_height_cm_above_ground (mean, 4 m cells)")
            dst.set_band_description(2, "building_presence_percent (mean, 4 m cells)")
    obj = requests.get(META, params={"fields": "name,size,generation,md5Hash,updated,timeCreated"}, timeout=60).json()

    with rasterio.open(tif) as src:
        height, presence = src.read(1), src.read(2)
        transform, crs, shape = src.transform, src.crs, src.shape
    b = norm.overture_buildings()
    bm = b.to_crs(crs)
    labels = rasterize(((g, i + 1) for i, g in enumerate(bm.geometry)), out_shape=shape, transform=transform, fill=0, dtype="int32")
    valid = (labels > 0) & (presence >= PRESENCE_MIN) & np.isfinite(height)
    idx, hv = labels[valid], height[valid]
    order = np.argsort(idx, kind="stable")
    idx, hv = idx[order], hv[order]
    uniq, start = np.unique(idx, return_index=True)
    groups = np.split(hv, start[1:])
    med = np.full(len(b), np.nan); p90 = np.full(len(b), np.nan); npx = np.zeros(len(b), dtype=int)
    for u, g in zip(uniq, groups):
        med[u - 1], p90[u - 1], npx[u - 1] = np.median(g), np.percentile(g, 90), len(g)
    b["height_est_median_m"] = np.round(med, 2)
    b["height_est_p90_m"] = np.round(p90, 2)
    b["height_est_pixels_2m"] = npx
    b["height_est_status"] = np.where(np.isfinite(med), "derived", "unknown")
    b["height_est_source"] = "Google Open Buildings 2.5D Temporal v1, epoch 2023-06-30 (ML estimate from Sentinel-2)"
    cols = ["overture_id", "source_dataset", "source_record_id", "name", "area_m2", "height_m", "height_status", "num_floors",
            "height_est_median_m", "height_est_p90_m", "height_est_pixels_2m", "height_est_status"]
    b[cols].to_csv(OUT / "overture_buildings_height_estimate.csv.gz", index=False, compression={"method": "gzip", "mtime": 0})

    have = b[np.isfinite(med)]
    res = {
        "generated_at": C.utcnow(), "source_object": obj, "source_url": URL, "raster": {"crs": str(crs), "shape": list(shape), "res_m": [transform.a, -transform.e]},
        "presence_threshold": PRESENCE_MIN,
        "footprints_total": int(len(b)), "footprints_with_estimate": int(len(have)), "pct_with_estimate": round(100 * len(have) / len(b), 1),
        "pct_with_estimate_by_source": (100 * have.source_dataset.value_counts() / b.source_dataset.value_counts()).round(1).to_dict(),
        "height_est_median_quantiles_m": {q: round(float(have.height_est_median_m.quantile(float(q))), 2) for q in ("0.05", "0.25", "0.5", "0.75", "0.95", "0.99")},
        "share_estimates_over_11m_pct": round(100 * float((have.height_est_median_m > 11).mean()), 2),
        "raster_stats_where_presence": {"n_px": int((presence >= PRESENCE_MIN).sum()), "height_p50": round(float(np.median(height[presence >= PRESENCE_MIN])), 2),
                                        "height_p99": round(float(np.percentile(height[presence >= PRESENCE_MIN], 99)), 2), "height_max": round(float(height[presence >= PRESENCE_MIN].max()), 2)},
    }
    # sanity check against OSM building:levels (tiny sample; storey height is an assumption)
    lv = b[b.num_floors.notna() & np.isfinite(med)].copy()
    lv["levels_x_3p3"] = lv.num_floors.astype(float) * M_PER_LEVEL
    lv["diff_p90_minus_levels"] = lv.height_est_p90_m - lv.levels_x_3p3
    res["check_vs_osm_levels"] = {
        "n": int(len(lv)), "assumed_m_per_level": M_PER_LEVEL,
        "median_abs_diff_m": round(float(lv.diff_p90_minus_levels.abs().median()), 2) if len(lv) else None,
        "mean_diff_m": round(float(lv.diff_p90_minus_levels.mean()), 2) if len(lv) else None,
        "rows": lv[["name", "num_floors", "levels_x_3p3", "height_est_median_m", "height_est_p90_m", "area_m2"]].sort_values("num_floors", ascending=False).head(15).to_dict("records"),
        "caveat": "n is small, storey height is assumed, and levels are community tags — an indication only, not an accuracy assessment.",
    }
    named = b[b.name.isin(["Ngọ Môn", "Kỳ Đài", "Điện Thái Hòa", "Điện Kiến Trung", "Hiển Lâm Các", "Trường Tiền Plaza"])]
    res["landmarks"] = named[["name", "area_m2", "height_est_median_m", "height_est_p90_m", "height_est_pixels_2m"]].to_dict("records")
    res = json.loads(json.dumps(res, default=lambda o: None if (isinstance(o, float) and o != o) else float(o)))
    txt = json.dumps(res, indent=1, ensure_ascii=False).replace("NaN", "null")
    (C.NORM / "validation" / "building_height_check.json").write_text(txt + "\n", encoding="utf-8")
    C.record_provenance(
        C.rel(small), kind="derived (pilot window, mean-resampled from 0.5 m to 4 m, scaled to uint16)",
        source="Google Open Buildings 2.5D Temporal v1 (epoch 2023-06-30)", provider="Google Research",
        landing_url="https://sites.research.google/gr/open-buildings/temporal/", data_url=URL, source_object=obj,
        licence="CC BY 4.0 or ODbL 1.0 (user's choice)", attribution="Google Research Open Buildings 2.5D Temporal Dataset",
        retrieved_at=C.utcnow(), data_date_note="Model inference for mid-2023 from Sentinel-2 time series; not a survey.",
        crs=str(crs) + "; band 1 height in cm above ground, band 2 presence in %", sha256_file=C.sha256_file(small), bytes=small.stat().st_size,
        derived=["samples/normalized/buildings_height/overture_buildings_height_estimate.csv.gz", "samples/normalized/validation/building_height_check.json"],
        script="scripts/09_fetch_building_heights.py")
    print(txt[:3500])


if __name__ == "__main__":
    main()
