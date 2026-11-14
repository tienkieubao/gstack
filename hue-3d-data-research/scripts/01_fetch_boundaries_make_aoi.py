#!/usr/bin/env python3
"""Fetch current OSM administrative boundary relations for Huế and write the
three study-area polygons (GeoJSON, EPSG:4326 / CRS84 lon-lat degrees).

  aoi/zone_a_pilot.geojson            project rectangle (NOT an administrative boundary)
  aoi/zone_b_central_urban.geojson    project grouping: union of the OSM polygons of the
                                      central wards listed in ZONE_B_WARDS (NOT a legal unit)
  aoi/zone_c_hue_city_admin.geojson   OSM relation 1891483 "Thành phố Huế" (admin_level=4)
  aoi/wards_osm.geojson               the individual ward polygons used for Zone B

Source: OpenStreetMap API 0.6 `relation/<id>/full` (ODbL 1.0). OSM boundaries are
community-digitised, not the legal boundary record; see source_catalog.md.
"""
from __future__ import annotations

import argparse
import gzip
import hashlib
import json
import sys
from pathlib import Path

from pyproj import Geod
from shapely.geometry import box, mapping
from shapely.ops import unary_union

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402
from osmxml import OsmData  # noqa: E402

log = C.get_logger("aoi")
CITY_REL = 1891483  # "Thành phố Huế", admin_level=4 (seen in the pilot extract)
# Wards (admin_level=6) whose boundary relations were found in the pilot extract.
# Zone B = the compact central urban group; see README/aoi notes for the rationale.
ZONE_B_WARDS = {
    19324115: "Phường Phú Xuân",
    19324114: "Phường Thuận Hóa",
    19324110: "Phường Kim Long",
    19324113: "Phường Vỹ Dạ",
    19324112: "Phường An Cựu",
    19324109: "Phường Thủy Xuân",
}
OTHER_WARDS_SEEN = {
    19324111: "Phường Hương An",
    19325227: "Phường Hóa Châu",
    19325235: "Phường Mỹ Thượng",
}
GEOD = Geod(ellps="WGS84")


def area_km2(geom) -> float:
    return abs(GEOD.geometry_area_perimeter(geom)[0]) / 1e6


def fetch_relation(rid: int, refresh: bool) -> tuple[Path, dict]:
    out_dir = C.RAW / "osm" / "boundaries"
    dest = out_dir / f"relation_{rid}_full.osm.gz"
    meta_path = out_dir / f"relation_{rid}_full.osm.gz.meta.json"
    if dest.exists() and not refresh:
        return dest, json.loads(meta_path.read_text())
    tmp = out_dir / f"relation_{rid}_full.tmp"
    url = f"https://www.openstreetmap.org/api/0.6/relation/{rid}/full"
    C.fetch(url, tmp, refresh=True, logger=log)
    raw = tmp.read_bytes()
    info = json.loads(Path(str(tmp) + ".fetchmeta.json").read_text())
    with open(dest, "wb") as f:
        with gzip.GzipFile(fileobj=f, mode="wb", mtime=0, filename="") as gz:
            gz.write(raw)
    tmp.unlink()
    Path(str(tmp) + ".fetchmeta.json").unlink()
    meta = {"file": C.rel(dest), "url": url, "retrieved_at": info["retrieved_at"],
            "bytes_uncompressed": len(raw), "sha256_uncompressed": hashlib.sha256(raw).hexdigest(),
            "sha256_file": C.sha256_file(dest)}
    meta_path.write_text(json.dumps(meta, indent=1))
    return dest, meta


