#!/usr/bin/env bash
# Re-run the whole survey pipeline for the pilot. Every step is cached; add
# --refresh to an individual script to force a new download.
set -euo pipefail
cd "$(dirname "$0")/.."

python3 scripts/02_fetch_osm_pilot.py
python3 scripts/01_fetch_boundaries_make_aoi.py
python3 scripts/03_fetch_overture.py pilot
python3 scripts/03_fetch_overture.py divisions
python3 scripts/03_fetch_overture.py stats
python3 scripts/04_fetch_rasters.py
python3 scripts/05_normalize.py
python3 scripts/06_validate_pilot.py
python3 scripts/07_coverage_stats.py
# Probes of third-party platforms may be rate-limited; a failure here must not hide the results above.
python3 scripts/08_fetch_reference_and_probes.py wikidata sketchfab panoramax || echo "WARN: probe step failed (see scripts/fetch.log)"
python3 scripts/08_fetch_reference_and_probes.py commons || echo "WARN: Wikimedia Commons step failed or was rate-limited"
python3 scripts/09_fetch_building_heights.py
python3 scripts/10_render_overview.py
python3 scripts/11_build_demo_data.py
python3 scripts/12_build_demo_imagery.py
python3 scripts/build_source_catalog.py
python3 scripts/verify_checksums.py --write
