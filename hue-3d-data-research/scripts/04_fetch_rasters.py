#!/usr/bin/env python3
"""Fetch small raster samples for the pilot rectangle (window reads only).

  dem        Copernicus DEM GLO-30 (DSM) tile N16 E107 — pilot window, original grid/values
  skadi      Tilezen/Mapzen "skadi" SRTM-style tile N16E107 (comparison DEM) — pilot window
  worldcover ESA WorldCover 10 m 2021 v200 — pilot window
  sentinel2  Sentinel-2 L2A true-colour (TCI) of one low-cloud scene found through
             Earth Search STAC — pilot window + PNG quick-look

The full source objects are 9–270 MB each, so only the pilot window is stored in
samples/raw/ (lossless crop on the source pixel grid, no resampling). The source
object URL, ETag/Last-Modified and window are recorded in provenance.json.
"""
from __future__ import annotations

import argparse
import gzip
import json
import os
import sys
from pathlib import Path

import numpy as np
import rasterio
import requests
from rasterio.windows import from_bounds
from rasterio.warp import transform_bounds

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

log = C.get_logger("raster")
CACHE = Path(__file__).resolve().parent / ".cache"
GDAL_ENV = dict(GDAL_DISABLE_READDIR_ON_OPEN="EMPTY_DIR", CPL_VSIL_CURL_ALLOWED_EXTENSIONS=".tif,.TIF",
                GDAL_HTTP_MAX_RETRY="3", GDAL_HTTP_RETRY_DELAY="5",
                CURL_CA_BUNDLE=os.environ.get("SSL_CERT_FILE", ""))

DEM_URL = ("https://copernicus-dem-30m.s3.amazonaws.com/Copernicus_DSM_COG_10_N16_00_E107_00_DEM/"
           "Copernicus_DSM_COG_10_N16_00_E107_00_DEM.tif")
SKADI_URL = "https://elevation-tiles-prod.s3.amazonaws.com/skadi/N16/N16E107.hgt.gz"
WC_URL = "https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_N15E105_Map.tif"
STAC = "https://earth-search.aws.element84.com/v1/search"


def head(url: str) -> dict:
    r = requests.head(url, headers={"User-Agent": C.USER_AGENT}, timeout=60)
    r.raise_for_status()
    return {k: r.headers.get(k) for k in ("ETag", "Last-Modified", "Content-Length")}


def crop_cog(url: str, dest: Path, bbox_wgs84, refresh: bool) -> dict:
    """Window-read `url` (COG, via HTTP range requests) and write the window as GeoTIFF."""
    if dest.exists() and not refresh:
        log.info("cache hit %s", C.rel(dest))
    else:
        with rasterio.Env(**GDAL_ENV):
            with rasterio.open("/vsicurl/" + url) as src:
                b = transform_bounds("EPSG:4326", src.crs, *bbox_wgs84, densify_pts=21)
                win = from_bounds(*b, transform=src.transform).round_offsets().round_lengths()
                data = src.read(window=win)
                prof = src.profile.copy()
                prof.update(driver="GTiff", height=data.shape[1], width=data.shape[2],
                            transform=src.window_transform(win), compress="deflate", tiled=False)
                prof.pop("blockxsize", None); prof.pop("blockysize", None)
                dest.parent.mkdir(parents=True, exist_ok=True)
                with rasterio.open(dest, "w", **prof) as dst:
                    dst.write(data)
                    dst.update_tags(**src.tags())
                    if src.count == 1 and _has_cmap(src):
                        dst.write_colormap(1, src.colormap(1))
        log.info("window %s -> %s", url.rsplit("/", 1)[-1], C.rel(dest))
    with rasterio.open(dest) as d:
        return {"crs": str(d.crs), "width": d.width, "height": d.height, "dtype": d.dtypes[0],
                "res": [abs(d.transform.a), abs(d.transform.e)], "bounds": [round(v, 6) for v in d.bounds],
                "nodata": d.nodata, "tags": d.tags()}


def _has_cmap(src) -> bool:
    try:
        src.colormap(1)
        return True
    except ValueError:
        return False


