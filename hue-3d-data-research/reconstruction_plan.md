# Phương án dựng 3D và nội suy

Căn cứ: dữ liệu mẫu đã tải và kiểm tra (`pilot_validation.md`), danh mục nguồn (`source_catalog.csv`). Nơi nào dựa trên hiểu biết chung chưa kiểm chứng trong đợt này đều ghi rõ "giả định" hoặc "cần tra".

## 1. Ba sản phẩm, ba ngưỡng bằng chứng

| | (1) Bản đồ 3D để xem/khám phá | (2) Bản đồ phục vụ chỉ đường | (3) Mô phỏng tương tác (bay UAV dạng game) |
|---|---|---|---|
| Câu hỏi nghiệm thu | "Trông có đúng Huế không?" | "Đi theo có an toàn, hợp lệ không?" | "Va chạm và không gian bay có đúng không?" |
| Lỗi chấp nhận được | Nhà sai chiều cao vài mét; mái đoán theo kiểu mẫu | Gần như không: sai chiều đường, cấm rẽ, tải trọng cầu là lỗi nghiêm trọng | Tùy cấp: "giải trí" chịu được sai dm–m; "huấn luyện/lập kế hoạch bay" thì không |
| Nội suy | Được, miễn gắn nhãn | **Không** cho thuộc tính pháp lý/an toàn | Được cho hình thức; không cho tĩnh không/chướng ngại nếu dùng cho bay thật |
| Dữ liệu quyết định | Dấu chân, chiều cao ước lượng, ảnh tham chiếu | Quan sát thực địa có ngày tháng + văn bản tổ chức giao thông | Hình học gầm cầu, trụ, dây, cây; mặt nước chuẩn |

Nguyên tắc xuyên suốt: **hình học trông hợp lý không phải bằng chứng**. Sản phẩm (1) có thể phát hành từ dữ liệu mở hiện có. Sản phẩm (2) không thể — xem §4. Sản phẩm (3) phụ thuộc dữ liệu UAV của chủ dự án (§8, §9).

## 2. Mô hình dữ liệu: nguồn gốc và độ tin cậy ở cấp thuộc tính

Mỗi đối tượng (đoạn đường, công trình, cầu…) lưu thuộc tính trong bảng dài, không phải cột phẳng:

```
feature_attribute(
  feature_id, attr_name, value, unit,
  status        -- observed | derived | inferred | unknown
  evidence_class-- xem bảng dưới
  source_id     -- khóa tới source_catalog.csv (vd. A01, E01)
  source_ref    -- id gốc (osm way/…, overture id, tên tệp LAS + thời gian GPS)
  observed_at   -- ngày DỮ LIỆU được quan sát (không phải ngày tải)
  retrieved_at, method, method_version, params_json, verified_by, verified_at
)
```

| status | Nghĩa | Ví dụ từ mẫu pilot |
|---|---|---|
| observed | Nguồn ghi nhận trực tiếp từ quan sát | thẻ `oneway=yes` trên 186 way; dấu chân OSM vẽ tay; điểm LiDAR |
| derived | Tính xác định hoặc bằng mô hình từ dữ liệu quan sát | chiều dài từ hình học; dấu chân ML; chiều cao Open Buildings 2.5D; roundabout ⇒ một chiều |
| inferred | Giả định theo quy tắc/mặc định, không có bằng chứng cho đúng đối tượng | "không có thẻ oneway ⇒ hai chiều" (3.002 way); tốc độ 50/60 km/h theo Thông tư 38/2024; cao độ mặt cầu từ mô hình ràng buộc |
| unknown | Không có giá trị | bề rộng đường, tĩnh không cầu, chiều cao cổng thành |

**Độ tin cậy không phải xác suất.** Không gán số 0–1 do AI tự đặt. Dùng `evidence_class` có định nghĩa kiểm tra được:

| evidence_class | Điều kiện |
|---|---|
| E4 | Đo đạc/khảo sát có báo cáo độ chính xác (LiDAR có điểm kiểm tra, sổ đo) |
| E3 | ≥ 2 nguồn độc lập khớp nhau, hoặc quan sát thực địa có ảnh + GPS + ngày |
| E2 | Một nguồn quan sát (thẻ OSM, một văn bản, một ảnh) |
| E1 | Đầu ra mô hình ML chưa hiệu chuẩn tại Huế |
| E0 | Mặc định/quy tắc |

