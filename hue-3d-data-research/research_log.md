# Nhật ký nghiên cứu

Đợt khảo sát: 2026-11-13 → 2026-11-14 (UTC). Mục đích của tệp này là để người khác **lặp lại hoặc phản biện** được: đã tìm gì, ở đâu, thấy gì, và bị chặn ở đâu. "Tìm kiếm có hệ thống" ở đây nghĩa là đi hết sáu nhóm nguồn A–F của đề bài bằng tiếng Việt và tiếng Anh với nhật ký truy vấn — **không** có nghĩa là đã bao phủ toàn bộ Internet.

## 1. Điều kiện làm việc (ảnh hưởng trực tiếp đến kết quả)

| Điều kiện | Hệ quả |
|---|---|
| Môi trường chạy chỉ truy cập được danh sách host cho phép. Ban đầu chỉ có S3/GCS và kho gói; sau đó thêm 20 host: `overpass-api.de`, `www.openstreetmap.org`, `wiki.openstreetmap.org`, `download.geofabrik.de`, `commons.wikimedia.org`, `upload.wikimedia.org`, `www.wikidata.org`, `vi.wikipedia.org`, `earth-search.aws.element84.com`, `api.openstreetcam.org`, `api.panoramax.xyz`, `api.sketchfab.com`, `hue.gov.vn`, `data.thuathienhue.gov.vn`, `gis21.thuathienhue.gov.vn`, `hueworldheritage.org.vn`, `thuvienphapluat.vn`, `developers.google.com`, `sites.research.google`, `docs.overturemaps.org` | Mọi trang ngoài danh sách chỉ biết qua **đoạn trích của công cụ tìm kiếm**. 24/59 nguồn trong danh mục vì thế ở trạng thái `CHUA_XAC_MINH` |
| Công cụ tìm kiếm web có hạn mức dùng chung khoảng 200 lượt cho cả đợt | Một số truy vấn cuối của mỗi nhóm bị từ chối (ghi trong `research_notes/`) |
| Công cụ mở trang (fetch) của các tác tử nghiên cứu không đi qua được mạng đã mở | Bốn tệp `research_notes/A1–A4` hoàn toàn dựa trên đoạn trích tìm kiếm; phần kiểm chứng trực tiếp do script và `curl` trong mục 4 thực hiện |
| Không đăng ký tài khoản, không mua, không gửi yêu cầu tới bên thứ ba (theo đề bài) | Mapillary, Earthdata, JAXA, OpenTopography không được truy vấn |
| Phiên làm việc bị khởi động lại một lần giữa chừng | Lượt nghiên cứu web đầu tiên bị mất và phải chạy lại; không ảnh hưởng dữ liệu đã lưu |

## 2. Trình tự thực hiện

| Thời điểm (UTC) | Việc | Kết quả |
|---|---|---|
| 11-13 ~23:00 | Đọc repo hiện có; thăm dò mạng | Repo là dự án phần mềm không liên quan GIS — không có thành phần tái sử dụng; thư mục `hue-3d-data-research/` tạo mới, không ghi đè gì. Mạng: chỉ S3/GCS đi được |
| 11-14 03:27 | Mở mạng cho 20 host; khởi chạy 4 nhóm nghiên cứu web song song (ranh giới + địa phương; di sản + học thuật; thương mại + ảnh phố; bộ dữ liệu toàn cầu) | Xem mục 3 |
| 03:31–03:33 | Tải OSM pilot qua API 0.6 (16 ô, giãn 2 s) | 18,8 MB XML |
| 03:34 | Tải 10 relation ranh giới; dựng AOI | Phát hiện OSM đã có ranh phường mới sau 07/2025 |
| 03:35–03:37 | Overture pilot (9 loại) + division_area | 61.115 công trình, 5.665 segment |
| 03:38 | GLO-30, skadi, WorldCover, Sentinel-2 (đọc cửa sổ) | 4 raster mẫu |
| 03:41–03:45 | Chuẩn hóa; kiểm định pilot; thống kê vùng B/C | `samples/normalized/` |
| 03:46–03:53 | Commons, Wikidata, Sketchfab, Panoramax | Wikimedia bắt đầu trả 429 |
| 03:53–03:56 | Đọc trực tiếp trang điều khoản/coverage của Google, Open Buildings, Overture; thử thuvienphapluat, hue.gov.vn, hueworldheritage | Xem mục 4 |
| 03:56–03:58 | Catalog Maxar Open Data; tìm và lấy mẫu Open Buildings 2.5D | Gán chiều cao ước lượng cho 83,8% dấu chân |
| 04:03–04:12 | Ảnh tổng quan; thử lại Commons với nhịp chậm | Metadata đủ; tệp ảnh vẫn 429 |
| sau đó | Viết tài liệu | — |

