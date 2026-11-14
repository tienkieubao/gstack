#!/usr/bin/env python3
"""Render a quick-look PNG of the normalized pilot layers (visual sanity check only).

Output: samples/normalized/reference/pilot_overview.png
"""
from __future__ import annotations

import sys
from pathlib import Path

import geopandas as gpd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
from matplotlib.patches import Patch

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

GJ = C.NORM / "geojson"
METRIC = "EPSG:32648"


def load(name):
    p = GJ / f"{name}.geojson"
    if not p.exists():
        p = GJ / f"{name}.geojson.gz"
        return gpd.read_file(f"/vsigzip/{p}").to_crs(METRIC)
    return gpd.read_file(p).to_crs(METRIC)


def main():
    water, roads, b = load("overture_water"), load("osm_roads"), load("overture_buildings")
    pts = load("osm_point_features")
    fig, ax = plt.subplots(figsize=(13, 12), dpi=150)
    ax.set_facecolor("#f4f1ea")
    water[water.geom_type.isin(["Polygon", "MultiPolygon"])].plot(ax=ax, color="#a9cbe8", linewidth=0)
    b[b.source_dataset == "Google Open Buildings"].plot(ax=ax, color="#d9a066", linewidth=0)
    b[b.source_dataset == "Microsoft ML Buildings"].plot(ax=ax, color="#b98fc9", linewidth=0)
    b[b.source_dataset == "OpenStreetMap"].plot(ax=ax, color="#4a4a4a", linewidth=0)
    motor = roads[~roads.highway.isin(["footway", "path", "steps", "pedestrian", "cycleway", "track"])]
    motor[motor.highway.isin(["service", "residential", "unclassified", "living_street"])].plot(ax=ax, color="#ffffff", linewidth=0.5)
    motor[~motor.highway.isin(["service", "residential", "unclassified", "living_street"])].plot(ax=ax, color="#fff4b0", linewidth=1.4)
    roads[roads.bridge.notna()].plot(ax=ax, color="#d7263d", linewidth=1.8)
    roads[roads.osm_id == 174759688].plot(ax=ax, color="#d7263d", linewidth=1.8, linestyle=":")   # Trường Tiền: no bridge tag
    pts[pts.highway == "traffic_signals"].plot(ax=ax, color="#1b9e77", markersize=14, zorder=5)
    w, s, e, n = gpd.GeoSeries.from_wkt([f"POLYGON(({C.PILOT_BBOX[0]} {C.PILOT_BBOX[1]},{C.PILOT_BBOX[2]} {C.PILOT_BBOX[1]},{C.PILOT_BBOX[2]} {C.PILOT_BBOX[3]},{C.PILOT_BBOX[0]} {C.PILOT_BBOX[3]},{C.PILOT_BBOX[0]} {C.PILOT_BBOX[1]}))"], crs="EPSG:4326").to_crs(METRIC).total_bounds
    ax.set_xlim(w, e); ax.set_ylim(s, n); ax.set_aspect("equal")
    ax.set_xticks([]); ax.set_yticks([])
    ax.set_title("Huế pilot (Zone A) — normalized sample layers\n© OpenStreetMap contributors · Overture Maps · Google Open Buildings · Microsoft ML Buildings", fontsize=10)
    ax.legend(handles=[
        Patch(color="#4a4a4a", label="Building footprint — OSM (manual)"),
        Patch(color="#d9a066", label="Building footprint — Google Open Buildings (ML)"),
        Patch(color="#b98fc9", label="Building footprint — Microsoft (ML)"),
        Patch(color="#a9cbe8", label="Water (OSM via Overture)"),
        Line2D([0], [0], color="#fff4b0", lw=3, label="Major roads (OSM)"),
        Line2D([0], [0], color="#d7263d", lw=2, label="OSM ways tagged bridge=*"),
        Line2D([0], [0], color="#d7263d", lw=2, ls=":", label="Cầu Trường Tiền (no bridge tag in OSM)"),
        Line2D([0], [0], marker="o", color="none", markerfacecolor="#1b9e77", markersize=6, label="Traffic signals (OSM)"),
    ], loc="lower left", fontsize=7, framealpha=0.9)
    out = C.NORM / "reference" / "pilot_overview.png"
    fig.savefig(out, bbox_inches="tight")
    print(out)


if __name__ == "__main__":
    main()
