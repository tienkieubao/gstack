#!/usr/bin/env python3
"""Normalise the raw pilot samples into analysis-ready vector layers.

Input : samples/raw/osm/tiles/*.osm.gz, samples/raw/overture/<release>/*.parquet
Output: samples/normalized/geojson/<layer>.geojson[.gz]  (EPSG:4326; layers over
        1.5 MB are gzip-compressed)
        samples/normalized/hue_pilot_normalized.gpkg     (same layers in one file for
        QGIS; regenerated locally, git-ignored because of its size)
        samples/normalized/normalize_summary.json

Raw files are never modified. Nothing is invented here: an attribute that the
source does not carry stays null and its `<attr>_status` says "unknown".

Attribute status vocabulary (used in *_status columns):
  observed  recorded by the source from observation (survey, on-the-ground tag,
            manual digitising from imagery). For OSM this means "a contributor
            tagged it", not "an authority certified it".
  derived   computed deterministically or by a model from observed data
            (length from geometry, ML building footprint, implied OSM default
            that the tagging scheme itself defines, e.g. roundabout => one-way)
  inferred  assumed from a general rule/default without direct evidence for
            this object (e.g. "no oneway tag => two-way")
  unknown   no value available
"""
from __future__ import annotations

import glob
import gzip
import json
import sys
from pathlib import Path

import geopandas as gpd
import pandas as pd
import pyarrow.parquet as pq
import shapely
from shapely.geometry import LineString, Point, Polygon, box

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402
from osmxml import OsmData  # noqa: E402

log = C.get_logger("normalize")
METRIC = "EPSG:32648"   # WGS 84 / UTM 48N — used only to measure lengths/areas
GPKG = C.NORM / "hue_pilot_normalized.gpkg"
GJ = C.NORM / "geojson"
PILOT = box(*C.PILOT_BBOX)

ROAD_KEYS = ["name", "ref", "oneway", "lanes", "lanes:forward", "lanes:backward", "turn:lanes", "maxspeed",
             "surface", "width", "sidewalk", "lit", "bridge", "tunnel", "layer", "junction", "access",
             "motor_vehicle", "motorcar", "motorcycle", "foot", "bicycle", "hgv", "maxweight", "maxheight",
             "service", "lane_markings", "incline", "bridge:name", "bridge:structure", "oneway:conditional"]
BLD_KEYS = ["name", "building:levels", "height", "roof:shape", "roof:levels", "roof:height", "building:architecture",
            "building:material", "historic", "heritage", "tourism", "amenity", "wikidata", "start_date"]
POINT_RULES = [  # (key, values or None for any, category)
    ("highway", {"traffic_signals", "crossing", "stop", "give_way", "mini_roundabout", "turning_circle",
                 "speed_camera", "bus_stop", "street_lamp", "motorway_junction"}, "traffic"),
    ("traffic_sign", None, "traffic"), ("enforcement", None, "traffic"),
    ("man_made", {"surveillance"}, "traffic"), ("barrier", None, "barrier"),
    ("historic", None, "heritage"), ("heritage", None, "heritage"),
    ("tourism", {"attraction", "museum", "viewpoint", "artwork", "gallery"}, "heritage"),
    ("man_made", {"flagpole", "tower", "ceremonial_gate"}, "landmark"),
    ("natural", {"tree"}, "vegetation"),
]
LANDCOVER_KEYS = {"landuse": None, "leisure": {"park", "garden", "pitch", "stadium", "playground", "golf_course"},
                  "natural": {"wood", "scrub", "grassland", "wetland", "sand", "tree_row", "heath"}}


def status(v):
    return "observed" if v not in (None, "") else "unknown"


def load_osm() -> OsmData:
    d = OsmData()
    for f in sorted(glob.glob(str(C.RAW / "osm" / "tiles" / "*.osm.gz"))):
        d.load(Path(f))
    log.info("OSM merged: %d nodes, %d ways, %d relations", len(d.nodes), len(d.ways), len(d.relations))
    return d


