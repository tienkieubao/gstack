# A1 — Ranh giới hành chính & nguồn dữ liệu địa phương/nhà nước cho Huế

- Ngày khảo sát: 2026-11-14. Ngôn ngữ truy vấn: tiếng Việt + tiếng Anh.
- Trạng thái file: HOÀN TẤT trong giới hạn công cụ của phiên (xem "Hạn chế của phiên" ngay dưới).

## 0. Hạn chế của phiên (đọc trước)

1. **WebFetch không dùng được với bất kỳ host nào.** 4 host đầu tiên trong danh sách "được phép" đều trả
   `getaddrinfo ENOTFOUND` (vi.wikipedia.org, thuvienphapluat.vn, hue.gov.vn, wiki.openstreetmap.org). Theo chỉ dẫn của
   công cụ, tôi dừng thử các host còn lại. Hệ quả: **không có dữ kiện nào ở trạng thái "đã mở trang và thấy …"**.
   Mọi dữ kiện bên dưới là "chỉ qua kết quả tìm kiếm" (tóm tắt/snippet của WebSearch), trừ khi ghi khác.
2. **Hết ngân sách WebSearch của lượt** sau 41 truy vấn thành công (4 truy vấn cuối bị từ chối, không chạy).
   Các mục chưa kịp tra được liệt kê ở §6.
3. data.thuathienhue.gov.vn và gis21.thuathienhue.gov.vn: bên giao việc báo đang 502; tôi không tự kiểm tra được.
4. Quy ước trạng thái kiểm chứng (đúng 1 trong 4): `đã mở trang và thấy …` / `chỉ qua kết quả tìm kiếm` /
   `URL không truy cập được (lỗi …)` / `không tìm thấy`.
5. Những gì tôi chỉ biết từ trí nhớ mô hình (không thấy trong kết quả tìm kiếm của phiên) được tách riêng ở §5 và
   gắn trạng thái `không tìm thấy` — KHÔNG được coi là đã xác minh.

---

## 1. Dữ kiện pháp lý về phạm vi hành chính "Thành phố Huế"

Tất cả: **chỉ qua kết quả tìm kiếm** (không mở được văn bản gốc).

### 1.1 Bảng mốc thời gian

| Giai đoạn | Văn bản | Ngày ban hành / hiệu lực | Phạm vi "TP Huế" | Diện tích | Dân số | Số ĐVHC | Nguồn thấy trong tìm kiếm |
|---|---|---|---|---|---|---|---|
| Trước 01/07/2021 | (TP Huế thuộc tỉnh Thừa Thiên Huế) | — | TP thuộc tỉnh, phạm vi cũ | 70,67 km² | 354.124 người | 27 phường | vnexpress.net/mo-rong-thanh-pho-hue-4268982.html; thanhtra.com.vn (9/27 phường được sắp xếp) |
| 01/07/2021 – 31/12/2024 | NQ 1264/NQ-UBTVQH14 | Ban hành 27/04/2021; hiệu lực 01/07/2021 | TP thuộc tỉnh, mở rộng | 265,99 km² | 652.572 người | 36 (29 phường, 7 xã) | sggp.org.vn (post591939); thoibaotaichinhvietnam.vn; daidoanket.vn; plo.vn |
| 01/01/2025 – 30/06/2025 | NQ 175/2024/QH15 (thành lập TP Huế trực thuộc TW) + NQ 1314/NQ-UBTVQH15 (sắp xếp cấp huyện, xã 2023–2025) | NQ 175 thông qua 30/11/2024, hiệu lực 01/01/2025; NQ 1314 hiệu lực 01/01/2025 | **Toàn bộ tỉnh Thừa Thiên Huế cũ** | 4.947,11 km² | 1.236.393 người | 9 cấp huyện: 2 quận, 3 thị xã, 4 huyện | luatvietnam.vn (377830-d1); thuvienphapluat.vn (hỏi đáp 138039763, 138041198); quochoi.vn (file NQ1314 .doc); daibieunhandan.vn (10353754) |
| Từ 01/07/2025 | NQ 1675/NQ-UBTVQH15 (sắp xếp ĐVHC cấp xã của TP Huế năm 2025) | Thông qua 16/06/2025; luatvietnam ghi "hiệu lực 16/06/2025"; chính quyền cấp xã mới hoạt động từ 01/07/2025; bỏ cấp huyện từ 01/07/2025 | Toàn bộ TP trực thuộc TW (không còn quận/huyện) | (như trên) | (như trên) | **40 = 21 phường + 19 xã** (20 phường + 19 xã hình thành mới; **phường Dương Nỗ không sắp xếp**) | luatvietnam.vn (403027-d1); moj.gov.vn (…/5096/HUE.docx); hoatieu.vn; baovanhoa.vn; tcnnld.vn; tuoitre.vn (20250627145235716) |

Ghi chú:
- NQ 175: thành lập "trên cơ sở toàn bộ diện tích và dân số tỉnh Thừa Thiên Huế" → tên "Thành phố Huế" từ 01/01/2025 **không còn tương ứng** với đô thị 266 km² mà là cả tỉnh cũ ~4.947 km². Bất kỳ bộ ranh giới nào gắn nhãn "Thành phố Huế" phải kiểm tra niên đại.
- NQ 1314: quận Phú Xuân 13 phường (An Hòa, Đông Ba, Gia Hội, Hương An, Hương Long, Hương Sơ, Hương Vinh, Kim Long, Long Hồ, Phú Hậu, Tây Lộc, Thuận Hòa, Thuận Lộc); quận Thuận Hóa 19 phường. Trang hue.gov.vn (General information – Phu Xuan district) ghi quận Phú Xuân 127,05 km². Thị xã Phong Điền lập từ huyện Phong Điền; huyện Phú Lộc mới = Phú Lộc + Nam Đông. Diện tích quận Thuận Hóa: không thấy trong kết quả.
- Danh sách phường quận Thuận Hóa trên bản sao en.wikipedia chỉ hiện 14 tên (thiếu Vĩnh Ninh, Trường An, Vỹ Dạ, Thủy Xuân, Xuân Phú…) — có vẻ bị cắt; không dùng làm chuẩn.
- Số "40 đơn vị: 21 phường, 19 xã" được nhiều nguồn độc lập lặp lại → mức tin cậy cao dù chưa mở văn bản gốc. Một bài SGGP dùng cụm "40 phường, xã, đặc khu" trong tiêu đề — cần đối chiếu văn bản gốc (kết quả khác không nêu đặc khu nào ở Huế).

### 1.2 Phường mới (sau 01/07/2025) phủ khu Kinh thành/Đại Nội và trung tâm bờ Nam

