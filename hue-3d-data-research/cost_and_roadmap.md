# Chi phí theo giả định, lộ trình và tiêu chí nghiệm thu

**Cách đọc tài liệu này.** Chỉ có ba loại con số:

- **[đo]** đo được trong đợt khảo sát (khối lượng dữ liệu, số đối tượng);
- **[nguồn]** đơn giá từ nguồn bên ngoài — phần lớn *chưa xác minh* (chỉ qua kết quả tìm kiếm, xem `source_catalog.csv`);
- **[giả định]** năng suất/khối lượng do người viết đặt ra để minh họa cách tính — **phải thay bằng số đo trên pilot**.

Không có báo giá nào được xin; không dịch vụ trả phí nào được đăng ký. Tài liệu không quy đổi công lao động ra tiền vì đơn giá nhân công là quyết định của chủ dự án; khối lượng được nêu bằng ngày công.

**Kết luận về ngân sách trước:** một bản đồ 3D để *xem* vùng pilot có thể dựng với chi phí dữ liệu gần bằng không. Một sản phẩm *chỉ đường* hoàn chỉnh cho Huế **không** nằm trong khoảng vài nghìn USD: chi phí chi phối không phải dữ liệu hay AI mà là khảo sát xác minh quy tắc giao thông và việc cập nhật liên tục — khoản lặp lại hằng năm.

## 1. Khối lượng làm căn cứ [đo]

| Chỉ số | Vùng A (pilot) | Vùng B (trung tâm) | Vùng C (toàn TP, đất liền) |
|---|---|---|---|
| Diện tích | 22,8 km² | 170,8 km² | 4.931 km² |
| Đường (Overture) | 464 km | 1.246 km | 9.055 km |
| — trong đó đường chính | 94 km | 269 km | 2.194 km |
| Đoạn có cờ cầu | 101 (10,9 km) | 194 (15,8 km) | 1.032 (74,4 km) |
| Dấu chân công trình | 60.851 | 142.446 | 759.332 |
| Nút giao bậc ≥ 3 (OSM, xe cơ giới) | 3.543 | chưa đo | chưa đo |
| Nút có đèn (OSM) | 21 | chưa đo | chưa đo |
| Dữ liệu mẫu trong repo | 13 MB gốc + ~11 MB chuẩn hóa | — | — |
| Thời gian máy cho toàn bộ pipeline khảo sát pilot | vài phút trên một máy, không GPU | — | — |

Ghi chú: "đường chính" theo Overture (không tính nhánh nối) là 94 km ở pilot; theo OSM gốc tính cả nhánh nối là 111 km — bảng khảo sát thực địa ở §2.6 dùng con số 111 km.

Tỷ lệ B/A ≈ 7,5 lần diện tích nhưng chỉ 2,7 lần chiều dài đường và 2,3 lần số nhà; C/A ≈ 216 lần diện tích, 19,5 lần đường, 12,5 lần số nhà. **Ngoại suy theo diện tích sẽ sai**; phải ngoại suy theo km đường, số công trình và số kết cấu.

## 2. Chi phí theo nhóm

### 2.1 Dữ liệu