def osm_roads(d: OsmData) -> gpd.GeoDataFrame:
    rows = []
    for wid, w in d.ways.items():
        t = w["tags"]
        if "highway" not in t or t.get("area") == "yes":
            continue
        pts = d.way_coords(wid)
        if not pts:
            continue
        r = {"osm_id": wid, "highway": t["highway"]}
        for k in ROAD_KEYS:
            r[k.replace(":", "_")] = t.get(k)
        # one-way: explicit tag = observed; roundabout/motorway = derived (defined by OSM tagging scheme);
        # otherwise the OSM default "two-way" is only an inference and must be verified before routing use.
        if t.get("oneway") in ("yes", "no", "-1", "reversible", "alternating"):
            r["oneway_effective"], r["oneway_status"] = t["oneway"], "observed"
        elif t.get("junction") in ("roundabout", "circular") or t["highway"] in ("motorway", "motorway_link"):
            r["oneway_effective"], r["oneway_status"] = "yes", "derived"
        else:
            r["oneway_effective"], r["oneway_status"] = "no", "inferred"
        r["lanes_status"] = status(t.get("lanes"))
        r["maxspeed_status"] = status(t.get("maxspeed"))
        r["width_status"] = status(t.get("width"))
        r["name_status"] = status(t.get("name"))
        # `layer` is an ORDINAL stacking hint, never metres.
        try:
            r["layer_ordinal"] = int(t["layer"]) if "layer" in t else None
        except ValueError:
            r["layer_ordinal"] = None
        r["z_m"] = None
        r["z_status"] = "unknown"
        r["osm_version"], r["osm_timestamp"] = w["meta"]["version"], w["meta"]["timestamp"]
        r["first_node"], r["last_node"] = w["nodes"][0], w["nodes"][-1]
        r["tags_json"] = json.dumps(t, ensure_ascii=False, sort_keys=True)
        r["geometry"] = LineString(pts)
        rows.append(r)
    g = gpd.GeoDataFrame(rows, crs="EPSG:4326")
    g["length_m"] = g.to_crs(METRIC).length.round(1)   # derived
    return g


def osm_buildings(d: OsmData) -> gpd.GeoDataFrame:
    rows = []

    def add(kind, oid, t, meta, geom, complete=True):
        r = {"osm_type": kind, "osm_id": oid, "building": t.get("building")}
        for k in BLD_KEYS:
            r[k.replace(":", "_")] = t.get(k)
        r["height_status"] = status(t.get("height"))
        r["levels_status"] = status(t.get("building:levels"))
        r["roof_shape_status"] = status(t.get("roof:shape"))
        r["geometry_complete"] = complete
        r["osm_version"], r["osm_timestamp"] = meta["version"], meta["timestamp"]
        r["tags_json"] = json.dumps(t, ensure_ascii=False, sort_keys=True)
        r["geometry"] = geom
        rows.append(r)

    for wid, w in d.ways.items():
        if "building" in w["tags"] and d.way_is_closed(wid):
            pts = d.way_coords(wid)
            if pts:
                p = Polygon(pts)
                if p.is_valid and not p.is_empty:
                    add("way", wid, w["tags"], w["meta"], p)
    for rid, rel in d.relations.items():
        if rel["tags"].get("type") == "multipolygon" and "building" in rel["tags"]:
            geom, complete, _ = d.multipolygon(rid)
            if geom is not None:
                add("relation", rid, rel["tags"], rel["meta"], geom, complete)
    g = gpd.GeoDataFrame(rows, crs="EPSG:4326")
    g["area_m2"] = g.to_crs(METRIC).area.round(1)
    return g


def osm_points(d: OsmData) -> gpd.GeoDataFrame:
    rows = []
    for nid, t in d.node_tags.items():
        cats = []
        for key, vals, cat in POINT_RULES:
            if key in t and (vals is None or t[key] in vals):
                cats.append(cat)
        if not cats:
            continue
        m = d.node_meta[nid]
        rows.append({"osm_id": nid, "category": cats[0], "highway": t.get("highway"), "crossing": t.get("crossing"),
                     "traffic_signals": t.get("traffic_signals"), "traffic_sign": t.get("traffic_sign"),
                     "man_made": t.get("man_made"), "surveillance_type": t.get("surveillance:type"),
                     "barrier": t.get("barrier"), "historic": t.get("historic"), "tourism": t.get("tourism"),
                     "natural": t.get("natural"), "name": t.get("name"), "wikidata": t.get("wikidata"),
                     "osm_version": m["version"], "osm_timestamp": m["timestamp"],
                     "tags_json": json.dumps(t, ensure_ascii=False, sort_keys=True),
                     "geometry": Point(d.nodes[nid])})
    return gpd.GeoDataFrame(rows, crs="EPSG:4326")


def osm_restrictions(d: OsmData) -> gpd.GeoDataFrame:
    rows = []
    for rid, rel in d.relations.items():
        t = rel["tags"]
        if t.get("type") != "restriction":
            continue
        frm = [ref for typ, ref, role in rel["members"] if role == "from"]
        to = [ref for typ, ref, role in rel["members"] if role == "to"]
        via = [(typ, ref) for typ, ref, role in rel["members"] if role == "via"]
        geom = None
        for typ, ref in via:
            if typ == "node" and ref in d.nodes:
                geom = Point(d.nodes[ref])
            elif typ == "way" and d.way_coords(ref):
                geom = LineString(d.way_coords(ref)).centroid
        rows.append({"osm_relation_id": rid,
                     "restriction": t.get("restriction") or next((v for k, v in t.items() if k.startswith("restriction:")), None),
                     "restriction_keys": ",".join(k for k in t if k.startswith("restriction")),
                     "except": t.get("except"), "from_ways": ",".join(map(str, frm)), "to_ways": ",".join(map(str, to)),
                     "via": ",".join(f"{a}/{b}" for a, b in via), "restriction_status": "observed",
                     "osm_version": rel["meta"]["version"], "osm_timestamp": rel["meta"]["timestamp"],
                     "tags_json": json.dumps(t, ensure_ascii=False, sort_keys=True), "geometry": geom})
    return gpd.GeoDataFrame(rows, crs="EPSG:4326")