| Phường mới | Hợp thành từ (đơn vị trước 07/2025) | Vai trò với AOI 3D | Nguồn trong tìm kiếm |
|---|---|---|---|
| **Phú Xuân** | Gia Hội, Phú Hậu, Tây Lộc, Thuận Lộc, Thuận Hòa, Đông Ba | Bờ Bắc: Kinh thành + Đại Nội + khu Gia Hội/Đông Ba | moj.gov.vn HUE.docx ("…thành phường mới có tên gọi là phường Phú Xuân"); luatduonggia.vn (?p=856500) |
| **Thuận Hóa** | Phú Hội, Phú Nhuận, Phường Đúc, Vĩnh Ninh, Phước Vĩnh, Trường An | Bờ Nam: trung tâm (Lê Lợi, Hùng Vương, khu phố Tây) | thuvienphapluat.vn (bài "Quận Thuận Hóa (cũ) bao gồm 7 phường mới nào…", 484712-224458) |
| An Cựu | An Đông, An Tây, An Cựu | Nam/đông nam trung tâm | như trên |
| Vỹ Dạ | Thủy Vân, Xuân Phú, Vỹ Dạ | Đông bờ Nam | như trên |
| Thủy Xuân | Thủy Biều, Thủy Bằng, Thủy Xuân | Tây nam (đồi Vọng Cảnh, lăng tẩm) | như trên |
| Kim Long | Kim Long, Hương Long, Long Hồ (>90 km², ~49.000 người) | Tây Kinh thành (Thiên Mụ) | baovanhoa.vn (148238) |
| Hương An | An Hòa, Hương Sơ, Hương An | Bắc/tây bắc Kinh thành | thuviennhadat.vn, thuvienphapluat.vn (bảng danh sách) |
| Hóa Châu | Hương Phong, Hương Vinh, xã Quảng Thành | Bắc/đông bắc | như trên |
| Mỹ Thượng | Phú Thượng, xã Phú An, xã Phú Mỹ | Đông | như trên |
| Hương Thủy | Thủy Lương, Thủy Châu, xã Thủy Tân | Đông nam (sân bay Phú Bài lân cận) | news.laodong.vn (1524680) |
| Dương Nỗ | giữ nguyên, không sắp xếp | Đông | nhiều nguồn |
| Thuận An | **không tìm thấy** thành phần (bảng TVPL lỗi định dạng) | Cửa biển | — |

- "Quận Thuận Hóa (cũ)" → 7 phường mới (theo tiêu đề bài thuvienphapluat); danh sách đủ 7 tên chưa đọc được trong snippet.
- Lưu ý dễ nhầm: **phường Thuận Hòa** (cũ, trong Kinh thành, nay thuộc phường Phú Xuân) ≠ **phường Thuận Hóa** (mới, bờ Nam) ≠ **quận Thuận Hóa** (01–06/2025).
- Hàm ý cho AOI: lõi di sản + trung tâm = phường Phú Xuân + phường Thuận Hóa (mới); đô thị 265,99 km² của giai đoạn 2021–2024 ≈ hợp của 2 quận cũ (Phú Xuân + Thuận Hóa) — phép cộng này là suy luận của tôi, chưa đối chiếu văn bản.

### 1.3 VN-2000 và độ cao

| Mục | Giá trị thấy trong tìm kiếm | Nguồn | Trạng thái |
|---|---|---|---|
| CRS địa phương Huế | **EPSG:9214 "VN-2000 / TM-3 107-00"**; kinh tuyến trục 107°, k0 = 0,9999, FE = 500000 m, FN = 0; vùng áp dụng "Bắc Giang và Thừa Thiên-Huế"; phạm vi dùng: địa chính, trắc địa công trình, bản đồ địa hình tỷ lệ lớn | spatialreference.org/ref/epsg/9214/ ; bản ghi OGC (opengeospatial.github.io/ontology-crs/…/9214) | chỉ qua kết quả tìm kiếm |
| Phép chiếu (conversion) | EPSG:9200 "Vietnam TM-3 107-00"; nguồn EPSG ghi Thông tư 973/2001/TT-TCĐC của Tổng cục Địa chính | epsg.io/9200 | chỉ qua kết quả tìm kiếm |
| EPSG:9210 (theo đề bài) | **Không phải** mã của 107-00 theo kết quả; 9210 và 5899 không được kết quả nào mô tả | — | không tìm thấy |
| Datum | EPSG:4756 (VN-2000 geographic) xuất hiện trong kết quả; VN-2000 dùng ellipsoid WGS-84, phép chiếu UTM, độ cao Hòn Dấu | spatialreference.org/ref/epsg/4756/ ; luathoanganh.vn | chỉ qua kết quả tìm kiếm |
| Hệ độ cao quốc gia | Hòn Dấu (Hải Phòng), mực nước biển trung bình trạm nghiệm triều Hòn Dấu; một nguồn gọi là HP72 | tapchi.humg.edu.vn; luathoanganh.vn | chỉ qua kết quả tìm kiếm |
| Lệch Hòn Dấu ↔ EGM2008 | Một nghiên cứu (>800 điểm GPS-thủy chuẩn): δζ = **0,865 m** giữa điểm "0" Hòn Dấu và mặt geoid EGM-2008. **Không phải giá trị chính thức**; dấu/chiều áp dụng phải đọc bài gốc | tapchi.humg.edu.vn (PDF) | chỉ qua kết quả tìm kiếm |
| Lệch so với EGM96 | — | — | không tìm thấy |
| Mô hình geoid trong nước | Các bài báo: mô hình lệch 7,8 cm trên 74/136 điểm địa chính cơ sở; XGM2019e_2159 hiệu chỉnh cho RMSE ≈ 0,047 m | vjol / vjs.ac.vn | chỉ qua kết quả tìm kiếm |
| Tham số chuyển VN-2000 ↔ WGS84 (7 tham số) | — | — | không tìm thấy (chưa tra) |

---

## 2. Bảng nguồn — ranh giới hành chính (mở / chính thức)

Các cột: Tên · Đơn vị · URL gốc · URL dữ liệu/API · Loại · Định dạng · CRS · Phủ tại Huế · Ngày thu thập vs cập nhật · Độ phân giải/độ chính xác · Truy cập · Giấy phép · Trạng thái.