Nếu sau này cần xác suất, phải **hiệu chuẩn** trên tập kiểm tra thực địa của pilot (ví dụ: trong N đoạn E2 được khảo sát, bao nhiêu đúng) rồi mới công bố tỷ lệ đó kèm khoảng tin cậy.

Mẫu chuẩn hóa hiện tại (`samples/normalized/geojson/`) đã mang các cột `*_status` theo đúng bộ từ vựng này.

## 3. Pipeline

```
Thu thập → Giữ gốc → Chuẩn hóa tọa độ → Đối chiếu nguồn → Hợp nhất đối tượng
        → Kiểm tra topology → Nội suy có ràng buộc → Dựng 3D → Kiểm định
```

| Bước | Việc làm | Trạng thái trong repo |
|---|---|---|
| Thu thập | Script có cache, retry ≤ 3, giãn nhịp theo host, log | `scripts/01–04, 08, 09` — đã chạy |
| Giữ gốc | Byte gốc + SHA-256 + URL + thời điểm; không sửa | `samples/raw/`, `provenance.json` |
| Chuẩn hóa tọa độ | Lưu trao đổi: EPSG:4326. Tính toán pilot: **EPSG:32648** (UTM 48N). Trao đổi với cơ quan địa phương: **VN-2000 / TM-3 107°00' (EPSG:9214)**. Độ cao làm việc: EGM2008; ghi rõ khi đổi sang Hòn Dấu | Đã dùng 4326 + 32648; 9214 đã xác nhận trong CSDL PROJ; **tham số chuyển VN-2000↔WGS84 chính thức chưa có** |
| Đối chiếu nguồn | So khớp cùng đối tượng giữa nguồn (OSM ↔ ML footprint ↔ LiDAR); ghi mâu thuẫn, không tự hòa giải thuộc tính pháp lý | Overture đã hợp nhất dấu chân; còn lại chưa làm |
| Hợp nhất | Một `feature_id` ổn định; thuộc tính đến từ nguồn nào ghi nguồn đó | Lược đồ §2 |
| Kiểm tra topology | Liên thông, giao cắt không nút chung, đường trên nước không thẻ cầu, đầu cụt bất thường | `scripts/06_validate_pilot.py` — đã chạy |
| Nội suy có ràng buộc | Chỉ cho hiển thị; ghi tham số và giả định | Thiết kế ở §5, §6 — chưa cài đặt |
| Dựng 3D | Địa hình → mặt nước → đường → cầu → khối nhà → di tích → cây | Chưa làm (đợt này là khảo sát dữ liệu) |
| Kiểm định | Bộ cảnh cố định + phép đo tự động + rà soát bằng mắt | Danh sách cảnh ở §11 |

Lưu ý phạm vi vùng C: thành phố trải đến ~108,19°E, vượt kinh tuyến 108° (ranh múi UTM 48/49). Với toàn thành phố nên tính trong VN-2000 TM-3 107°00' hoặc chia theo ô, không ép toàn bộ vào UTM 48N mà không kiểm biến dạng.

## 4. Phân tích theo lớp dữ liệu

Cột "Dựng trực tiếp" phản ánh mẫu pilot đã kiểm; "Bắt buộc xác minh" áp dụng cho sản phẩm chỉ đường.