| Hạng mục | Pilot (A) | Vùng B | Vùng C | Loại số |
|---|---|---|---|---|
| OSM, Overture, GLO-30, Sentinel-2, WorldCover, Open Buildings 2.5D, Wikidata, Commons | 0 | 0 | 0 | [đo] đã tải miễn phí |
| UAV LiDAR + ảnh (chủ dự án cung cấp) | chi phí thuộc chủ dự án — ngoài phạm vi ước tính | cần quyết định phạm vi bay | không thực tế cho toàn bộ 4.931 km² | — |
| Ảnh vệ tinh 30 cm lưu trữ (nếu không có UAV) | ≈ 25 km² × 22,5–45 USD ≈ 560–1.125 USD | ≈ 3.850–7.700 USD | ≈ 111.000–222.000 USD | [nguồn] giá đại lý chưa xác minh; tối thiểu 25 km²; chưa gồm phụ phí giấy phép dẫn xuất |
| DSM thương mại 2,5 m (AW3D Standard) | dưới mức tối thiểu 400 km² (≈ 1.200 USD) | ≈ 1.200 USD (mức tối thiểu) | ≈ 14.800 USD | [nguồn] ~3 USD/km², chưa xác minh |
| Dữ liệu dẫn đường thương mại (tốc độ/biển báo) | phải xin báo giá | phải xin báo giá | phải xin báo giá | — |
| Dữ liệu nhà nước (nền 1:2.000, địa chính) | phí theo quy định, chưa tra được biểu phí | — | — | — |
| Mô hình 3D mua sẵn cho di tích | ~25 USD/mô hình trên sàn (một ví dụ) | — | — | [nguồn] chưa xác minh; chất lượng không rõ |

### 2.2 API

| Hạng mục | Ước tính | Ghi chú |
|---|---|---|
| OSM API, Overture S3, Copernicus S3, GCS, Earth Search, Wikidata, Sketchfab (metadata), Panoramax | 0 | [đo] toàn bộ đợt này không tốn phí API |
| Mapillary | 0 (token miễn phí) | chưa chạy |
| Google Maps Platform (nếu muốn lớp nền hiển thị) | theo SKU; không dùng làm nguồn dữ liệu | điều khoản cấm trích xuất — xem `source_catalog.md` §6 |
| Hạn chế gặp phải | Wikimedia giới hạn tốc độ (HTTP 429); Overpass/Geofabrik ngắt kết nối từ môi trường này | cần chạy từ mạng khác cho vùng B/C |

### 2.3 AI

Đợt khảo sát này **không gọi mô hình thị giác nào**; mọi kiểm tra là hình học xác định. Vì vậy chưa có đơn giá đo được. Cách tính đề xuất:

```
chi phí AI = Σ theo việc ( số đơn vị cần AI sau khi lọc × đơn giá mỗi đơn vị )
```

| Việc | Đơn vị | Khối lượng pilot | Loại số |
|---|---|---|---|
| Nhận dạng biển báo/vạch từ video khảo sát | keyframe sau lọc | 464 km × 2 chiều ÷ 10 m ≈ 93.000 khung trước lọc; kỳ vọng còn 20–40% sau lọc mờ/trùng | [giả định] |
| Phân loại kiểu mái/vật liệu | công trình không có LiDAR | tối đa 60.851; thực tế chỉ cần cho khu hiển thị gần | [đo] + [giả định] |
| Rà soát trực quan cảnh kiểm thử | ảnh render | 12 cảnh × số phiên bản | [đo] số cảnh |

Nguyên tắc kiểm soát (chi tiết ở `reconstruction_plan.md` §10): mô hình phát hiện chuyên dụng chạy cục bộ cho việc lặp lại nhiều; mô hình ngôn ngữ-thị giác chỉ cho ảnh đã chọn; cache theo băm đầu vào; không gửi lại toàn bản đồ. **Đo số lần gọi và chi phí thực trên pilot** rồi nhân theo km đường/số công trình của vùng B/C.

### 2.4 Lưu trữ

| Hạng mục | Ước tính | Loại số |
|---|---|---|
| Dữ liệu mở toàn TP (vector + raster nền) | < 10 GB (Overture vùng C: ~62 MB cột thống kê; 50 tệp chiều cao 2.5D: 4,9 GB) | [đo] |
| Point cloud LiDAR pilot | 22,8 km² × 100–300 điểm/m² ≈ 2,3–6,8 tỷ điểm → khoảng vài chục GB nén | [giả định] mật độ và tỷ lệ nén |
| Ảnh UAV pilot (nadir + xiên) | hàng chục nghìn ảnh; cỡ 0,5–1,5 TB | [giả định] |
| Sản phẩm 3D Tiles/mesh pilot | cỡ GB đến chục GB | [giả định] |
| Bản sao lưu dữ liệu gốc (bắt buộc, bất biến) | ×2 các mục trên | — |