def osm_landcover(d: OsmData) -> gpd.GeoDataFrame:
    rows = []

    def match(t):
        for k, vals in LANDCOVER_KEYS.items():
            if k in t and (vals is None or t[k] in vals):
                return k, t[k]
        return None

    for wid, w in d.ways.items():
        m = match(w["tags"])
        if m and d.way_is_closed(wid) and d.way_coords(wid):
            p = Polygon(d.way_coords(wid))
            if p.is_valid and not p.is_empty:
                rows.append({"osm_type": "way", "osm_id": wid, "key": m[0], "value": m[1], "name": w["tags"].get("name"),
                             "geometry_complete": True, "osm_timestamp": w["meta"]["timestamp"], "geometry": p})
    for rid, rel in d.relations.items():
        if rel["tags"].get("type") != "multipolygon":
            continue
        m = match(rel["tags"])
        if m:
            geom, complete, _ = d.multipolygon(rid)
            if geom is not None and complete:
                rows.append({"osm_type": "relation", "osm_id": rid, "key": m[0], "value": m[1], "name": rel["tags"].get("name"),
                             "geometry_complete": complete, "osm_timestamp": rel["meta"]["timestamp"], "geometry": geom})
    g = gpd.GeoDataFrame(rows, crs="EPSG:4326")
    g["area_m2"] = g.to_crs(METRIC).area.round(1)
    return g


# ---- Overture ---------------------------------------------------------------
def _release_dir() -> Path:
    dirs = sorted(p for p in (C.RAW / "overture").iterdir() if p.is_dir())
    return dirs[-1]


def _gdf(table_rows, geoms):
    return gpd.GeoDataFrame(table_rows, geometry=geoms, crs="EPSG:4326")


def overture_buildings() -> gpd.GeoDataFrame:
    tb = pq.read_table(_release_dir() / "building.parquet").to_pylist()
    rows, geoms = [], []
    for r in tb:
        src = (r["sources"] or [{}])[0]
        ds_name = src.get("dataset")
        rows.append({
            "overture_id": r["id"], "source_dataset": ds_name, "source_licence": src.get("license"),
            "source_record_id": src.get("record_id"), "source_update_time": src.get("update_time"),
            "ml_confidence": src.get("confidence"),
            # manual OSM digitising = observed; ML footprints = derived from imagery by a model
            "footprint_status": "observed" if ds_name == "OpenStreetMap" else "derived",
            "name": (r["names"] or {}).get("primary"), "subtype": r["subtype"], "class": r["class"],
            "height_m": r["height"], "height_status": status(r["height"]),
            "num_floors": r["num_floors"], "num_floors_status": status(r["num_floors"]),
            "roof_shape": r["roof_shape"], "roof_shape_status": status(r["roof_shape"]),
            "has_parts": r["has_parts"],
        })
        geoms.append(shapely.from_wkb(r["geometry"]))
    g = _gdf(rows, geoms)
    g["area_m2"] = g.to_crs(METRIC).area.round(1)
    return g


def overture_segments() -> gpd.GeoDataFrame:
    tb = pq.read_table(_release_dir() / "segment.parquet").to_pylist()
    rows, geoms = [], []
    for r in tb:
        flags = sorted({v for f in (r["road_flags"] or []) for v in (f["values"] or [])})
        levels = sorted({lr["value"] for lr in (r["level_rules"] or []) if lr["value"] is not None})
        speeds = [s["max_speed"] for s in (r["speed_limits"] or []) if s.get("max_speed")]
        src = (r["sources"] or [{}])[0]
        rows.append({
            "overture_id": r["id"], "subtype": r["subtype"], "class": r["class"], "subclass": r["subclass"],
            "name": (r["names"] or {}).get("primary"), "source_dataset": src.get("dataset"),
            "source_record_id": src.get("record_id"),
            "is_bridge": "is_bridge" in flags, "is_tunnel": "is_tunnel" in flags, "road_flags": ",".join(flags) or None,
            "level_values": ",".join(map(str, levels)) or None,     # ordinal z-order, NOT metres
            "max_speed": speeds[0]["value"] if speeds else None, "max_speed_unit": speeds[0]["unit"] if speeds else None,
            "max_speed_status": "observed" if speeds else "unknown",
            "n_access_restrictions": len(r["access_restrictions"] or []),
            "access_restrictions_json": json.dumps(r["access_restrictions"], ensure_ascii=False) if r["access_restrictions"] else None,
            "n_prohibited_transitions": len(r["prohibited_transitions"] or []),
            "prohibited_transitions_json": json.dumps(r["prohibited_transitions"], ensure_ascii=False) if r["prohibited_transitions"] else None,
            "road_surface": ",".join(sorted({s["value"] for s in (r["road_surface"] or []) if s.get("value")})) or None,
            "n_connectors": len(r["connectors"] or []),
        })
        geoms.append(shapely.from_wkb(r["geometry"]))
    g = _gdf(rows, geoms)
    g["length_m"] = g.to_crs(METRIC).length.round(1)
    return g