| Lớp | Dựng trực tiếp được đến đâu | Thiếu | Bổ sung từ | Được nội suy để hiển thị | Bắt buộc xác minh trước khi chỉ đường |
|---|---|---|---|---|---|
| Địa hình | Nền 30 m (GLO-30), biên độ pilot 0–24 m | DTM mặt đất trần; taluy, kè, vi địa hình | UAV LiDAR (chủ dự án); DeltaDTM (CC BY, chưa thử); nền 1:2.000 địa phương (xin) | Làm mượt, hạ DSM về mặt đất bằng mặt nạ nhà/cây | Độ dốc dọc đường (nếu dùng cho xe tải/xe lăn) |
| Sông, hồ, hào | Đa giác OSM đủ cho sông Hương, hào Kinh thành, hồ (127 đối tượng) | Mực nước chuẩn, biến động mùa, độ sâu, mép kè | LiDAR (mép bờ), trạm thủy văn (chưa khảo sát), Sentinel-1/2 cho biến động | Mực nước một giá trị quy ước cho mỗi thủy vực | Không áp dụng cho đường bộ; áp dụng nếu chỉ đường thủy |
| Bờ sông, kè | Chỉ là mép đa giác nước | Mặt cắt kè, bậc cấp, công viên ven sông | LiDAR + ảnh xiên | Mặt cắt mẫu theo loại bờ | — |
| Thảm thực vật | Mặt nạ 10 m (WorldCover: 20% cây), 72 cây điểm, đa giác công viên OSM | Vị trí/chiều cao từng cây | LiDAR (phân lớp thực vật); Meta/WRI canopy 1 m (chưa thử) | Rải cây ngẫu nhiên có hạt giống cố định trong đa giác, chiều cao theo raster tán | — |
| Mạng đường: hình học | 452 km xe cơ giới, topology nhất quán (38 ngoại lệ) | Mép đường, dải phân cách, vỉa hè (0,7% có thẻ) | LiDAR/ảnh trực giao UAV → trích mép đường | Bề rộng theo phân cấp + số làn (ghi inferred) | Kết nối tại 6 điểm cần rà soát; lối qua cổng thành |
| Chiều lưu thông | 186 way có thẻ | 3.002 way chỉ là mặc định | Khảo sát thực địa/ảnh phố có ngày; văn bản phân luồng | Không cần cho hiển thị | **Toàn bộ** tuyến chính + mọi tuyến một chiều/có điều kiện |
| Số làn, hướng rẽ theo làn | 115 way có `lanes`; 0 `turn:lanes` | Hầu hết | Ảnh trực giao UAV (vạch sơn), ảnh phố | Số làn theo bề rộng đo được | Làn rẽ tại nút có đèn |
| Cấm rẽ | 13 quan hệ (5 theo giờ) | Không biết độ đầy đủ | Khảo sát biển báo tại nút; văn bản | Không | **Mọi** nút trên tuyến chính |
| Tốc độ | 13 way | 98% | Biển báo thực địa; mặc định theo quy định (inferred) | Không hiển thị như dữ kiện | Bắt buộc quan sát biển; mặc định chỉ dùng tạm với nhãn rõ |
| Đèn tín hiệu, camera | 21 nút đèn; 6 camera | Danh sách chính thức | HueIOC (xin) | Đặt cột đèn mẫu tại nút | Có/không có đèn tại nút; pha đèn không thuộc phạm vi |
| Cầu | Vị trí, chiều dài (lệch 1–8% so với số công bố) | Cao độ, tĩnh không, kết cấu, bề rộng | LiDAR + ảnh xiên; hồ sơ công trình (xin Sở Xây dựng) | Mô hình ràng buộc §5 | Tải trọng, giờ cấm, loại xe được qua |
| Hầm/cổng thành | 7 đoạn xe qua tường thành | Chiều cao, bề rộng thông xe | Đo thực địa/LiDAR mặt đất | Lỗ mở kích thước mẫu | **Bắt buộc** kích thước thông xe |
| Dấu chân công trình | 61.115 (93% ML) | Tách nhà liền kề; nhà mới sau ngày ảnh | LiDAR/ảnh UAV | Giữ nguyên, gắn nhãn nguồn | — |
| Chiều cao, mái | Ước lượng ML cho 84% (±3 m theo chỉ báo) | Chiều cao thật, dạng mái | LiDAR (chính); ảnh xiên | Đùn khối LoD1; mái theo kiểu mẫu vùng (ngói dốc trong Kinh thành) + trần 11 m | — |
| Di tích, địa danh | Dấu chân + tên | Toàn bộ hình khối | Xin HMCC (TLS/HBIM); photogrammetry UAV + mặt đất; số đo công bố | Mô hình tham số theo số đo công bố, gắn nhãn | — |
| Biển báo | 0 | Toàn bộ | Ảnh phố tự thu + nhận dạng; khảo sát | Không | Bắt buộc |

