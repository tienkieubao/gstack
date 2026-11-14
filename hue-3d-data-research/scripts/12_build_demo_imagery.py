#!/usr/bin/env python3
"""Ground texture for the browser demo from the Sentinel-2 L2A true-colour window already in samples/raw.

Output: demo/data/ground_s2.jpg — the pilot frame of the 3D scene (same extent as terrain.json),
resampled from 10 m to 4 m with a Lanczos kernel (smoother, NOT more detailed), lightly
colour-corrected for display (brightness, contrast, saturation) and sharpened. Pixel values are
therefore a display rendering, not reflectance data.

Licence: Copernicus Sentinel data, free and open; attribution
"Contains modified Copernicus Sentinel data 2026".
"""
from __future__ import annotations

import glob
import json
import sys
from pathlib import Path

import numpy as np
import rasterio
from PIL import Image, ImageFilter
from rasterio.warp import Resampling, reproject

sys.path.insert(0, str(Path(__file__).resolve().parent))
import common as C  # noqa: E402

log = C.get_logger("imagery")
OUT = C.ROOT / "demo" / "data" / "ground_s2.jpg"
RES = 4.0


def main():
    src_path = Path(sorted(glob.glob(str(C.RAW / "sentinel2" / "*_TCI_pilot_window.tif")))[-1])
    t = json.loads((C.ROOT / "demo" / "data" / "terrain.json").read_text())
    meta = json.loads((C.ROOT / "demo" / "data" / "meta.json").read_text())
    e0, n0 = meta["frame"]["origin_easting"], meta["frame"]["origin_northing"]
    x0, z0 = t["x0"], t["z0"]
    width_m, height_m = (t["nx"] - 1) * t["cell"], (t["nz"] - 1) * t["cell"]
    w, h = int(round(width_m / RES)), int(round(height_m / RES))
    # local z points south, so the top edge of the image is northing n0 - z0
    transform = rasterio.transform.from_origin(e0 + x0, n0 - z0, width_m / w, height_m / h)
    with rasterio.open(src_path) as src:
        rgb = np.zeros((3, h, w), dtype="float32")
        for b in range(3):
            reproject(src.read(b + 1).astype("float32"), rgb[b], src_transform=src.transform, src_crs=src.crs,
                      dst_transform=transform, dst_crs="EPSG:32648", resampling=Resampling.lanczos)
    img = np.clip(np.transpose(rgb, (1, 2, 0)) / 255.0, 0, 1)
    # display grading: lift mid-tones, a bit more contrast and saturation, slightly warmer
    img = img ** 0.78
    lum = (0.299 * img[..., 0] + 0.587 * img[..., 1] + 0.114 * img[..., 2])[..., None]
    img = lum + (img - lum) * 1.22
    img = (img - 0.5) * 1.08 + 0.5
    img *= np.array([1.03, 1.0, 0.95])
    im = Image.fromarray((np.clip(img, 0, 1) * 255).astype("uint8"))
    im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=70, threshold=2))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    im.save(OUT, quality=88, optimize=True, progressive=True)
    log.info("ground texture %dx%d px (%.1f m/px) -> %s (%.0f KB)", w, h, RES, C.rel(OUT), OUT.stat().st_size / 1024)
    scene = src_path.name.split("_TCI")[0]
    C.record_provenance(
        C.rel(OUT), kind="derived (display rendering for the demo)", source=f"Sentinel-2 L2A {scene} TCI",
        derived_from=[C.rel(src_path)], licence="Copernicus Sentinel data — free and open; attribution required",
        attribution="Contains modified Copernicus Sentinel data 2026", generated_at=C.utcnow(),
        processing=f"reprojected to the demo frame (EPSG:32648, origin E{e0} N{n0}), Lanczos 10 m -> {RES} m, gamma 0.78, saturation x1.22, contrast x1.08, unsharp mask",
        sha256_file=C.sha256_file(OUT), bytes=OUT.stat().st_size, script="scripts/12_build_demo_imagery.py")


if __name__ == "__main__":
    main()
