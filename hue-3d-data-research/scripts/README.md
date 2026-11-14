# Script thu thập, chuẩn hóa và kiểm tra

Tất cả script chạy lại được, có cache (không tải lại nếu tệp đã có; thêm `--refresh` để ép tải), retry tối đa 3 lần với thời gian chờ tăng dần, giãn nhịp theo host, và ghi log vào `scripts/fetch.log`. Dữ liệu gốc chỉ được ghi vào `samples/raw/`; dữ liệu chuẩn hóa vào `samples/normalized/`. Mỗi lần tải ghi nguồn, thời điểm, checksum và giấy phép vào `provenance.json`.

## Cài đặt

```bash
python3 -m pip install requests shapely pyproj rasterio pyarrow geopandas pyogrio matplotlib
```

Đã chạy với Python 3.13, pyarrow 26, shapely 2.2, rasterio 1.5, pyproj 3.8. Không cần GDAL cài riêng, không cần tài khoản hay API key.

Nếu chạy sau proxy HTTPS: đặt `HTTPS_PROXY` và `SSL_CERT_FILE`; script đọc hai biến này cho cả PyArrow (S3) và GDAL (`/vsicurl/`).

## Thứ tự chạy

```bash
cd hue-3d-data-research
bash scripts/run_all.sh          # chạy toàn bộ theo thứ tự dưới đây
python3 scripts/verify_checksums.py   # đối chiếu tệp trong samples/ và aoi/ với provenance.json
```

| # | Script | Việc | Mạng | Thời gian lần đầu (xấp xỉ) |
|---|---|---|---|---|
| 02 | `02_fetch_osm_pilot.py` | OSM gốc cho pilot qua API 0.6, 16 ô | `www.openstreetmap.org` | ~35 s |
| 01 | `01_fetch_boundaries_make_aoi.py` | 10 relation ranh giới → `aoi/*.geojson` | `www.openstreetmap.org` | ~25 s |
| 03 | `03_fetch_overture.py pilot` / `divisions` / `stats` | Overture cho pilot; đa giác TP; cột thống kê vùng C (chỉ cache cục bộ) | S3 ẩn danh | ~1,5 phút / 10 s / ~3 phút |
| 04 | `04_fetch_rasters.py [dem skadi worldcover sentinel2]` | Cửa sổ pilot của GLO-30, SRTM-skadi, WorldCover, Sentinel-2 | S3, Earth Search | ~15 s |
| 05 | `05_normalize.py` | OSM + Overture → lớp chuẩn hóa có cột `*_status` | không | ~10 s |
| 06 | `06_validate_pilot.py` | Kiểm tra thuộc tính, cầu, giao cắt, địa hình, công trình | không | ~30 s |
| 07 | `07_coverage_stats.py` | Thống kê vùng A/B/C; sinh `aoi/zone_c_hue_city_land.geojson` | không (dùng cache của 03 stats) | ~30 s |
| 08 | `08_fetch_reference_and_probes.py [commons wikidata sketchfab panoramax]` | Ảnh tham chiếu + thăm dò nền tảng khác | Wikimedia, Wikidata, Sketchfab, Panoramax | vài phút (Wikimedia giới hạn tốc độ) |
| 09 | `09_fetch_building_heights.py` | Chiều cao Open Buildings 2.5D + ước lượng theo dấu chân | GCS | ~1 phút |
| 10 | `10_render_overview.py` | Ảnh tổng quan PNG | không | ~30 s |
| — | `build_source_catalog.py` | Sinh `source_catalog.csv` từ danh sách trong mã | không | tức thì |
| — | `verify_checksums.py [--write]` | Ghi/đối chiếu SHA-256 của mọi tệp mẫu | không | tức thì |

`02` chạy trước `01` chỉ vì lịch sử: ID relation ranh giới được tìm thấy trong dữ liệu của `02`. Hai script độc lập nhau.

## Tệp dùng chung

- `common.py` — bbox pilot, tải có cache/retry/giãn nhịp, checksum, ghi `provenance.json`.
- `osmxml.py` — đọc OSM XML và ghép đa giác multipolygon (thư viện chuẩn + shapely).

## Giới hạn đã biết

- `02` dùng API biên tập của OSM, **chỉ hợp lệ cho vùng nhỏ**; có chặn cứng 80 yêu cầu. Với vùng B/C phải thay bằng bản trích Geofabrik hoặc Overpass (không truy cập được từ môi trường khảo sát).
- `03 stats` tải ~62 MB cột thống kê vào `scripts/.cache/` (không đưa vào git).
- `09` đọc cửa sổ từ một tệp 865 MB qua HTTP range; chỉ lưu bản 4 m trong repo.
- `05` sinh thêm `samples/normalized/hue_pilot_normalized.gpkg` (~30 MB) để mở trong QGIS; tệp này bị `.gitignore`.
- `08 commons`: máy chủ ảnh của Wikimedia trả HTTP 429 trong suốt đợt khảo sát; script dừng tải ảnh ngay khi gặp 429 và ghi `image_host_rate_limited: true`. Chạy lại vào lúc khác để lấy ảnh.
- Kết quả phụ thuộc thời điểm: OSM thay đổi hằng ngày; ID bản phát hành Overture được ghim (`2026-10-21.0`) trong `03_fetch_overture.py`.
- Mã chưa có bộ kiểm thử tự động. Đã chạy từng bước trên dữ liệu thật ngày 2026-11-14, và `run_all.sh` đã chạy lại toàn bộ từ cache thành công (~1 phút, mã thoát 0).