| # | Tên | Đơn vị cung cấp | URL trang gốc | URL dữ liệu/API | Loại dữ liệu | Định dạng | CRS | Phạm vi phủ tại Huế / niên đại ranh giới | Ngày thu thập vs cập nhật | Độ chính xác công bố | Truy cập | Giấy phép | TRẠNG THÁI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B1 | OSM boundary relations (TP Huế admin_level=4; phường/xã mới) | Cộng đồng OpenStreetMap | www.openstreetmap.org | Relation ID của TP Huế và các phường mới: **không tìm thấy** (1903516 là Hà Nội, không phải Huế) | Đa giác ranh giới | OSM XML/PBF | WGS84 | Chưa rõ OSM đã chuyển sang 40 phường/xã mới chưa. Có thread community.openstreetmap.org "Tổ chức lại các đơn vị hành chính tại Việt Nam" (11 trả lời, hoạt động cuối 18/01/2026) và nhật ký mapper cập nhật Cao Bằng theo NQ; không thấy trang wiki riêng về admin_level VN sau 2025 | không rõ | không công bố | Mở | ODbL (không thấy trích dẫn trong phiên) | chỉ qua kết quả tìm kiếm |
| B2 | GADM 4.1 (VNM) | GADM (R. Hijmans) | https://gadm.org/license.html | không rõ | Đa giác ADM0–3 | (gpkg/shp – không thấy trong phiên) | WGS84 (không thấy trong phiên) | Bản phát hành 16/07/2022 → chắc chắn **trước** cải cách 2025; niên đại nguồn VN không rõ (có thể trước cả mở rộng 2021) | Phát hành 4.1: 16/07/2022; ngày thu thập VN: không rõ | không công bố | Tải tự do | "The data are freely available for academic use and other non-commercial use. Redistribution, or commercial use is not allowed without prior permission." (câu thấy qua README pyGADM dẫn lại) | chỉ qua kết quả tìm kiếm |
| B3 | geoBoundaries VNM (ADM0–2) | William & Mary geoLab | https://geo.btaa.org/catalog/60e0c582-6633-4b59-bf5c-601d6e5ccc9c (bản ghi danh mục) | không rõ | Đa giác ADM0–2 | không rõ | không rõ | Trích dẫn 2022; nguồn: OCHA ROAP, Chính phủ VN, Wikipedia → trước 2025; không có cấp xã theo bản ghi | 2022 (ngày trích dẫn) | không công bố | Mở | Được mô tả "open-license"/CC BY (gián tiếp, chưa thấy câu gốc) | chỉ qua kết quả tìm kiếm |
| B4 | HDX COD-AB "Viet Nam – Subnational Administrative Boundaries" | OCHA ROAP | https://geo.btaa.org/catalog/3cb544a9-9d04-4f54-94e2-93230efd8ceb (bản ghi danh mục) | không rõ | Đa giác ADM1–3(?) | không rõ | không rõ | Nguồn ghi "General Statistics Office of Vietnam (2017)"; version 02; sửa lần cuối 2025; metadata 2025-09-25. **Chưa xác nhận** có phản ánh 34 tỉnh/3.321 xã hay không | Thu thập: GSO 2017; cập nhật metadata: 25/09/2025 (hai mốc khác nhau!) | không công bố | Mở | không thấy trong phiên | chỉ qua kết quả tìm kiếm |
| B5 | sapnhap.bando.com.vn — tra cứu 34 tỉnh, >3.300 ĐVHC cấp xã sau sáp nhập | Không xác nhận được đơn vị (đề bài nêu NXB TN-MT & Bản đồ; kết quả tìm kiếm không nhắc) | sapnhap.bando.com.vn (tên miền thấy trong bài lsvn.vn) | không rõ | Bản đồ tra cứu trực tuyến; "tải miễn phí qua mã QR" | Web map / ảnh bản đồ (vector tải được: không rõ) | không rõ | Toàn quốc sau 01/07/2025, gồm Huế | 2025 | không công bố | Xem + tải bản đồ (không rõ có dữ liệu GIS) | không rõ | chỉ qua kết quả tìm kiếm |
| B6 | Bản đồ hành chính VNSDI | Cục Đo đạc, Bản đồ và Thông tin địa lý VN (Bộ NN&MT) | vnsdi.monre.gov.vn/bandohanhchinh/ (theo các bài thuvienphapluat/thuviennhadat) | không rõ | Web map hành chính 34 tỉnh | Web | không rõ | Toàn quốc; cấp xã ở Huế: không rõ | 2025 | không công bố | Chỉ xem (suy từ mô tả) | không rõ | chỉ qua kết quả tìm kiếm |
| B7 | Bản đồ hành chính VN 1:1.000.000 cập nhật 34 ĐVHC cấp tỉnh | Cục ĐĐBĐ&TTĐL VN | vietnamlawmagazine.vn (…-74430.html); en.baoquocte.vn (…-317565.html) | — | Bản đồ tỷ lệ nhỏ | — | — | Chỉ cấp tỉnh; không dùng được cho ranh phường | 07/2025 | 1:1.000.000 | Xem | không rõ | chỉ qua kết quả tìm kiếm |
| B8 | "Free-GIS-Data" (34 tỉnh + điểm trụ sở 3.321 xã/phường/đặc khu) | Cá nhân (GitHub nguyenduy1133) | https://github.com/nguyenduy1133/Free-GIS-Data | như trái | Lớp tỉnh (đa giác) + điểm trụ sở xã | không rõ | không rõ | Sau 2025; **không rõ có đa giác cấp xã** | không rõ | không công bố; nguồn gốc không chính thức | Mở (GitHub) | không rõ | chỉ qua kết quả tìm kiếm |
| B9 | Dịch vụ thương mại đã cập nhật ranh mới (tham chiếu, không phải dữ liệu mở) | Amazon Location Service (10/2025: 34 tỉnh, 10.310 → 3.321 xã); Google Maps (đang cập nhật, chưa đủ tính đến 03/2026); TrackAsia (API địa giới cũ/mới) | aws.amazon.com/about-aws/whats-new/2025/10/…; news.tuoitre.vn; track-asia.com | API thương mại | Geocoding/địa giới | — | — | Toàn quốc | 2025–2026 | — | Tài khoản/mua | Điều khoản thương mại | chỉ qua kết quả tìm kiếm |
| B10 | Văn bản NQ 1675 (mô tả sáp nhập — nguồn chuẩn để tự dựng ranh bằng cách hợp nhất phường cũ) | UBTVQH | moj.gov.vn/qt/tintuc/Lists/VanBanChinhSachMoi/Attachments/5096/HUE.docx ; luatvietnam.vn (403027-d1) | — | Văn bản | docx/html | — | 40 ĐVHC | 16/06/2025 | — | Mở (luatvietnam cần đăng nhập xem toàn văn) | Văn bản QPPL | chỉ qua kết quả tìm kiếm |

Nhận xét niên đại: B2/B3/B4 (GADM 4.1, geoBoundaries 2022, COD-AB gốc GSO 2017) đều là ranh **trước** 2025; riêng TP Huế trong các bộ này có thể là 70,67 km² (trước 2021) hoặc 265,99 km² (2021–2024) — phải đo diện tích đa giác để xác định. Chưa tìm được nguồn **mở, vector, chính thức** cho 40 phường/xã mới.

---

## 3. Bảng nguồn — GIS, dữ liệu mở, quy hoạch, giao thông, 3D của địa phương/nhà nước