## 5. Cầu, hầm, đường nhiều tầng: mô hình hình học có ràng buộc

### 5.1 Nhận diện (xác định, không cần AI)

Một đoạn là "kết cấu vượt" nếu thỏa **bất kỳ** điều kiện nào — vì thẻ đơn lẻ không đủ (cầu Trường Tiền thiếu `bridge=yes`):

1. có thẻ `bridge=*` / cờ `is_bridge`;
2. nằm trong đa giác `man_made=bridge`;
3. cắt đa giác nước ≥ 15 m mà không có `tunnel`/`ford`;
4. cắt đường khác trên mặt bằng mà không có nút chung.

Phân biệt **giao cắt mặt bằng** và **nút giao thực**: chỉ nút chung trong đồ thị mới là nơi có thể chuyển hướng. Hai đường cắt nhau không nút chung là hai tầng — hoặc là lỗi thiếu nối cần người rà soát (6 trường hợp trong pilot).

### 5.2 Kiểm tra trước khi dựng

- Topology: hai đầu kết cấu nối vào mạng; tại mép vùng cắt phải mở rộng vùng đệm trước khi kết luận "không nối".
- Hướng tiếp tuyến: góc gãy giữa đoạn cầu và đường dẫn tại mố không vượt ngưỡng (đề xuất 15°, giả định).
- Tính liên tục cao độ: không có bậc tại mố; độ dốc dọc trong giới hạn.
- Hệ độ cao và đơn vị của mọi nguồn ghép (EGM2008 / EGM96 / ellipsoid / Hòn Dấu; mét) — sai datum tạo bậc giả cỡ mét.

### 5.3 Cao độ mặt cầu

Không lấy từ DEM địa hình: đo trên pilot cho thấy GLO-30 dọc tim cầu dao động giữa mặt nước 0,5 m và các giá trị lẫn kết cấu (đến 11,6 m ở Phú Xuân). Thứ tự ưu tiên:

1. **Quan sát**: điểm LiDAR phân lớp mặt cầu/mặt đường (status observed, E4 nếu có điểm kiểm tra).
2. **Hồ sơ công trình**: cao độ thiết kế/hoàn công (xin Sở Xây dựng) — observed, E2–E3.
3. **Mô hình ràng buộc** (chỉ cho hiển thị, status inferred):

```
Tìm trắc dọc z(s), s ∈ [0, L], cực tiểu ∫ z''(s)² ds   (mượt nhất)
với:
  z(0) = z_mố_A, z(L) = z_mố_B        ← cao độ mặt đường tại mố, lấy từ DTM/LiDAR ở đầu đường dẫn
  |z'(s)| ≤ i_max                      ← độ dốc dọc tối đa (THAM SỐ GIẢ ĐỊNH, cần tra tiêu chuẩn áp dụng)
  z(s) − h_kết_cấu ≥ z_nước + tĩnh_không(s)   trên phần vượt nước
  z_trên(p) − z_dưới(p) ≥ tĩnh_không_đường     tại mỗi điểm p vượt đường khác
  z liên tục C¹ với đường dẫn hai đầu
```

- `layer` của OSM / `level_rules` của Overture **chỉ** cung cấp quan hệ thứ tự (đường nào trên đường nào) để chọn dấu của ràng buộc — không bao giờ nhân với hằng số để ra mét.
- `tĩnh_không` lấy từ nguồn công bố nếu có (hiện chỉ có một con số chưa kiểm cho cầu Nguyễn Hoàng); nếu không, là tham số giả định ghi trong `params_json`.
- Kết quả lưu kèm: nguồn của từng điều kiện biên, giá trị tham số, phiên bản thuật toán. Khi có LiDAR, so sánh z mô hình với z đo để **định lượng sai số của chính phương pháp nội suy** trước khi áp cho vùng B/C.

### 5.4 Hình khối cầu

