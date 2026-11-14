#!/usr/bin/env python3
"""Openly licensed photos (incl. aerial/drone views) of six landmarks, to use as MODELLING REFERENCE.

Landmarks: cầu Trường Tiền, cầu Phú Xuân, cầu Dã Viên, cầu Nguyễn Hoàng, nhà thờ Phủ Cam, Vincom Plaza Huế,
plus generic "Huế from above" searches.

  collect   Wikimedia Commons text search (file namespace) + geosearch around each landmark; keeps the raw API
            JSON and writes samples/normalized/validation/landmark_photos.csv with licence/author/date/coords for
            EVERY hit (open or not). Downloads a 330 px preview of each openly licensed JPEG that matches the
            landmark by name or lies inside the search radius.
  pick      Downloads a 1280 px rendition for the files listed in samples/normalized/validation/landmark_photos_picked.json
            (written by hand after looking at the previews) and records provenance per file.

Only CC0 / public domain / CC BY / CC BY-SA files are downloaded. Photos are used to read off shapes, proportions
and colours for the 3D sketches; they are not draped on the model. Requests are throttled (common.MIN_INTERVAL_S:
8 s per Wikimedia host) because the API and the image host both rate-limit bursts.
"""
from __future__ import annotations

import argparse
import collections
import csv
import json
import math
import re
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

log = C.get_logger("landmark_photos")
COMMONS = "https://commons.wikimedia.org/w/api.php"
OUT = C.RAW / "landmark_photos"
VAL = C.NORM / "validation"
OPEN_LICENCES = re.compile(r"^(cc0|public domain|pd|cc by(-sa)? [0-9.]+)", re.I)
II = {"prop": "imageinfo|coordinates", "iiprop": "url|size|mime|extmetadata|timestamp", "iiurlwidth": 330,
      "iiextmetadatafilter": "LicenseShortName|LicenseUrl|Artist|DateTimeOriginal|ImageDescription|ObjectName"}

# centre (lat, lon) from the demo's OSM-derived route points, search radius (m), name pattern, text queries
LANDMARKS = {
    "truong_tien": ((16.468891, 107.588862), 260, r"tr(ư|u)(ờ|o)ng.?ti(ề|e)n|trang.?tien",
                    ["Truong Tien bridge", "Trường Tiền bridge", "Cầu Trường Tiền", "Trang Tien bridge Hue"]),
    "phu_xuan": ((16.465422, 107.585273), 260, r"ph(ú|u).?xu(â|a)n",
                 ["Phu Xuan bridge", "Cầu Phú Xuân", "Phú Xuân bridge Huế"]),
    "da_vien": ((16.459700, 107.571123), 300, r"d(ã|a).?vi(ê|e)n|b(ạ|a)ch.?h(ổ|o)",
                ["Da Vien bridge", "Cầu Dã Viên", "Bach Ho bridge Hue", "Cầu Bạch Hổ"]),
    "nguyen_hoang": ((16.455293, 107.559703), 300, r"nguy(ễ|e)n.?ho(à|a)ng",
                     ["Nguyen Hoang bridge Hue", "Cầu Nguyễn Hoàng", "Huong river bridge Nguyen Hoang"]),
    "phu_cam": ((16.452598, 107.587810), 160, r"ph(ủ|u).?cam",
                ["Phu Cam cathedral", "Phủ Cam", "Nhà thờ Phủ Cam", "Phu Cam church Hue"]),
    "vincom": ((16.463008, 107.594238), 160, r"vincom",
               ["Vincom Hue", "Vincom Plaza Huế", "Vincom Plaza Hue"]),
    "aerial": (None, None, r"a(e|é)rial|drone|flycam|from above|t(ừ|u).?tr(ê|e)n.?cao|bird.?s.?eye|panorama",
               ["Hue aerial view", "Huế aerial", "Hue drone", "Huế flycam", "Perfume River aerial", "Hue from above"]),
}
PREVIEW_CAP = {"aerial": 8}
HUE_BBOX = (16.43, 107.54, 16.50, 107.62)   # aerial hits must have coordinates in here or mention Huế


def strip_html(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s or "")).strip()


def jget(dest, params, refresh):
    path, _ = C.fetch(COMMONS, dest, params={"format": "json", "action": "query", **params}, refresh=refresh, logger=log)
    d = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(d, dict) and "error" in d:   # MediaWiki reports some failures with HTTP 200
        path.unlink()
        Path(str(path) + ".fetchmeta.json").unlink(missing_ok=True)
        raise RuntimeError(f"API error: {d['error'].get('code')}: {d['error'].get('info', '')[:100]}")
    return d


