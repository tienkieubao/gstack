#!/usr/bin/env python3
"""Reference photos with explicit licences + probes of other open platforms.

  commons    Wikimedia Commons geosearch around pilot landmarks: raw API JSON,
             per-file licence/author/date metadata, and a SMALL sample of
             images (<= 2 per landmark, 1280 px renditions, only CC0/PD/CC BY/
             CC BY-SA files) for visual validation of the 3D model.
  wikidata   coordinates + any dimension statements for key monuments (CC0).
  sketchfab  licence/downloadability of 3D-model leads (metadata only; no model
             is downloaded).
  panoramax  does the federated open street-level imagery index hold anything in Huế?

Everything is cached under samples/raw/reference_photos and samples/raw/probes.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

log = C.get_logger("probe")
COMMONS = "https://commons.wikimedia.org/w/api.php"
REF = C.RAW / "reference_photos"
PROBES = C.RAW / "probes"
VAL = C.NORM / "validation"

LANDMARKS = {   # approximate search centres (WGS84 lat, lon) and radius in metres
    "ngo_mon": (16.46775, 107.57915, 120),
    "ky_dai": (16.46585, 107.58045, 120),
    "dien_thai_hoa": (16.46965, 107.57790, 100),
    "cau_truong_tien": (16.46840, 107.58870, 250),
    "cau_phu_xuan": (16.46440, 107.58230, 250),
}
OPEN_LICENCES = re.compile(r"^(cc0|public domain|pd|cc by(-sa)? [0-9.]+)", re.I)
CATEGORIES = ["Imperial City, Huế", "Citadel of Huế", "Meridian Gate (Huế)", "Flag Tower of Huế", "Trường Tiền Bridge",
              "Truong Tien Bridge", "Phu Xuan Bridge", "Pagoda of the Celestial Lady", "Complex of Huế Monuments", "Thái Hòa Palace"]
WIKIDATA = {"Q10769129": "Hoàng thành Huế", "Q877185": "Kinh thành Huế", "Q7023311": "Ngọ Môn", "Q10752407": "Cầu Trường Tiền",
            "Q975568": "Chùa Thiên Mụ", "Q6826745": "Điện Thái Hòa", "Q36399": "Thành phố Huế"}
SKETCHFAB_UIDS = ["a567dbe70045482eba5902e29778d6f2", "fd6df65eae404a7dbf006f68e7857a2e", "dca05e147d79420eb3696eefcf8e1f19",
                  "b0232236c2df44aa8c7e55c1362b18a3", "c8c6304d8ff846f89f972164b2eda9ac", "ed319997b5354c1eb9b8dbf810044295",
                  "113687d51c5c4ec18f914bf5bc34f467", "1e07806a73ba42febc746a0c58142576", "4a1866001d034611a47b9116695da1d2",
                  "6acf4f949d5247f3afa6afdaa7c188bd", "b5d78ecd5e62483192d7ccd193bc063b", "16758b5def3f42bdb6d9619a4217e8a6"]
SKETCHFAB_QUERIES = ["hue imperial city", "ngo mon", "hue citadel", "truong tien bridge", "thien mu pagoda", "dai noi hue", "hue vietnam"]
SKETCHFAB_RELEVANT = re.compile(r"hu[eế]\b|ngo.?mon|ngọ môn|truong.?tien|trường tiền|thien.?mu|thiên mụ|dai.?noi|đại nội|tu.?duc|tự đức|khai.?dinh|khải định|minh.?mang|an.?dinh", re.I)


def jget(url, dest, params, refresh):
    path, _ = C.fetch(url, dest, params=params, refresh=refresh, logger=log)
    d = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(d, dict) and "error" in d:   # MediaWiki returns HTTP 200 with an error body (e.g. "too busy")
        path.unlink()                          # never keep an error payload in the cache
        Path(str(path) + ".fetchmeta.json").unlink(missing_ok=True)
        raise RuntimeError(f"API error from {url}: {d['error'].get('code')}")
    return d


def strip_html(s):
    return re.sub(r"<[^>]+>", "", s or "").strip()


def do_commons(refresh):
    _commons_report(*_commons_collect(refresh), refresh)


def _commons_collect(refresh):
    rows, picked = [], []
    rate_limited = False
    api_errors: dict[str, str] = {}
    for key, (lat, lon, radius) in LANDMARKS.items():
        try:
            gs = _geosearch(key, lat, lon, radius, refresh)
        except RuntimeError as e:   # e.g. cirrussearch-too-busy-error or HTTP 429: record it, never report it as "0 files"
            log.warning("geosearch %s failed: %s", key, e)
            api_errors[key] = str(e)[:120]
            continue
        pages = list((gs.get("query") or {}).get("pages", {}).values())
        cands = []
        for p in pages:
            ii = (p.get("imageinfo") or [{}])[0]
            em = ii.get("extmetadata") or {}
            lic = (em.get("LicenseShortName") or {}).get("value", "")
            row = {"landmark": key, "title": p.get("title"), "page": ii.get("descriptionurl"), "mime": ii.get("mime"),
                   "width": ii.get("width"), "height": ii.get("height"), "licence": lic,
                   "licence_url": (em.get("LicenseUrl") or {}).get("value"), "author": strip_html((em.get("Artist") or {}).get("value"))[:120],
                   "date_taken": strip_html((em.get("DateTimeOriginal") or {}).get("value"))[:40], "upload_time": ii.get("timestamp"),
                   "lat": (p.get("coordinates") or [{}])[0].get("lat"), "lon": (p.get("coordinates") or [{}])[0].get("lon"),
                   "open_licence": bool(OPEN_LICENCES.match(lic)), "downloaded_as": ""}
            rows.append(row)
            if row["open_licence"] and ii.get("mime") == "image/jpeg" and ii.get("thumburl") and (ii.get("width") or 0) >= 1600:
                cands.append((row, ii["thumburl"]))
        cands.sort(key=lambda c: c[0]["date_taken"] or "", reverse=True)   # newest first
        for row, thumb in cands[:2]:
            name = re.sub(r"[^A-Za-z0-9._-]+", "_", row["title"].replace("File:", ""))[:90]
            dest = REF / "images" / f"{key}__{name}"
            # the API now returns renditions on thumb.wikimedia.org; the same path is served by upload.wikimedia.org
            thumb = thumb.split("?")[0].replace("//thumb.wikimedia.org/", "//upload.wikimedia.org/")
            if rate_limited and not dest.exists():   # cached images need no network
                continue
            try:
                C.fetch(thumb, dest, refresh=refresh, logger=log)
            except RuntimeError as e:
                log.warning("skip %s: %s", row["title"], e)
                if "429" in str(e):   # the image host is throttling this client: stop asking
                    rate_limited = True
                continue
            row["downloaded_as"] = C.rel(dest)
            picked.append({"file": C.rel(dest), "sha256_file": C.sha256_file(dest), "bytes": dest.stat().st_size,
                           "source_page": row["page"], "rendition_url": thumb, "licence": row["licence"], "licence_url": row["licence_url"],
                           "author": row["author"], "date_taken": row["date_taken"], "landmark": key})
    return rows, picked, rate_limited, api_errors


def _geosearch(key, lat, lon, radius, refresh):
    return jget(COMMONS, REF / "api" / f"geosearch_{key}.json", {
        "action": "query", "format": "json", "generator": "geosearch", "ggscoord": f"{lat}|{lon}",
        "ggsradius": radius, "ggsnamespace": 6, "ggslimit": 50, "prop": "imageinfo|coordinates",
        "iiprop": "url|size|mime|extmetadata|timestamp", "iiurlwidth": 1280,
        "iiextmetadatafilter": "LicenseShortName|LicenseUrl|Artist|DateTimeOriginal|Credit|UsageTerms|AttributionRequired|GPSLatitude|GPSLongitude",
    }, refresh)


def _commons_report(rows, picked, rate_limited, api_errors, refresh):
    VAL.mkdir(parents=True, exist_ok=True)
    with open(VAL / "commons_reference_photos.csv", "w", newline="", encoding="utf-8") as f:
        fields = ["landmark", "title", "page", "mime", "width", "height", "licence", "licence_url", "author", "date_taken",
                  "upload_time", "lat", "lon", "open_licence", "downloaded_as"]
        wr = csv.DictWriter(f, fieldnames=fields)
        wr.writeheader(); wr.writerows(rows)
    try:
        cats = jget(COMMONS, REF / "api" / "categoryinfo.json", {
            "action": "query", "format": "json", "prop": "categoryinfo", "titles": "|".join("Category:" + c for c in CATEGORIES)}, refresh)
        cat_counts = {p["title"]: (p.get("categoryinfo") or {"missing": True}) for p in cats["query"]["pages"].values()}
    except RuntimeError as e:
        cat_counts = {"error": str(e)[:120]}
    summary = {"checked_at": C.utcnow(), "files_found": len(rows),
               "by_landmark": {k: ("api_error" if k in api_errors else sum(1 for r in rows if r["landmark"] == k)) for k in LANDMARKS},
               "api_errors": api_errors,
               "open_licence_files": sum(1 for r in rows if r["open_licence"]),
               "licences": {l: sum(1 for r in rows if r["licence"] == l) for l in sorted({r["licence"] for r in rows})},
               "downloaded": len(picked), "image_host_rate_limited": rate_limited, "category_counts": cat_counts}
    (VAL / "commons_summary.json").write_text(json.dumps(summary, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    C.record_provenance("samples/raw/reference_photos/", source="Wikimedia Commons (MediaWiki API geosearch + imageinfo)",
                        provider="Wikimedia Foundation; individual authors per file", landing_url="https://commons.wikimedia.org/",
                        data_url=COMMONS, licence="per file — see `images` list (only CC0/PD/CC BY/CC BY-SA files were downloaded)",
                        retrieved_at=C.utcnow(), images=picked, api_responses="samples/raw/reference_photos/api/",
                        data_date_note="date_taken comes from each file's metadata (EXIF/description) and is not verified.",
                        script="scripts/08_fetch_reference_and_probes.py commons")
    print(json.dumps(summary, indent=1, ensure_ascii=False))


def do_wikidata(refresh):
    d = jget("https://www.wikidata.org/w/api.php", PROBES / "wikidata_entities.json", {
        "action": "wbgetentities", "format": "json", "ids": "|".join(WIKIDATA), "props": "claims|labels", "languages": "vi|en"}, refresh)
    out = []
    for qid, ent in d["entities"].items():
        cl = ent.get("claims", {})

        def qty(p):
            try:
                v = cl[p][0]["mainsnak"]["datavalue"]["value"]
                return f'{v["amount"]} {v["unit"].rsplit("/", 1)[-1]}'
            except (KeyError, IndexError):
                return None

        coord = None
        if "P625" in cl:
            v = cl["P625"][0]["mainsnak"]["datavalue"]["value"]
            coord = [v["latitude"], v["longitude"]]
        out.append({"qid": qid, "label": (ent.get("labels", {}).get("vi") or ent.get("labels", {}).get("en") or {}).get("value"),
                    "coord_lat_lon": coord, "height_P2048": qty("P2048"), "length_P2043": qty("P2043"), "width_P2049": qty("P2049"),
                    "area_P2046": qty("P2046"), "inception_P571": bool(cl.get("P571")), "commons_category_P373": (cl.get("P373") or [{}])[0].get("mainsnak", {}).get("datavalue", {}).get("value"),
                    "n_claims": len(cl)})
    (VAL / "wikidata_landmarks.json").write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    C.record_provenance("samples/raw/probes/wikidata_entities.json", source="Wikidata wbgetentities", provider="Wikimedia Foundation",
                        data_url="https://www.wikidata.org/w/api.php", licence="CC0 1.0", retrieved_at=C.utcnow(),
                        sha256_file=C.sha256_file(PROBES / "wikidata_entities.json"), script="scripts/08_fetch_reference_and_probes.py wikidata")
    for r in out:
        print(r)


def do_sketchfab(refresh):
    rows, seen = [], set()

    def add(m, via):
        if m["uid"] in seen:
            return
        seen.add(m["uid"])
        rows.append({"uid": m["uid"], "name": m.get("name"), "author": (m.get("user") or {}).get("username"),
                     "licence": (m.get("license") or {}).get("label") if m.get("license") else None,
                     "is_downloadable": m.get("isDownloadable"), "published_at": (m.get("publishedAt") or "")[:10],
                     "face_count": m.get("faceCount"), "vertex_count": m.get("vertexCount"),
                     "viewer_url": f"https://sketchfab.com/3d-models/{m['uid']}", "found_via": via,
                     "tags": ",".join(t.get("slug", "") for t in (m.get("tags") or []))[:120]})

    for uid in SKETCHFAB_UIDS:
        try:
            add(jget(f"https://api.sketchfab.com/v3/models/{uid}", PROBES / "sketchfab" / f"model_{uid}.json", None, refresh), "lead from web search")
        except RuntimeError as e:
            rows.append({"uid": uid, "name": None, "found_via": f"lead from web search — API error: {str(e)[:80]}"})
    for q in SKETCHFAB_QUERIES:
        d = jget("https://api.sketchfab.com/v3/search", PROBES / "sketchfab" / f"search_{q.replace(' ', '_')}.json",
                 {"type": "models", "q": q, "count": 24}, refresh)
        for m in d.get("results", []):
            text = " ".join([m.get("name") or "", m.get("description") or "", " ".join(t.get("slug", "") for t in (m.get("tags") or []))])
            if SKETCHFAB_RELEVANT.search(text):
                add(m, f"api search '{q}'")
    fields = ["uid", "name", "author", "licence", "is_downloadable", "published_at", "face_count", "vertex_count", "viewer_url", "found_via", "tags"]
    with open(VAL / "sketchfab_models.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=fields)
        wr.writeheader(); wr.writerows(rows)
    C.record_provenance("samples/raw/probes/sketchfab/", source="Sketchfab Data API v3 (model metadata only; no 3D files downloaded)",
                        provider="Sketchfab (Epic Games); individual authors per model", data_url="https://api.sketchfab.com/v3/",
                        licence="metadata; each model has its own licence (see samples/normalized/validation/sketchfab_models.csv)",
                        retrieved_at=C.utcnow(), script="scripts/08_fetch_reference_and_probes.py sketchfab")
    for r in rows:
        print(r.get("licence"), "|", r.get("is_downloadable"), "|", r.get("published_at"), "|", r.get("face_count"), "|", r.get("author"), "|", r.get("name"))


def do_panoramax(refresh):
    res = {}
    for name, bbox in (("pilot", C.PILOT_BBOX), ("city_bbox", (107.0, 15.99, 108.2, 16.75))):
        d = jget("https://api.panoramax.xyz/api/search", PROBES / "panoramax" / f"search_{name}.json",
                 {"bbox": ",".join(map(str, bbox)), "limit": 5}, refresh)
        res[name] = len(d.get("features", []))
    (VAL / "panoramax_probe.json").write_text(json.dumps({"checked_at": C.utcnow(), "pictures_returned": res}, indent=1) + "\n")
    C.record_provenance("samples/raw/probes/panoramax/", source="Panoramax meta-catalogue STAC search", provider="Panoramax (IGN France / OSM France federation)",
                        data_url="https://api.panoramax.xyz/api/search", licence="metadata", retrieved_at=C.utcnow(),
                        result=res, script="scripts/08_fetch_reference_and_probes.py panoramax")
    print("panoramax pictures returned:", res)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("what", nargs="*", default=["commons", "wikidata", "sketchfab", "panoramax"])
    ap.add_argument("--refresh", action="store_true")
    a = ap.parse_args()
    for w in a.what:
        {"commons": do_commons, "wikidata": do_wikidata, "sketchfab": do_sketchfab, "panoramax": do_panoramax}[w](a.refresh)


if __name__ == "__main__":
    main()