| # | Tên | Đơn vị cung cấp | URL trang gốc | URL dữ liệu/API | Loại dữ liệu | Định dạng | CRS/đơn vị | Phạm vi phủ tại Huế | Ngày thu thập vs cập nhật | Độ phân giải/độ chính xác | Truy cập | Giấy phép | TRẠNG THÁI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| L1 | Cổng dữ liệu mở tỉnh Thừa Thiên Huế | UBND tỉnh/TP; xây dựng bởi HueCIT | https://data.thuathienhue.gov.vn (công bố 2018; Quy chế: QĐ 06/2021/QĐ-UBND) | API/CKAN: không xác nhận | Dữ liệu mở đa ngành | không rõ | không rõ | Toàn tỉnh cũ | Ra mắt 2018; cập nhật: không rõ. Bên giao việc báo đang 502. Tên miền mới *.hue.gov.vn (opendata./data./dulieumo.): **không tìm thấy** | — | Mở (khi còn chạy) | không thấy | chỉ qua kết quả tìm kiếm |
| L2 | GISHue / gisHuePortal (Cổng thông tin địa lý tỉnh) | UBND TP; Trung tâm Thông tin dữ liệu điện tử (CSDL GIS dùng chung) | gis21.thuathienhue.gov.vn (theo kết quả tìm kiếm) | dịch vụ bản đồ: không rõ | CSDL địa lý nền + chuyên ngành, dịch vụ bản đồ, siêu dữ liệu; ~167 đồ án QH đã chuyển sang GIS, 160 đã tích hợp GISHue (moc.gov.vn) | không rõ | không rõ (khả năng VN-2000 KTT 107°) | Toàn tỉnh cũ | Dự án từ 2005 (QĐ 2123/QĐ-UBND 24/06/2005); quy chế kỹ thuật: QĐ 20/2014/QĐ-UBND (09/05/2014) thay QĐ 2320/2008; hiệu lực hiện tại chưa rõ | — | Không rõ (xem/tài khoản) ; báo 502 | không thấy | chỉ qua kết quả tìm kiếm |
| L3 | Hue-S (ứng dụng đô thị thông minh) | UBND TP Huế / HueIOC | (không thấy URL trong kết quả) | — | Dịch vụ: quy hoạch đất đai, giao thông, phản ánh hiện trường, radar thời tiết; 3 nền tảng mới: Hiến kế, Hỗ trợ doanh nghiệp, **Bản đồ số dự án thu hút đầu tư** (thông tin dự án, QH xây dựng, đất đai, hiện trạng khu đất) | App | — | Toàn TP | Công bố 3 nền tảng: 09/10 (năm không ghi rõ trong snippet; bài tapchicongthuong/tienphong/sggp) | — | Chỉ xem trong app | không thấy | chỉ qua kết quả tìm kiếm |
| L4 | HueIOC — Trung tâm Giám sát điều hành đô thị thông minh | UBND TP Huế | (ioc.thuathienhue.gov.vn / hueioc.vn: không thấy trong kết quả) | — | Camera giám sát (~700 camera, 03/2026), phát hiện vi phạm (>52.000 trường hợp), ùn tắc | — | — | Nội đô + mở rộng xã ngoại thành | 2019→2026 | — | Nội bộ | — | chỉ qua kết quả tìm kiếm |
| L5 | Danh sách vị trí camera phạt nguội | Công an TP Huế (CSGT) | lsvn.vn (a178027): thay biển cảnh báo phạt nguội tại **15 nút giao có đèn tín hiệu** (08/2026) — không nêu tên nút | — | Danh sách vị trí | — | — | Nội đô | 08/2026 | — | Không công bố dạng dữ liệu | — | không tìm thấy (danh sách); chỉ qua kết quả tìm kiếm (số lượng) |
| L6 | Kế hoạch đô thị thông minh 2026–2030 (đèn tín hiệu thông minh 10 nút giao; mở rộng camera AI; GIS đô thị, số hóa quy hoạch; **thí điểm bản sao số đô thị tại phường Thuận Hóa**; mốc 31/12/2026) | UBND TP Huế | hue.gov.vn/Portals/0/Uploads/VBPL/Nam2026/Thang6/00.00.H57-334-KH-UBND-2026-PL2_signed.pdf (và PL3) — tên file gợi ý Kế hoạch 334/KH-UBND năm 2026 | — | Văn bản kế hoạch | PDF | — | TP Huế | 06/2026 | — | Mở (PDF) | Văn bản hành chính | chỉ qua kết quả tìm kiếm |
| L7 | Huế Smart Digital City Model (mô hình 3D toàn thành phố từ **ảnh vệ tinh**, không phải LiDAR bay) | ASEAN Australia Smart Cities Trust Fund (AASCTF, ADB quản lý) + UBND tỉnh TTH; tư vấn Ramboll | https://www.ramboll.com/en-apac/projects/government-and-public/hue-smart-digital-city-model | không rõ (không thấy điểm tải) | Mô hình 3D đô thị | không rõ | không rõ | "Huế" (ranh cụ thể không rõ) | không rõ (dự án AASCTF ~2021–2023; chưa xác minh) | không công bố trong snippet | Không rõ — cần xin UBND TP/HueIOC/Sở KH&CN | không thấy | chỉ qua kết quả tìm kiếm |
| L8 | Dự án KOICA "Xây dựng TP Huế văn hóa và du lịch thông minh" | KOICA + UBND TP Huế | vietnamnews.vn (872636); e.vnexpress.net (4225028); news.huengaynay.vn (145744) | — | Hệ thống thông tin du lịch thông minh, CSDL văn hóa-du lịch, chiếu sáng + camera + Wi-Fi hai bờ sông Hương; hợp phần "Smart street" khánh thành 28/08/2025 tại công viên Lý Tự Trọng | — | — | Hai bờ sông Hương, trung tâm | Ký 2021; vốn 14,8 triệu USD (Vietnam News) vs ~13 triệu USD (VnExpress) — chưa giải quyết | — | — | — | chỉ qua kết quả tìm kiếm; hạng mục bản đồ số/GIS 3D: không tìm thấy |
| L9 | Số hóa 3D di sản (quét 3D + ảnh số điện Thái Hòa; CSDL dự kiến xong 06/2026; >114.870 trang tài liệu đã số hóa) | Trung tâm Bảo tồn Di tích Cố đô Huế + UALS Co., Ltd (Hàn Quốc) | vietnamnews.vn (1692400; 1763494) | — | Point cloud/mô hình 3D công trình | không rõ | không rõ | Từng công trình trong Đại Nội (Thái Hòa…), Hải Vân Quan | 2024–2026 | không công bố | Xin (HMCC) | không thấy | chỉ qua kết quả tìm kiếm |
| L10 | Bài ISPRS Archives XLVIII-M-9-2025, tr. 587 — quy trình Scan-to-HBIM (TLS Leica RTC360 + UAV DJI Mavic 3 Pro) tại Huế | Tác giả học thuật | https://isprs-archives.copernicus.org/articles/XLVIII-M-9-2025/587/2025/ | PDF bài báo | Phương pháp + mô tả dữ liệu công trình | PDF | — | Một công trình di sản | 2025 | theo bài | Mở (bài báo); dữ liệu gốc: không rõ | Bài báo ISPRS (thường CC BY — chưa thấy câu gốc) | chỉ qua kết quả tìm kiếm |
| L11 | Mô hình cảnh báo ngập đường phố TP Huế (DEM lưới **10 m**, ~22.600 cống) | ĐH Khoa học Huế + Sở GTVT TTH | sgtvt.thuathienhue.gov.vn/UploadFiles/TinTuc/2013/12/2/mo_phong_thoat_nuoc_do_thi_hue.pdf | — | DEM + mạng thoát nước (mô tả) | PDF báo cáo | không rõ | Nội đô Huế (phạm vi cũ) | ~2013 | DEM 10 m; nguồn DEM không rõ | Xin | — | chỉ qua kết quả tìm kiếm |
| L12 | "Flood risks in Hue" (FloodAdaptVN) — mô hình thủy văn tỉnh, bản đồ nguy cơ lũ 2020 | DLR, UNU-EHS và cộng sự | https://elib.dlr.de/213395/ ; collections.unu.edu/view/UNU:10124 | PDF | Bản đồ hazard/exposure/vulnerability | PDF (dữ liệu: không rõ) | không rõ | Toàn tỉnh/TP | Báo cáo 2025; bản đồ lũ 2020 | không rõ trong snippet | Mở (báo cáo) | không thấy | chỉ qua kết quả tìm kiếm |
| L13 | CSDL vết lũ cộng đồng (flood footprint) | ISET + cơ quan PCTT tỉnh + Trung tâm đô thị thông minh Huế (Zurich Foundation tài trợ) | i-s-e-t.org (PDF) | — | Điểm vết lũ, GIS | không rõ | không rõ | TP Huế | không rõ | — | không rõ | — | chỉ qua kết quả tìm kiếm |
| L14 | LiDAR bay / DEM độ phân giải cao toàn đô thị Huế (WB/ADB/JICA/KOICA) | — | — | — | — | — | — | — | — | — | — | — | không tìm thấy |
| L15 | CSDL nền địa lý quốc gia & bản đồ địa hình quốc gia 1:2.000 / 1:5.000 (khung kỹ thuật: QCVN 73:2023/BTNMT; Thông tư 27/2024/TT-BTNMT; sản phẩm số GeoPDF/PDF/GeoTIFF/TIFF; VN-2000 + độ cao quốc gia; có quy trình thành lập bằng LiDAR + ảnh số) | Cục ĐĐBĐ&TTĐL VN (Bộ NN&MT); cấp tỉnh: Sở NN&MT | luatvietnam.vn (380558-d1); dosmvn.mae.gov.vn (file TT27) | — | Nền địa lý, địa hình, DEM | GDB/GeoTIFF… | VN-2000, độ cao Hòn Dấu | **Tình trạng phủ 1:2.000/1:5.000 tại Huế: không tìm thấy** | — | theo tỷ lệ | Mua/xin theo NĐ 27/2019 (xem §4) | Dữ liệu nhà nước, có phí | chỉ qua kết quả tìm kiếm (khung); không tìm thấy (độ phủ Huế) |
| L16 | Quy định quản lý nhà nước hoạt động đo đạc bản đồ trên địa bàn tỉnh TTH | UBND tỉnh TTH | caselaw.vn (371943) — QĐ 58/2020/QĐ-UBND ngày 21/11/2020 | — | Văn bản | — | — | Toàn tỉnh | 2020; hiệu lực hiện tại chưa rõ | — | Mở | — | chỉ qua kết quả tìm kiếm |
| L17 | Kế hoạch đẩy nhanh đo đạc, lập bản đồ địa chính, hoàn thiện CSDL đất đai | UBND TP Huế | luatvietnam.vn (434408-d2) — Kế hoạch 244/KH-UBND năm 2026 | — | Văn bản (cho biết CSDL địa chính đang hoàn thiện) | — | — | Toàn TP | 2026 | — | — | — | chỉ qua kết quả tìm kiếm |
| L18 | Quy hoạch chung đô thị Thừa Thiên Huế đến 2045, tầm nhìn 2065 | Thủ tướng CP; cơ quan lập: UBND tỉnh/Sở Xây dựng | luatvietnam.vn (293400-d1) — **QĐ 108/QĐ-TTg ngày 26/01/2024**; nhiệm vụ QH: QĐ 1261/QĐ-TTg năm 2022 | Bản vẽ số: không tìm thấy | Đồ án QH (văn bản + bản đồ) | PDF/ảnh | VN-2000 (suy đoán) | Phạm vi lập: toàn tỉnh ~4.947,11 km² (theo một bài tapchicongthuong — chưa chắc nói về QHC hay QH tỉnh) | Phê duyệt 26/01/2024; công bố 06/04/2024; có chủ trương điều chỉnh tổng thể (đến 2050, tầm nhìn 2075; nhắc Công văn 761/TTg-CN ngày 02/7/2026 — chưa xác minh) | tỷ lệ đồ án không thấy | Văn bản mở; bản vẽ: xin Sở Xây dựng | — | chỉ qua kết quả tìm kiếm |
| L19 | Quy hoạch tỉnh Thừa Thiên Huế 2021–2030, tầm nhìn 2050 | Thủ tướng CP | **QĐ 1745/QĐ-TTg ngày 30/12/2023**; kế hoạch thực hiện: QĐ 1481/QĐ-TTg ngày 29/11/2024 (caselaw.vn 509761) | không tìm thấy | Văn bản + bản đồ | — | — | Toàn tỉnh | 30/12/2023; công bố 06/04/2024 | — | Văn bản mở | — | chỉ qua kết quả tìm kiếm |
| L20 | Cổng thông tin quy hoạch (quyhoach.xaydung.gov.vn; quyhoach.hue.gov.vn?) | Bộ Xây dựng / TP Huế | Không thấy trong kết quả. Có Kế hoạch 424/KH-UBND của Huế triển khai QĐ 3103 về "hệ thống thông tin quy hoạch" (luatvietnam.vn 416046-d2) | — | — | — | — | — | — | — | — | — | không tìm thấy (cổng); chỉ qua kết quả tìm kiếm (KH 424) |
| L21 | Sở Xây dựng TP Huế (hợp nhất Sở Xây dựng + Sở GTVT, hiệu lực 01/03/2025) | UBND TP Huế | Website mới: không tìm thấy. Tên miền cũ thấy trong kết quả: sxd.thuathienhue.gov.vn, sgtvt.thuathienhue.gov.vn (file PDF) | — | QH xây dựng, tổ chức giao thông, hạ tầng | — | — | Toàn TP | — | — | Xin/đăng tải văn bản | — | chỉ qua kết quả tìm kiếm |
| L22 | Sở Nông nghiệp và Môi trường TP Huế (đo đạc bản đồ, đất đai) | UBND TP Huế | Website: không tìm thấy (có văn bản mã "SNNMT-CCQLDD" trên hue.gov.vn năm 2026) | — | Địa chính, nền địa lý cấp tỉnh | — | VN-2000 KTT 107° | Toàn TP | — | — | Xin/mua | — | chỉ qua kết quả tìm kiếm |
| L23 | Viện Nghiên cứu Phát triển TP Huế | — | — | — | — | — | — | — | — | — | — | — | không tìm thấy |
| L24 | QH chi tiết hai bờ sông Hương | UBND tỉnh TTH | **QĐ 596/QĐ-UBND ngày 19/3/2021** (theo baovanhoa.vn 235081/236183) | bản vẽ: không tìm thấy | Đồ án QHCT | — | — | Dải hai bờ sông Hương | 2021 | Bờ Bắc: hầu như hạn chế xây mới, nếu có tối đa ~2 tầng; bờ Nam: kiểm soát nghiêm (con số cụ thể không thấy) | Xin Sở Xây dựng | — | chỉ qua kết quả tìm kiếm |
| L25 | Quy chế quản lý kiến trúc TP Huế | UBND TP Huế / Sở Xây dựng | **Dự thảo**, lấy ý kiến từ 23/6/2026 (tuoitre.vn …100260623111529447.htm); dự thảo trước: hue.gov.vn/…/GopYDuThaoVBPL/Nam2025/Thang5/00.17.H57-1997-SXD-QHKT-2025-PL1.doc. **Số QĐ ban hành chính thức: không tìm thấy** | — | Quy chế (giới hạn chiều cao, mật độ) | doc/pdf | m, tầng | Toàn TP; Kinh thành; trục sông Hương | Dự thảo 05/2025 và 06/2026 | Dự thảo: công trình dân dụng trong Kinh thành **≤ 11 m**; có đề xuất gây tranh cãi cho xây tới **12 tầng** sát sông Hương (gần KS Hương Giang, Century Riverside) | Mở (dự thảo) | — | chỉ qua kết quả tìm kiếm |
| L26 | QHCT khu vực đồi Vọng Cảnh và phụ cận | UBND tỉnh TTH | caselaw.vn (151795, 151794) — QĐ 2101/QĐ-UBND và 2102/QĐ-UBND năm 2015 | — | QHCT + quy định quản lý | — | — | Tây nam TP | 2015 | — | Mở (văn bản) | — | chỉ qua kết quả tìm kiếm |

