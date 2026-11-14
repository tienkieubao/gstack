#!/usr/bin/env python3
"""Deterministic checks on the pilot samples (no AI, no network).

Writes samples/normalized/validation/:
  pilot_validation.json   all numbers quoted in pilot_validation.md
  bridges.csv             one row per connected bridge group (road + rail)
  crossings.csv           planar crossings of two highway ways WITHOUT a shared node
  roads_over_water_without_bridge_tag.csv
  road_attribute_completeness.csv
  landmarks.csv

What these checks can and cannot say: they measure what the sources contain
(tag completeness, topology consistency, how the DEM behaves under bridges).
They do not verify the sources against ground truth.
"""
from __future__ import annotations

import collections
import csv
import json
import re
import sys
from pathlib import Path

import geopandas as gpd
import numpy as np
import rasterio
from rasterio.warp import Resampling, reproject
from shapely import STRtree
from shapely.geometry import LineString, Point

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402
from osmxml import OsmData  # noqa: E402

import importlib
norm = importlib.import_module("05_normalize")

OUT = C.NORM / "validation"
METRIC = "EPSG:32648"
DEM = C.RAW / "dem" / "copernicus_glo30_N16E107_pilot_window.tif"
SKADI = C.RAW / "dem" / "tilezen_skadi_N16E107_pilot_window.tif"
WC = C.RAW / "landcover" / "esa_worldcover_2021_v200_pilot_window.tif"

GROUPS = {
    "major (trunk..tertiary + links)": {"trunk", "trunk_link", "primary", "primary_link", "secondary", "secondary_link", "tertiary", "tertiary_link", "motorway", "motorway_link"},
    "local (residential/unclassified/living_street)": {"residential", "unclassified", "living_street"},
    "service": {"service"},
    "non-motor (footway/path/steps/pedestrian/cycleway)": {"footway", "path", "steps", "pedestrian", "cycleway", "track"},
}
MOTOR = GROUPS["major (trunk..tertiary + links)"] | GROUPS["local (residential/unclassified/living_street)"] | {"service"}
LANDMARKS = ["Ngọ Môn", "Kỳ Đài", "Thái Hòa", "Kiến Trung", "Hiển Lâm", "Thế Miếu", "Đại Nội", "Hoàng thành", "Kinh thành",
             "Trường Tiền", "Phú Xuân", "Dã Viên", "Bạch Hổ", "Nguyễn Hoàng", "Đông Ba", "Quốc Học", "Thượng Tứ", "Phu Văn Lâu", "Nghênh Lương"]


def pct(a, b):
    return round(100.0 * a / b, 1) if b else None