### 2.5 Máy chủ

| Giai đoạn | Nhu cầu | Ghi chú |
|---|---|---|
| Xử lý dữ liệu mở | 1 máy trạm thông thường | [đo] đủ cho pilot; toàn TP vẫn vừa một máy với PostGIS |
| Photogrammetry/LiDAR | máy trạm RAM lớn + GPU, hoặc thuê theo giờ | phụ thuộc số ảnh — chưa biết |
| Phục vụ web 3D | lưu trữ tĩnh + CDN cho 3D Tiles/PMTiles | không cần máy chủ ứng dụng cho bản xem |
| Chỉ đường | máy chủ định tuyến + quy trình cập nhật | chỉ sau khi dữ liệu được xác minh |

### 2.6 Khảo sát thực địa

Đây là khoản lớn nhất cho mục tiêu chỉ đường.

| Việc | Khối lượng pilot [đo] | Năng suất [giả định] | Ngày công [giả định] |
|---|---|---|---|
| Thu video/ảnh 360° có GPS toàn bộ đường xe cơ giới | 452 km (mỗi chiều với đường hai chiều lớn) | 60–100 km/ngày trong đô thị | 6–12 |
| Trích và nhập thuộc tính (chiều, làn, tốc độ, cấm rẽ, biển) cho đường chính | 111 km + 21 nút có đèn | 5–10 km/ngày công | 12–25 |
| Kiểm tra độc lập 10% mẫu | 11 km + 2–3 nút | — | 2–4 |
| Đo cổng thành, gầm cầu (nếu không có LiDAR phù hợp) | 7 cổng + 5 cầu lớn | — | 3–5 |
| Điểm khống chế/điểm kiểm tra cho LiDAR | theo thiết kế bay | — | 2–4 |
| **Tổng pilot** | | | **≈ 25–50 ngày công** |

Ngoại suy thô theo km đường chính: vùng B ≈ ×2,9; vùng C ≈ ×23. Con số này phải được thay bằng năng suất đo thật ở pilot trước khi cam kết.

### 2.7 Vận hành (lặp lại)

Quy tắc giao thông ở Huế thay đổi thường xuyên — các ví dụ thấy trong kết quả tìm kiếm (chưa đọc văn bản gốc): cắm rồi tháo biển 30 km/h trong Kinh thành (08/2025), thí điểm một chiều tại cửa Đông Ba (03/2026), bãi bỏ một loạt quyết định cũ (QĐ 79/2026), hạn chế theo giờ trên cầu Trường Tiền. Một sản phẩm chỉ đường cần:

| Việc | Tần suất | Ghi chú |
|---|---|---|
| Theo dõi văn bản tổ chức giao thông | hằng tuần | nhân lực, không tự động hóa hoàn toàn được |
| Khảo sát lại tuyến chính | 6–12 tháng | cùng quy trình §2.6 |
| Kênh nhận phản hồi lỗi + xử lý | liên tục | — |
| Đồng bộ OSM/Overture (bản tháng) | hằng tháng | tự động, chỉ xử lý ô thay đổi |
| Hạ tầng, sao lưu, giám sát | liên tục | — |

## 3. Lộ trình