def overture_simple(name: str, clip: bool) -> gpd.GeoDataFrame:
    tb = pq.read_table(_release_dir() / f"{name}.parquet").to_pylist()
    rows, geoms = [], []
    for r in tb:
        src = (r["sources"] or [{}])[0]
        g = shapely.from_wkb(r["geometry"])
        if clip:
            g = g.intersection(PILOT)
            if g.is_empty:
                continue
        rows.append({"overture_id": r["id"], "subtype": r.get("subtype"), "class": r.get("class"),
                     "name": (r.get("names") or {}).get("primary"), "source_dataset": src.get("dataset"),
                     "source_record_id": src.get("record_id"), "clipped_to_pilot": clip})
        geoms.append(g)
    return _gdf(rows, geoms)


GZIP_OVER_BYTES = 1_500_000   # larger GeoJSON layers are stored gzip-compressed (QGIS reads them via /vsigzip/)


def write(layer: str, g: gpd.GeoDataFrame, summary: dict):
    g.to_file(GPKG, layer=layer, driver="GPKG")   # GeoPackage is a local convenience copy (git-ignored: ~30 MB)
    GJ.mkdir(parents=True, exist_ok=True)
    path = GJ / f"{layer}.geojson"
    for old in (path, Path(str(path) + ".gz")):
        if old.exists():
            old.unlink()
    g.to_file(path, driver="GeoJSON", COORDINATE_PRECISION=7)
    if path.stat().st_size > GZIP_OVER_BYTES:
        with open(path, "rb") as f, open(str(path) + ".gz", "wb") as out:
            with gzip.GzipFile(fileobj=out, mode="wb", mtime=0, filename="") as z:
                z.write(f.read())
        path.unlink()
        path = Path(str(path) + ".gz")
    summary[layer] = {"features": int(len(g)), "geojson": C.rel(path), "geom_types": sorted(set(g.geom_type.dropna()))}
    log.info("layer %-28s %6d features", layer, len(g))


def main():
    C.NORM.mkdir(parents=True, exist_ok=True)
    if GPKG.exists():
        GPKG.unlink()
    summary: dict = {}
    d = load_osm()
    write("osm_roads", osm_roads(d), summary)
    write("osm_buildings", osm_buildings(d), summary)
    write("osm_point_features", osm_points(d), summary)
    write("osm_turn_restrictions", osm_restrictions(d), summary)
    write("osm_landcover", osm_landcover(d), summary)
    write("overture_buildings", overture_buildings(), summary)
    write("overture_segments", overture_segments(), summary)
    write("overture_water", overture_simple("water", clip=True), summary)
    write("overture_infrastructure", overture_simple("infrastructure", clip=False), summary)
    write("overture_land_use", overture_simple("land_use", clip=True), summary)
    out = {"generated_at": C.utcnow(), "crs": "EPSG:4326", "metric_crs_for_measurements": METRIC,
           "geopackage": C.rel(GPKG), "layers": summary}
    (C.NORM / "normalize_summary.json").write_text(json.dumps(out, indent=1) + "\n")
    C.record_provenance(
        "samples/normalized/", kind="derived",
        derived_from=["samples/raw/osm/tiles/", f"samples/raw/overture/{_release_dir().name}/"],
        licence="ODbL 1.0 (produced work/derivative database of OSM + Overture rows; Google Open Buildings rows CC BY 4.0, Microsoft rows ODbL)",
        attribution="© OpenStreetMap contributors; Overture Maps Foundation; Google Open Buildings; Microsoft ML Building Footprints",
        generated_at=C.utcnow(), script="scripts/05_normalize.py",
        files=[{"file": v["geojson"], "sha256_file": C.sha256_file(C.ROOT / v["geojson"]), "features": v["features"]} for v in summary.values()])


if __name__ == "__main__":
    main()
