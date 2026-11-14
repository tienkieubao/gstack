#!/usr/bin/env python3
"""Coverage statistics per study zone (A pilot, B central urban, C whole city)
from the Overture release cached by `03_fetch_overture.py stats`.

Only counts/lengths are written to the repo
(samples/normalized/validation/coverage_stats.json); the underlying rows stay in
scripts/.cache. Zone membership: segment midpoint / building bbox centre inside
the zone polygon. Zone C uses the land-only polygon from Overture divisions
(the OSM relation also contains territorial sea).
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

import geopandas as gpd
import numpy as np
import pyarrow.parquet as pq
import shapely
from pyproj import Geod
from shapely.geometry import shape

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

CACHE = Path(__file__).resolve().parent / ".cache" / "overture"
GEOD = Geod(ellps="WGS84")
MAJOR = {"motorway", "trunk", "primary", "secondary", "tertiary"}
LOCAL = {"residential", "unclassified", "living_street", "service"}


def km2(g):
    return abs(GEOD.geometry_area_perimeter(g)[0]) / 1e6


def load_zone(name):
    return shape(json.loads((C.AOI_DIR / name).read_text())["features"][0]["geometry"])


def main():
    release = sorted(p.name for p in (C.RAW / "overture").iterdir() if p.is_dir())[-1]
    # land-only city polygon from Overture divisions; also export it as an AOI file
    div = pq.read_table(C.RAW / "overture" / release / "division_area_hue.parquet").to_pylist()
    land = [r for r in div if r["is_land"]]
    zc_land = shapely.from_wkb(land[0]["geometry"])
    zc_osm = load_zone("zone_c_hue_city_admin.geojson")
    C.write_geojson(C.AOI_DIR / "zone_c_hue_city_land.geojson", [{
        "type": "Feature", "geometry": shapely.geometry.mapping(zc_land), "properties": {
            "zone": "C (land only)", "name": land[0]["names"]["primary"],
            "boundary_type": "administrative, land area only (Overture division_area is_land=true; derived from OSM relation 1891483 clipped to coastline)",
            "overture_id": land[0]["id"], "overture_release": release, "region": land[0]["region"],
            "area_km2_geodesic": round(km2(zc_land), 2),
            "source": "Overture Maps divisions (OSM-derived, ODbL 1.0)"}}],
        name="zone_c_hue_city_land", extra={"crs_note": "EPSG:4326 / OGC CRS84 lon-lat degrees"})
    zones = {"A_pilot": load_zone("zone_a_pilot.geojson"), "B_central_urban": load_zone("zone_b_central_urban.geojson"),
             "C_city_land": zc_land}
    out = {"generated_at": C.utcnow(), "overture_release": release,
           "zone_area_km2": {k: round(km2(v), 2) for k, v in zones.items()},
           "zone_c_osm_relation_area_km2_incl_sea": round(km2(zc_osm), 2), "zones": {k: {} for k in zones}}

    # ---- segments ----
    seg = pq.read_table(CACHE / f"{release}_segment_zoneC_bbox.parquet").to_pylist()
    geoms = shapely.from_wkb([r["geometry"] for r in seg])
    mid = shapely.line_interpolate_point(geoms, 0.5, normalized=True)
    length_km = gpd.GeoSeries(geoms, crs="EPSG:4326").to_crs("EPSG:32648").length.values / 1000
    is_road = np.array([r["subtype"] == "road" for r in seg])
    cls = np.array([r["class"] or "" for r in seg])
    has = {k: np.array([bool(r[k]) for r in seg]) for k in ("speed_limits", "access_restrictions", "prohibited_transitions", "level_rules", "width_rules", "road_surface")}
    named = np.array([bool(r["names"] and r["names"].get("primary")) for r in seg])
    flags = [{v for f in (r["road_flags"] or []) for v in (f["values"] or [])} for r in seg]
    is_bridge = np.array(["is_bridge" in f for f in flags]); is_tunnel = np.array(["is_tunnel" in f for f in flags])

    def flag_fraction(r, flag):   # flags apply to a linear-referenced sub-range `between` of the segment
        tot = 0.0
        for f in (r["road_flags"] or []):
            if flag in (f["values"] or []):
                b = f["between"] or [0.0, 1.0]
                tot += max(0.0, (b[1] if b[1] is not None else 1.0) - (b[0] if b[0] is not None else 0.0))
        return min(tot, 1.0)

    bridge_km = length_km * np.array([flag_fraction(r, "is_bridge") for r in seg])
    tunnel_km = length_km * np.array([flag_fraction(r, "is_tunnel") for r in seg])
    src_non_osm = np.array([any(s["dataset"] != "OpenStreetMap" for s in r["sources"]) for r in seg])
    for zname, zgeom in zones.items():
        shapely.prepare(zgeom)
        inz = shapely.contains(zgeom, mid) & is_road
        tot = float(length_km[inz].sum())
        major = inz & np.isin(cls, list(MAJOR)); local = inz & np.isin(cls, list(LOCAL))

        def p(mask, base=None):
            base = inz if base is None else base
            d = float(length_km[base].sum())
            return round(100 * float(length_km[mask & base].sum()) / d, 1) if d else None

        out["zones"][zname]["roads"] = {
            "segments": int(inz.sum()), "km_total": round(tot, 1),
            "km_major": round(float(length_km[major].sum()), 1), "km_local_service": round(float(length_km[local].sum()), 1),
            "km_per_km2": round(tot / out["zone_area_km2"][zname], 2),
            "pct_km_named_major": p(named, major), "pct_km_named_local_service": p(named, local),
            "pct_km_speed_limit_all": p(has["speed_limits"]), "pct_km_speed_limit_major": p(has["speed_limits"], major),
            "pct_km_surface_all": p(has["road_surface"]), "pct_km_width_all": p(has["width_rules"]),
            "segments_with_access_restrictions": int((has["access_restrictions"] & inz).sum()),
            "segments_with_prohibited_transitions": int((has["prohibited_transitions"] & inz).sum()),
            "bridge_segments": int((is_bridge & inz).sum()), "km_bridge": round(float(bridge_km[inz].sum()), 2),
            "tunnel_segments": int((is_tunnel & inz).sum()), "km_tunnel": round(float(tunnel_km[inz].sum()), 2),
            "segments_with_level_rules": int((has["level_rules"] & inz).sum()),
            "segments_with_non_osm_source": int((src_non_osm & inz).sum()),
        }

    # ---- buildings ----
    tb = pq.read_table(CACHE / f"{release}_building_zoneC_bbox.parquet", columns=["sources", "height", "num_floors", "roof_shape", "names", "bbox"])
    bbox = tb.column("bbox").combine_chunks()
    cx = (np.asarray(bbox.field("xmin")) + np.asarray(bbox.field("xmax"))) / 2
    cy = (np.asarray(bbox.field("ymin")) + np.asarray(bbox.field("ymax"))) / 2
    pts = shapely.points(cx, cy)
    ds = np.array([(s[0]["dataset"] if s else "") for s in tb.column("sources").to_pylist()])
    h = np.array([v is not None for v in tb.column("height").to_pylist()])
    nf = np.array([v is not None for v in tb.column("num_floors").to_pylist()])
    rsh = np.array([v is not None for v in tb.column("roof_shape").to_pylist()])
    for zname, zgeom in zones.items():
        inz = shapely.contains(zgeom, pts)
        n = int(inz.sum())
        by = {k: int(((ds == k) & inz).sum()) for k in sorted(set(ds[inz]))}
        out["zones"][zname]["buildings"] = {
            "footprints": n, "per_km2": round(n / out["zone_area_km2"][zname], 1), "by_source": by,
            "pct_osm_manual": round(100 * by.get("OpenStreetMap", 0) / n, 1) if n else None,
            "with_height": int((h & inz).sum()), "with_num_floors": int((nf & inz).sum()), "with_roof_shape": int((rsh & inz).sum()),
            "pct_with_height": round(100 * float((h & inz).sum()) / n, 3) if n else None,
            "pct_with_num_floors": round(100 * float((nf & inz).sum()) / n, 3) if n else None,
        }
    dest = C.NORM / "validation" / "coverage_stats.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    C.record_provenance(C.rel(dest), kind="derived", generated_at=C.utcnow(), script="scripts/07_coverage_stats.py",
                        derived_from=[f"s3://overturemaps-us-west-2/release/{release}/ (segment, building; Zone C bbox; cached locally, not stored in repo)", "aoi/"],
                        licence="statistics derived from ODbL / CC BY 4.0 sources")
    print(json.dumps(out, indent=1, ensure_ascii=False))


if __name__ == "__main__":
    main()
