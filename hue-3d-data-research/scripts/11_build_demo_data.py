#!/usr/bin/env python3
"""Turn the pilot samples into compact scene data for the browser demo (demo/data/*.json).

Everything here is DETERMINISTIC geometry processing of files already in samples/.
No network. The demo is an ILLUSTRATION: every modelling assumption is listed in
ASSUMPTIONS below and copied into demo/data/meta.json so the viewer can show it.

Local frame: metres relative to the pilot centre in EPSG:32648 (UTM 48N).
  x = east, z = south (so north is -z), y = up (metres, EGM2008-based like GLO-30).
Coordinates are stored as integer decimetres to keep the JSON small.
"""
from __future__ import annotations

import collections
import gzip
import importlib
import json
import sys
from pathlib import Path

import numpy as np
import pandas as pd
import pyarrow.parquet as pq
import rasterio
import shapely
from pyproj import Transformer
from rasterio.features import rasterize
from rasterio.warp import Resampling, reproject
from scipy import ndimage
from shapely.geometry import LineString, MultiPolygon, Point, Polygon, box
from shapely.ops import unary_union

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

norm = importlib.import_module("05_normalize")
log = C.get_logger("demo")
OUT = C.ROOT / "demo" / "data"
CELL = 8.0                      # terrain grid spacing, metres
RIVER_LEVEL = 0.5               # GLO-30 flattened water value measured in the pilot (m, EGM2008)
T = Transformer.from_crs("EPSG:4326", "EPSG:32648", always_xy=True)

ASSUMPTIONS = {
    "ground": "GLO-30 is a 30 m surface model. 'Ground' here = 15th percentile of land cells in a 120 m window + 60 m Gaussian smoothing, clamped to >= 2.0 m. It is a smooth stand-in, not a terrain survey.",
    "water_level": f"River network drawn at {RIVER_LEVEL} m (the flattened GLO-30 value). Isolated ponds/lakes: lowest bank ground minus 0.7 m. River bed depth is invented (0.6-3.5 m).",
    "road_width": "Road widths come from the OSM class (and lanes x 3.3 m when tagged) — inferred, not measured.",
    "bridge_deck": "Deck elevation = constrained model: ground level at both ends, smooth ramps, flat plateau at max(end ground, water + clearance). Clearance 6.5 m for bridges >= 150 m, 2.2 m for shorter ones, 1.5 m for free-standing footbridges; sidewalks follow the road bridge beside them — assumed values, not surveyed.",
    "truong_tien": "Cầu Trường Tiền: 6 equal spans along OSM way 174759688 (published: 6 spans of ~67 m, 402.6 m). Arch rise 9 m, girder depth 1.2 m, pier size are assumptions for illustration.",
    "building_height": "Height = OSM height tag, else floors x 3.3 m, else Google Open Buildings 2.5D estimate (ML, 2023), else 4.5 m default. Roofs are flat.",
    "walls": "Citadel rampart extruded 6.6 m and Imperial City walls 4 m (published figures, not measured). Gates are cut wherever a mapped road crosses.",
    "landmarks": "Ngọ Môn, Kỳ Đài, Điện Thái Hòa are parametric sketches from published dimensions; proportions of tiers and roofs are assumed.",
    "trees": "Trees are scattered at random (fixed seed) inside ESA WorldCover tree-cover cells, away from buildings/roads/water. Positions and heights are not real.",
    "simulation": "UAV physics, collisions and water spray are arcade-style. Not for flight planning.",
}

ROAD_CLASS = {  # highway -> (group, width m, kind)
    "trunk": (0, 14.0), "trunk_link": (0, 7.0), "primary": (0, 14.0), "primary_link": (0, 7.0),
    "secondary": (0, 11.0), "secondary_link": (0, 6.5), "tertiary": (0, 9.0), "tertiary_link": (0, 6.0),
    "residential": (1, 6.0), "unclassified": (1, 6.0), "living_street": (1, 5.0), "construction": (1, 6.0),
    "service": (2, 3.5), "track": (2, 3.0),
    "pedestrian": (3, 5.0), "footway": (3, 1.8), "path": (3, 1.6), "steps": (3, 1.8), "cycleway": (3, 2.0),
}
LANDMARK_WAYS = {218427614: "ky_dai", 172657562: "ngo_mon", 531031566: "thai_hoa"}
TRUONG_TIEN_WAY = 174759688


def dm(v):
    return int(round(v * 10))