### 3.1 Văn bản tổ chức giao thông / hạn chế phương tiện tìm được (có số hiệu)

Tất cả: chỉ qua kết quả tìm kiếm; nội dung chi tiết chưa đọc.

| Văn bản | Nội dung theo snippet | Nguồn |
|---|---|---|
| QĐ 01/2022/QĐ-UBND (10/01/2022, hiệu lực 20/01/2022; thay QĐ 18/2017) | Quản lý xe thô sơ, xe gắn máy, mô tô 2–3 bánh… vận chuyển hành khách, hàng hóa; có dẫn chiếu quyết định cấm xe máy kéo, công nông, xe lam trong TP Huế và **hạn chế xe qua cầu Trường Tiền giờ cao điểm** | caselaw.vn (410312); vbpl.vn |
| QĐ 42/2024/QĐ-UBND (tỉnh TTH) | Quản lý hoạt động xe ô tô vận tải trung chuyển hành khách | luatvietnam.vn; vbpl.vn |
| QĐ 39/2025/QĐ-UBND (TP Huế) | Có khung **giờ cao điểm đô thị: 06:00–08:00; 11:30–13:00; 16:30–20:00**; loại xe áp dụng chưa rõ | hue.gov.vn/…/Nam2025/T4/00.00.H57-39-2025-QD-UBND-2025-PL4.pdf |
| QĐ 70/2020/QĐ-UBND (tỉnh TTH) | Xuất hiện trong kết quả về hạn chế phương tiện; nội dung chưa rõ | vbpl.vn (181158) |
| QĐ 79/2026/QĐ-UBND (03/8/2026, TP Huế) | Bãi bỏ một số VBQPPL cũ của UBND tỉnh TTH, căn cứ Luật Trật tự, an toàn giao thông đường bộ → **các quyết định giao thông cũ có thể đã hết hiệu lực** | (qua kết quả tìm kiếm; file hue.gov.vn Nam2026/Thang7–8) |
| Biển tốc độ tối đa 30 km/h trong Kinh thành (08/2025) | Cắm biển rồi bị phản ứng; Phó Chủ tịch UBND TP giao Sở Xây dựng hướng dẫn phường Phú Xuân tháo dỡ hàng loạt biển | tuoitre.vn (20250806104920413); sggp.org.vn (post807076) |
| Họp UBND TP 31/03/2026 về phân luồng, đỗ xe | Sở Xây dựng đề nghị ô tô < 5 tấn lưu thông 6h–20h, **tổ chức một chiều tại cửa Đông Ba**, thí điểm 1 tháng | moc.gov.vn (tin 93007) |
| Hồ sơ ~2019 | Đường Hai Bà Trưng, đoạn Hà Nội → Trần Cao Vân: một chiều, cấm đỗ (hiện trạng trong tài liệu đề xuất cũ) | tuongtac.hue.gov.vn (PDF 2020/02) |
| Thẩm quyền | Tổ chức giao thông lõi đô thị từng được ủy quyền cho Chủ tịch UBND TP Huế (cũ); sau 2025 do UBND TP trực thuộc TW/Sở Xây dựng | theo tóm tắt tìm kiếm |