def sample_raster(path: Path, line_wgs: LineString, step_m: float = 10.0):
    """Sample raster values every `step_m` metres along a WGS84 line."""
    g = gpd.GeoSeries([line_wgs], crs="EPSG:4326").to_crs(METRIC).iloc[0]
    n = max(2, int(g.length // step_m) + 1)
    pts_m = [g.interpolate(i / (n - 1), normalized=True) for i in range(n)]
    pts = gpd.GeoSeries(pts_m, crs=METRIC).to_crs("EPSG:4326")
    with rasterio.open(path) as src:
        vals = [float(v[0]) for v in src.sample([(p.x, p.y) for p in pts])]
    return vals


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    res: dict = {"generated_at": C.utcnow(), "pilot_bbox_wsen": C.PILOT_BBOX}
    d: OsmData = norm.load_osm()
    roads = norm.osm_roads(d)
    roads_m = roads.to_crs(METRIC)

    # ---- A. attribute completeness ------------------------------------------
    rows = []
    for gname, classes in GROUPS.items():
        sub = roads[roads.highway.isin(classes)]
        km = sub.length_m.sum() / 1000
        row = {"group": gname, "ways": len(sub), "km": round(km, 1)}
        for col in ("name", "oneway", "lanes", "maxspeed", "surface", "width", "sidewalk", "lit", "turn_lanes"):
            row[f"{col}_pct_km"] = pct(sub.loc[sub[col].notna(), "length_m"].sum() / 1000, km)
        rows.append(row)
    res["road_attribute_completeness"] = rows
    with open(OUT / "road_attribute_completeness.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=list(rows[0]))
        wr.writeheader(); wr.writerows(rows)
    res["oneway_status_counts_motor"] = roads[roads.highway.isin(MOTOR)].oneway_status.value_counts().to_dict()
    res["oneway_values"] = roads.oneway.value_counts(dropna=True).to_dict()
    res["maxspeed_values"] = roads.maxspeed.value_counts(dropna=True).to_dict()
    res["lanes_values"] = roads.lanes.value_counts(dropna=True).to_dict()
    res["conditional_oneway_ways"] = int(roads.oneway_conditional.notna().sum())
    res["motorcar_restricted_ways"] = roads.motorcar.value_counts(dropna=True).to_dict()
    res["roundabout_ways"] = roads[roads.junction.isin(["roundabout", "circular"])][["osm_id", "name", "highway", "oneway"]].to_dict("records")
    res["osm_edit_timestamps_roads"] = {"oldest": roads.osm_timestamp.min(), "median": sorted(roads.osm_timestamp)[len(roads) // 2], "newest": roads.osm_timestamp.max()}

    # ---- topology basics ----------------------------------------------------
    node_ways = collections.defaultdict(set)
    for wid in roads.osm_id:
        for n in d.ways[wid]["nodes"]:
            node_ways[n].add(wid)
    hw_of = dict(zip(roads.osm_id, roads.highway))
    motor_ids = {w for w, h in hw_of.items() if h in MOTOR}
    deg = collections.Counter()
    for wid in motor_ids:
        nodes = d.ways[wid]["nodes"]
        for i, n in enumerate(nodes):
            deg[n] += 1 if i in (0, len(nodes) - 1) else 2
    res["motor_network"] = {
        "ways": len(motor_ids),
        "km": round(roads[roads.osm_id.isin(motor_ids)].length_m.sum() / 1000, 1),
        "junction_nodes_degree_ge3": sum(1 for n, k in deg.items() if k >= 3),
        "dead_end_nodes_degree_1": sum(1 for n, k in deg.items() if k == 1),
    }

    # ---- B. bridges -----------------------------------------------------------
    bridge_ways = {}
    for wid, w in d.ways.items():
        t = w["tags"]
        if t.get("bridge") not in (None, "no") and ("highway" in t or "railway" in t) and d.way_coords(wid):
            bridge_ways[wid] = w
    parent = {w: w for w in bridge_ways}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    nmap = collections.defaultdict(list)
    for wid, w in bridge_ways.items():
        for n in w["nodes"]:
            nmap[n].append(wid)
    for ws in nmap.values():
        for other in ws[1:]:
            parent[find(other)] = find(ws[0])
    groups = collections.defaultdict(list)
    for wid in bridge_ways:
        groups[find(wid)].append(wid)

    all_line_nodes = collections.defaultdict(set)   # node -> all highway/railway ways using it
    for wid, w in d.ways.items():
        if "highway" in w["tags"] or "railway" in w["tags"]:
            for n in w["nodes"]:
                all_line_nodes[n].add(wid)

    bridges = []
    for gid, wids in groups.items():
        lines = [LineString(d.way_coords(w)) for w in wids]
        lens = gpd.GeoSeries(lines, crs="EPSG:4326").to_crs(METRIC).length
        tags = [d.ways[w]["tags"] for w in wids]

        def uniq(k):
            return ";".join(sorted({t[k] for t in tags if k in t})) or None

        cnt = collections.Counter(n for w in wids for n in d.ways[w]["nodes"])
        ends = [n for w in wids for n in (d.ways[w]["nodes"][0], d.ways[w]["nodes"][-1]) if cnt[n] == 1]
        connected = sum(1 for n in ends if all_line_nodes[n] - set(wids))
        longest = wids[int(np.argmax(lens.values))]
        ll = LineString(d.way_coords(longest))
        dem_vals = sample_raster(DEM, ll)
        sk_vals = sample_raster(SKADI, ll)
        wc_vals = sample_raster(WC, ll)
        row = {
            "group_id": gid, "n_ways": len(wids), "names": uniq("name") or uniq("bridge:name"),
            "kind": uniq("highway") or ("railway:" + (uniq("railway") or "")),
            "sum_way_length_m": round(float(lens.sum()), 1), "longest_way_length_m": round(float(lens.max()), 1),
            "bridge": uniq("bridge"), "layer_tag": uniq("layer"), "bridge_structure": uniq("bridge:structure"),
            "lanes": uniq("lanes"), "oneway": uniq("oneway"), "maxspeed": uniq("maxspeed"),
            "maxweight": uniq("maxweight"), "maxheight": uniq("maxheight"), "width": uniq("width"),
            "motorcar": uniq("motorcar"), "ele_tag": uniq("ele"),
            "end_nodes": len(ends), "end_nodes_connected_to_network": connected,
            "glo30_along_min": round(min(dem_vals), 2), "glo30_along_max": round(max(dem_vals), 2),
            "glo30_at_ends": f"{dem_vals[0]:.2f};{dem_vals[-1]:.2f}",
            "skadi_along_min": min(sk_vals), "skadi_along_max": max(sk_vals),
            "worldcover_water_share_pct": pct(sum(1 for v in wc_vals if v == 80), len(wc_vals)),
            "centroid_lon": round(ll.centroid.x, 6), "centroid_lat": round(ll.centroid.y, 6),
            "osm_way_ids": ";".join(map(str, sorted(wids))),
        }
        bridges.append(row)
    bridges.sort(key=lambda r: -r["longest_way_length_m"])
    with open(OUT / "bridges.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=list(bridges[0]))
        wr.writeheader(); wr.writerows(bridges)
    res["bridges"] = {
        "groups": len(bridges), "ways": len(bridge_ways),
        "groups_ge_50m": sum(1 for b in bridges if b["longest_way_length_m"] >= 50),
        "with_layer_tag": sum(1 for b in bridges if b["layer_tag"]),
        "with_lanes": sum(1 for b in bridges if b["lanes"]), "with_maxspeed": sum(1 for b in bridges if b["maxspeed"]),
        "with_maxweight": sum(1 for b in bridges if b["maxweight"]), "with_maxheight": sum(1 for b in bridges if b["maxheight"]),
        "with_width": sum(1 for b in bridges if b["width"]), "with_ele_tag": sum(1 for b in bridges if b["ele_tag"]),
        "with_structure": sum(1 for b in bridges if b["bridge_structure"]),
        "all_ends_connected": sum(1 for b in bridges if b["end_nodes"] == b["end_nodes_connected_to_network"]),
        "top": bridges[:12],
    }

    # ---- B2. roads lying over water polygons WITHOUT a bridge/tunnel tag -------------
    # (catches bridges that a `bridge=*` filter would silently miss)
    water_all = norm.overture_simple("water", clip=True)
    water_polys = water_all[water_all.geom_type.isin(["Polygon", "MultiPolygon"])]
    water_union_m = gpd.GeoSeries([water_polys.union_all()], crs="EPSG:4326").to_crs(METRIC).iloc[0]
    untagged = []
    cand = roads_m[roads.bridge.isna() & roads.tunnel.isna() & roads.highway.isin(MOTOR | {"footway", "pedestrian", "path", "cycleway"})]
    for idx, geom in cand.geometry.items():
        inside = geom.intersection(water_union_m).length
        if inside >= 15:
            r = roads.loc[idx]
            untagged.append({"osm_id": int(r.osm_id), "name": r["name"] if isinstance(r["name"], str) else None, "highway": r.highway,
                             "layer": r.layer, "length_m": float(r.length_m), "length_over_water_m": round(float(inside), 1),
                             "osm_timestamp": r.osm_timestamp})
    untagged.sort(key=lambda x: -x["length_over_water_m"])
    with open(OUT / "roads_over_water_without_bridge_tag.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=["osm_id", "name", "highway", "layer", "length_m", "length_over_water_m", "osm_timestamp"])
        wr.writeheader(); wr.writerows(untagged)
    res["roads_over_water_without_bridge_tag"] = {"ways": len(untagged), "motor_ways": sum(1 for u in untagged if u["highway"] in MOTOR), "top": untagged[:10]}

    # ---- tunnels / covered ------------------------------------------------------
    tun = roads[roads.tunnel.notna()]
    res["tunnels"] = {"ways": len(tun), "by_highway_and_value": {f"{h}|{v}": int(c) for (h, v), c in tun.groupby(["highway", "tunnel"]).size().items()},
                      "total_m": round(float(tun.length_m.sum()), 1),
                      "motor_tunnels": tun[tun.highway.isin(MOTOR)][["osm_id", "name", "highway", "tunnel", "layer", "length_m", "maxheight"]].to_dict("records")}

    # ---- C. planar crossings without a shared node -----------------------------------
    geoms = list(roads.geometry.values)
    ids = list(roads.osm_id.values)
    layer = {i: (l if l is not None and l == l else 0) for i, l in zip(ids, roads.layer_ordinal)}
    layer = {i: int(v) for i, v in layer.items()}
    br = dict(zip(ids, roads.bridge)); tn = dict(zip(ids, roads.tunnel))
    tree = STRtree(geoms)
    a_idx, b_idx = tree.query(geoms, predicate="crosses")
    crossings = []
    for a, b in zip(a_idx, b_idx):
        if a >= b:
            continue
        wa, wb = ids[a], ids[b]
        if set(d.ways[wa]["nodes"]) & set(d.ways[wb]["nodes"]):
            # shares a node somewhere; may still cross elsewhere, but treat as connected pair
            inter = geoms[a].intersection(geoms[b])
            shared_pts = {d.nodes[n] for n in set(d.ways[wa]["nodes"]) & set(d.ways[wb]["nodes"])}
            pts = [p for p in getattr(inter, "geoms", [inter]) if p.geom_type == "Point" and (p.x, p.y) not in shared_pts]
            if not pts:
                continue
        else:
            inter = geoms[a].intersection(geoms[b])
            pts = [p for p in getattr(inter, "geoms", [inter]) if p.geom_type == "Point"]
        for p in pts:
            la, lb = layer[wa], layer[wb]
            sep = la != lb
            crossings.append({
                "way_a": wa, "highway_a": hw_of[wa], "layer_a": la, "bridge_a": br[wa], "tunnel_a": tn[wa],
                "way_b": wb, "highway_b": hw_of[wb], "layer_b": lb, "bridge_b": br[wb], "tunnel_b": tn[wb],
                "classification": "grade_separated_by_tags" if sep else "same_layer_no_shared_node__needs_review",
                "both_motor": hw_of[wa] in MOTOR and hw_of[wb] in MOTOR,
                "lon": round(p.x, 7), "lat": round(p.y, 7)})
    with open(OUT / "crossings.csv", "w", newline="", encoding="utf-8") as f:
        fields = list(crossings[0]) if crossings else ["way_a", "way_b"]
        wr = csv.DictWriter(f, fieldnames=fields)
        wr.writeheader(); wr.writerows(crossings)
    cc = collections.Counter((c["classification"], c["both_motor"]) for c in crossings)
    res["crossings_without_shared_node"] = {
        "total": len(crossings),
        "grade_separated_by_tags": sum(v for (k, _), v in cc.items() if k.startswith("grade")),
        "grade_separated_by_tags_both_motor": cc.get(("grade_separated_by_tags", True), 0),
        "same_layer_needs_review": sum(v for (k, _), v in cc.items() if k.startswith("same")),
        "same_layer_needs_review_both_motor": cc.get(("same_layer_no_shared_node__needs_review", True), 0),
    }

    # ---- restrictions, signals, cameras -----------------------------------------------
    pts = norm.osm_points(d)
    rest = norm.osm_restrictions(d)
    res["turn_restrictions"] = {"relations": len(rest), "by_type": rest.restriction.value_counts(dropna=False).to_dict() if len(rest) else {}}
    res["point_features"] = {
        "traffic_signals": int((pts.highway == "traffic_signals").sum()),
        "crossings": int((pts.highway == "crossing").sum()),
        "bus_stops": int((pts.highway == "bus_stop").sum()),
        "stop_or_give_way": int(pts.highway.isin(["stop", "give_way"]).sum()),
        "speed_cameras": int((pts.highway == "speed_camera").sum()),
        "surveillance_nodes": int((pts.man_made == "surveillance").sum()),
        "surveillance_types": pts[pts.man_made == "surveillance"].surveillance_type.value_counts(dropna=False).to_dict(),
        "traffic_sign_nodes": int(pts.traffic_sign.notna().sum()),
        "trees": int((pts.natural == "tree").sum()),
    }

    # ---- G. terrain ----------------------------------------------------------------------
    with rasterio.open(DEM) as g, rasterio.open(SKADI) as s, rasterio.open(WC) as w:
        dem = g.read(1)
        sk = np.empty_like(dem)
        reproject(s.read(1).astype("float32"), sk, src_transform=s.transform, src_crs=s.crs,
                  dst_transform=g.transform, dst_crs=g.crs, resampling=Resampling.bilinear)
        wc_on_dem = np.empty(dem.shape, dtype="uint8")
        reproject(w.read(1), wc_on_dem, src_transform=w.transform, src_crs=w.crs,
                  dst_transform=g.transform, dst_crs=g.crs, resampling=Resampling.mode)
        diff = dem - sk
        water = wc_on_dem == 80
        built = wc_on_dem == 50
        tree_c = wc_on_dem == 10
        wcfull = w.read(1)
        classes = {10: "tree cover", 20: "shrubland", 30: "grassland", 40: "cropland", 50: "built-up", 60: "bare/sparse",
                   80: "permanent water", 90: "herbaceous wetland", 95: "mangroves"}
        res["worldcover_2021_share_pct"] = {classes.get(int(k), str(k)): pct(int(v), wcfull.size) for k, v in zip(*np.unique(wcfull, return_counts=True))}
        res["terrain"] = {
            "glo30_grid": {"shape": list(dem.shape), "res_deg": g.res[0], "approx_res_m_lat": round(g.res[1] * 111320, 1)},
            "glo30_all": {"min": round(float(dem.min()), 2), "p50": round(float(np.median(dem)), 2), "p95": round(float(np.percentile(dem, 95)), 2), "max": round(float(dem.max()), 2)},
            "glo30_on_worldcover_water": {"n_px": int(water.sum()), "min": round(float(dem[water].min()), 2), "p50": round(float(np.median(dem[water])), 2), "p95": round(float(np.percentile(dem[water], 95)), 2), "max": round(float(dem[water].max()), 2)},
            "glo30_on_built_up": {"n_px": int(built.sum()), "p05": round(float(np.percentile(dem[built], 5)), 2), "p50": round(float(np.median(dem[built])), 2), "p95": round(float(np.percentile(dem[built], 95)), 2)},
            "glo30_on_tree_cover": {"n_px": int(tree_c.sum()), "p50": round(float(np.median(dem[tree_c])), 2), "p95": round(float(np.percentile(dem[tree_c], 95)), 2)},
            "glo30_minus_skadi": {"mean": round(float(diff.mean()), 2), "std": round(float(diff.std()), 2), "p05": round(float(np.percentile(diff, 5)), 2), "p95": round(float(np.percentile(diff, 95)), 2),
                                  "note": "GLO-30: TanDEM-X DSM 2010-2015, EGM2008. skadi here: SRTM-style DSM 2000, EGM96, integer metres. Difference mixes datum, epoch, sensor and rounding."},
        }

    # ---- H. buildings ---------------------------------------------------------------------
    ob = norm.osm_buildings(d)
    vb = norm.overture_buildings()
    res["buildings"] = {
        "osm_pilot": {"n": len(ob), "with_levels": int(ob.building_levels.notna().sum()), "with_height": int(ob.height.notna().sum()),
                      "with_roof_shape": int(ob.roof_shape.notna().sum()), "with_name": int(ob.name.notna().sum()),
                      "with_architecture": int(ob.building_architecture.notna().sum()),
                      "building_values_top": ob.building.value_counts().head(8).to_dict(),
                      "levels_values": ob.building_levels.value_counts().to_dict(),
                      "osm_timestamp_median": sorted(ob.osm_timestamp)[len(ob) // 2]},
        "overture_pilot": {"n": len(vb), "by_source": vb.source_dataset.value_counts().to_dict(),
                           "with_height": int(vb.height_m.notna().sum()), "with_num_floors": int(vb.num_floors.notna().sum()),
                           "with_roof_shape": int(vb.roof_shape.notna().sum()),
                           "footprint_status": vb.footprint_status.value_counts().to_dict(),
                           "area_m2_median_by_source": vb.groupby("source_dataset").area_m2.median().round(1).to_dict(),
                           "area_m2_total_by_source": vb.groupby("source_dataset").area_m2.sum().round(0).to_dict(),
                           "ml_confidence_quartiles": [round(float(q), 3) for q in vb.ml_confidence.dropna().quantile([0.05, 0.25, 0.5, 0.75]).values]},
    }
    # QA flags: ML footprints touching major-road centrelines or water polygons
    water_g = norm.overture_simple("water", clip=True)
    water_poly = water_g[water_g.geom_type.isin(["Polygon", "MultiPolygon"])].union_all()
    major = roads[roads.highway.isin(GROUPS["major (trunk..tertiary + links)"])].union_all()
    ml = vb[vb.footprint_status == "derived"]
    res["buildings"]["qa_flags"] = {
        "ml_footprints_intersecting_major_road_centreline": int(ml.intersects(major).sum()),
        "ml_footprints_intersecting_water_polygons": int(ml.intersects(water_poly).sum()),
        "osm_footprints_intersecting_major_road_centreline": int(vb[vb.footprint_status == "observed"].intersects(major).sum()),
    }

    # ---- I. landmarks ---------------------------------------------------------------------
    lm = []
    for kind, coll in (("node", d.node_tags), ("way", {k: v["tags"] for k, v in d.ways.items()}), ("relation", {k: v["tags"] for k, v in d.relations.items()})):
        for oid, t in coll.items():
            nm = t.get("name") or ""
            hit = next((k for k in LANDMARKS if re.search(k, nm, re.I)), None)
            if not hit or t.get("boundary") == "administrative":
                continue
            if "highway" in t and "bridge" not in t and kind == "way":
                continue   # street names such as "Lê Lợi" are not landmarks; keep bridges
            lm.append({"keyword": hit, "osm_type": kind, "osm_id": oid, "name": nm,
                       "main_tag": next((f"{k}={t[k]}" for k in ("building", "historic", "tourism", "man_made", "bridge", "amenity", "natural", "water", "railway", "barrier", "type") if k in t), None),
                       "height": t.get("height"), "building_levels": t.get("building:levels"), "roof_shape": t.get("roof:shape"),
                       "wikidata": t.get("wikidata"), "start_date": t.get("start_date")})
    lm.sort(key=lambda r: (r["keyword"], r["osm_type"]))
    with open(OUT / "landmarks.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=list(lm[0]))
        wr.writeheader(); wr.writerows(lm)
    res["landmarks"] = {"rows": len(lm), "by_keyword": dict(collections.Counter(r["keyword"] for r in lm)),
                        "with_height": sum(1 for r in lm if r["height"]), "with_levels": sum(1 for r in lm if r["building_levels"]),
                        "with_wikidata": sum(1 for r in lm if r["wikidata"])}

    # ---- Overture segments (navigation attributes as shipped) ------------------------------
    seg = norm.overture_segments()
    rs = seg[seg.subtype == "road"]
    res["overture_segments_pilot"] = {
        "segments": len(seg), "road_segments": len(rs), "road_km": round(float(rs.length_m.sum()) / 1000, 1),
        "with_max_speed": int(rs.max_speed.notna().sum()), "with_access_restrictions": int((rs.n_access_restrictions > 0).sum()),
        "with_prohibited_transitions": int((rs.n_prohibited_transitions > 0).sum()),
        "is_bridge": int(rs.is_bridge.sum()), "is_tunnel": int(rs.is_tunnel.sum()), "with_level_values": int(rs.level_values.notna().sum()),
        "with_surface": int(rs.road_surface.notna().sum()), "source_datasets": seg.source_dataset.value_counts().to_dict(),
    }

    def clean(o):   # NaN is not valid JSON
        if isinstance(o, float) and o != o:
            return None
        if isinstance(o, dict):
            return {str(k): clean(v) for k, v in o.items()}
        if isinstance(o, (list, tuple)):
            return [clean(v) for v in o]
        return o

    res = clean(json.loads(json.dumps(res, default=str)))
    (OUT / "pilot_validation.json").write_text(json.dumps(res, indent=1, ensure_ascii=False, allow_nan=False) + "\n", encoding="utf-8")
    C.record_provenance("samples/normalized/validation/", kind="derived", generated_at=C.utcnow(),
                        derived_from=["samples/raw/osm/tiles/", "samples/raw/overture/", "samples/raw/dem/", "samples/raw/landcover/"],
                        script="scripts/06_validate_pilot.py", licence="ODbL 1.0 (statistics derived from OSM/Overture) + Copernicus DEM / ESA WorldCover attribution")
    print(json.dumps({k: res[k] for k in ("motor_network", "crossings_without_shared_node", "turn_restrictions", "point_features")}, indent=1))


if __name__ == "__main__":
    main()
