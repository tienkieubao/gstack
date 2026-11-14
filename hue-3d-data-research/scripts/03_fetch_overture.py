#!/usr/bin/env python3
"""Fetch Overture Maps features from the public S3 bucket (anonymous).

Two modes, both cached:
  pilot  -> full rows for the pilot rectangle, written as GeoParquet under
            samples/raw/overture/<release>/<type>.parquet (rows are unmodified
            Overture rows, filtered by bbox; column `src_file` records the S3 key)
  stats  -> a few light columns for the Zone C bbox, only held in the local
            cache (scripts/.cache, not committed) and summarised by
            06_coverage_stats.py. Nothing is bulk-stored in the repo.

Licence: per-source — OSM-derived rows ODbL 1.0; Microsoft ML Buildings ODbL;
Google Open Buildings CC BY 4.0; Esri Community Maps CC BY 4.0; divisions also
geoBoundaries/others. The `sources` column of every row names its dataset.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path
from urllib.parse import urlsplit

import pyarrow as pa
import pyarrow.compute as pc
import pyarrow.dataset as ds
import pyarrow.fs as pafs
import pyarrow.parquet as pq

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

log = C.get_logger("overture")
BUCKET = "overturemaps-us-west-2"
DEFAULT_RELEASE = "2026-10-21.0"   # newest prefix listed in the bucket on 2026-11-14
CACHE = Path(__file__).resolve().parent / ".cache" / "overture"

PILOT_TYPES = {  # type -> theme
    "segment": "transportation", "connector": "transportation",
    "building": "buildings", "building_part": "buildings",
    "water": "base", "land_use": "base", "land": "base", "infrastructure": "base",
    "land_cover": "base",
}
STATS_COLUMNS = {
    "segment": ["id", "subtype", "class", "road_flags", "road_surface", "speed_limits", "access_restrictions",
                "level_rules", "width_rules", "prohibited_transitions", "names", "sources", "geometry", "bbox"],
    "building": ["id", "sources", "height", "num_floors", "roof_shape", "class", "subtype", "names", "bbox"],
}


def s3() -> pafs.S3FileSystem:
    kw = {}
    proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy")
    if proxy:
        p = urlsplit(proxy)
        kw["proxy_options"] = {"scheme": p.scheme or "http", "host": p.hostname, "port": p.port}
    return pafs.S3FileSystem(anonymous=True, region="us-west-2", connect_timeout=30, request_timeout=180, **kw)


def bbox_filter(w, s, e, n):
    return ((pc.field("bbox", "xmin") < e) & (pc.field("bbox", "xmax") > w)
            & (pc.field("bbox", "ymin") < n) & (pc.field("bbox", "ymax") > s))


def read(fs, release, typ, theme, bbox, columns=None) -> pa.Table:
    path = f"{BUCKET}/release/{release}/theme={theme}/type={typ}/"
    d = ds.dataset(path, filesystem=fs, format="parquet")
    return _with_src(d.to_table(filter=bbox_filter(*bbox), columns=list(columns or d.schema.names) + ["__filename"]))


def _with_src(tb: pa.Table) -> pa.Table:
    """Rename pyarrow's special `__filename` column to `src_file` (the S3 key each row came from)."""
    return tb.rename_columns([("src_file" if c == "__filename" else c) for c in tb.column_names])


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("mode", choices=["pilot", "stats", "divisions"])
    ap.add_argument("--release", default=DEFAULT_RELEASE)
    ap.add_argument("--refresh", action="store_true")
    args = ap.parse_args()
    fs = s3()

    if args.mode == "pilot":
        out_dir = C.RAW / "overture" / args.release
        out_dir.mkdir(parents=True, exist_ok=True)
        files = []
        for typ, theme in PILOT_TYPES.items():
            dest = out_dir / f"{typ}.parquet"
            if dest.exists() and not args.refresh:
                log.info("cache hit %s", C.rel(dest))
            else:
                tb = read(fs, args.release, typ, theme, C.PILOT_BBOX)
                pq.write_table(tb, dest, compression="zstd")
                log.info("%s: %d rows -> %s", typ, tb.num_rows, C.rel(dest))
            n = pq.read_metadata(dest).num_rows
            files.append({"file": C.rel(dest), "type": typ, "theme": theme, "rows": n,
                          "sha256_file": C.sha256_file(dest), "bytes": dest.stat().st_size})
        C.record_provenance(
            f"samples/raw/overture/{args.release}/",
            source=f"Overture Maps Foundation release {args.release}", provider="Overture Maps Foundation",
            landing_url="https://overturemaps.org/", data_url=f"s3://{BUCKET}/release/{args.release}/theme=<theme>/type=<type>/",
            licence="Per source dataset (see `sources` column): ODbL 1.0 for OSM- and Microsoft-derived rows; CC BY 4.0 for Google Open Buildings / Esri; CDLA-Permissive-2.0 for some themes",
            licence_url="https://docs.overturemaps.org/attribution/",
            attribution="© OpenStreetMap contributors, Overture Maps Foundation (+ Microsoft, Google, Esri Community Maps where named in `sources`)",
            retrieved_at=C.utcnow(), crs="EPSG:4326 (geometry as WKB in GeoParquet)",
            data_date_note="Release id is the publication date of the Overture release, not the capture date of the underlying features.",
            selection=f"rows whose bbox intersects pilot rectangle {C.PILOT_BBOX}",
            files=files, script="scripts/03_fetch_overture.py pilot",
        )
    elif args.mode == "stats":
        CACHE.mkdir(parents=True, exist_ok=True)
        zc = json.loads((C.AOI_DIR / "zone_c_hue_city_admin.geojson").read_text())
        from shapely.geometry import shape
        bbox = shape(zc["features"][0]["geometry"]).bounds
        for typ, cols in STATS_COLUMNS.items():
            dest = CACHE / f"{args.release}_{typ}_zoneC_bbox.parquet"
            if dest.exists() and not args.refresh:
                log.info("cache hit %s", dest.name)
                continue
            tb = read(fs, args.release, typ, PILOT_TYPES[typ], bbox, cols)
            pq.write_table(tb, dest, compression="zstd")
            log.info("stats %s: %d rows in Zone C bbox %s", typ, tb.num_rows, [round(v, 3) for v in bbox])
    else:  # divisions: administrative areas named Huế, to get a land-only polygon
        out_dir = C.RAW / "overture" / args.release
        out_dir.mkdir(parents=True, exist_ok=True)
        dest = out_dir / "division_area_hue.parquet"
        if not dest.exists() or args.refresh:
            path = f"{BUCKET}/release/{args.release}/theme=divisions/type=division_area/"
            d = ds.dataset(path, filesystem=fs, format="parquet")
            f = (pc.field("country") == "VN") & (pc.field("region") == "VN-26") & (pc.field("subtype") == "region")
            tb = _with_src(d.to_table(filter=f, columns=list(d.schema.names) + ["__filename"]))
            pq.write_table(tb, dest, compression="zstd")
            log.info("division_area region VN-26: %d rows", tb.num_rows)
        C.record_provenance(
            C.rel(dest), source=f"Overture Maps divisions/division_area, release {args.release}",
            provider="Overture Maps Foundation", landing_url="https://docs.overturemaps.org/guides/divisions/",
            data_url=f"s3://{BUCKET}/release/{args.release}/theme=divisions/type=division_area/",
            licence="ODbL 1.0 (OSM-derived divisions) — see `sources` column", retrieved_at=C.utcnow(),
            crs="EPSG:4326", selection="country=VN, region=VN-26, subtype=region",
            sha256_file=C.sha256_file(dest), bytes=dest.stat().st_size, script="scripts/03_fetch_overture.py divisions",
        )


if __name__ == "__main__":
    main()
