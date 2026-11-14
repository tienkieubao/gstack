# Dữ liệu còn thiếu, mức ảnh hưởng và phương án bổ sung

Xếp theo mức nghiêm trọng đối với từng mục tiêu. "Căn cứ" trỏ tới phép đo trong `pilot_validation.md` hoặc dòng trong `source_catalog.csv`. Không khoảng trống nào dưới đây được lấp bằng dữ liệu giả trong repo này.

Ký hiệu mục tiêu: **(1)** bản đồ 3D để xem; **(2)** chỉ đường; **(3)** mô phỏng bay UAV dạng game.

## A. Nghiêm trọng — chặn mục tiêu

| # | Thiếu | Căn cứ đo được | Ảnh hưởng | Phương án bổ sung (theo thứ tự ưu tiên) | Cần quyền/chi phí? |
|---|---|---|---|---|---|
| G1 | **Thuộc tính giao thông đã xác minh**: chiều lưu thông, cấm rẽ, tốc độ, hạn chế theo giờ/loại xe | 94% way xe cơ giới chỉ hai chiều "mặc định"; maxspeed 2% km đường chính; 13 quan hệ cấm rẽ cho 3.543 nút; 0 biển báo | Chặn (2) hoàn toàn. Không ảnh hưởng (1) | a) Khảo sát thực địa có GPS + ảnh/video ngày tháng trên toàn bộ tuyến chính pilot (≈111 km) và mọi nút có đèn; b) văn bản tổ chức giao thông của UBND/Sở Xây dựng (A18) để đối chiếu; c) cấp phép dữ liệu thương mại (VIETMAP — F03) nếu muốn có bên chịu trách nhiệm; d) mặc định theo Thông tư 38/2024 chỉ dùng tạm, gắn nhãn inferred | a) nhân công; b) xin; c) mua |
| G2 | **Cao độ, tĩnh không, kết cấu cầu; kích thước thông xe cổng thành** | 0/109 nhóm cầu có cao độ, bề rộng, tĩnh không; 0/7 cổng có chiều cao bằng số; DEM đọc 0,5–11,6 m dọc cầu Phú Xuân | Chặn (3) (bay dưới cầu); chặn (2) cho xe cao/nặng; (1) phải dựng theo giả định | a) UAV LiDAR + ảnh xiên của chủ dự án, gồm đường bay thấp dọc hai phía cầu; b) hồ sơ hoàn công (Sở Xây dựng); c) quét mặt đất/đo laser tại cổng thành; d) mô hình ràng buộc (reconstruction_plan §5) cho hiển thị | a) giấy phép bay; b) xin |
| G3 | **Hình khối di tích biểu tượng** (Ngọ Môn, Kỳ Đài, Thái Hòa, tường và cổng Kinh thành, cầu Trường Tiền) | OSM chỉ có dấu chân; Wikidata không có chiều cao; ước lượng ML sai rõ rệt (Kỳ Đài: không nhận ra; Thái Hòa: 5,9 m); mô hình Sketchfab tốt nhất không cho tải | Chặn chất lượng (1) và (3) tại đúng nơi người xem nhìn đầu tiên | a) Xin Trung tâm Bảo tồn Di tích Cố đô Huế (TLS/HBIM điện Thái Hòa và dữ liệu khác — E05); b) photogrammetry UAV + mặt đất tự thu; c) mô hình tham số từ số đo công bố + ảnh Commons; d) thẩm định 9 mô hình Sketchfab CC BY (E03) | a) xin; b) giấy phép |
| G4 | **Ảnh đường phố có quyền sử dụng** | Panoramax: 0 ảnh trong toàn TP; Mapillary: chưa kiểm được (cần token); KartaView: lỗi TLS; Google Street View: cấm trích xuất | Không có nguồn mở để kiểm biển báo, mặt tiền, vỉa hè → G1 và mặt tiền nhà phải tự thu | a) Cấp token Mapillary để biết độ phủ thật (việc 5 phút); b) tự thu ảnh 360°/dashcam có GPS khi khảo sát G1 — một lần đi thu được cả hai; c) cân nhắc mở ảnh lên Panoramax/Mapillary | a) tài khoản miễn phí; b) thiết bị + nhân công |

