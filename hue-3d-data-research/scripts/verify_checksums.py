#!/usr/bin/env python3
"""Write or verify SHA-256 checksums of every sample artefact.

  --write   recompute and store the manifest under provenance.json["file_manifest"]
  (default) compare files on disk with the stored manifest; exit 1 on any mismatch

Covers aoi/ and samples/ (files ignored by git, e.g. the GeoPackage and the 2 m
working raster, are skipped). The per-source provenance records written by the
fetch scripts stay untouched.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

SKIP_SUFFIXES = (".gpkg", "_2m.tif", ".part", ".tmp")


def scan() -> dict:
    out = {}
    for base in ("aoi", "samples"):
        for p in sorted((C.ROOT / base).rglob("*")):
            if p.is_file() and not p.name.endswith(SKIP_SUFFIXES):
                out[C.rel(p)] = {"sha256": C.sha256_file(p), "bytes": p.stat().st_size}
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--write", action="store_true")
    args = ap.parse_args()
    prov = C.load_provenance()
    current = scan()
    if args.write:
        # drop records that point at artefacts no longer kept in the repo
        for key in [k for k in prov["records"] if k.endswith("_2m.tif")]:
            del prov["records"][key]
        prov["file_manifest"] = {"generated_at": C.utcnow(), "algorithm": "sha256", "files": current}
        prov["updated_at"] = C.utcnow()
        C.PROVENANCE.write_text(json.dumps(prov, indent=1, ensure_ascii=False, sort_keys=True) + "\n", encoding="utf-8")
        print(f"manifest written: {len(current)} files, {sum(v['bytes'] for v in current.values()) / 1e6:.1f} MB")
        return 0
    stored = (prov.get("file_manifest") or {}).get("files", {})
    bad = [k for k, v in stored.items() if k not in current or current[k]["sha256"] != v["sha256"]]
    extra = [k for k in current if k not in stored]
    for k in bad:
        print("MISMATCH or missing:", k)
    for k in extra:
        print("not in manifest:", k)
    print(f"{len(stored) - len(bad)} of {len(stored)} files verified; {len(extra)} unlisted")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