def do_dem(refresh):
    dest = C.RAW / "dem" / "copernicus_glo30_N16E107_pilot_window.tif"
    info = crop_cog(DEM_URL, dest, C.PILOT_BBOX, refresh)
    C.record_provenance(
        C.rel(dest), source="Copernicus DEM GLO-30 Public (DSM), COG on AWS Open Data", provider="ESA / Copernicus (data © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018)",
        landing_url="https://registry.opendata.aws/copernicus-dem/", data_url=DEM_URL, source_object=head(DEM_URL),
        licence="Copernicus DEM GLO-30 licence (free, worldwide, incl. commercial use, with mandatory attribution) — see source_catalog.md",
        licence_url="https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM",
        retrieved_at=C.utcnow(), data_date_note="TanDEM-X acquisitions 2010-12 to 2015-01; this COG object last modified 2022-05-09 (not a re-survey).",
        crs="EPSG:4326 horizontal; heights in metres above EGM2008 geoid (per product spec)", raster=info,
        selection=f"lossless window of the source grid covering pilot bbox {C.PILOT_BBOX}",
        sha256_file=C.sha256_file(dest), bytes=dest.stat().st_size, script="scripts/04_fetch_rasters.py dem")


def do_skadi(refresh):
    """SRTM-format 1 arc-second tile (3601x3601 int16 big-endian). Crop the pilot window to a GeoTIFF."""
    gz = CACHE / "skadi_N16E107.hgt.gz"
    C.fetch(SKADI_URL, gz, refresh=refresh, logger=log)
    dest = C.RAW / "dem" / "tilezen_skadi_N16E107_pilot_window.tif"
    arr = np.frombuffer(gzip.decompress(gz.read_bytes()), dtype=">i2").reshape(3601, 3601)
    w, s, e, n = C.PILOT_BBOX
    step = 1 / 3600
    c0, c1 = int(np.floor((w - 107) / step)), int(np.ceil((e - 107) / step)) + 1
    r0, r1 = int(np.floor((17 - n) / step)), int(np.ceil((17 - s) / step)) + 1
    sub = arr[r0:r1, c0:c1].astype("int16")
    # pixel-is-point grid: cell centres on integer arc-seconds -> shift half a cell for the GeoTIFF transform
    transform = rasterio.transform.from_origin(107 + c0 * step - step / 2, 17 - r0 * step + step / 2, step, step)
    dest.parent.mkdir(parents=True, exist_ok=True)
    with rasterio.open(dest, "w", driver="GTiff", height=sub.shape[0], width=sub.shape[1], count=1, dtype="int16",
                       crs="EPSG:4326", transform=transform, nodata=-32768, compress="deflate") as dst:
        dst.write(sub, 1)
    C.record_provenance(
        C.rel(dest), source="Tilezen/Mapzen Terrain Tiles 'skadi' N16E107 (SRTM-style HGT composite)", provider="Mapzen/Tilezen via AWS Open Data",
        landing_url="https://registry.opendata.aws/terrain-tiles/", data_url=SKADI_URL, source_object=head(SKADI_URL),
        source_sha256=C.sha256_file(gz),
        licence="Composite of open sources (for this area SRTM, public domain); attribution required per Tilezen terrain attribution doc",
        licence_url="https://github.com/tilezen/joerd/blob/master/docs/attribution.md",
        retrieved_at=C.utcnow(), data_date_note="SRTM acquisition February 2000; object last modified 2016-04-27.",
        crs="EPSG:4326 horizontal; integer metres, EGM96 geoid for SRTM-derived cells", selection=f"window covering pilot bbox {C.PILOT_BBOX}",
        sha256_file=C.sha256_file(dest), bytes=dest.stat().st_size, script="scripts/04_fetch_rasters.py skadi")


def do_worldcover(refresh):
    dest = C.RAW / "landcover" / "esa_worldcover_2021_v200_pilot_window.tif"
    info = crop_cog(WC_URL, dest, C.PILOT_BBOX, refresh)
    C.record_provenance(
        C.rel(dest), source="ESA WorldCover 10 m 2021 v200", provider="ESA WorldCover consortium (VITO et al.)",
        landing_url="https://esa-worldcover.org/", data_url=WC_URL, source_object=head(WC_URL),
        licence="CC BY 4.0", licence_url="https://esa-worldcover.org/en/data-access",
        attribution="© ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021) processed by ESA WorldCover consortium",
        retrieved_at=C.utcnow(), data_date_note="Based on Sentinel-1/2 imagery of calendar year 2021; released 2022-10.",
        crs="EPSG:4326; class codes 10..100", raster=info, selection=f"lossless window covering pilot bbox {C.PILOT_BBOX}",
        sha256_file=C.sha256_file(dest), bytes=dest.stat().st_size, script="scripts/04_fetch_rasters.py worldcover")