| Cầu | Tham số có nguồn | Cách dựng mức hiển thị | Thiếu cho mô phỏng bay dưới cầu |
|---|---|---|---|
| Trường Tiền | 402,6 m (Wikidata); 6 nhịp ~67 m, lòng cầu ~6 m (chỉ qua tìm kiếm) | Mô hình tham số: 6 nhịp vòm thép phía trên mặt cầu + trụ; texture từ ảnh Commons (49 tệp trong danh mục) | Cao độ đáy dầm, kích thước trụ, mực nước chuẩn, hệ giằng dưới mặt cầu |
| Phú Xuân, Dã Viên, Nguyễn Hoàng | Chiều dài/rộng/số nhịp (chỉ qua tìm kiếm) | Dầm hộp/bản mẫu theo số nhịp | Như trên |
| Cầu nhỏ qua hào/kênh (≈100 nhóm) | Chỉ tim đường | Bản mặt cầu phẳng + lan can mẫu | — |

### 5.5 Cổng thành và "hầm"

Dựng tường Kinh thành thành khối (chiều cao/bề dày theo số công bố 6,6 m / 21 m — inferred cho đến khi đo), rồi **khoét lỗ** tại 7 đoạn đường `tunnel` và các cổng. Không hạ mặt đường xuống dưới đất dù thẻ ghi `layer=-1`.

## 6. Công trình và di tích: cấp chi tiết

| Cấp | Phạm vi | Dữ liệu | Trạng thái thuộc tính |
|---|---|---|---|
| LoD1 (khối đùn) | Toàn bộ 61 nghìn dấu chân pilot; 759 nghìn toàn TP | Overture + Open Buildings 2.5D | footprint: observed/derived; chiều cao: derived (E1); 16% không có ước lượng → dùng trung vị lân cận, inferred |
| LoD2 (mái) | Khu Kinh thành, hai bờ sông | Kiểu mái mẫu theo vùng + ảnh; LiDAR khi có | inferred → observed khi có LiDAR |
| LoD3 (thủ công/photogrammetry) | ~10–20 công trình biểu tượng: Ngọ Môn, Kỳ Đài, Thái Hòa, Kiến Trung, Hiển Lâm Các, cổng thành, cầu Trường Tiền, chợ Đông Ba, Quốc Học | Số đo công bố + ảnh Commons; photogrammetry UAV/mặt đất; dữ liệu HMCC nếu xin được | Từng kích thước ghi nguồn riêng |

Quy tắc nội suy chiều cao khi thiếu: (a) trần quy hoạch 11 m/2 tầng trong Kinh thành là **cận trên giả định**, không phải giá trị; (b) không dùng ước lượng ML cho di tích — kiểm tra pilot cho thấy Kỳ Đài không được nhận là công trình và điện Thái Hòa bị ước lượng 5,9 m.

## 7. Công cụ — lựa chọn sau khi xem dữ liệu thực

Quy mô đo được: pilot 61 nghìn công trình / 5,7 nghìn đoạn đường; toàn TP 759 nghìn / 54 nghìn. Đây là quy mô **nhỏ** với công cụ GIS thông thường; không cần hạ tầng phân tán.

| Nhu cầu | Đề xuất | Lý do / ghi chú |
|---|---|---|
| Lưu trữ hợp nhất + thuộc tính có nguồn gốc | PostGIS | Bảng `feature_attribute` (§2), ràng buộc, truy vấn không gian; quy mô TP vừa một máy |
| Trao đổi/lưu gốc | GeoParquet (vector), COG (raster), LAZ/COPC (point cloud) | Đọc theo cửa sổ từ xa — đã dùng thực tế cho Overture, GLO-30, Open Buildings |
| Xử lý OSM | osmium/pyosmium, osm2pgsql (flex) | Đợt này dùng bộ đọc XML tối giản vì chỉ lấy được API 0.6; vùng C cần PBF |
| Raster/vector | GDAL, rasterio, GeoPandas, Shapely 2 | Đã dùng trong `scripts/` |
| Rà soát thủ công | QGIS | Mở trực tiếp `hue_pilot_normalized.gpkg` |
| Point cloud | PDAL (lọc, phân lớp mặt đất, cắt ô), CloudCompare (đối chiếu M3C2) | Cho dữ liệu UAV |
| Photogrammetry | OpenDroneMap/COLMAP (mở) hoặc Metashape/RealityCapture (thương mại) | Chọn sau khi xem bộ ảnh thật: độ chồng phủ, RTK |
| Kiểm tra mạng đường | Một engine định tuyến mã nguồn mở (Valhalla/OSRM/GraphHopper) | Chỉ làm **bộ thử**: sinh tuyến qua cảnh kiểm thử để phát hiện đứt mạng/chiều sai; không phải cam kết sản phẩm |
| Web 3D | MapLibre GL (2,5D, nhẹ) cho LoD1; CesiumJS + 3D Tiles cho địa hình + mesh | Chọn theo mục tiêu (1); tile hóa bằng pg2b3dm/py3dtiles (cần thử) |
| Mô phỏng/game | Xem §9 | — |