def dist_m(a, b):
    k = 111320.0
    return math.hypot((a[0] - b[0]) * k, (a[1] - b[1]) * k * math.cos(math.radians(a[0])))


def rendition(url):
    # the API answers with thumb.wikimedia.org renditions; this environment's proxy only allows upload.wikimedia.org,
    # which serves the same path
    return url.split("?")[0].replace("//thumb.wikimedia.org/", "//upload.wikimedia.org/")


def slug(s):
    return re.sub(r"[^A-Za-z0-9._-]+", "_", s)[:60]


def collect(refresh):
    rows: dict[str, dict] = {}
    errors = {}
    for key, (centre, radius, pat, queries) in LANDMARKS.items():
        rx = re.compile(pat, re.I)
        pages = []
        for q in queries:
            try:
                d = jget(OUT / "api" / f"search_{key}_{slug(q)}.json",
                         {"generator": "search", "gsrsearch": q, "gsrnamespace": 6, "gsrlimit": 40, **II}, refresh)
                pages += [("search:" + q, p) for p in (d.get("query") or {}).get("pages", {}).values()]
            except RuntimeError as e:
                errors[f"{key}/{q}"] = str(e)[:140]
                log.warning("search %s failed: %s", q, e)
        if centre:
            try:
                d = jget(OUT / "api" / f"geo_{key}.json", {"generator": "geosearch", "ggscoord": f"{centre[0]}|{centre[1]}",
                                                         "ggsradius": radius, "ggsnamespace": 6, "ggslimit": 50, **II}, refresh)
                pages += [("geo", p) for p in (d.get("query") or {}).get("pages", {}).values()]
            except RuntimeError as e:
                errors[f"{key}/geo"] = str(e)[:140]
                log.warning("geosearch %s failed: %s", key, e)
        for how, p in pages:
            ii = (p.get("imageinfo") or [{}])[0]
            em = ii.get("extmetadata") or {}
            g = lambda k: strip_html((em.get(k) or {}).get("value"))  # noqa: E731
            co = (p.get("coordinates") or [{}])[0]
            ll = (co.get("lat"), co.get("lon")) if co.get("lat") is not None else None
            text = f"{p.get('title', '')} {g('ImageDescription')} {g('ObjectName')}"
            by_name = bool(rx.search(text))
            near = bool(ll and centre and dist_m(ll, centre) <= radius)
            if key == "aerial":
                # coordinates inside Huế, or an explicit place name ("Huế", "Hue" next to Vietnam/citadel/Perfume River...)
                in_hue = bool(ll and HUE_BBOX[0] <= ll[0] <= HUE_BBOX[2] and HUE_BBOX[1] <= ll[1] <= HUE_BBOX[3]) or bool(
                    re.search(r"huế", text, re.I) or (re.search(r"\bhue\b", text, re.I) and re.search(r"vietnam|việt|perfume|hương|citadel|kinh thành|imperial", text, re.I)))
                relevant = by_name and in_hue
            else:
                relevant = by_name or near
            lic = g("LicenseShortName")
            r = rows.get((key, p["title"])) or {
                "landmark": key, "title": p.get("title"), "page": ii.get("descriptionurl"), "mime": ii.get("mime"),
                "width": ii.get("width"), "height": ii.get("height"), "licence": lic, "licence_url": g("LicenseUrl"),
                "author": g("Artist")[:120], "date_taken": g("DateTimeOriginal")[:40], "upload_time": ii.get("timestamp"),
                "lat": ll[0] if ll else None, "lon": ll[1] if ll else None,
                "dist_m": round(dist_m(ll, centre)) if ll and centre else None,
                "description": g("ImageDescription")[:200], "found_by": set(), "name_match": by_name, "within_radius": near,
                "relevant": relevant, "open_licence": bool(OPEN_LICENCES.match(lic)), "preview": "", "_thumb": ii.get("thumburl")}
            r["found_by"].add(how)
            rows[(key, p["title"])] = r
    # previews: open-licence JPEG/PNG, relevant, at least 1000 px wide; at most PREVIEW_CAP per landmark,
    # name matches first, then the newest uploads
    per = collections.Counter()
    order = sorted(rows.values(), key=lambda r: (r["landmark"] == "aerial", r["landmark"], not r["name_match"], -(int((r["upload_time"] or "0")[:4] or 0))))
    pauses = 0
    for r in order:
        if not (r["relevant"] and r["open_licence"] and r["mime"] == "image/jpeg" and (r["width"] or 0) >= 1000 and r["_thumb"]):
            continue
        if per[r["landmark"]] >= PREVIEW_CAP.get(r["landmark"], 14):
            continue
        per[r["landmark"]] += 1
        dest = OUT / "previews" / r["landmark"] / (slug(r["title"].replace("File:", "")) + ".jpg")
        try:
            C.fetch(rendition(r["_thumb"]), dest, refresh=refresh, logger=log)
            r["preview"] = C.rel(dest)
            pauses = 0
        except RuntimeError as e:
            # a 429 can be specific to one rendition (thumbnail not generated yet): skip that file; only when
            # several files in a row are refused, wait a minute for the host-wide throttle to clear
            log.warning("preview %s failed: %s", r["title"], e)
            errors.setdefault("previews", []).append(f"{r['title']}: {str(e)[:80]}")
            if "429" in str(e):
                pauses += 1
                if pauses >= 3:
                    log.warning("image host throttling; waiting 60 s")
                    time.sleep(60)
                    pauses = 0
    VAL.mkdir(parents=True, exist_ok=True)
    fields = ["landmark", "title", "page", "mime", "width", "height", "licence", "licence_url", "author", "date_taken",
              "upload_time", "lat", "lon", "dist_m", "found_by", "name_match", "within_radius", "relevant", "open_licence",
              "preview", "description"]
    out_rows = sorted(rows.values(), key=lambda r: (r["landmark"], not r["relevant"], r["title"]))
    with open(VAL / "landmark_photos.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in out_rows:
            w.writerow({**r, "found_by": ";".join(sorted(r["found_by"]))})
    summary = {"checked_at": C.utcnow(), "api_errors": errors, "by_landmark": {}}
    for key in LANDMARKS:
        rs = [r for r in out_rows if r["landmark"] == key]
        summary["by_landmark"][key] = {"hits": len(rs), "relevant": sum(r["relevant"] for r in rs),
                                       "relevant_open": sum(r["relevant"] and r["open_licence"] for r in rs),
                                       "previews": sum(bool(r["preview"]) for r in rs)}
    (VAL / "landmark_photos_summary.json").write_text(json.dumps(summary, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    C.record_provenance("samples/raw/landmark_photos/", source="Wikimedia Commons (MediaWiki API search + geosearch + imageinfo)",
                        provider="Wikimedia Foundation; individual authors per file", landing_url="https://commons.wikimedia.org/",
                        data_url=COMMONS, licence="per file, see samples/normalized/validation/landmark_photos.csv; only CC0/PD/CC BY/CC BY-SA downloaded",
                        retrieved_at=C.utcnow(), use="modelling reference only (shapes, proportions, colours); not draped on the model",
                        data_date_note="date_taken comes from each file's metadata and is not verified",
                        script="scripts/13_fetch_landmark_photos.py collect")
    print(json.dumps(summary, indent=1, ensure_ascii=False))


def pick(refresh):
    picked = json.loads((VAL / "landmark_photos_picked.json").read_text(encoding="utf-8"))
    rows = {(r["landmark"], r["title"]): r for r in csv.DictReader(open(VAL / "landmark_photos.csv", encoding="utf-8"))}
    done = []
    for item in picked["files"]:
        r = rows[(item["landmark"], item["title"])]
        if r["open_licence"] != "True":
            raise SystemExit(f"refusing non-open file {r['title']}")
        d = jget(OUT / "api" / f"ii1280_{slug(r['title'])}.json", {"titles": r["title"], "prop": "imageinfo", "iiprop": "url", "iiurlwidth": 1280}, refresh)
        ii = next(iter(d["query"]["pages"].values()))["imageinfo"][0]
        dest = OUT / "images" / item["landmark"] / (slug(r["title"].replace("File:", "")) + ".jpg")
        C.fetch(rendition(ii["thumburl"]), dest, refresh=refresh, logger=log)
        done.append({"file": C.rel(dest), "sha256_file": C.sha256_file(dest), "bytes": dest.stat().st_size, "landmark": item["landmark"],
                     "source_page": r["page"], "rendition_url": rendition(ii["thumburl"]), "licence": r["licence"], "licence_url": r["licence_url"],
                     "author": r["author"], "date_taken": r["date_taken"], "why": item.get("why", "")})
    C.record_provenance("samples/raw/landmark_photos/images/", source="Wikimedia Commons, 1280 px renditions of hand-picked files",
                        provider="Wikimedia Foundation; individual authors per file", licence="per file (CC0/PD/CC BY/CC BY-SA)",
                        retrieved_at=C.utcnow(), images=done, use="modelling reference only", script="scripts/13_fetch_landmark_photos.py pick")
    print(json.dumps(done, indent=1, ensure_ascii=False))


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("what", choices=["collect", "pick"])
    ap.add_argument("--refresh", action="store_true")
    a = ap.parse_args()
    {"collect": collect, "pick": pick}[a.what](a.refresh)