def do_sentinel2(refresh):
    out = C.RAW / "sentinel2"
    out.mkdir(parents=True, exist_ok=True)
    search_path = out / "stac_search_low_cloud.json"
    if not search_path.exists() or refresh:
        body = {"collections": ["sentinel-2-l2a"], "bbox": list(C.PILOT_BBOX),
                "datetime": "2025-11-01T00:00:00Z/2026-11-13T23:59:59Z",
                "query": {"eo:cloud_cover": {"lt": 10}}, "limit": 50}
        r = requests.post(STAC, json=body, headers={"User-Agent": C.USER_AGENT}, timeout=90)
        r.raise_for_status()
        search_path.write_text(json.dumps(r.json(), indent=1))
        log.info("STAC search -> %d items", len(r.json()["features"]))
    items = json.loads(search_path.read_text())["features"]
    items = [i for i in items if (i["properties"].get("s2:nodata_pixel_percentage") or 0) < 1]
    item = min(items, key=lambda i: i["properties"]["eo:cloud_cover"])
    href = item["assets"]["visual"]["href"]
    dest = out / f"{item['id']}_TCI_pilot_window.tif"
    info = crop_cog(href, dest, C.PILOT_BBOX, refresh)
    # PNG quick-look for humans
    from PIL import Image
    with rasterio.open(dest) as d:
        rgb = np.transpose(d.read([1, 2, 3]), (1, 2, 0))
    png = C.NORM / "reference" / f"{item['id']}_TCI_pilot_quicklook.png"
    png.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(rgb).save(png, optimize=True)
    C.record_provenance(
        C.rel(dest), source=f"Sentinel-2 L2A scene {item['id']} (true-colour TCI, 10 m)",
        provider="ESA / Copernicus; COGs hosted by Element 84 Earth Search on AWS", landing_url="https://registry.opendata.aws/sentinel-2-l2a-cogs/",
        data_url=href, stac_item=f"https://earth-search.aws.element84.com/v1/collections/sentinel-2-l2a/items/{item['id']}",
        licence="Copernicus Sentinel data — free, full and open (Legal notice on the use of Copernicus Sentinel Data); attribution required",
        licence_url="https://sentinels.copernicus.eu/documents/247904/690755/Sentinel_Data_Legal_Notice",
        attribution=f"Contains modified Copernicus Sentinel data {item['properties']['datetime'][:4]}",
        retrieved_at=C.utcnow(), capture_datetime=item["properties"]["datetime"],
        scene_cloud_cover_pct=item["properties"]["eo:cloud_cover"], mgrs=item["properties"].get("grid:code"),
        crs=info["crs"], raster={k: info[k] for k in ("width", "height", "res", "bounds", "dtype")},
        selection=f"lossless window covering pilot bbox {C.PILOT_BBOX}", derived=[C.rel(png)],
        sha256_file=C.sha256_file(dest), bytes=dest.stat().st_size, script="scripts/04_fetch_rasters.py sentinel2")
    C.record_provenance(
        C.rel(search_path), source="Earth Search STAC API search result (sentinel-2-l2a, cloud < 10 %, 2025-11-01..2026-11-13, pilot bbox)",
        provider="Element 84", data_url=STAC, retrieved_at=C.utcnow(), licence="metadata", sha256_file=C.sha256_file(search_path),
        script="scripts/04_fetch_rasters.py sentinel2")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("what", nargs="*", default=["dem", "skadi", "worldcover", "sentinel2"])
    ap.add_argument("--refresh", action="store_true")
    args = ap.parse_args()
    for w in args.what:
        {"dem": do_dem, "skadi": do_skadi, "worldcover": do_worldcover, "sentinel2": do_sentinel2}[w](args.refresh)


if __name__ == "__main__":
    main()