Log máy đầy đủ của mọi yêu cầu HTTP do script thực hiện: `scripts/fetch.log`.

## 3. Truy vấn tìm kiếm web

Tổng cộng khoảng **203 truy vấn** (200 do bốn nhóm nghiên cứu, 3 truy vấn định hướng ban đầu). Bảng đầy đủ từng truy vấn kèm kết quả một dòng nằm trong các tệp ghi chú — không chép lại ở đây để tránh hai bản lệch nhau:

| Nhóm | Phạm vi | Số truy vấn chạy | Bị từ chối do hết hạn mức | Bảng truy vấn |
|---|---|---|---|---|
| A1 | Ranh giới hành chính; cổng dữ liệu/GIS địa phương; quy hoạch; văn bản giao thông; khung pháp lý đo đạc bản đồ | 41 | 4 | `research_notes/A1_boundary_local.md` §7 |
| A2 | Di sản, mô hình 3D, bản đồ lịch sử, học thuật, UAV, video, số đo công bố | 47 | 1 | `research_notes/A2_heritage_academic.md` §11 |
| A3 | Dịch vụ bản đồ thương mại; ảnh đường phố; quy định tốc độ; giá ảnh/DSM thương mại | 54 | 0 | `research_notes/A3_commercial_street.md` §5 |
| A4 | DEM, ảnh vệ tinh, lớp phủ, công trình toàn cầu, đường ngoài OSM | 58 | 2 | `research_notes/A4_global_datasets.md` §8 |

Ba truy vấn định hướng ban đầu (tiếng Việt):

| Truy vấn | Kết quả |
|---|---|
| "cổng dữ liệu mở thành phố Huế opendata GIS Huế bản đồ số" | Không thấy cổng dữ liệu mở riêng dưới `hue.gov.vn`; thấy hệ thống GISHue (≈160 đồ án quy hoạch đã tích hợp), kế hoạch chuyển đổi số 2026 |
| "GISHue hệ thống thông tin địa lý Huế địa chỉ truy cập …" | Địa chỉ duy nhất thấy: `gis21.thuathienhue.gov.vn` (từ một bài báo ĐH Huế); quy chế kỹ thuật QĐ 20/2014/QĐ-UBND |
| "opendata.hue.gov.vn" OR "data.hue.gov.vn" OR "opendata.thuathienhue.gov.vn" | Cổng dữ liệu mở của tỉnh cũ là `data.thuathienhue.gov.vn` (ra mắt 2018) |

Ngôn ngữ: tiếng Việt và tiếng Anh cho mọi nhóm; trong A2 có thêm truy vấn tiếng Pháp (Gallica/BnF, EFEO), tiếng Nhật (Waseda) và tiếng Hàn (KAIST/đầu mối phục dựng số) — mỗi ngôn ngữ chỉ 1–3 truy vấn, chưa phải tìm kiếm sâu.

## 4. Kiểm tra trực tiếp (script hoặc `curl`), ngày 2026-11-14