## B. Lớn — giảm chất lượng, có đường vòng

| # | Thiếu | Căn cứ | Ảnh hưởng | Phương án bổ sung | Cần quyền/chi phí? |
|---|---|---|---|---|---|
| G5 | **DTM mặt đất trần độ phân giải cao** | Chỉ có DSM 30 m; biên độ địa hình pilot (3–10 m) cùng cỡ sai số công bố của DEM | (1): nền phẳng, không có kè/taluy; (2): không có độ dốc; (3): nhà "lún/nổi" so với đất | a) LiDAR chủ dự án; b) DeltaDTM (CC BY, chưa thử — B06); c) nền địa hình 1:2.000 của GISHue (xin — B08/A12); d) DSM thương mại (B10) | b) miễn phí; c) xin; d) mua |
| G6 | **Chiều cao và mái nhà thật** | Thẻ chiều cao 0,003%; ước lượng ML phủ 84%, lệch tuyệt đối trung vị 3,2 m trên 29 mẫu | (1): khối nhà đúng bậc độ lớn nhưng đường chân trời không chính xác; mái phải đoán | a) LiDAR; b) Open Buildings 2.5D (đã thử) cho LoD1; c) ảnh xiên UAV cho mái | — |
| G7 | **Dấu chân nhà liền kề chính xác** | 93% dấu chân pilot là ML; 96 dấu chân trên mặt nước; chưa đo được tỷ lệ gộp/tách | (1): nhà ống bị gộp khối; (3): va chạm sai ở kiệt hẹp | a) LiDAR/ảnh trực giao UAV → tách lại; b) can vẽ đóng góp vào OSM từ ảnh nền được phép (Bing/Esri) — hợp lệ nhưng thủ công | b) nhân công |
| G8 | **Mép đường, bề rộng, vỉa hè, dải phân cách** | width 0%, sidewalk 0,7% km đường chính | (1): mặt đường phải dựng theo bề rộng giả định; (2): thiếu cho đi bộ/xe lăn | a) Trích từ ảnh trực giao/LiDAR UAV; b) nội suy theo phân cấp + số làn (inferred) | — |
| G9 | **Mực nước chuẩn và biến động sông Hương, hào, hồ** | GLO-30 làm phẳng sông ở 0,5 m (EGM2008); không có số liệu thủy văn trong đợt này | (3): khoảng thông thủy gầm cầu phụ thuộc trực tiếp; (1): mép nước | a) Mực nước tại thời điểm bay LiDAR (mép bờ); b) số liệu trạm thủy văn Kim Long/Phú Ốc (chưa khảo sát nguồn); c) quy ước một mực nước mô phỏng, ghi rõ | b) xin |
| G10 | **Danh sách đèn tín hiệu, camera, biển báo chính thức** | OSM: 21 đèn, 6 camera, 0 biển; báo chí: ~700 camera, 15 nút phạt nguội (không có danh sách) | (2): cảnh báo camera/đèn không đáng tin | a) Xin HueIOC/Sở Xây dựng; b) tự thu khi khảo sát G1 | a) xin |
| G11 | **Ranh giới pháp lý dạng vector của 40 phường/xã mới** | Chỉ có bản vẽ cộng đồng OSM (đủ vòng kín, lệch diện tích TP 0,3%) | Thống kê theo phường và nhãn địa danh có thể lệch | a) Dùng OSM kèm cảnh báo; b) xin Sở NN&MT bản đồ địa giới sau sắp xếp | b) xin |

## C. Trung bình / cần làm rõ