Chưa chọn cứng công cụ photogrammetry, engine game và trình xem 3D: các lựa chọn này phụ thuộc dữ liệu UAV chưa nhận.

## 8. Đặc tả tiếp nhận dữ liệu UAV (LiDAR, định vị, ảnh, video)

Chủ dự án cho biết sẽ cung cấp ảnh/video từ các chuyến bay UAV thật có quét LiDAR và dữ liệu định vị. Đây sẽ là **nguồn chính** của pilot; dữ liệu mở trở thành khung nền và đối chứng. Để dữ liệu dùng được ngay, cần kèm:

| Hạng mục | Yêu cầu | Vì sao |
|---|---|---|
| Point cloud | LAS/LAZ 1.4, giữ thời gian GPS, cường độ, số lần phản hồi, góc quét; **chưa lọc** và (nếu có) bản đã phân lớp | Tái phân lớp mặt đất/nhà/cây/cầu; truy ngược về quỹ đạo |
| Quỹ đạo | Tệp trajectory (thời gian, vị trí, tư thế) + log GNSS/IMU gốc, RINEX trạm base nếu PPK | Kiểm tra và xử lý lại; gắn tọa độ cho khung video |
| Hệ quy chiếu | Ghi rõ CRS ngang (mã EPSG) **và hệ độ cao**: ellipsoid WGS84, EGM2008 hay Hòn Dấu; mô hình geoid đã dùng | Tránh bậc giả cỡ mét khi ghép với DEM/OSM (§5.2) |
| Kiểm soát độ chính xác | Tọa độ điểm khống chế (GCP) và **điểm kiểm tra độc lập** không dùng khi bình sai; báo cáo sai số | Chỉ khi có điểm kiểm tra mới được gắn E4. Số điểm tối thiểu theo tiêu chuẩn áp dụng (cần tra, ví dụ ASPRS 2023) |
| Ảnh | Ảnh gốc (không nén lại), EXIF/XMP đầy đủ, tham số hiệu chuẩn máy ảnh, cờ RTK/PPK từng ảnh | Photogrammetry, texture, kiểm định trực quan |
| Video | Tệp gốc + telemetry đồng bộ (ví dụ SRT/CSV theo khung) | Lấy keyframe có vị trí/hướng; video không telemetry chỉ là tham khảo |
| "Hồng ngoại" | Làm rõ: LiDAR (laser cận hồng ngoại) hay **ảnh nhiệt**. Nếu ảnh nhiệt: tệp radiometric gốc + thời điểm bay | Hai loại dữ liệu khác hẳn nhau về công dụng |
| Siêu dữ liệu chuyến bay | Ngày giờ, độ cao bay, mật độ điểm dự kiến, vùng phủ (polygon), thiết bị | `observed_at` cho mọi thuộc tính dẫn xuất |
| Pháp lý | Giấy phép bay, phạm vi được phép công bố | Dự án không tự suy đoán quyền công bố |

Giới hạn vật lý cần lường trước (hiểu biết chung, sẽ kiểm trên dữ liệu thật):

- LiDAR cận hồng ngoại **hầu như không phản hồi từ mặt nước** → sông Hương sẽ là vùng trống; mực nước lấy từ mép bờ + thời điểm bay; đáy sông cần thiết bị khác.
- Bay nadir **không thấy gầm cầu, mặt dưới mái hiên, lòng cổng thành**. Muốn mô phỏng bay dưới cầu Trường Tiền phải có đường bay thấp/xiên dọc hai phía cầu hoặc quét từ mặt đất/thuyền — tùy giấy phép.
- Tán cây dày trong Kinh thành làm thưa điểm mặt đất → kiểm mật độ điểm mặt đất trước khi tin DTM.