| Host / nguồn | Việc thử | Kết quả |
|---|---|---|
| `www.openstreetmap.org` API 0.6 | 16 lần `map`, 10 lần `relation/<id>/full`, trang `/copyright` | Tất cả HTTP 200; trang bản quyền xác nhận ODbL. Lần gọi toàn bbox pilot bị từ chối đúng thiết kế ("You requested too many nodes (limit is 50000)") → chia ô |
| `overpass-api.de` | `/api/status` và một truy vấn nhỏ, 5 lần trong ~10 phút | Kết nối bị ngắt sau ~2 s ở cả 5 lần (proxy ghi "tunnel closed"); không phải lỗi chính sách mạng |
| `download.geofabrik.de` | HEAD bản trích Việt Nam | Connection reset |
| S3 Overture (`overturemaps-us-west-2`) | Liệt kê bản phát hành; đọc theo bbox | Bản mới nhất thấy: `2026-10-21.0`; đọc pilot ~15 s cho segment, ~40 s cho building |
| S3 Copernicus DEM, `elevation-tiles-prod`, ESA WorldCover, `sentinel-cogs` | HEAD + đọc cửa sổ COG | Thành công; readme Copernicus nêu giấy phép; **PDF giấy phép không mở được** (host ngoài danh sách) |
| `earth-search.aws.element84.com` | Tìm Sentinel-2 L2A, mây < 10%, 12 tháng | 9 cảnh, tất cả ô MGRS 48QYD, từ 01 đến 06/2026 |
| GCS `open-buildings-temporal-data` | Liệt kê; tìm ô S2 chứa Huế (token `3141c`); đọc cửa sổ | 50 tệp/4,93 GB cho mốc 2023; một tệp 865 MB phủ pilot |
| `sites.research.google` | Trang Open Buildings và trang Temporal | Đọc được: CC BY-4.0 + ODbL; 2016–2023; phân giải hiệu dụng 4 m |
| `developers.google.com` | Trang policies của Map Tiles API; bảng coverage | Đọc được nguyên văn các điều cấm; dòng Vietnam: Map Tiles ⬤, Maps 3D —, Speed Limits — |
| `docs.overturemaps.org` | Trang attribution | Đọc được: ODbL cho base/buildings/divisions/transportation; CDLA-Permissive-2.0 cho theme khác |
| S3 `maxar-opendata` | `events/catalog.json` + collection Kalmaegi 11/2025 | 55 sự kiện; không sự kiện nào có ô phủ Huế; CC-BY-NC-4.0 |
| `api.panoramax.xyz` | Tìm theo bbox pilot và bbox toàn TP | HTTP 200, 0 ảnh |
| `api.openstreetcam.org` (KartaView) | Một truy vấn ảnh quanh Đại Nội | Lỗi TLS: chứng chỉ không khớp tên miền |
| `api.sketchfab.com` | 12 mô hình đầu mối + 7 truy vấn tìm kiếm | 55 mô hình liên quan; giấy phép và khả năng tải từng mô hình trong `validation/sketchfab_models.csv` |
| `www.wikidata.org` | 7 thực thể | Tọa độ có; chiều cao không có; Trường Tiền dài 402,60 m; TP Huế 4.947,11 km² |
| `commons.wikimedia.org` / `upload.wikimedia.org` | Tìm ảnh theo tọa độ quanh 5 mốc; tải 2 ảnh/mốc | Metadata: 208 tệp (158 giấy phép mở). **Tệp ảnh: 0** — HTTP 429 ở mọi lần thử trong ~25 phút; API đôi lúc trả lỗi "search too busy" trong thân HTTP 200 |
| `vi.wikipedia.org` | API trích bài "Huế" | Lần đầu đọc được (diện tích 4.947 km²); các lần sau bị giới hạn tốc độ nên **không** kiểm chéo được số đo cầu/Kinh thành |
| `thuvienphapluat.vn` | Thông tư 38/2024/TT-BGTVT | HTTP 403, trang thử thách Cloudflare ("Just a moment…") — không tìm cách vượt qua |
| `hue.gov.vn` | Trang chủ | HTTP 200; có liên kết `ioc-canhbao.hue.gov.vn/admin/bandohanhchinh`; không thấy liên kết cổng GIS/dữ liệu mở |
| `data.thuathienhue.gov.vn`, `gis21.thuathienhue.gov.vn` | Trang chủ | 502 từ cổng proxy (host được phép nhưng không kết nối được) |
| `hueworldheritage.org.vn` | Trang chủ, 2 lần | Kết nối bị ngắt |
| `pyproj` (CSDL PROJ cục bộ) | Tra EPSG:9214, 9210, 5899, 3405 | 9214 = VN-2000 / TM-3 107-00 (Bắc Giang và Thừa Thiên-Huế); 9210 = 105°45' |

## 5. Trở ngại và cách xử lý