| Giai đoạn | Nội dung | Đầu vào | Kết quả | Điều kiện sang bước sau |
|---|---|---|---|---|
| 0. Khảo sát nguồn | (đã xong) | — | Thư mục này | — |
| 1. Pilot hiển thị từ dữ liệu mở | Nạp PostGIS; dựng địa hình + nước + đường + cầu (mô hình ràng buộc) + khối nhà LoD1; trình xem web; 12 cảnh kiểm thử | Mẫu trong repo; token Mapillary; thử DeltaDTM | Bản xem 3D pilot, mọi thuộc tính có status/nguồn | Đạt tiêu chí §4.1 |
| 2. Tích hợp UAV LiDAR + ảnh | Tiếp nhận theo đặc tả; DTM/DSM; chiều cao, mái, mép đường, cao độ cầu; photogrammetry di tích | Dữ liệu chủ dự án | LoD2 khu lõi, LoD3 cho 5–10 công trình; **bảng sai số của nguồn mở so với LiDAR** | Đạt §4.2; có số đo để ngoại suy vùng B |
| 3. Xác minh giao thông pilot | Khảo sát thực địa; nhập thuộc tính; đối chiếu văn bản; engine định tuyến thử | Giai đoạn 1; nhân lực khảo sát | Mạng định tuyến pilot đã xác minh trên tuyến chính | Đạt §4.3 |
| 4. Nguyên mẫu mô phỏng bay UAV | Collision mesh; mặt nước; gầm cầu Trường Tiền; điều khiển + hiệu ứng | Giai đoạn 2 (bắt buộc có hình học gầm cầu) | Bản chơi thử một tuyến bay | Đạt §4.4 |
| 5. Mở rộng vùng B | Lặp 1–3 với đơn giá đã đo | Quyết định ngân sách dựa trên số đo pilot | — | — |
| 6. Vùng C | Chỉ LoD1 + mạng đường mở; chỉ đường giới hạn ở tuyến đã xác minh | — | — | — |

Giai đoạn 1 và việc xin dữ liệu (GISHue, HMCC, HueIOC, mô hình AASCTF) nên chạy song song vì thời gian chờ phản hồi không kiểm soát được.

## 4. Tiêu chí nghiệm thu pilot

Ngưỡng số là đề xuất ban đầu; chủ dự án chốt trước khi bắt đầu giai đoạn 1.

### 4.1 Bản đồ 3D hiển thị (giai đoạn 1)

| # | Tiêu chí | Cách đo |
|---|---|---|
| V1 | 12/12 cảnh kiểm thử qua kiểm tra hình học tự động | `reconstruction_plan.md` §11 |
| V2 | Cầu Trường Tiền được nhận diện và dựng dù thiếu thẻ `bridge`; chiều dài mô hình trong ±2% của 402,6 m | kiểm tra tự động |
| V3 | 0 đoạn đường nằm dưới mặt nước; 0 đoạn "hầm" cổng thành bị hạ ngầm | kiểm tra tự động |
| V4 | 0 dấu chân công trình còn nằm trên mặt nước sau lọc (hiện 96) | kiểm tra tự động |
| V5 | 100% thuộc tính hiển thị có `status` và `source_id`; 0 giá trị inferred bị trình bày như dữ kiện | truy vấn CSDL |
| V6 | Mọi lớp có dòng ghi nguồn đúng giấy phép trong trình xem | rà soát |
| V7 | Trình xem tải vùng pilot và điều hướng mượt trên máy tính xách tay phổ thông | đo khung hình; ngưỡng do chủ dự án đặt |

### 4.2 Sau khi có LiDAR (giai đoạn 2)

| # | Tiêu chí | Cách đo |
|---|---|---|
| L1 | Sai số độ cao LiDAR tại điểm kiểm tra độc lập đạt cấp chính xác đã công bố trong báo cáo bay | điểm kiểm tra không dùng khi bình sai |
| L2 | Cao độ mặt cầu 5 cầu lớn lấy từ LiDAR; ghi lại độ lệch của mô hình ràng buộc so với LiDAR | so sánh trắc dọc |
| L3 | Chiều cao 200 công trình mẫu ngẫu nhiên: báo cáo sai số của ước lượng ML so với LiDAR (trung vị, p90) | lấy mẫu ngẫu nhiên có hạt giống |
| L4 | Tỷ lệ dấu chân ML bị gộp/tách sai trên 20 ô mẫu | so với phân đoạn mái từ LiDAR |
| L5 | Ngọ Môn, Kỳ Đài, Thái Hòa, cầu Trường Tiền đạt LoD3; mỗi kích thước chính có nguồn | danh mục kích thước |