Không tìm thấy: danh mục chính thức đường một chiều / cấm đỗ / tốc độ theo tuyến dưới dạng dữ liệu; quyết định cấm ô tô >16 chỗ vào Kinh thành.

---

## 4. Khung pháp lý lấy dữ liệu đo đạc – bản đồ và hạn chế công bố

Tất cả: chỉ qua kết quả tìm kiếm.

| Văn bản | Nội dung liên quan | Nguồn |
|---|---|---|
| Luật Đo đạc và bản đồ số 27/2018/QH14 (14/06/2018) | Luật khung | caselaw.vn (325528) |
| Nghị định 27/2019/NĐ-CP (13/03/2019; hiệu lực 01/05/2019) | Điều 21: cung cấp thông tin, dữ liệu, sản phẩm đo đạc bản đồ cho tổ chức, cá nhân trong nước; Điều 22: trao đổi với tổ chức quốc tế, nước ngoài; Điều 23: sử dụng; Mẫu số 08: phiếu yêu cầu cung cấp | caselaw.vn (338233) |
| Nghị định 136/2021/NĐ-CP (31/12/2021; hiệu lực 15/02/2022) | Sửa NĐ 27/2019 (lưu trữ/cung cấp/sử dụng; mẫu phiếu) | caselaw.vn (408171) |
| VBHN 04/VBHN-BTNMT (30/01/2024) | Hợp nhất NĐ hướng dẫn Luật ĐĐBĐ | caselaw.vn (461755) |
| Nghị định 39/2026/NĐ-CP | Được một danh mục TTHC của Hải Phòng dẫn là văn bản sửa NĐ 27/2019 — **chưa xác minh** | cdn.haiphong.gov.vn |
| Nghị quyết 40/NQ-CP năm 2023 | Chiến lược phát triển ngành Đo đạc và Bản đồ đến 2030, tầm nhìn 2045 | thuvienphapluat.vn (560634) |
| **QĐ 562/QĐ-TTg (10/3/2025, hiệu lực cùng ngày)** | Danh mục bí mật nhà nước lĩnh vực tài nguyên và môi trường (Tối mật, Mật) gồm cả **đo đạc và bản đồ**; **thay QĐ 1660/QĐ-TTg (26/10/2020)**. Ví dụ thấy: bản đồ QH không gian biển liên quan QP-AN chưa công khai; số liệu/bản đồ trường sóng âm. **Các mục cụ thể về tọa độ, ảnh hàng không, DEM và cấp độ mật: chưa đọc được** | luatvietnam.vn (tin 186-101364); lsvn.vn (a154760); toàn văn: viglacera.com.vn/…/562_QD-TTg_646890.doc |
| Văn bản cũ (đã bị thay) | QĐ 212/2003/QĐ-TTg; QĐ 21/2013/QĐ-TTg (Tối mật); Thông tư 29/2013/TT-BCA (Mật) → Thông tư 21/2021/TT-BCA | caselaw.vn; moit.gov.vn |
| Thông tư phí khai thác dữ liệu ĐĐBĐ (đề bài nêu "fee circulars") | — | không tìm thấy (truy vấn bị từ chối do hết ngân sách) |
| Nghị định xử phạt (NĐ 18/2020/NĐ-CP) và quy định xuất bản bản đồ | — | không tìm thấy (truy vấn bị từ chối do hết ngân sách) |