| Trở ngại | Xử lý | Hệ quả còn lại |
|---|---|---|
| Overpass và Geofabrik không dùng được | Chuyển sang OSM API 0.6 chia 16 ô, có cache, giãn nhịp; giới hạn cứng 80 yêu cầu | Cách này **không** mở rộng được cho vùng B/C (API biên tập không dành cho tải hàng loạt) |
| Không cài được phần mở rộng `httpfs` của DuckDB (máy chủ extension ngoài danh sách) | Dùng PyArrow đọc S3 ẩn danh qua proxy | — |
| CLI `overturemaps` mặc định cần chỉ mục STAC ở host ngoài danh sách | Tự đọc dataset với bộ lọc bbox (cắt theo thống kê row group) | Chậm hơn nhưng dùng được |
| Wikimedia trả 429 và trả lỗi trong thân HTTP 200 | Tăng giãn nhịp lên 8 s; dừng hẳn khi gặp 429; sửa script để **không lưu thân lỗi vào cache** và ghi `api_error` thay vì số 0 | Chưa có tệp ảnh tham chiếu trong repo |
| Lỗi do chính script gây ra: lượt đầu ghi "0 ảnh quanh cầu Phú Xuân" trong khi thực tế API đang bận | Phát hiện khi đọc lại tệp cache; đã sửa và chạy lại (kết quả đúng: 9 ảnh) | Bài học: mọi số 0 từ API phải phân biệt với lỗi |
| Thuộc tính `bridge` thiếu trên cầu Trường Tiền làm kiểm tra cầu ban đầu bỏ sót | Bổ sung phép thử hình học "đường nằm trên mặt nước mà không có thẻ cầu" | — |
| Raster chiều cao 2.5D nguồn 865 MB | Chỉ đọc cửa sổ pilot; giữ bản 4 m uint16 (2,5 MB) trong repo | Byte gốc không lưu; tái lập được bằng script |
| GeoPackage chuẩn hóa ~30 MB | Không đưa vào git; script sinh lại cục bộ; GeoJSON > 1,5 MB được nén gzip | — |
| Trang pháp lý bị Cloudflare chặn | Ghi trạng thái, dùng kết quả tìm kiếm, không vượt qua | Số điều/bảng tốc độ chưa đối chiếu nguyên văn |

## 6. Những điểm cần kiểm lại trước khi dựa vào

1. Toàn văn NQ 1675/NQ-UBTVQH15 (thành phần 40 phường/xã, đặc biệt phường Thuận An).
2. Thông tư 38/2024/TT-BGTVT: số điều, phân cột bảng tốc độ, sửa đổi 2025.
3. PDF giấy phép Copernicus DEM GLO-30 (điều khoản thương mại/phân phối).
4. Độ phủ Mapillary tại Huế (cần token).
5. Danh mục OpenAerialMap theo bbox Huế.
6. Giấy phép chính xác của từng bản ghi CyArk/Open Heritage 3D và của 3D-GloBFP.
7. Mọi số đo công bố về cầu và Kinh thành trong `research_notes/A2` §9 (chỉ qua tìm kiếm; riêng chiều dài cầu Trường Tiền đã khớp Wikidata).
8. Con số lệch Hòn Dấu ↔ EGM2008 và chiều áp dụng.
9. Nội dung về đo đạc bản đồ trong QĐ 562/QĐ-TTg; quy định bay UAV hiện hành.
10. Giá ảnh vệ tinh/DSM thương mại (chỉ là đoạn trích trang đại lý).
11. Tình trạng hoạt động và tên miền mới của cổng dữ liệu mở/GISHue.
12. Thẻ `bridge:structure=suspension` của cầu Trường Tiền trong OSM (nhiều khả năng sai) và thẻ `maxweight=25` của cầu Phú Xuân (nguồn công bố nêu 18 tấn).

## 7. Việc chưa làm

- Chưa dựng mô hình 3D nào; đợt này là khảo sát và kiểm định dữ liệu.
- Chưa kiểm topology, nước, cây, đèn cho vùng B/C (chỉ thống kê đường và công trình).
- Chưa thử DeltaDTM, lớp chiều cao tán cây, Sentinel-1, JRC Global Surface Water.
- Chưa có phép đo thực địa nào; mọi "độ chính xác" trong repo là công bố của nguồn hoặc so sánh giữa các nguồn.
- Chưa khảo sát nguồn số liệu thủy văn (mực nước sông Hương).