| # | Thiếu | Ảnh hưởng | Phương án |
|---|---|---|---|
| G12 | Liên hệ hệ độ cao: EGM2008 ↔ Hòn Dấu tại Huế (con số ~0,86 m chỉ qua tìm kiếm, chưa rõ dấu) | Bậc giả khi ghép LiDAR (nếu theo Hòn Dấu) với DEM toàn cầu; sai mực nước | Yêu cầu chủ dự án ghi rõ hệ độ cao của LiDAR; đo ≥ 3 mốc độ cao quốc gia tại Huế |
| G13 | Tham số chuyển VN-2000 ↔ WGS84 chính thức | Lệch ngang khi nhận dữ liệu địa phương (quy hoạch, địa chính) | Lấy từ văn bản/cơ quan đo đạc; kiểm bằng điểm chung |
| G14 | Vị trí từng cây, cột điện, dây | (3): chướng ngại bay; (1): cảm giác đường phố | LiDAR phân lớp; ảnh phố |
| G15 | Độ phủ vùng B/C cho nước, cây, đèn, topology | Chưa biết chất lượng ngoài pilot (đặc biệt vùng núi, đầm phá) | Chạy lại `03/06/07` trên bbox vùng B rồi C sau khi pilot ổn |
| G16 | Hiệu lực hiện hành của các quyết định giao thông địa phương (QĐ 79/2026 đã bãi bỏ một số văn bản) | Đối chiếu G1 có thể dùng nhầm văn bản hết hiệu lực | Đọc toàn văn; hỏi Sở Xây dựng |
| G17 | Khung pháp lý về bay UAV, thu nhận và **công bố** dữ liệu độ cao/3D chi tiết (QĐ 562/QĐ-TTg chưa đọc toàn văn) | Rủi ro pháp lý cho cả ba mục tiêu | Tư vấn pháp lý trước khi bay và trước khi phát hành công khai |
| G18 | Toàn văn/nguyên văn nhiều văn bản và điều khoản (thuvienphapluat.vn chặn bằng Cloudflare; nhiều host không nằm trong danh sách mạng được phép) | 24/59 nguồn trong danh mục ở trạng thái CHUA_XAC_MINH | Mở thêm host hoặc kiểm thủ công theo danh sách trong `research_log.md` |

## D. Không lấy được trong đợt này (trạng thái trung thực)

| Loại dữ liệu đề bài ưu tiên | Kết quả | Ghi chú |
|---|---|---|
| Mạng đường + thuộc tính giao thông hiện có | **Đã lấy** (OSM API + Overture) | Thuộc tính rất thưa — xem G1 |
| Dấu chân công trình | **Đã lấy** | 61.115 trong pilot |
| Sông, hồ, đường bờ | **Đã lấy** | Đa giác; không có mực nước |
| Một mẫu địa hình | **Đã lấy** (GLO-30 + SRTM-skadi) | DSM 30 m |
| Ảnh tham chiếu có quyền rõ ràng | **Một phần**: đã lấy danh sách 208 ảnh Commons kèm tác giả/giấy phép (158 giấy phép mở), nhưng **0 tệp ảnh tải được** vì máy chủ Wikimedia trả HTTP 429 | Ảnh Sentinel-2 (giấy phép Copernicus) đã tải |
| Ảnh đường phố | **Không** | Panoramax trống; Mapillary cần token |
| LiDAR / DEM địa phương | **Không** | Không tìm thấy nguồn công khai |
| Mô hình 3D di tích | **Không tải** (chỉ đọc metadata) | Chưa thẩm định giấy phép/nguồn gốc từng mô hình |
| Dữ liệu cổng địa phương (GISHue, dữ liệu mở) | **Không** | Máy chủ không phản hồi (502) |
| Overpass / Geofabrik | **Không** | Kết nối bị ngắt từ môi trường này; đã thay bằng OSM API cho pilot |

## E. Khoảng trống nghiêm trọng nhất — một câu

Với mục tiêu chỉ đường: **không có nguồn mở nào chứa quy tắc giao thông đã xác minh của Huế** (G1). Với mục tiêu 3D/mô phỏng: **không có dữ liệu chiều thứ ba đo đạc** — cao độ cầu, gầm cầu, di tích, mặt đất trần (G2, G3, G5) — và cả bốn đều được giải quyết bởi cùng một việc: chuyến bay UAV LiDAR + ảnh xiên có điểm kiểm tra, kết hợp một đợt khảo sát mặt đất.