Hàm ý thực hành (suy luận của tôi, cần luật sư/cơ quan xác nhận): dữ liệu nền 1:2.000/1:5.000, DEM chi tiết, ảnh hàng không là dữ liệu nhà nước cấp theo phiếu yêu cầu (Mẫu 08) và có phí; trước khi công bố mô hình 3D/độ cao chi tiết cần đọc toàn văn QĐ 562/QĐ-TTg (phần đo đạc và bản đồ) để chắc chắn không rơi vào danh mục Mật.

---

## 5. Mục chỉ từ trí nhớ mô hình — CHƯA thấy trong kết quả tìm kiếm của phiên (trạng thái: không tìm thấy)

- OSM cấp phép ODbL 1.0; geoBoundaries thường CC BY 4.0; HDX COD thường CC BY-IGO — chưa thấy câu giấy phép gốc trong phiên.
- Thông tư phí thường được nhắc: Thông tư 196/2016/TT-BTC (phí khai thác, sử dụng thông tin dữ liệu đo đạc và bản đồ), có sửa đổi sau — số hiệu/hiệu lực hiện hành chưa kiểm chứng.
- 3 thị xã (Hương Thủy, Hương Trà, Phong Điền) và 4 huyện (Phú Vang, Quảng Điền, A Lưới, Phú Lộc) của giai đoạn 01–06/2025: kết quả tìm kiếm chỉ xác nhận Phong Điền và Phú Lộc (+Nam Đông).
- Kinh thành trước 2025 nằm trong các phường Đông Ba, Thuận Lộc, Thuận Hòa, Tây Lộc (sau các lần nhập 2021) — phù hợp với việc cả 4 nay thuộc phường Phú Xuân, nhưng chưa đối chiếu bản đồ.
- Cổng quyhoach.xaydung.gov.vn của Bộ Xây dựng: không xuất hiện trong kết quả.

---

## 6. Việc còn dang dở (đề xuất cho lượt sau khi có mạng/ngân sách)

1. Mở toàn văn NQ 1675/NQ-UBTVQH15 (moj.gov.vn HUE.docx) để lấy đủ 40 đơn vị + thành phần (đặc biệt phường Thuận An, 7 phường của quận Thuận Hóa cũ).
2. Tìm relation ID OSM: tìm trực tiếp trên openstreetmap.org "Thành phố Huế" (boundary=administrative, admin_level=4) và các phường Phú Xuân/Thuận Hóa; đọc thread community.openstreetmap.org "Tổ chức lại các đơn vị hành chính tại Việt Nam".
3. Trang HDX cod-ab-vnm: xác nhận bản 2025 có phải 34 tỉnh/3.321 xã, giấy phép.
4. Thử lại data.thuathienhue.gov.vn, gis21.thuathienhue.gov.vn; tìm tên miền mới trên hue.gov.vn.
5. Đọc toàn văn QĐ 562/QĐ-TTg (mục đo đạc và bản đồ) + thông tư phí + NĐ 18/2020 + quy định xuất bản bản đồ.
6. QĐ ban hành chính thức Quy chế quản lý kiến trúc TP Huế (sau dự thảo 06/2026) và bảng chiều cao QĐ 596/QĐ-UBND.
7. Hỏi HueIOC/Sở KH&CN về sản phẩm "Huế Smart Digital City Model" (AASCTF–Ramboll): định dạng, CRS, điều kiện chia sẻ.
8. Tham số chuyển VN-2000 → WGS84 (7 tham số) và mô hình geoid chính thức.

---

## 7. Nhật ký truy vấn

### 7.1 WebFetch (4 lượt — tất cả thất bại)

| # | URL | Kết quả |
|---|---|---|
| F1 | https://vi.wikipedia.org/wiki/Huế | URL không truy cập được (lỗi getaddrinfo ENOTFOUND) |
| F2 | https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Nghi-quyet-1675-NQ-UBTVQH15-2025-… (URL tôi đoán, không rõ có tồn tại) | URL không truy cập được (lỗi getaddrinfo ENOTFOUND) |
| F3 | https://hue.gov.vn/ | URL không truy cập được (lỗi getaddrinfo ENOTFOUND) |
| F4 | https://wiki.openstreetmap.org/wiki/Vi:Vietnam | URL không truy cập được (lỗi getaddrinfo ENOTFOUND) |

Sau 4 lỗi giống nhau, dừng fetch theo chỉ dẫn của công cụ (không thử www.openstreetmap.org, wikidata, commons, hueworldheritage, data./gis21.thuathienhue.gov.vn…).

### 7.2 WebSearch (41 lượt chạy + 4 lượt bị từ chối)