L2–L4 không phải ngưỡng đạt/không đạt mà là **phép đo bắt buộc** — chúng cho biết dữ liệu mở sai bao nhiêu, cơ sở duy nhất hợp lệ để ngoại suy chất lượng vùng B/C.

### 4.3 Chỉ đường (giai đoạn 3) — chỉ trong phạm vi đã khảo sát

| # | Tiêu chí | Cách đo |
|---|---|---|
| R1 | 100% km đường chính pilot có chiều lưu thông `observed` từ khảo sát có ngày ≤ 6 tháng | truy vấn CSDL |
| R2 | 100% nút có đèn và nút trên tuyến chính đã khảo sát cấm rẽ; mỗi hạn chế có ảnh biển báo | hồ sơ khảo sát |
| R3 | Mọi hạn chế theo giờ/loại xe (cầu Trường Tiền, Kinh thành) đối chiếu được với văn bản còn hiệu lực hoặc biển tại hiện trường | bảng đối chiếu |
| R4 | Tái khảo sát độc lập 10% mẫu ngẫu nhiên: tỷ lệ khớp về chiều đường và cấm rẽ ≥ 98% | kiểm tra chéo |
| R5 | Bộ 200 tuyến thử: 0 tuyến vi phạm hạn chế đã quan sát; 0 tuyến qua cổng thành/cầu vượt quá kích thước/tải trọng đã đo cho loại xe tương ứng | chạy engine thử |
| R6 | Ngoài phạm vi đã xác minh, sản phẩm hiển thị rõ "chưa xác minh" và không phát lệnh dẫn đường mang tính cam kết | rà soát giao diện |

### 4.4 Mô phỏng bay UAV (giai đoạn 4)

| # | Tiêu chí | Cách đo |
|---|---|---|
| S1 | UAV bay lọt qua từng nhịp cầu Trường Tiền không va chạm giả; va chạm thật khi chạm trụ/dầm | kịch bản bay tự động |
| S2 | Khoảng thông thủy mô phỏng lệch ≤ ngưỡng do chủ dự án đặt so với số đo (bắt buộc có số đo nếu dùng cho huấn luyện) | so với LiDAR |
| S3 | Chạm/bay sát mặt nước kích hoạt hiệu ứng nước; mực nước là tham số cấu hình có ghi nguồn | thử tay |
| S4 | Bản hiển thị ghi rõ cấp mô phỏng ("minh họa" hay "đã đo") | rà soát |

## 5. Rủi ro chi phí chính

| Rủi ro | Dấu hiệu | Giảm thiểu |
|---|---|---|
| Không xin được dữ liệu địa phương | Chờ lâu không phản hồi | Thiết kế pipeline không phụ thuộc; coi là phần thưởng |
| LiDAR không phủ gầm cầu/cổng | Vùng trống trong point cloud | Lên đường bay xiên/quét mặt đất bổ sung ngay từ kế hoạch bay |
| Hệ độ cao/tọa độ của dữ liệu UAV không rõ | Bậc giả cỡ mét khi ghép | Yêu cầu theo đặc tả tiếp nhận trước khi bay |
| Ràng buộc pháp lý về bay và công bố dữ liệu 3D/độ cao | — | Tư vấn pháp lý trước giai đoạn 2 |
| Nghĩa vụ ODbL khi trộn OSM với dữ liệu riêng | — | Tách lớp theo giấy phép từ đầu |
| Ngoại suy theo diện tích | Dự toán vùng C phình vô lý | Ngoại suy theo km đường/số nhà/số kết cấu bằng đơn giá đo ở pilot |