def relation_feature(rid: int, refresh: bool):
    path, meta = fetch_relation(rid, refresh)
    d = OsmData()
    d.load(path)
    geom, complete, missing = d.multipolygon(rid)
    rel = d.relations[rid]
    if geom is None:
        raise RuntimeError(f"relation {rid}: could not assemble a polygon (missing members: {missing})")
    props = {
        "osm_relation_id": rid,
        "name": rel["tags"].get("name"), "name_en": rel["tags"].get("name:en"),
        "admin_level": rel["tags"].get("admin_level"),
        "osm_tags": rel["tags"],
        "osm_version": rel["meta"]["version"], "osm_last_edit": rel["meta"]["timestamp"],
        "ring_assembly_complete": complete,
        "area_km2_geodesic": round(area_km2(geom), 2),
        "source": "OpenStreetMap contributors (ODbL 1.0)", "source_url": meta["url"],
        "retrieved_at": meta["retrieved_at"],
    }
    return geom, props, meta


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--refresh", action="store_true")
    args = ap.parse_args()
    crs_note = {"crs_note": "EPSG:4326 / OGC CRS84, longitude-latitude in decimal degrees (RFC 7946)"}
    metas = []

    # Zone A ------------------------------------------------------------
    w, s, e, n = C.PILOT_BBOX
    a = box(w, s, e, n)
    C.write_geojson(C.AOI_DIR / "zone_a_pilot.geojson", [{
        "type": "Feature", "geometry": mapping(a), "properties": {
            "zone": "A", "name": "Pilot: Kinh thành/Đại Nội – hai bờ sông Hương – cầu Trường Tiền, Phú Xuân, Dã Viên",
            "boundary_type": "project extent (self-defined rectangle) — NOT an administrative boundary",
            "bbox_wsen": [w, s, e, n], "area_km2_geodesic": round(area_km2(a), 2),
            "defined_by": "hue-3d-data-research, 2026-11-14", "effective_date": None,
        }}], name="zone_a_pilot", extra=crs_note)

    # Zone C ------------------------------------------------------------
    geom_c, props_c, meta = relation_feature(CITY_REL, args.refresh)
    metas.append(meta)
    props_c.update({
        "zone": "C",
        "boundary_type": "administrative (as mapped in OpenStreetMap; not the legal boundary record)",
        "legal_basis_note": "Thành phố Huế trực thuộc trung ương — see source_catalog.md / research_notes for the legal texts and effective dates",
    })
    C.write_geojson(C.AOI_DIR / "zone_c_hue_city_admin.geojson",
                    [{"type": "Feature", "geometry": mapping(geom_c), "properties": props_c}],
                    name="zone_c_hue_city_admin", extra=crs_note)

    # Wards + Zone B ----------------------------------------------------
    ward_feats, b_geoms = [], []
    for rid, label in {**ZONE_B_WARDS, **OTHER_WARDS_SEEN}.items():
        g, p, meta = relation_feature(rid, args.refresh)
        metas.append(meta)
        p["in_zone_b"] = rid in ZONE_B_WARDS
        ward_feats.append({"type": "Feature", "geometry": mapping(g), "properties": p})
        if rid in ZONE_B_WARDS:
            b_geoms.append(g)
        log.info("ward %s (%s): %.2f km2, complete=%s", rid, p["name"], p["area_km2_geodesic"], p["ring_assembly_complete"])
    C.write_geojson(C.AOI_DIR / "wards_osm.geojson", ward_feats, name="wards_osm", extra=crs_note)
    b = unary_union(b_geoms)
    C.write_geojson(C.AOI_DIR / "zone_b_central_urban.geojson", [{
        "type": "Feature", "geometry": mapping(b), "properties": {
            "zone": "B", "name": "Đô thị trung tâm Huế (nhóm phường trung tâm theo ranh giới OSM)",
            "boundary_type": "project grouping of administrative wards — the union itself is NOT a legal unit",
            "member_wards": [{"osm_relation_id": k, "name": v} for k, v in ZONE_B_WARDS.items()],
            "area_km2_geodesic": round(area_km2(b), 2),
            "bbox_wsen": [round(v, 5) for v in b.bounds],
            "source": "OpenStreetMap contributors (ODbL 1.0)",
            "defined_by": "hue-3d-data-research, 2026-11-14",
        }}], name="zone_b_central_urban", extra=crs_note)

    log.info("Zone A %.2f km2 | Zone B %.2f km2 | Zone C %.2f km2 (complete=%s)",
             area_km2(a), area_km2(b), props_c["area_km2_geodesic"], props_c["ring_assembly_complete"])
    C.record_provenance(
        "samples/raw/osm/boundaries/",
        source="OpenStreetMap administrative boundary relations (API 0.6 relation/<id>/full)",
        provider="OpenStreetMap Foundation / contributors",
        landing_url=f"https://www.openstreetmap.org/relation/{CITY_REL}",
        data_url="https://www.openstreetmap.org/api/0.6/relation/<id>/full",
        licence="ODbL 1.0", licence_url="https://www.openstreetmap.org/copyright",
        attribution="© OpenStreetMap contributors", crs="EPSG:4326",
        retrieved_at=sorted(m["retrieved_at"] for m in metas)[-1],
        data_date_note="Community-mapped boundaries; last-edit timestamps per relation are stored in the AOI GeoJSON properties.",
        files=metas, derived=["aoi/zone_b_central_urban.geojson", "aoi/zone_c_hue_city_admin.geojson", "aoi/wards_osm.geojson"],
        script="scripts/01_fetch_boundaries_make_aoi.py",
    )


if __name__ == "__main__":
    main()