| # | Truy vấn (rút gọn) | Kết quả một dòng |
|---|---|---|
| S1 | NQ 1675/NQ-UBTVQH15 … 21 phường 19 xã | Xác nhận 40 = 21 phường + 19 xã; Dương Nỗ không sắp xếp; hiệu lực 16/06/2025; hoạt động 01/07/2025 |
| S2 | NQ 175/2024/QH15 diện tích dân số | 4.947,11 km²; 1.236.393 người; thông qua 30/11/2024, hiệu lực 01/01/2025 |
| S3 | NQ 1314 quận Phú Xuân, Thuận Hóa | 2 quận, 3 thị xã, 4 huyện; Phú Xuân 13 phường (127,05 km²), Thuận Hóa 19 phường |
| S4 | NQ 1675 "phường Phú Xuân" "phường Thuận Hóa" | Phú Xuân = Gia Hội, Phú Hậu, Tây Lộc, Thuận Lộc, Thuận Hòa, Đông Ba; Thuận Hóa chưa ra |
| S5 | NQ 1264/NQ-UBTVQH14 265,99 km² | 27/04/2021; hiệu lực 01/07/2021; 265,99 km²; 652.572 người; 29 phường + 7 xã |
| S6 | Danh sách 40 xã phường (kèm tên dự đoán) | Không ra bảng đầy đủ |
| S7 | Huế trước 2021 70,67 km² 27 phường | Xác nhận 70,67 km²; 354.124 người; 27 phường |
| S8 | OSM relation "Thành phố Huế" admin_level 4 | Không ra ID; 1903516 là Hà Nội |
| S9 | OSM Vietnam 2025 admin reform tagging | Không có wiki; có thread cộng đồng + nhật ký mapper; AWS/Google đã cập nhật |
| S10 | "phường Thuận Hóa" nhập Phú Hội… (lần 1) | Không xác nhận |
| S11 | OSM site: relation phường Phú Xuân/Thuận Hóa | Không ra relation Huế |
| S12 | GADM 4.1 / geoBoundaries / HDX COD-AB VNM | COD-AB v02 (GSO 2017, sửa 2025); geoBoundaries 2022; GADM chưa rõ |
| S13 | sapnhap.bando.com.vn, Cục ĐĐBĐ | Site tra cứu 34 tỉnh/>3.300 xã; VNSDI bandohanhchinh; NXB không được xác nhận |
| S14 | "phường Thuận Hóa" gồm những phường nào (lần 2) | Không xác nhận |
| S15 | VN-2000 KTT Thừa Thiên Huế, EPSG | EPSG:9214 (TM-3 107-00), conversion 9200, k=0,9999, nguồn TT 973/2001 |
| S16 | Hòn Dấu vs EGM2008/EGM96 | δζ = 0,865 m (một nghiên cứu); EGM96 không có |
| S17 | Cổng dữ liệu mở Huế | data.thuathienhue.gov.vn (2018, HueCIT), QĐ 06/2021; không thấy tên miền mới/CKAN |
| S18 | Thuận Hóa ward merged from… (EN) | Chỉ ra quận; Hương Thủy = Thủy Lương + Thủy Châu + Thủy Tân |
| S19 | GISHue / gis21 | gis21.thuathienhue.gov.vn; QĐ 20/2014; QĐ 2123/2005; 160/167 đồ án QH trên GISHue |
| S20 | HueIOC / Hue-S / camera / tra cứu quy hoạch | KH 2026–2030; >52.000 vi phạm; đèn thông minh 10 nút; không có URL tra cứu QH |
| S21 | QĐ 108/QĐ-TTg; QĐ 1745/QĐ-TTg | 26/01/2024 và 30/12/2023; công bố 06/04/2024; đang điều chỉnh |
| S22 | "có tên gọi là phường Thuận Hóa" | Không ra đoạn nguyên văn |
| S23 | Quy chế quản lý kiến trúc Huế chiều cao | Dự thảo 23/6/2026: Kinh thành ≤ 11 m; QĐ 596/QĐ-UBND 19/3/2021 |
| S24 | Huế LiDAR / DEM / 3D / bản sao số / KOICA | AASCTF–Ramboll 3D từ ảnh vệ tinh; thí điểm bản sao số phường Thuận Hóa; Thái Hòa 3D; ISPRS 2025 |
| S25 | Danh sách camera phạt nguội Huế | Không có danh sách; ~700 camera; 15 nút có biển cảnh báo |
| S26 | QĐ một chiều / phân luồng / cấm đỗ | Họp 31/03/2026 (cửa Đông Ba một chiều thí điểm); QĐ 79/2026/QĐ-UBND; Hai Bà Trưng một chiều (cũ) |
| S27 | QĐ tốc độ / hạn chế xe / Kinh thành | QĐ 01/2022, 42/2024, 39/2025 (giờ cao điểm), 70/2020; biển 30 km/h Kinh thành 08/2025 bị tháo |
| S28 | NĐ 27/2019; TT 33/2019/TT-BTC; NĐ 136/2021 | NĐ 27 (Điều 21–23), NĐ 136, VBHN 04/2024; NĐ 39/2026 (chưa xác minh); thông tư phí không ra |
| S29 | QĐ 1660/QĐ-TTg bí mật nhà nước TN&MT | Đã bị thay bởi QĐ 562/QĐ-TTg (10/3/2025) |
| S30 | 8 tên phường mới (chế độ extended) | **Thuận Hóa, An Cựu, Vỹ Dạ, Thủy Xuân, Mỹ Thượng, Hóa Châu**: thành phần đầy đủ |
| S31 | QĐ 562/QĐ-TTg mục đo đạc bản đồ | Chỉ có ví dụ về biển; mục tọa độ/ảnh hàng không/DEM chưa đọc được |
| S32 | Thread OSM "Tổ chức lại các ĐVHC tại VN" | Thread tồn tại (11 trả lời, 18/01/2026); nội dung không hiện; repo GitHub Free-GIS-Data |
| S33 | Giấy phép GADM / geoBoundaries / HDX | GADM 4.1 (16/07/2022), phi thương mại; hai bộ kia chưa xác minh |
| S34 | Kim Long / Hương An / Thuận An / Phú Xuân | Kim Long = Kim Long + Hương Long + Long Hồ; Hương An = An Hòa + Hương Sơ + Hương An; Thuận An không ra |
| S35 | CSDL nền địa lý 1:2.000/1:5.000 Huế | QCVN 73:2023, TT 27/2024, QĐ 58/2020/QĐ-UBND; độ phủ tại Huế không ra |
| S36 | Hue LiDAR DEM flood WB/ADB/JICA | Không có LiDAR; DEM 10 m (HUSC), FloodAdaptVN (DLR/UNU), ISET flood footprint |
| S37 | KOICA Huế văn hóa du lịch thông minh | 14,8 hoặc ~13 triệu USD; Smart street khánh thành 28/08/2025; không có hạng mục GIS 3D |
| S38 | Ba nền tảng số Huế / tra cứu quy hoạch | Hiến kế, Hỗ trợ DN, Bản đồ số dự án thu hút đầu tư — trên Hue-S |
| S39 | opendata/data/dulieumo.hue.gov.vn | Không thấy tên miền mới; có KH/Đề án chiến lược dữ liệu 2025–2026 |
| S40 | Sở Xây dựng Huế hợp nhất; Sở NN&MT; Viện NCPT | Hợp nhất hiệu lực 01/03/2025; website mới và Viện: không ra |
| S41 | QĐ 596/QĐ-UBND; Quy chế kiến trúc 2026 | Vẫn là dự thảo; đề xuất 12 tầng sát sông Hương gây tranh luận; bờ Bắc ≤ ~2 tầng |
| S42 | Phân luồng Kinh thành / cửa Đông Ba 2026 | KHÔNG CHẠY — hết ngân sách WebSearch của lượt |
| S43 | Thông tư 196/2016/TT-BTC, 33/2019/TT-BTC (phí) | KHÔNG CHẠY — hết ngân sách |
| S44 | Luật ĐĐBĐ xuất bản bản đồ; NĐ 18/2020 | KHÔNG CHẠY — hết ngân sách |
| S45 | HDX cod-ab-vnm 2025, giấy phép | KHÔNG CHẠY — hết ngân sách |