Tích hợp: LiDAR → (PDAL) DTM + DSM + phân lớp → chiều cao nhà = DSM − DTM theo dấu chân; mép đường/vỉa hè; cao độ mặt cầu; chiều cao tường thành. Mỗi giá trị thay thế ước lượng cũ và chuyển `status` từ derived/inferred sang observed, **giữ lại** giá trị cũ để đo sai số của nguồn mở (đầu vào để ngoại suy vùng B/C).

## 9. Kịch bản mô phỏng: bay UAV trong Huế 3D như một trò chơi

Khả thi về kỹ thuật. Ví dụ "UAV bay luồn dưới cầu Trường Tiền, nước bắn lên" tách thành các yêu cầu:

| Thành phần | Cần gì | Nguồn | Hiện có? |
|---|---|---|---|
| Thế giới 3D có tọa độ | Địa hình + khối nhà + di tích dạng 3D Tiles/mesh, LOD/streaming | Pipeline §3–6 | Chưa dựng; dữ liệu nền đã có |
| Gầm cầu bay lọt được | Mặt dưới dầm, trụ, khoảng thông thủy từng nhịp, lan can, hệ giằng | LiDAR/ảnh xiên + mô hình tham số | **Không** — OSM chỉ có tim cầu; DEM không có gầm cầu |
| Va chạm | Collision mesh riêng, đơn giản hóa (hộp lồi/convex decomposition), kín nước | Sinh từ mesh hiển thị | Chưa |
| Mặt nước | Mặt phẳng nước tại mực chuẩn theo thủy vực; vùng kích hoạt va chạm nước | Đa giác nước OSM + mực nước quy ước | Đa giác có; mực nước là giả định |
| Hiệu ứng nước bắn | Hệ hạt/VFX của engine khi UAV chạm hoặc bay sát mặt nước | Engine | Không cần dữ liệu thực |
| Động lực học UAV | "Arcade" (tự viết) hoặc mô phỏng bay thật (bộ điều khiển bay mô phỏng + engine vật lý) | Thư viện mô phỏng — cần đánh giá | Chưa chọn |
| Tương tác | Nhiệm vụ, điểm kiểm tra, camera theo, ghi/phát lại đường bay | Engine | Chưa |
| Cây, dây điện, cột | Chướng ngại nhỏ | LiDAR (phân lớp) | Không có trong dữ liệu mở |

Lựa chọn nền tảng (cần thử nghiệm, chưa quyết):

- **Engine game có plugin địa không gian** (ví dụ Unreal Engine hoặc Unity với plugin streaming 3D Tiles): hình ảnh và hiệu ứng nước tốt nhất, hợp bản cài máy tính.
- **Web** (CesiumJS / Three.js / Babylon.js): chạy trên trình duyệt, dễ chia sẻ; hiệu ứng và vật lý đơn giản hơn.
- Nên giữ **một nguồn dữ liệu 3D Tiles/glTF dùng chung** cho cả bản xem web và bản game để không dựng hai lần.

Hai cấp mô phỏng — phải chọn trước vì quyết định chi phí dữ liệu:

1. **Giải trí/trình diễn**: gầm cầu dựng tham số theo số nhịp và ảnh; sai số dm–m chấp nhận được; ghi rõ "mô phỏng minh họa".
2. **Huấn luyện/lập kế hoạch bay thật**: cần tĩnh không đo được (E4), chướng ngại nhỏ, mực nước theo ngày. Chưa nguồn mở nào đáp ứng.

Mô phỏng không thay thế việc tuân thủ quy định bay thật; khu di sản và trung tâm có thể có hạn chế riêng (chưa khảo sát pháp lý trong đợt này).

## 10. Dùng AI ở đâu và tiết kiệm chi phí thế nào

Ưu tiên thuật toán xác định; AI thị giác chỉ cho việc cần "hiểu ảnh".

