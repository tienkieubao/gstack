# Phân tích nguồn dữ liệu và giấy phép

Bảng đầy đủ 59 nguồn với 24 trường (URL, định dạng, CRS, độ phủ, ngày thu thập/cập nhật, độ chính xác, truy cập, giấy phép, bằng chứng kiểm tra, hạn chế, khuyến nghị): [`source_catalog.csv`](source_catalog.csv) — sinh từ `scripts/build_source_catalog.py`.

## 1. Cách đọc trạng thái kiểm chứng

| Trạng thái | Nghĩa | Số nguồn |
|---|---|---|
| `TAI_DUOC` | Đã tải mẫu về `samples/` trong đợt này; có checksum | 12 |
| `METADATA` | Đã mở trang/API chính thức, đọc metadata hoặc điều khoản; không tải dữ liệu | 8 |
| `CAN_TAI_KHOAN` | Cần tài khoản/API key miễn phí — không đăng ký theo yêu cầu đề bài | 4 |
| `CAN_MUA` | Thương mại | 4 |
| `CAN_XIN_QUYEN` | Phải xin đơn vị giữ dữ liệu | 2 |
| `KHONG_TRUY_CAP_DUOC` | Đã thử, lỗi kết nối hoặc máy chủ không phản hồi (ghi rõ lỗi) | 5 |
| `CHUA_XAC_MINH` | **Chỉ thấy qua kết quả tìm kiếm web**; chưa mở được trang gốc | 24 |

Giới hạn quan trọng của đợt khảo sát: môi trường chạy chỉ cho phép truy cập một danh sách host hạn chế (xem `research_log.md`). Vì vậy 24 nguồn `CHUA_XAC_MINH` — gồm hầu hết văn bản pháp lý Việt Nam, điều khoản của các hãng ngoài Google, và các bộ dữ liệu học thuật — **mới ở mức đầu mối**. Mọi giấy phép, giá, độ chính xác ghi cho các nguồn này là lời của trang kết quả tìm kiếm, phải mở trang gốc trước khi dựa vào. Ghi chú thô nằm trong `research_notes/`.

Ngày thu thập và ngày cập nhật được tách riêng trong CSV. Ví dụ: Copernicus GLO-30 có đối tượng S3 sửa ngày 2022-05-09 nhưng dữ liệu radar thu 2010–2015; Open Buildings 2.5D có tệp tạo 2024-10-31 cho mốc suy luận 2023-06-30; OSM tải ngày 2026-11-14 chứa các chỉnh sửa từ 2009 đến 2026-11-12.

## 2. Nên dùng ngay (đã tải, giấy phép cho phép dùng thương mại)

| Nguồn | Dùng cho | Giấy phép | Nghĩa vụ chính |
|---|---|---|---|
| OpenStreetMap (A01, A07) | Mạng đường, nước, POI, cấm rẽ, ranh phường mới | ODbL 1.0 | Ghi "© OpenStreetMap contributors"; CSDL dẫn xuất công bố phải theo ODbL |
| Overture Maps (A04–A06, A08) | Lược đồ chuẩn hóa; dấu chân hợp nhất; ranh đất liền | ODbL (OSM, Microsoft) + CC BY 4.0 (Google) + CDLA-Permissive-2.0 (một số theme) | Ghi nguồn theo từng dataset trong cột `sources` |
| Copernicus DEM GLO-30 (B01) | Nền địa hình | Giấy phép Copernicus DEM (miễn phí cho công chúng; PDF giấy phép chưa mở được) | Câu ghi nguồn bắt buộc DLR/Airbus/Copernicus |
| Sentinel-2 L2A (C01) | Ảnh nền 10 m | Dữ liệu Sentinel mở | "Contains modified Copernicus Sentinel data [năm]" |
| ESA WorldCover 2021 (C02) | Mặt nạ cây/nước/xây dựng | CC BY 4.0 | Ghi nguồn ESA WorldCover |
| Google Open Buildings 2.5D (E01) | Chiều cao ước lượng LoD1 | CC BY 4.0 hoặc ODbL (đã đọc trên trang dự án) | Ghi nguồn Google Research |
| Wikidata (E06) | Định danh, tọa độ di tích | CC0 | Không |
| Wikimedia Commons (D05) | Ảnh tham chiếu kiểm định | Theo từng tệp (158/208 mở) | Tác giả + giấy phép từng ảnh; BY-SA kéo theo share-alike |
| Terrain Tiles skadi (B02) | DEM đối chiếu | Theo nguồn thành phần | Ghi nguồn Tilezen/SRTM |

### Lưu ý về ODbL khi ghép với dữ liệu riêng (LiDAR/UAV của chủ dự án)

Hiểu biết chung về ODbL (cần luật sư xác nhận cho trường hợp cụ thể):

