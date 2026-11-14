"""Shared helpers for the Huế 3D data-source survey scripts.

Design rules (see ../README.md):
  * raw bytes are written once to samples/raw/ and never modified;
  * every fetch is cached on disk (re-running does not hit the network again
    unless --refresh is passed);
  * bounded retries with back-off, a global minimum interval between requests
    to the same host, and a plain-text log;
  * every raw file gets a SHA-256 checksum and a provenance record
    (provenance.json) with source URL, retrieval time, licence and notes.

Only the Python standard library + `requests` is needed here.
"""
from __future__ import annotations

import datetime as _dt
import hashlib
import json
import logging
import os
import sys
import time
from pathlib import Path
from urllib.parse import urlsplit

import requests

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "samples" / "raw"
NORM = ROOT / "samples" / "normalized"
AOI_DIR = ROOT / "aoi"
PROVENANCE = ROOT / "provenance.json"
LOG_FILE = ROOT / "scripts" / "fetch.log"

USER_AGENT = "hue3d-data-research/0.1 (one-off pilot source survey; small cached requests)"
# Some hosts (Wikimedia's robot policy) require contact details in the User-Agent. They are read from the
# environment at run time and never written to the repository (set HUE3D_CONTACT before running a script).
if os.environ.get("HUE3D_CONTACT"):
    USER_AGENT = f"hue3d-data-research/0.1 (one-off pilot source survey; contact: {os.environ['HUE3D_CONTACT'].strip()})"

# Project pilot rectangle (Zone A). This is a PROJECT extent, not an
# administrative boundary. Order: west, south, east, north (EPSG:4326).
PILOT_BBOX = (107.556, 16.452, 107.602, 16.494)

MAX_RETRIES = 3
BACKOFF_S = (5, 15, 45)
MIN_INTERVAL_S = {  # per-host politeness delay
    "www.openstreetmap.org": 2.0,
    "commons.wikimedia.org": 8.0,
    "upload.wikimedia.org": 8.0,
    "earth-search.aws.element84.com": 1.0,
    "api.panoramax.xyz": 1.0,
    "api.sketchfab.com": 1.5,
}
DEFAULT_INTERVAL_S = 0.5
_last_hit: dict[str, float] = {}


def get_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    if logger.handlers:
        return logger
    logger.setLevel(logging.INFO)
    fmt = logging.Formatter("%(asctime)sZ %(name)s %(levelname)s %(message)s", "%Y-%m-%dT%H:%M:%S")
    fmt.converter = time.gmtime
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    fh = logging.FileHandler(LOG_FILE, encoding="utf-8")
    fh.setFormatter(fmt)
    sh = logging.StreamHandler(sys.stderr)
    sh.setFormatter(fmt)
    logger.addHandler(fh)
    logger.addHandler(sh)
    return logger


def utcnow() -> str:
    return _dt.datetime.now(_dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def _throttle(host: str) -> None:
    wait = MIN_INTERVAL_S.get(host, DEFAULT_INTERVAL_S)
    last = _last_hit.get(host)
    if last is not None:
        delta = time.monotonic() - last
        if delta < wait:
            time.sleep(wait - delta)
    _last_hit[host] = time.monotonic()


def fetch(url: str, dest: Path, *, params: dict | None = None, headers: dict | None = None,
          refresh: bool = False, logger: logging.Logger | None = None,
          timeout: int = 120, ok_statuses: tuple[int, ...] = (200, 206)) -> tuple[Path, dict]:
    """Download `url` to `dest` unless cached. Returns (path, info).

    info = {"cached": bool, "status": int|None, "bytes": int, "http_headers": {...}}
    Raises RuntimeError after MAX_RETRIES failures. Never fabricates content.
    """
    log = logger or get_logger("fetch")
    dest.parent.mkdir(parents=True, exist_ok=True)
    meta_path = dest.with_name(dest.name + ".fetchmeta.json")
    if dest.exists() and dest.stat().st_size > 0 and not refresh:
        info = {"cached": True, "status": None, "bytes": dest.stat().st_size, "http_headers": {}}
        if meta_path.exists():
            info.update(json.loads(meta_path.read_text()))
            info["cached"] = True
        log.info("cache hit %s", dest.relative_to(ROOT))
        return dest, info
    host = urlsplit(url).netloc
    hdrs = {"User-Agent": USER_AGENT}
    hdrs.update(headers or {})
    last_err: Exception | None = None
    for attempt in range(MAX_RETRIES):
        _throttle(host)
        try:
            r = requests.get(url, params=params, headers=hdrs, timeout=timeout)
            if r.status_code in ok_statuses:
                tmp = dest.with_name(dest.name + ".part")
                tmp.write_bytes(r.content)
                os.replace(tmp, dest)
                keep = {k: v for k, v in r.headers.items()
                        if k.lower() in ("etag", "last-modified", "content-type", "content-length", "content-range")}
                info = {"cached": False, "status": r.status_code, "bytes": len(r.content),
                        "http_headers": keep, "retrieved_at": utcnow(), "final_url": r.url}
                meta_path.write_text(json.dumps(info, indent=1))
                log.info("GET %s -> %s (%d bytes)", r.url, r.status_code, len(r.content))
                return dest, info
            # 4xx other than 429 will not get better by retrying
            if 400 <= r.status_code < 500 and r.status_code != 429:
                log.error("GET %s -> HTTP %s: %s", r.url, r.status_code, r.text[:200].replace("\n", " "))
                raise RuntimeError(f"HTTP {r.status_code} for {r.url}: {r.text[:200]}")
            last_err = RuntimeError(f"HTTP {r.status_code}")
        except requests.exceptions.ProxyError as e:  # egress policy denial (HTTP 403 on CONNECT): never retry
            log.error("proxy refused %s: %s", host, str(e)[:160])
            raise RuntimeError(f"host {host} is not reachable from this environment (proxy refused the connection)") from e
        except requests.RequestException as e:  # network error: retry
            last_err = e
        log.warning("attempt %d/%d failed for %s: %s", attempt + 1, MAX_RETRIES, url, last_err)
        if attempt + 1 < MAX_RETRIES:
            time.sleep(BACKOFF_S[attempt])
    raise RuntimeError(f"giving up on {url} after {MAX_RETRIES} attempts: {last_err}")


def load_provenance() -> dict:
    if PROVENANCE.exists():
        return json.loads(PROVENANCE.read_text(encoding="utf-8"))
    return {"schema": "hue3d-provenance/1", "note": "One record per raw or normalized artefact. "
            "retrieved_at is when this project fetched the bytes; it is NOT the data's capture date.",
            "records": {}}


def record_provenance(key: str, **fields) -> None:
    """Insert/replace one provenance record keyed by the artefact's relative path."""
    prov = load_provenance()
    prov["records"][key] = fields
    prov["updated_at"] = utcnow()
    PROVENANCE.write_text(json.dumps(prov, indent=1, ensure_ascii=False, sort_keys=True) + "\n", encoding="utf-8")


def rel(path: Path) -> str:
    return str(Path(path).resolve().relative_to(ROOT))


def write_geojson(path: Path, features: list[dict], *, name: str, extra: dict | None = None) -> None:
    """Write an RFC 7946 FeatureCollection (WGS 84 lon/lat, EPSG:4326 / CRS84)."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fc = {"type": "FeatureCollection", "name": name}
    if extra:
        fc.update(extra)
    fc["features"] = features
    with open(path, "w", encoding="utf-8") as f:
        json.dump(fc, f, ensure_ascii=False, separators=(",", ":"))
        f.write("\n")
