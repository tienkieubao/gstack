#!/usr/bin/env python3
"""Fetch raw OpenStreetMap data for the pilot rectangle (Zone A) via the
official OSM API 0.6 `map` call, tile by tile.

Why the editing API and not Overpass/Geofabrik: on 2026-11-14 both
overpass-api.de and download.geofabrik.de reset connections from this
environment (see research_log.md). The editing API is NOT meant for bulk
downloads (https://operations.osmfoundation.org/policies/api/), so this script
is deliberately limited to the small pilot rectangle, caches every tile, and
sleeps between calls. For Zone B/C use a Geofabrik extract or Overpass.

Raw output: samples/raw/osm/tiles/map_<w>_<s>_<e>_<n>.osm.gz  (gzip of the
exact response bytes, mtime=0 so the archive is reproducible) + manifest.json.
Licence: ODbL 1.0, © OpenStreetMap contributors.
"""
from __future__ import annotations

import argparse
import gzip
import hashlib
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

API = "https://www.openstreetmap.org/api/0.6/map"
OUT = C.RAW / "osm" / "tiles"
NX, NY = 4, 4          # initial grid over the pilot bbox
MAX_DEPTH = 2          # a tile over the 50 000-node limit is split in 4, at most twice
MAX_REQUESTS = 80      # hard stop: this is a pilot sample, not a bulk download

log = C.get_logger("osm")
n_requests = 0


def tile_name(b):
    return "map_%.5f_%.5f_%.5f_%.5f.osm.gz" % b


def fetch_tile(b, depth, refresh, manifest):
    """b = (w, s, e, n). Returns nothing; appends to manifest."""
    global n_requests
    dest = OUT / tile_name(b)
    tmp = OUT / (tile_name(b)[:-3] + ".tmp")
    if dest.exists() and not refresh:
        log.info("cache hit %s", dest.name)
        raw = gzip.decompress(dest.read_bytes())
        meta = json.loads((OUT / (dest.name + ".meta.json")).read_text())
        manifest.append(meta)
        return
    if n_requests >= MAX_REQUESTS:
        raise RuntimeError("request budget exhausted; refusing to continue")
    n_requests += 1
    try:
        C.fetch(API, tmp, params={"bbox": "%.5f,%.5f,%.5f,%.5f" % b}, refresh=True, logger=log)
    except RuntimeError as e:
        if "too many nodes" in str(e).lower() and depth < MAX_DEPTH:
            w, s, e_, n = b
            mx, my = (w + e_) / 2, (s + n) / 2
            log.info("tile over node limit, splitting %s", b)
            for sub in ((w, s, mx, my), (mx, s, e_, my), (w, my, mx, n), (mx, my, e_, n)):
                fetch_tile(tuple(round(v, 5) for v in sub), depth + 1, refresh, manifest)
            return
        raise
    raw = tmp.read_bytes()
    info = json.loads(Path(str(tmp) + ".fetchmeta.json").read_text())
    with open(dest, "wb") as f:
        with gzip.GzipFile(fileobj=f, mode="wb", mtime=0, filename="") as gz:
            gz.write(raw)
    tmp.unlink()
    Path(str(tmp) + ".fetchmeta.json").unlink()
    meta = {
        "file": C.rel(dest), "bbox_wsen": list(b), "url": info["final_url"],
        "retrieved_at": info["retrieved_at"], "bytes_uncompressed": len(raw),
        "sha256_uncompressed": hashlib.sha256(raw).hexdigest(), "sha256_file": C.sha256_file(dest),
    }
    (OUT / (dest.name + ".meta.json")).write_text(json.dumps(meta, indent=1))
    manifest.append(meta)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--refresh", action="store_true", help="ignore the cache and download again")
    args = ap.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    w, s, e, n = C.PILOT_BBOX
    dx, dy = (e - w) / NX, (n - s) / NY
    manifest: list[dict] = []
    for ix in range(NX):
        for iy in range(NY):
            b = (round(w + ix * dx, 5), round(s + iy * dy, 5), round(w + (ix + 1) * dx, 5), round(s + (iy + 1) * dy, 5))
            fetch_tile(b, 0, args.refresh, manifest)
    man_path = C.RAW / "osm" / "manifest.json"
    man_path.write_text(json.dumps({"pilot_bbox_wsen": C.PILOT_BBOX, "tiles": manifest}, indent=1) + "\n")
    C.record_provenance(
        "samples/raw/osm/tiles/",
        source="OpenStreetMap (OSM API 0.6 map call)", provider="OpenStreetMap Foundation / contributors",
        landing_url="https://www.openstreetmap.org/", data_url=API + "?bbox=<w,s,e,n>",
        licence="ODbL 1.0", licence_url="https://www.openstreetmap.org/copyright",
        attribution="© OpenStreetMap contributors",
        retrieved_at=sorted(t["retrieved_at"] for t in manifest)[-1],
        data_date_note="Live database state at retrieval time; per-object edit timestamps are inside the XML.",
        crs="EPSG:4326 (WGS 84 lon/lat degrees)",
        files=[{k: t[k] for k in ("file", "bbox_wsen", "sha256_file", "sha256_uncompressed", "bytes_uncompressed", "retrieved_at")} for t in manifest],
        manifest="samples/raw/osm/manifest.json",
        script="scripts/02_fetch_osm_pilot.py",
    )
    total = sum(t["bytes_uncompressed"] for t in manifest)
    log.info("done: %d tiles, %.1f MB uncompressed, %d network requests this run", len(manifest), total / 1e6, n_requests)


if __name__ == "__main__":
    main()
