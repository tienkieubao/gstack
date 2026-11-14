"""Minimal OSM XML reader + geometry assembly (stdlib + shapely).

Deliberately small: enough to turn the pilot's raw API responses into GeoJSON
layers while keeping every original tag and the per-object edit metadata.
"""
from __future__ import annotations

import gzip
import xml.etree.ElementTree as ET
from pathlib import Path

from shapely.geometry import LineString, MultiPolygon, Polygon
from shapely.ops import polygonize, unary_union


class OsmData:
    def __init__(self):
        self.nodes: dict[int, tuple[float, float]] = {}     # id -> (lon, lat)
        self.node_tags: dict[int, dict] = {}
        self.node_meta: dict[int, dict] = {}
        self.ways: dict[int, dict] = {}                      # id -> {nodes, tags, meta}
        self.relations: dict[int, dict] = {}                 # id -> {members, tags, meta}

    def load(self, path: Path) -> None:
        opener = gzip.open if str(path).endswith(".gz") else open
        with opener(path, "rb") as f:
            for _, el in ET.iterparse(f, events=("end",)):
                if el.tag == "node":
                    i = int(el.get("id"))
                    self.nodes[i] = (float(el.get("lon")), float(el.get("lat")))
                    tags = {t.get("k"): t.get("v") for t in el.findall("tag")}
                    if tags:
                        self.node_tags[i] = tags
                        self.node_meta[i] = _meta(el)
                    el.clear()
                elif el.tag == "way":
                    i = int(el.get("id"))
                    self.ways[i] = {
                        "nodes": [int(nd.get("ref")) for nd in el.findall("nd")],
                        "tags": {t.get("k"): t.get("v") for t in el.findall("tag")},
                        "meta": _meta(el),
                    }
                    el.clear()
                elif el.tag == "relation":
                    i = int(el.get("id"))
                    self.relations[i] = {
                        "members": [(m.get("type"), int(m.get("ref")), m.get("role")) for m in el.findall("member")],
                        "tags": {t.get("k"): t.get("v") for t in el.findall("tag")},
                        "meta": _meta(el),
                    }
                    el.clear()

    # ---- geometry helpers -------------------------------------------------
    def way_coords(self, wid: int):
        w = self.ways.get(wid)
        if not w:
            return None
        pts = [self.nodes[n] for n in w["nodes"] if n in self.nodes]
        if len(pts) != len(w["nodes"]) or len(pts) < 2:
            return None
        return pts

    def way_is_closed(self, wid: int) -> bool:
        n = self.ways[wid]["nodes"]
        return len(n) >= 4 and n[0] == n[-1]

    def multipolygon(self, rid: int):
        """Return (geometry|None, complete: bool, n_missing_members)."""
        rel = self.relations[rid]
        outers, inners, missing = [], [], 0
        for typ, ref, role in rel["members"]:
            if typ != "way":
                continue
            pts = self.way_coords(ref)
            if pts is None:
                missing += 1
                continue
            (inners if role == "inner" else outers).append(LineString(pts))
        if not outers:
            return None, missing == 0, missing
        outer_polys = list(polygonize(unary_union(outers)))
        if not outer_polys:
            return None, False, missing
        geom = unary_union(outer_polys)
        if inners:
            inner_polys = list(polygonize(unary_union(inners)))
            if inner_polys:
                geom = geom.difference(unary_union(inner_polys))
        if geom.is_empty:
            return None, False, missing
        if isinstance(geom, Polygon):
            geom = MultiPolygon([geom])
        return geom, missing == 0, missing


def _meta(el) -> dict:
    return {"version": int(el.get("version", 0)), "timestamp": el.get("timestamp"), "changeset": el.get("changeset")}