- Nếu **sửa/ghép** dữ liệu OSM với dữ liệu riêng thành một CSDL rồi công bố → đó là CSDL dẫn xuất, phải mở theo ODbL.
- Nếu giữ dữ liệu riêng thành **lớp độc lập** đặt cạnh lớp OSM (không dùng OSM để sinh ra hay hiệu chỉnh nó) → thường được coi là CSDL tập hợp; lớp riêng không bị kéo theo.
- Sản phẩm kết xuất (ảnh, cảnh 3D để xem) là "produced work": cần ghi nguồn, không buộc mở theo ODbL — nhưng ranh giới giữa "produced work" và "CSDL dẫn xuất" với 3D Tiles/mesh **không hiển nhiên**.

Khuyến nghị kiến trúc: lưu `source_id` ở cấp thuộc tính (đã thiết kế trong `reconstruction_plan.md` §2) và **tách vật lý** các lớp theo giấy phép, để có thể phát hành phần ODbL mà không lộ dữ liệu khảo sát riêng, hoặc ngược lại.

## 3. Cần tài khoản (miễn phí) — nên xin sớm

| Nguồn | Vì sao đáng làm | Việc cần |
|---|---|---|
| Mapillary (D01) | Nguồn ảnh phố mở duy nhất còn có khả năng phủ Huế; quyết định có phải tự thu ảnh phố hay không | Chủ dự án tạo token; chạy một truy vấn bbox pilot |
| GEDI / ICESat-2 (B07), SRTM/NASADEM (B03) | Điểm kiểm tra độ cao độc lập cho DEM/LiDAR | Tài khoản NASA Earthdata |
| AW3D30 (B04) | DSM đối chiếu thứ ba | Tài khoản JAXA |

## 4. Cần xin quyền — giá trị cao nhất cho dự án

| Nguồn | Đơn vị giữ | Nội dung | Ghi chú |
|---|---|---|---|
| GISHue / nền địa hình 1:2.000 (A12, B08) | UBND TP Huế, Trung tâm Thông tin dữ liệu điện tử | Địa hình tỷ lệ lớn, ~160 đồ án quy hoạch dạng GIS | Máy chủ công khai không phản hồi; VN-2000 TM-3 107°00' |
| Quét 3D/HBIM di tích (E05) | Trung tâm Bảo tồn Di tích Cố đô Huế | TLS điện Thái Hòa (254 trạm), dữ liệu số hóa khác | Chỉ biết qua bài báo; chưa có kênh tải |
| Huế Smart Digital City Model (A15) | UBND TP / ADB AASCTF | Mô hình 3D toàn thành phố từ ảnh vệ tinh | Có thể thay phần lớn công dựng LoD1–2 nếu được chia sẻ |
| Danh sách đèn/camera, phương án tổ chức giao thông (A14, A18) | HueIOC, Sở Xây dựng | Thuộc tính giao thông chính thức | Điều kiện cần cho mục tiêu chỉ đường |
| CSDL nền địa lý quốc gia (A16) | Cục Đo đạc, Bản đồ và TTĐL; Sở NN&MT | Nền 1:2.000/1:5.000, địa chính | Cấp theo phiếu yêu cầu, có phí; có danh mục bí mật nhà nước |
| Mô hình Sketchfab không cho tải (E03) | Hue Museum of Heritages và các tác giả | "Hue Citadel" 2,2 triệu mặt, Ngọ Môn, Thái Hòa | Liên hệ tác giả; hiện không có giấy phép |

Theo yêu cầu đề bài, **chưa gửi bất kỳ yêu cầu nào** tới bên thứ ba.

## 5. Cần mua

| Nhóm | Ví dụ | Khi nào cân nhắc | Lưu ý giấy phép |
|---|---|---|---|
| Ảnh vệ tinh 30–50 cm (C05) | Pléiades Neo, WorldView/Legion, SkySat | Vùng B/C không có UAV; texture mái | Hỏi rõ quyền tạo và **công bố** sản phẩm dẫn xuất; giá trong CSV chỉ là đoạn trích trang đại lý |
| DSM/DTM thương mại (B10) | AW3D, WorldDEM Neo, Precision3D | Vùng B/C không có LiDAR | Thường chỉ dùng nội bộ |
| Dữ liệu dẫn đường (F03) | VIETMAP (tự công bố có tốc độ/biển báo/camera toàn quốc) | Muốn có bên chịu trách nhiệm về thuộc tính giao thông | Phải xin báo giá; điều khoản lưu trữ/dẫn xuất chưa thấy |
| Mô hình 3D dựng sẵn (E09) | CGTrader | Mục tiêu trực quan/game, sau khi kiểm kích thước | Không phân phối lại tệp gốc |

## 6. Không được dùng làm nguồn dựng hình (dù xem được)