class Frame:
    def __init__(self):
        w, s, e, n = C.PILOT_BBOX
        xs, ys = T.transform([w, e, e, w], [s, s, n, n])
        self.e0 = round((min(xs) + max(xs)) / 2)
        self.n0 = round((min(ys) + max(ys)) / 2)
        self.xmin, self.xmax = min(xs) - self.e0, max(xs) - self.e0
        self.ymin, self.ymax = min(ys) - self.n0, max(ys) - self.n0
        # the lat/lon rectangle is slightly rotated in UTM: keep the inscribed area so every layer has data
        self.xmin, self.xmax = max(xs[0], xs[3]) - self.e0, min(xs[1], xs[2]) - self.e0
        self.ymin, self.ymax = max(ys[0], ys[1]) - self.n0, min(ys[2], ys[3]) - self.n0
        self.nx = int((self.xmax - self.xmin) // CELL) + 1
        self.nz = int((self.ymax - self.ymin) // CELL) + 1
        self.xmax = self.xmin + (self.nx - 1) * CELL
        self.ymin = self.ymax - (self.nz - 1) * CELL
        self.box = box(self.xmin, self.ymin, self.xmax, self.ymax)
        # raster transform whose pixel CENTRES are the grid nodes (row 0 = north)
        self.transform = rasterio.transform.from_origin(self.xmin - CELL / 2, self.ymax + CELL / 2, CELL, CELL)
        self.utm_transform = rasterio.transform.from_origin(self.e0 + self.xmin - CELL / 2, self.n0 + self.ymax + CELL / 2, CELL, CELL)

    def to_local(self, geom):
        """shapely geometry in EPSG:4326 -> local metres (x east, y north)."""
        return shapely.transform(geom, lambda a: np.column_stack(T.transform(a[:, 0], a[:, 1])) - [self.e0, self.n0])

    def sample(self, grid, x, y):
        """Bilinear sample of a node grid at local (x east, y north); clamps at the edges."""
        fx = np.clip((np.asarray(x, float) - self.xmin) / CELL, 0, self.nx - 1.001)
        fz = np.clip((self.ymax - np.asarray(y, float)) / CELL, 0, self.nz - 1.001)
        i, j = np.floor(fx).astype(int), np.floor(fz).astype(int)
        tx, tz = fx - i, fz - j
        return (grid[j, i] * (1 - tx) * (1 - tz) + grid[j, i + 1] * tx * (1 - tz)
                + grid[j + 1, i] * (1 - tx) * tz + grid[j + 1, i + 1] * tx * tz)

    def nearest(self, grid, x, y):
        i = np.clip(np.round((np.asarray(x, float) - self.xmin) / CELL).astype(int), 0, self.nx - 1)
        j = np.clip(np.round((self.ymax - np.asarray(y, float)) / CELL).astype(int), 0, self.nz - 1)
        return grid[j, i]


def ring_xz(coords):
    """[(x,y north)...] -> flat [x_dm, z_dm, ...] with z = -y; drops the closing duplicate."""
    pts = list(coords)
    if len(pts) > 1 and pts[0] == pts[-1]:
        pts = pts[:-1]
    out = []
    for x, y in pts:
        out += [dm(x), dm(-y)]
    return out


def polys(geom):
    if geom is None or geom.is_empty:
        return []
    if isinstance(geom, Polygon):
        return [geom]
    if isinstance(geom, MultiPolygon):
        return list(geom.geoms)
    return [g for g in getattr(geom, "geoms", []) if isinstance(g, Polygon)]


def densify(line: LineString, step: float):
    n = max(1, int(np.ceil(line.length / step)))
    return [line.interpolate(k / n, normalized=True) for k in range(n + 1)]


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    F = Frame()
    rel_dir = sorted(p for p in (C.RAW / "overture").iterdir() if p.is_dir())[-1]
    log.info("frame %dx%d nodes, cell %.0f m, extent %.0f x %.0f m", F.nx, F.nz, CELL, F.xmax - F.xmin, F.ymax - F.ymin)

    # ------------------------------------------------------------------ terrain
    with rasterio.open(C.RAW / "dem" / "copernicus_glo30_N16E107_pilot_window.tif") as src:
        dsm = np.full((F.nz, F.nx), np.nan, dtype="float32")
        reproject(src.read(1), dsm, src_transform=src.transform, src_crs=src.crs, dst_transform=F.utm_transform,
                  dst_crs="EPSG:32648", resampling=Resampling.bilinear, dst_nodata=np.nan)
    if np.isnan(dsm).any():
        idx = ndimage.distance_transform_edt(np.isnan(dsm), return_distances=False, return_indices=True)
        dsm = dsm[tuple(idx)]
    k = max(3, int(round(120 / CELL)) | 1)
    wrows = pq.read_table(rel_dir / "water.parquet").to_pylist()
    wpolys = []
    for r in wrows:
        if r.get("class") == "swimming_pool":
            continue
        g = F.to_local(shapely.from_wkb(r["geometry"]))
        for p in polys(g.intersection(F.box.buffer(40))):
            if p.area >= 150:
                wpolys.append(p.buffer(0))
    wet = rasterize([(p, 1) for p in wpolys], out_shape=(F.nz, F.nx), transform=F.transform, fill=0, dtype="uint8", all_touched=True).astype(bool)
    wet = ndimage.binary_dilation(wet, iterations=3)             # the flattened water value bleeds ~1 DEM pixel inland
    low = ndimage.percentile_filter(np.where(wet, 1e3, dsm), 15, size=k)      # 15th percentile of LAND cells only
    valid = low < 500
    idx = ndimage.distance_transform_edt(~valid, return_distances=False, return_indices=True)
    low = low[tuple(idx)]
    sig = 60 / CELL
    wgt = ndimage.gaussian_filter(valid.astype("float32"), sig)
    ground = ndimage.gaussian_filter(np.where(valid, low, 0).astype("float32"), sig) / np.maximum(wgt, 1e-3)
    ground = np.where(wgt > 0.02, ground, low)
    ground = np.maximum(ground, RIVER_LEVEL + 1.5).astype("float32")          # land surface before carving water

    with rasterio.open(C.RAW / "landcover" / "esa_worldcover_2021_v200_pilot_window.tif") as src:
        lc = np.zeros((F.nz, F.nx), dtype="uint8")
        reproject(src.read(1), lc, src_transform=src.transform, src_crs=src.crs, dst_transform=F.utm_transform,
                  dst_crs="EPSG:32648", resampling=Resampling.nearest)
        wc_src = (src.read(1), src.transform, src.crs)

    # ------------------------------------------------------------------ water
    # connected river network (touching polygons, seeded by the big river polygons)
    tree = shapely.STRtree(wpolys)
    adj = collections.defaultdict(set)
    a, b = tree.query(wpolys, predicate="intersects")
    for i, j in zip(a, b):
        if i != j:
            adj[i].add(j)
    in_net = set(i for i, p in enumerate(wpolys) if p.area > 200_000)
    stack = list(in_net)
    while stack:
        i = stack.pop()
        for j in adj[i]:
            if j not in in_net:
                in_net.add(j); stack.append(j)
    bodies = []   # (polygon, level)
    net = unary_union([wpolys[i] for i in in_net])
    for p in polys(net):
        bodies.append((p, RIVER_LEVEL))
    for i, p in enumerate(wpolys):
        if i in in_net:
            continue
        bx, by = p.exterior.coords.xy
        lvl = max(RIVER_LEVEL, float(np.min(F.sample(ground, bx, by))) - 0.7)
        bodies.append((p, round(lvl, 2)))
    carved = ground.copy()
    wl = np.full((F.nz, F.nx), np.nan, dtype="float32")
    for p, lvl in sorted(bodies, key=lambda t: -t[1]):         # lower levels win where bodies overlap
        mask = rasterize([(p, 1)], out_shape=(F.nz, F.nx), transform=F.transform, fill=0, dtype="uint8", all_touched=True).astype(bool)
        if not mask.any():
            continue
        dist = ndimage.distance_transform_edt(mask) * CELL
        bed = lvl - np.clip(0.6 + 0.25 * dist, 0.6, 3.5)
        carved[mask] = np.minimum(carved[mask], bed[mask])
        near = ndimage.binary_dilation(mask, iterations=1)
        wl[near] = np.where(np.isnan(wl[near]), lvl, np.minimum(wl[near], lvl))
        bank = near & ~mask
        carved[bank] = np.maximum(carved[bank], lvl + 0.5)
    water_union = unary_union([p for p, _ in bodies])
    water_out = []
    by_level = collections.defaultdict(list)
    for p, lvl in bodies:
        by_level[lvl].append(p.buffer(CELL * 0.75))
    for lvl, ps in by_level.items():
        for p in polys(unary_union(ps).intersection(F.box).simplify(0.7)):
            water_out.append({"y": dm(lvl), "rings": [ring_xz(p.exterior.coords)] + [ring_xz(h.coords) for h in p.interiors if Polygon(h).area > 60]})
    log.info("water: %d bodies (%d in river network) -> %d polygons, %d levels", len(bodies), len(in_net), len(water_out), len(by_level))

    json.dump({"nx": F.nx, "nz": F.nz, "cell": CELL, "x0": round(F.xmin, 2), "z0": round(-F.ymax, 2),
               "h": [dm(v) for v in carved.ravel()], "lc": lc.ravel().tolist(),
               "wl": [(-9999 if np.isnan(v) else dm(v)) for v in wl.ravel()]},
              open(OUT / "terrain.json", "w"), separators=(",", ":"))

    # ------------------------------------------------------------------ roads + bridges
    d = norm.load_osm()
    roads = norm.osm_roads(d)
    roads["geom_l"] = [F.to_local(g) for g in roads.geometry]
    # railways (for the Bạch Hổ rail bridge and the station approach)
    rail_rows = []
    for wid, w in d.ways.items():
        if w["tags"].get("railway") == "rail" and d.way_coords(wid):
            rail_rows.append({"osm_id": wid, "highway": "rail", "bridge": w["tags"].get("bridge"), "tunnel": None, "name": w["tags"].get("name"),
                              "lanes": None, "geom_l": F.to_local(LineString(d.way_coords(wid))), "first_node": w["nodes"][0], "last_node": w["nodes"][-1]})
    allr = pd.concat([roads[["osm_id", "highway", "bridge", "tunnel", "name", "lanes", "geom_l", "first_node", "last_node"]], pd.DataFrame(rail_rows)], ignore_index=True)

    def is_bridge(r):
        if isinstance(r.bridge, str) and r.bridge != "no":
            return True
        if isinstance(r.tunnel, str):
            return False
        return r.geom_l.intersection(water_union).length >= 15 and r.highway not in ("footway", "path", "steps")   # e.g. Cầu Trường Tiền

    allr["is_bridge"] = [is_bridge(r) for r in allr.itertuples()]
    bw = allr[allr.is_bridge]
    parent = {w: w for w in bw.osm_id}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    ends_of = collections.defaultdict(list)
    for r in bw.itertuples():
        for nnode in (r.first_node, r.last_node):
            ends_of[nnode].append(r.osm_id)
    for ws in ends_of.values():
        for o in ws[1:]:
            parent[find(o)] = find(ws[0])
    groups = collections.defaultdict(list)
    for w in bw.osm_id:
        groups[find(w)].append(w)
    row = {r.osm_id: r for r in allr.itertuples()}

    def width_of(r):
        if r.highway == "rail":
            return 3.2
        _, wdt = ROAD_CLASS.get(r.highway, (2, 4.0))
        try:
            wdt = max(wdt, float(r.lanes) * 3.3) if r.lanes is not None and str(r.lanes) != "nan" else wdt
        except ValueError:
            pass
        return wdt

    bridges_out, bridge_way_ids = [], set()
    tt_axis = row[TRUONG_TIEN_WAY].geom_l if TRUONG_TIEN_WAY in row else None
    host_decks = []

    def foot_last(item):   # road/rail groups first, so that sidewalks can adopt their deck level
        return all(row[w].highway != "rail" and ROAD_CLASS.get(row[w].highway, (2, 0))[0] == 3 for w in item[1])

    for gid, wids in sorted(groups.items(), key=foot_last):
        cnt = collections.Counter(n for w in wids for n in (row[w].first_node, row[w].last_node))
        end_pts = []
        for w in wids:
            g = row[w].geom_l
            for nnode, pt in ((row[w].first_node, g.coords[0]), (row[w].last_node, g.coords[-1])):
                if cnt[nnode] == 1:
                    end_pts.append(pt)
        if not end_pts:
            continue
        end_xy = np.array(end_pts)
        end_g = F.sample(ground, end_xy[:, 0], end_xy[:, 1])
        allg = unary_union([row[w].geom_l for w in wids])
        diag = float(np.hypot(allg.bounds[2] - allg.bounds[0], allg.bounds[3] - allg.bounds[1]))
        over = allg.intersection(water_union)
        wl_under = RIVER_LEVEL
        if over.length > 0:
            mid = over.interpolate(0.5, normalized=True)
            v = F.nearest(wl, mid.x, mid.y)
            wl_under = float(v) if not np.isnan(v) else RIVER_LEVEL
        foot_only = all(row[w].highway != "rail" and ROAD_CLASS.get(row[w].highway, (2, 0))[0] == 3 for w in wids)
        host = None
        clearance = 6.5 if diag >= 150 else 2.2
        if foot_only:
            host = next((h for h in host_decks if allg.intersection(h["geom"].buffer(16)).length >= 0.6 * allg.length), None)
            if host is None:
                clearance = 1.5                                   # free-standing boardwalk / garden bridge: stays low
            else:
                clearance = host["plateau"] - wl_under            # sidewalk of a road bridge: same deck level
        plateau = max(float(end_g.max()), wl_under + clearance) if over.length >= 8 else float(end_g.max())
        if foot_only and host is None and over.length >= 8:
            plateau = wl_under + clearance                        # boardwalk: steps down from the bank to just above the water
        ramp = max(12.0, min(70.0, 0.3 * diag))
        if not foot_only:
            host_decks.append({"geom": allg, "plateau": plateau})
        ways = []
        for w in wids:
            pts = densify(row[w].geom_l, 8.0)
            xs = np.array([p.x for p in pts]); ys = np.array([p.y for p in pts])
            dist = np.hypot(xs[:, None] - end_xy[None, :, 0], ys[:, None] - end_xy[None, :, 1])
            near = dist.argmin(axis=1)
            t = np.clip(dist.min(axis=1) / ramp, 0, 1)
            s = t * t * (3 - 2 * t)
            y = end_g[near] * (1 - s) + plateau * s
            flat = []
            for x_, y_n, y_up in zip(xs, ys, y):
                flat += [dm(x_), dm(-y_n), dm(y_up)]
            kind = "rail" if row[w].highway == "rail" else ("foot" if ROAD_CLASS.get(row[w].highway, (2, 0))[0] == 3 else "road")
            near_tt = bool(tt_axis is not None and w != TRUONG_TIEN_WAY and row[w].geom_l.distance(tt_axis) < 14 and row[w].geom_l.length > 250)
            ways.append({"w": int(w), "kind": kind, "width": round(width_of(row[w]), 1), "pts": flat, "beside_truss": near_tt})
            bridge_way_ids.add(w)
        names = sorted({row[w].name for w in wids if isinstance(row[w].name, str)})
        mid_water = None
        if over.length > 0:
            parts = [over] if isinstance(over, LineString) else [g_ for g_ in getattr(over, "geoms", []) if isinstance(g_, LineString)]
            if parts:
                m_ = max(parts, key=lambda g_: g_.length).interpolate(0.5, normalized=True)
                mid_water = [round(m_.x, 1), round(-m_.y, 1)]
        bridges_out.append({"id": int(gid), "name": names[0] if names else None, "len": round(diag, 1), "over_water_m": round(float(over.length), 1), "mid_water": mid_water,
                            "deck_y": dm(plateau), "water_y": dm(wl_under), "clearance_assumed_m": clearance, "ways": ways,
                            "special": "truong_tien" if TRUONG_TIEN_WAY in wids else None})
    json.dump(bridges_out, open(OUT / "bridges.json", "w"), separators=(",", ":"), ensure_ascii=False)

    roads_out = []
    for r in allr.itertuples():
        if r.osm_id in bridge_way_ids:
            continue
        g = r.geom_l.intersection(F.box.buffer(30))
        for part in ([g] if isinstance(g, LineString) else list(getattr(g, "geoms", []))):
            if not isinstance(part, LineString) or part.length < 2:
                continue
            pts = densify(part, 10.0)
            xs = np.array([p.x for p in pts]); ys = np.array([p.y for p in pts])
            yy = np.maximum(F.sample(carved, xs, ys), F.sample(ground, xs, ys) - 0.0)   # causeway over un-bridged water
            flat = []
            for x_, y_n, y_up in zip(xs, ys, yy):
                flat += [dm(x_), dm(-y_n), dm(y_up)]
            grp = 4 if r.highway == "rail" else ROAD_CLASS.get(r.highway, (2, 4.0))[0]
            roads_out.append({"g": grp, "w": round(width_of(r), 1), "p": flat})
    json.dump(roads_out, open(OUT / "roads.json", "w"), separators=(",", ":"))
    log.info("roads: %d ribbons; bridges: %d groups (%d ways)", len(roads_out), len(bridges_out), len(bridge_way_ids))

    # ------------------------------------------------------------------ buildings
    est = pd.read_csv(C.NORM / "buildings_height" / "overture_buildings_height_estimate.csv.gz").set_index("overture_id")
    brows = pq.read_table(rel_dir / "building.parquet", columns=["id", "sources", "height", "num_floors", "names", "geometry"]).to_pylist()
    SRC = {"OpenStreetMap": 0, "Google Open Buildings": 1, "Microsoft ML Buildings": 2}
    n_arr, xz, h_arr, base_arr, src_arr, hs_arr, names = [], [], [], [], [], [], {}
    landmarks = {}
    dropped = collections.Counter()
    water_prep = shapely.prepared.prep(water_union)
    for r in brows:
        s0 = (r["sources"] or [{}])[0]
        rec = s0.get("record_id") or ""
        g = F.to_local(shapely.from_wkb(r["geometry"]))
        lm_key = next((v for k, v in LANDMARK_WAYS.items() if rec.startswith(f"w{k}@")), None)
        for p in polys(g):
            if not F.box.contains(p.centroid):
                dropped["outside"] += 1; continue
            p = p.simplify(0.4)
            if p.is_empty or not isinstance(p, Polygon) or p.area < 10:
                dropped["tiny"] += 1; continue
            src = SRC.get(s0.get("dataset"), 1)
            if src != 0 and water_prep.intersects(p):
                dropped["ml_on_water"] += 1; continue
            ring = list(p.exterior.coords)[:-1]
            if shapely.geometry.polygon.LinearRing(ring).is_ccw is False:
                ring = ring[::-1]
            rx = np.array([c[0] for c in ring]); ry = np.array([c[1] for c in ring])
            base = float(np.min(F.sample(carved, rx, ry))) - 0.3
            if lm_key:
                landmarks[lm_key] = {"ring": ring_xz(ring), "base": dm(base), "name": (r["names"] or {}).get("primary"), "osm": rec}
                continue
            e = est.loc[r["id"]] if r["id"] in est.index else None
            if r["height"]:
                h, hs = float(r["height"]), 0
            elif r["num_floors"]:
                h, hs = float(r["num_floors"]) * 3.3, 0
            elif e is not None and e["height_est_median_m"] == e["height_est_median_m"]:
                h, hs = float(e["height_est_median_m"]), 1
            else:
                h, hs = 4.5, 2
            h = float(np.clip(h, 2.6, 160))
            idx = len(n_arr)
            n_arr.append(len(ring)); xz += ring_xz(ring); h_arr.append(dm(h + 0.3)); base_arr.append(dm(base)); src_arr.append(src); hs_arr.append(hs)
            nm = (r["names"] or {}).get("primary")
            if nm:
                names[idx] = nm
    json.dump({"n": n_arr, "xz": xz, "h": h_arr, "base": base_arr, "src": src_arr, "hs": hs_arr, "names": names},
              open(OUT / "buildings.json", "w"), separators=(",", ":"), ensure_ascii=False)
    log.info("buildings: %d kept, dropped %s; landmarks %s", len(n_arr), dict(dropped), list(landmarks))

    # ------------------------------------------------------------------ citadel walls
    irows = pq.read_table(rel_dir / "infrastructure.parquet").to_pylist()
    road_cut_wide = unary_union([g.buffer(5.5) for g in roads.geom_l])
    road_cut_thin = unary_union([g.buffer(3.0) for g in roads.geom_l])
    walls_out = []
    for r in irows:
        if r["class"] != "city_wall":
            continue
        g = F.to_local(shapely.from_wkb(r["geometry"]))
        if g.geom_type == "Polygon" and g.length > 5000:          # "Vòng Thành": the Citadel rampart
            solid, height, kind = g.difference(road_cut_wide), 6.6, "rampart"
        elif g.geom_type == "Polygon":
            solid, height, kind = g.difference(road_cut_thin), 4.0, "inner"
        else:
            solid, height, kind = g.buffer(0.9, cap_style="flat").difference(road_cut_thin), 4.0, "inner"
        for p in polys(solid.intersection(F.box)):
            p = p.simplify(0.3)
            if p.area < 6:
                continue
            ex = np.array(p.exterior.coords)
            base = float(np.percentile(F.sample(ground, ex[:, 0], ex[:, 1]), 20)) - 0.4
            walls_out.append({"kind": kind, "base": dm(base), "h": dm(height + 0.4),
                              "rings": [ring_xz(p.exterior.coords)] + [ring_xz(hh.coords) for hh in p.interiors]})
    json.dump(walls_out, open(OUT / "walls.json", "w"), separators=(",", ":"))

    # ------------------------------------------------------------------ trees
    rng = np.random.default_rng(20261114)
    res = 2.0
    w_px, h_px = int((F.xmax - F.xmin) / res), int((F.ymax - F.ymin) / res)
    tr2 = rasterio.transform.from_origin(F.xmin, F.ymax, res, res)
    blocked = rasterize([(shapely.from_wkb(r["geometry"]), 1) for r in []] or [(water_union, 1)], out_shape=(h_px, w_px), transform=tr2, fill=0, dtype="uint8")
    bgeoms = [F.to_local(shapely.from_wkb(r["geometry"])) for r in brows]
    blocked |= rasterize([(g, 1) for g in bgeoms if not g.is_empty], out_shape=(h_px, w_px), transform=tr2, fill=0, dtype="uint8", all_touched=True)
    blocked |= rasterize([(r.geom_l.buffer(width_of(r) / 2 + 1.5), 1) for r in allr.itertuples()], out_shape=(h_px, w_px), transform=tr2, fill=0, dtype="uint8", all_touched=True)
    wc_fine = np.zeros((h_px, w_px), dtype="uint8")
    reproject(wc_src[0], wc_fine, src_transform=wc_src[1], src_crs=wc_src[2],
              dst_transform=rasterio.transform.from_origin(F.e0 + F.xmin, F.n0 + F.ymax, res, res), dst_crs="EPSG:32648", resampling=Resampling.nearest)
    step = 9.0
    gx, gy = np.meshgrid(np.arange(F.xmin + 5, F.xmax - 5, step), np.arange(F.ymin + 5, F.ymax - 5, step))
    px = (gx + rng.uniform(-3.5, 3.5, gx.shape)).ravel(); py = (gy + rng.uniform(-3.5, 3.5, gy.shape)).ravel()
    ci = np.clip(((px - F.xmin) / res).astype(int), 0, w_px - 1); ri = np.clip(((F.ymax - py) / res).astype(int), 0, h_px - 1)
    ok = (wc_fine[ri, ci] == 10) & (blocked[ri, ci] == 0) & (rng.random(px.shape) < 0.62)
    # mapped individual trees (OSM natural=tree) are kept as they are
    osm_trees = [F.to_local(Point(d.nodes[n])) for n, t in d.node_tags.items() if t.get("natural") == "tree"]
    tx = np.concatenate([px[ok], [p.x for p in osm_trees if F.box.contains(p)]])
    ty = np.concatenate([py[ok], [p.y for p in osm_trees if F.box.contains(p)]])
    th = rng.uniform(5.5, 13.0, tx.shape)
    tg = F.sample(carved, tx, ty)
    json.dump({"x": [dm(v) for v in tx], "z": [dm(-v) for v in ty], "y": [dm(v) for v in tg], "h": [dm(v) for v in th], "osm_mapped": len(osm_trees)},
              open(OUT / "trees.json", "w"), separators=(",", ":"))
    log.info("trees: %d (of which %d mapped in OSM)", len(tx), len(osm_trees))

    # ------------------------------------------------------------------ meta, places, mission
    def place(geom, alt=None):
        c = geom.centroid if not isinstance(geom, Point) else geom
        return {"x": round(c.x, 1), "z": round(-c.y, 1), "ground": round(float(F.sample(ground, c.x, c.y)), 1)}

    places = {}
    for key, wid in (("truong_tien", TRUONG_TIEN_WAY), ("phu_xuan", 39419121)):
        if wid in row:
            places[key] = place(row[wid].geom_l.interpolate(0.5, normalized=True))
    dv = [r.geom_l for r in allr.itertuples() if isinstance(r.name, str) and "Dã Viên" in r.name and r.is_bridge]
    if dv:
        places["da_vien"] = place(unary_union(dv).centroid)
    for key, lm in landmarks.items():
        rr = np.array(lm["ring"]).reshape(-1, 2) / 10
        places[key] = {"x": round(float(rr[:, 0].mean()), 1), "z": round(float(rr[:, 1].mean()), 1), "ground": lm["base"] / 10}
    tt = None
    if tt_axis is not None:
        a_, b_ = np.array(tt_axis.coords[0]), np.array(tt_axis.coords[-1])
        tt_b = next(b for b in bridges_out if b["special"] == "truong_tien")
        tt = {"ax": round(float(a_[0]), 2), "az": round(float(-a_[1]), 2), "bx": round(float(b_[0]), 2), "bz": round(float(-b_[1]), 2),
              "length_osm_m": round(float(tt_axis.length), 1), "length_published_m": 402.6, "spans": 6,
              "deck_y": tt_b["deck_y"] / 10, "water_y": tt_b["water_y"] / 10}
    # named waypoints for the scripted flight routes (OSM objects; centroid in local metres)
    ROUTE_POINTS = [
        ("ga_hue", "Ga Huế", "way", 175063593), ("phu_cam", "Nhà thờ Phủ Cam", "way", 118792054),
        ("quoc_hoc", "Trường Quốc Học", "way", 695775622), ("vincom", "Vincom Plaza Huế", "way", 749331141),
        ("cong_vien_3_2", "Công viên 3 Tháng 2", "way", 35926965), ("cho_dong_ba", "Chợ Đông Ba", "way", 161714451),
        ("cau_gia_hoi", "Cầu Gia Hội", "way", 1431132258), ("gia_hoi", "Phố cổ Gia Hội", "node", 7270994492),
        ("con_hen", "Cồn Hến", "way", 52656963), ("con_da_vien", "Cồn Dã Viên", "way", 174746316),
        ("nha_hat_song_huong", "Nhà hát Sông Hương", "way", 1033684220),
        ("phu_van_lau", "Phu Văn Lâu", "way", 531031520), ("nghenh_luong", "Nghênh Lương Đình", "way", 239568224),
        ("cua_ngan", "Cửa Ngăn", "way", 619851622), ("tu_cam_thanh", "Tử Cấm Thành", "node", 2899189013),
        ("kien_trung", "Điện Kiến Trung", "way", 285990348), ("duyet_thi", "Duyệt Thị Đường", "way", 172657563),
        ("cua_hien_nhon", "Cửa Hiển Nhơn", "way", 264099611), ("cua_dong_ba", "Cửa Đông Ba", "way", 695810694),
        ("cua_thuong_tu", "Cửa Thượng Tứ", "way", 173614468), ("hien_lam_cac", "Hiển Lâm Các", "way", 172657564),
    ]
    route_points = {}
    for key, label, kind, oid in ROUTE_POINTS:
        if kind == "node" and oid in d.nodes:
            g = Point(d.nodes[oid])
        elif kind == "way" and d.way_coords(oid):
            pts = d.way_coords(oid)
            g = Polygon(pts).centroid if len(pts) >= 4 and pts[0] == pts[-1] else LineString(pts).centroid
        else:
            log.warning("route point %s (%s %s) not in the OSM sample", key, kind, oid); continue
        c = F.to_local(g)
        if not F.box.contains(c):
            continue
        route_points[key] = {"x": round(c.x, 1), "z": round(-c.y, 1), "name": label, "osm": f"{kind}/{oid}",
                             "ground": round(float(F.sample(ground, c.x, c.y)), 1)}
    for b in bridges_out:
        if b["mid_water"] and b["name"] in ("Cầu Dã Viên", "Cầu Phú Xuân", "Cầu Trường Tiền", "Cầu Nguyễn Hoàng") and b["len"] > 200:
            key = "mid_" + {"Cầu Dã Viên": "da_vien", "Cầu Phú Xuân": "phu_xuan", "Cầu Trường Tiền": "truong_tien", "Cầu Nguyễn Hoàng": "nguyen_hoang"}[b["name"]]
            if key not in route_points:
                route_points[key] = {"x": b["mid_water"][0], "z": b["mid_water"][1], "name": b["name"], "bridge": True, "deck_y": b["deck_y"] / 10}
    log.info("route points: %d (%s)", len(route_points), ", ".join(sorted(route_points)))

    meta = {
        "generated_at": C.utcnow(), "title": "Huế 3D — pilot demo",
        "frame": {"crs": "EPSG:32648", "origin_easting": F.e0, "origin_northing": F.n0, "x": "east (m)", "z": "south (m)", "y": "up (m, EGM2008-based)",
                  "xmin": round(F.xmin, 1), "xmax": round(F.xmax, 1), "zmin": round(-F.ymax, 1), "zmax": round(-F.ymin, 1)},
        "river_level_m": RIVER_LEVEL, "places": places, "truong_tien": tt, "landmarks": landmarks, "route_points": route_points,
        "counts": {"buildings": len(n_arr), "roads": len(roads_out), "bridges": len(bridges_out), "trees": int(len(tx)), "walls": len(walls_out), "water_polygons": len(water_out),
                   "buildings_dropped": dict(dropped),
                   "height_status": {"tag": int(sum(1 for v in hs_arr if v == 0)), "ml_estimate": int(sum(1 for v in hs_arr if v == 1)), "default": int(sum(1 for v in hs_arr if v == 2))}},
        "assumptions": ASSUMPTIONS,
        "attribution": ["© OpenStreetMap contributors (ODbL)", "Overture Maps Foundation", "Google Open Buildings & Open Buildings 2.5D (CC BY 4.0)",
                        "Microsoft ML Building Footprints (ODbL)", "Copernicus DEM GLO-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA",
                        "© ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021)"],
    }
    json.dump(meta, open(OUT / "meta.json", "w"), indent=1, ensure_ascii=False)
    json.dump(water_out, open(OUT / "water.json", "w"), separators=(",", ":"))
    for f in sorted(OUT.glob("*.json")):
        log.info("  %-16s %7.1f KB", f.name, f.stat().st_size / 1024)
    C.record_provenance("demo/data/", kind="derived (scene data for the browser demo)", generated_at=C.utcnow(), script="scripts/11_build_demo_data.py",
                        derived_from=["samples/raw/osm/tiles/", f"samples/raw/overture/{rel_dir.name}/", "samples/raw/dem/", "samples/raw/landcover/",
                                      "samples/normalized/buildings_height/overture_buildings_height_estimate.csv.gz"],
                        licence="ODbL 1.0 (OSM/Overture/Microsoft rows) + CC BY 4.0 (Google Open Buildings, ESA WorldCover) + Copernicus DEM licence",
                        assumptions=ASSUMPTIONS)


if __name__ == "__main__":
    main()