| Việc | Cách làm | Dùng AI? |
|---|---|---|
| Topology, giao cắt, cầu thiếu thẻ, thống kê thuộc tính | Hình học + SQL | Không (đã chạy trong `06_validate_pilot.py`) |
| Chiều cao nhà từ LiDAR, mép đường | PDAL + raster | Không |
| Nhận dạng biển báo/vạch sơn từ ảnh | Mô hình phát hiện chuyên dụng chạy cục bộ, rồi người duyệt | Mô hình nhỏ; không dùng LLM cho từng khung |
| Kiểu mái, vật liệu, kiểm tra "trông có giống ảnh tham chiếu" | Mô hình thị giác-ngôn ngữ trên **ảnh render đã chọn** | Có, có giới hạn |
| Hòa giải mâu thuẫn nguồn về thuộc tính pháp lý | Người duyệt | Không tự động |

Quy tắc tiết kiệm:

- **Chia ô** (ví dụ lưới 250–500 m trong UTM): mỗi ô có khóa băm = băm(dữ liệu đầu vào trong ô + phiên bản thuật toán + tham số). Chỉ ô có khóa đổi mới xử lý lại; không bao giờ gửi lại toàn bản đồ.
- **Cache kết quả AI** theo (băm ảnh, phiên bản prompt, phiên bản mô hình).
- **Video**: tách keyframe theo quãng đường (ví dụ mỗi 5–10 m theo telemetry), loại khung mờ (phương sai Laplacian thấp) và khung trùng (băm cảm nhận) **trước** khi đưa vào bất kỳ mô hình nào.
- **Cổng hình học trước cổng AI**: một cảnh chỉ được gửi cho AI đánh giá khi đã qua kiểm tra tự động (không tự cắt, không lơ lửng, độ dốc hợp lệ, kín nước).
- **Bộ cảnh kiểm thử cố định** (§11) với góc camera cố định → so sánh ảnh render giữa các phiên bản bằng số (SSIM/khác biệt điểm ảnh) trước, chỉ gửi AI những cảnh thay đổi.
- **Đo trên pilot rồi mới ngoại suy**: ghi số ô, số ảnh, số lần gọi, chi phí cho pilot; ước lượng vùng B/C = đơn giá đo được × số ô, kèm khoảng dao động.

## 11. Bộ cảnh kiểm thử cố định (pilot)

| # | Cảnh | Kiểm tra tự động | Kiểm tra bằng mắt/ảnh tham chiếu |
|---|---|---|---|
| 1 | Cầu Trường Tiền (toàn cầu + hai mố) | Được nhận là cầu dù thiếu thẻ; mặt cầu liên tục; không chìm dưới nước; dài 402,6 m ± 2% | 6 nhịp vòm; ảnh Commons |
| 2 | Cầu Phú Xuân + nút hai đầu (có đèn) | Hai đầu nối mạng; độ dốc đường dẫn trong ngưỡng | — |
| 3 | Cầu Dã Viên + cầu đường sắt Bạch Hổ song song | Hai lòng đường một chiều không trộn; đường sắt không nối với đường bộ | — |
| 4 | Cầu Nguyễn Hoàng (4 way song song) | Làn riêng `motorcar=no` giữ nguyên | — |
| 5 | Cầu Chợ Dinh | 2 giao cắt thiếu `layer` được xử lý là khác mức, có cảnh báo | — |
| 6 | Cửa Quảng Đức / cổng trên đường Đinh Tiên Hoàng | Đường xuyên tường, không bị hạ ngầm | Lỗ cổng |
| 7 | Bùng binh Hùng Vương | Một chiều, liên thông | — |
| 8 | Nút có cấm rẽ theo giờ (5 quan hệ) | Quan hệ được giữ nguyên điều kiện giờ | — |
| 9 | Ngọ Môn – Kỳ Đài – Thái Hòa | Dấu chân đúng vị trí; không dùng chiều cao ML | Ảnh Commons (≥ 163 tệp có tọa độ quanh ba mốc) |
| 10 | Hào và tường Kinh thành góc tây nam | Hào kín; tường liên tục; cầu qua hào ở tầng trên | — |
| 11 | Một ô nhà ống dày trong Kinh thành (Google ML) | Không có dấu chân trên nước/đường | So với LiDAR khi có |
| 12 | Bờ Nam đoạn Lê Lợi (OSM vẽ tay) | Chiều cao ước lượng vs thẻ số tầng | — |