| Nguồn | Điều khoản quyết định | Trạng thái |
|---|---|---|
| Google Maps Platform — Map Tiles, Photorealistic 3D Tiles, Street View (F01, D04) | Trang policies: không được "pre-fetch, index, store, or redistribute"; ví dụ bị cấm: "trace or digitize features from satellite imagery, build 3D or terrain models"; Map Tiles API không dùng cho "Image analysis, Machine interpretation, Object detection or identification, Geodata extraction or resale, Offline uses"; đối tượng 3D chồng lên không được "extracted, traced, or otherwise derived" từ 3D Tiles | Đã đọc trực tiếp 2026-11-14 |
| Google Roads API Speed Limits (F02) | Bảng coverage: Việt Nam không có Speed Limits | Đã đọc trực tiếp |
| Esri World Imagery, Bing Aerial, Mapbox Satellite (C04) | Chỉ cho can vẽ để đóng góp vào OpenStreetMap; không tải/lưu ảnh | Chỉ qua kết quả tìm kiếm |
| Maxar/Vantor Open Data (C03) | CC BY-NC 4.0; và không có sự kiện nào phủ Huế (55 sự kiện trong catalog) | Đã đọc catalog |
| FABDEM/FathomDEM (B05), GlobalBuildingAtlas LoD1 (E02), TanDEM-X 30 m | Phi thương mại/khoa học | Chỉ qua kết quả tìm kiếm |
| GADM (A09) | Phi thương mại, cấm phân phối lại; ranh giới lỗi thời | Chỉ qua kết quả tìm kiếm |
| Video YouTube, tour VR360 (D06) | Giấy phép mặc định không cho tái sử dụng | Chỉ là đầu mối |

Phân biệt ba quyền thường bị gộp:

1. **Quyền hiển thị** — hầu hết dịch vụ thương mại cấp qua API/SDK.
2. **Quyền tải/lưu** — thường bị cấm hoặc giới hạn cache ngắn.
3. **Quyền tạo sản phẩm dẫn xuất** (can vẽ, trích đối tượng, đo chiều cao, huấn luyện mô hình) — gần như luôn bị cấm trừ khi có hợp đồng riêng.

Việc xem được trên ứng dụng không cấp quyền 2 và 3.

## 7. Ranh giới hành chính: niên đại là rủi ro chính

"Thành phố Huế" là ba phạm vi khác nhau tùy thời điểm:

| Giai đoạn | Phạm vi | Diện tích | Văn bản (chỉ qua kết quả tìm kiếm, trừ nơi ghi khác) |
|---|---|---|---|
| Trước 01/07/2021 | Thành phố thuộc tỉnh | 70,67 km² | — |
| 01/07/2021 – 31/12/2024 | Thành phố thuộc tỉnh, mở rộng | 265,99 km² | NQ 1264/NQ-UBTVQH14 |
| Từ 01/01/2025 | Thành phố trực thuộc trung ương = toàn tỉnh Thừa Thiên Huế cũ | 4.947,11 km² (khớp Wikidata Q36399 và vi.wikipedia, đã đọc qua API) | NQ 175/2024/QH15 |
| Từ 01/07/2025 | Như trên; bỏ cấp huyện; 40 đơn vị cấp xã (21 phường, 19 xã) | — | NQ 1675/NQ-UBTVQH15 |

Đã kiểm trên dữ liệu: OSM (tải 2026-11-14) **đã phản ánh cấu trúc sau 01/07/2025** — relation TP Huế `admin_level=4` và các phường mới `admin_level=6` (Phú Xuân, Thuận Hóa, Kim Long, Vỹ Dạ, An Cựu, Thủy Xuân, Hương An, Hóa Châu, Mỹ Thượng) với ranh ghép kín. Diện tích đất liền từ Overture/OSM là 4.931,0 km², lệch 0,3% so với số pháp lý. GADM/geoBoundaries/COD-AB theo các kết quả tìm kiếm đều có niên đại trước 2025.

Lưu ý dễ nhầm: *phường Thuận Hòa* (cũ, trong Kinh thành, nay thuộc phường Phú Xuân) ≠ *phường Thuận Hóa* (mới, bờ Nam) ≠ *quận Thuận Hóa* (01–06/2025). OSM vẫn còn relation "Quận Phú Xuân" (18356281) của giai đoạn chuyển tiếp.

## 8. Hệ quy chiếu

| Hạng mục | Giá trị | Mức kiểm chứng |
|---|---|---|
| Lưu trữ/trao đổi mẫu | EPSG:4326 (độ thập phân) | Đã dùng |
| Tính toán pilot | EPSG:32648 (WGS 84 / UTM 48N), mét | Đã dùng |
| Hệ địa phương | VN-2000 / TM-3 107°00', EPSG:9214 (vùng áp dụng: "Bac Giang and Thua Thien-Hue provinces") | Đã xác nhận trong CSDL PROJ; EPSG:9210 là kinh tuyến 105°45', không phải Huế |
| Độ cao DEM toàn cầu | EGM2008 (GLO-30); EGM96 (SRTM) | Theo tài liệu sản phẩm (chưa mở đặc tả gốc) |
| Độ cao quốc gia | Hòn Dấu; lệch ≈ 0,86–0,87 m so với EGM2008 | Chỉ qua kết quả tìm kiếm; dấu chưa xác nhận |
| Tham số chuyển VN-2000 ↔ WGS84 | Chưa có | Phải lấy từ nguồn chính thức |
