# Kiểm chứng mẫu pilot (Vùng A)

Tài liệu này báo cáo **kết quả kiểm tra thực tế trên dữ liệu đã tải**, không phải nhận định chung. Mọi con số đều sinh ra từ `scripts/06_validate_pilot.py`, `07_coverage_stats.py`, `09_fetch_building_heights.py` và nằm trong `samples/normalized/validation/`. Ngày tải dữ liệu: 2026-11-14.

Giới hạn cần nhớ: các kiểm tra dưới đây đo **những gì nguồn dữ liệu chứa** (độ đầy đủ thuộc tính, tính nhất quán topology, hành vi của DEM dưới cầu). Chúng **không** đối chiếu với thực địa. Chưa có phép đo thực địa nào trong đợt này.

Vùng pilot: hình chữ nhật dự án 107,556–107,602°E, 16,452–16,494°N (22,83 km²), gồm Kinh thành/Đại Nội, hai bờ sông Hương, các cầu Trường Tiền, Phú Xuân, Dã Viên và một phần cầu Nguyễn Hoàng, Chợ Dinh. Ảnh tổng quan: `samples/normalized/reference/pilot_overview.png`.

---

## 1. Mạng đường (OSM, 4.043 way `highway`)

Mạng xe cơ giới: 3.188 way, **452,2 km**, 3.543 nút giao bậc ≥ 3, 1.517 đầu cụt (nhiều đầu cụt là kiệt/hẻm thật; một phần là hệ quả của mép vùng cắt).

### 1.1 Độ đầy đủ thuộc tính (tính theo % chiều dài)

| Nhóm đường | Số way | km | Tên | Thẻ `oneway` | `lanes` | `maxspeed` | `surface` | `width` | `sidewalk` | `turn:lanes` |
|---|---|---|---|---|---|---|---|---|---|---|
| Chính (trunk → tertiary + nhánh nối) | 305 | 111,2 | 96,4% | 35,4% | 28,6% | **2,0%** | 60,0% | 0,0% | 0,7% | 0,0% |
| Nội bộ (residential, unclassified, living_street) | 1.379 | 245,9 | 53,2% | 3,1% | 6,4% | 0,5% | 19,7% | 0,0% | 0,2% | 0,0% |
| Service (kiệt, lối vào) | 1.504 | 95,2 | 6,4% | 0,7% | 0,1% | 0,2% | 3,1% | 0,1% | 0,0% | 0,0% |
| Không cơ giới (footway, path, steps…) | 849 | 71,5 | 4,9% | 0,3% | 0,0% | 0,0% | 18,4% | 2,2% | 0,3% | 0,0% |

Nguồn: `validation/road_attribute_completeness.csv`.

Diễn giải:

- **Hình học và tên đường chính dùng được ngay** (96% có tên).
- **Tốc độ gần như không có**: chỉ 13 way có `maxspeed` (50 ×6, 30 ×4, 20 ×2, 40 ×1). Không có nút `traffic_sign` nào, không có `stop`/`give_way`, không có `speed_camera`.
- **Số làn**: 115 way (2 làn ×89, 3 làn ×12, 4 làn ×11, 1 làn ×3). Không có `turn:lanes`, không có bề rộng.
- **Chiều lưu thông**: trong 3.188 way xe cơ giới, chỉ **186** có thẻ `oneway` tường minh (trạng thái `observed`); **3.002** way còn lại được coi là hai chiều chỉ vì quy ước mặc định của OSM (trạng thái `inferred`). Với lớp đường chính, 35,4% chiều dài có thẻ — tức mapper đã ghi các tuyến một chiều họ biết, nhưng **không thể phân biệt "hai chiều đã kiểm" với "chưa ai kiểm"**.
- Có **8 way** mang `oneway:conditional` và **111 way** hạn chế ô tô (`motorcar=destination` ×95, `motorcar=no` ×16) — chủ yếu trong Kinh thành và trên cầu. Đây là quy định theo giờ/loại xe do cộng đồng ghi, cần đối chiếu văn bản tổ chức giao thông hiện hành (xem `source_catalog.csv` A18).

### 1.2 Cấm rẽ, đèn tín hiệu, camera

| Đối tượng | Số lượng trong OSM (pilot) | Ghi chú |
|---|---|---|
| Quan hệ `type=restriction` | 13 | 4 `no_straight_on`, 2 `no_right_turn`, 2 `no_left_turn`, **5 có điều kiện theo giờ** (08:30–10:30, 14:30–16:30; 16:30–19:00) |
| Nút `highway=traffic_signals` | 21 | Báo chí nêu 15 nút giao có camera phạt nguội và kế hoạch 10 nút đèn thông minh — chưa có danh sách để đối chiếu |
| Nút `highway=crossing` | 226 | 123 `uncontrolled`, 30 `marked`, 8 `traffic_signals` |
| `man_made=surveillance` | 6 | Không ghi loại; HueIOC được báo có ~700 camera → OSM gần như không có lớp này |
| Biển báo, camera tốc độ | 0 | — |

Kết luận phần này: OSM tại pilot đủ để **vẽ** mạng đường và nút giao; **không đủ** để chỉ đường có trách nhiệm. 13 quan hệ cấm rẽ cho 3.543 nút giao không nói lên rằng các nút còn lại được phép rẽ tự do — chỉ là chưa ai ghi.

### 1.3 Overture so với OSM

Overture (bản 2026-10-21.0) tại pilot: 5.665 segment (5.656 từ OSM, 9 từ TomTom), 464 km đường. Thuộc tính dẫn đường mang theo: 25 đoạn có `speed_limits`, 5 có `prohibited_transitions`, 507 có `access_restrictions`, 177 có `level_rules`. Lược đồ bản này **không có trường số làn**. Overture là OSM được chuẩn hóa lại — tiện về định dạng, không bổ sung sự thật mới về giao thông.

---

## 2. Cầu

OSM có 122 way gắn `bridge=*` (đường bộ + đường sắt), gộp thành 109 nhóm liên thông; 54 nhóm dài ≥ 50 m. Bảng đầy đủ: `validation/bridges.csv`.

| Thuộc tính trên 109 nhóm cầu | Có | Không |
|---|---|---|
| `layer` (thứ tự tầng) | 100 | 9 |
| `lanes` | 9 | 100 |
| `maxspeed` | 8 | 101 |
| `maxweight` | 5 | 104 |
| `maxheight` | 0 | 109 |
| `width` | 0 | 109 |
| `ele` (cao độ) | 0 | 109 |
| `bridge:structure` | 1 | 108 |
| Cả hai đầu nối vào mạng | 97 | 12 |

12 nhóm "đầu không nối" gồm các cầu đi bộ ngắn trong Hoàng thành và các cầu nằm sát mép vùng cắt (ví dụ cầu Bao Vinh) — với cầu sát mép, đây là **hiện vật của việc cắt bbox**, không phải lỗi dữ liệu; khi chạy toàn vùng phải kiểm lại.

### 2.1 Phát hiện quan trọng: cầu Trường Tiền không có thẻ `bridge`

Way đường xe chính của cầu Trường Tiền (`174759688`, sửa lần cuối 2026-09-01) có `highway=secondary`, `lanes=2`, `layer=2`, `motorcar:conditional=no @ (06:30-08:00, 11:00-13:30, 16:00-18:00, 21:00-23:59, 00:00-05:00)`, `wikidata=Q10752407` — nhưng **không có `bridge=yes`**. Hai lối đi bộ hai bên (way `1167997494`, `1493443040`) thì có.

Hệ quả: một pipeline lọc cầu bằng `bridge=*` sẽ **bỏ sót cây cầu biểu tượng nhất của Huế** và dựng mặt đường nằm trên mặt nước. Kiểm tra hình học độc lập (`roads_over_water_without_bridge_tag.csv`: way xe cơ giới không có thẻ cầu/hầm nhưng nằm trên đa giác nước ≥ 15 m) bắt được đúng trường hợp này: **315,3 m** của way nằm trên sông Hương.

Bài học thiết kế: phát hiện cầu phải là **hợp của ba tín hiệu** — thẻ `bridge`, đa giác `man_made=bridge`, và phép thử hình học "đường cắt mặt nước/đường khác mà không có nút chung".

Ngoài ra đa giác `man_made=bridge` của Trường Tiền (way `1431129413`) ghi `bridge:structure=suspension`. Các nguồn công bố mô tả cầu là dầm/vòm thép 6 nhịp ("vành lược"), không phải cầu treo — thẻ này nhiều khả năng sai và **không được dùng để chọn mẫu kết cấu khi dựng hình**.

### 2.2 Các cầu chính qua sông Hương trong pilot

| Cầu | Way OSM chính | Dài theo OSM | Dài công bố | `layer` | Làn | Hạn chế trong OSM | Ghi chú |
|---|---|---|---|---|---|---|---|
| Trường Tiền | 174759688 | 408,3 m | 402,60 m (Wikidata Q10752407; nguồn khác 401–403 m) | 2 | 2 | cấm ô tô theo giờ (có điều kiện) | thiếu `bridge=yes`; lệch dài +5,7 m (1,4%) |
| Phú Xuân | 39419121 | 405,5 m | 374,65 m (chỉ qua tìm kiếm) | 2 | 4 | `maxweight=25` | way có thể gồm một phần đường dẫn; công bố tải trọng 18 tấn ≠ thẻ 25 → mâu thuẫn chưa giải |
| Dã Viên (đường bộ) | 2 chiều × 3 way | 562–573 m mỗi chiều | 542,5 m gồm đường dẫn (chỉ qua tìm kiếm) | 2 | 2 mỗi chiều | — | hai lòng đường một chiều |
| Nguyễn Hoàng | 4 way song song | 409–412 m | 380 m (chỉ qua tìm kiếm) | 1 | 3 + 1 mỗi chiều | làn `motorcar=no` riêng | thông xe kỹ thuật 03/2025 theo báo chí |
| Bạch Hổ (đường sắt) | way `railway=rail` | 302,2 m + 106,3 m | 302,1 m + 102,7 m (chỉ qua tìm kiếm) | 2 | — | `maxspeed=100` | khớp tốt với số công bố |
| Chợ Dinh | 3 way | 442,3 m tổng | — | (thiếu ở 2 way) | — | — | 2 giao cắt "cùng tầng không nút chung" cần rà soát |

Không cầu nào có cao độ mặt cầu, tĩnh không thông thuyền, chiều cao kết cấu hay bề rộng trong OSM. Nguồn công bố duy nhất về tĩnh không tìm được là cầu Nguyễn Hoàng ("thông thuyền cao 6 m", một bài báo, chưa kiểm chứng).

### 2.3 DEM không cho cao độ mặt cầu — bằng chứng đo được

Lấy mẫu Copernicus GLO-30 mỗi 10 m dọc tim cầu:

| Cầu | GLO-30 dọc tim cầu (min → max) | GLO-30 tại hai đầu | Phần trên mặt nước (WorldCover) |
|---|---|---|---|
| Phú Xuân | 0,50 → 11,57 m | 7,75 ; 5,57 m | 51% |
| Trường Tiền (lối bộ hành) | 0,50 → 8,59 m | 8,59 ; 6,25 m | 71% |
| Dã Viên | 0,50 → 6,56 m | 6,56 ; 5,79 m | 14–18% |
| Nguyễn Hoàng | 0,50 → 7,07 m | 7,07 ; 2,36 m | 83% |
| Cầu gỗ lim (đi bộ ven sông) | 0,50 → 0,50 m | 0,50 ; 0,50 m | 97% |

Giá trị **0,50 m** lặp lại là mặt nước đã được làm phẳng trong sản phẩm GLO-30 (trên toàn bộ điểm ảnh nước của pilot: trung vị 0,50 m). Dọc cầu, DEM lúc thì đọc mặt nước, lúc thì đọc một phần kết cấu cầu (11,57 m ở Phú Xuân là nhiễu hỗn hợp của điểm ảnh 30 m), **không tạo thành một mặt cầu liên tục**. Kết luận kiểm chứng được: không dùng DEM địa hình làm cao độ mặt cầu; cao độ mặt cầu phải đến từ LiDAR/khảo sát hoặc từ mô hình hình học có ràng buộc (xem `reconstruction_plan.md` §5).

---

## 3. Nút giao và giao cắt khác mức

Kiểm tra: tìm mọi cặp way `highway` cắt nhau trên mặt bằng **mà không có nút chung** (`validation/crossings.csv`).

| Loại | Số điểm | Trong đó cả hai là đường xe cơ giới |
|---|---|---|
| Khác `layer` (giao khác mức theo thẻ) | 32 | 5 |
| Cùng `layer`, không nút chung → **cần rà soát** | 6 | 2 |

- 32 điểm "khác mức theo thẻ" hầu hết là cầu vượt kênh/hào và lối đi bộ dưới cầu. `layer` chỉ cho biết **thứ tự trên/dưới**, không cho biết chênh cao bao nhiêu mét.
- 6 điểm cần rà soát: 2 điểm ở cầu Chợ Dinh (way `1487369323`, `118537588` có `bridge=yes` nhưng **không có `layer`**, cắt đường ven sông) — gần chắc chắn là giao khác mức thiếu thẻ; 4 điểm là lối đi bộ/đường service vẽ chồng nhau không nối. Nếu đưa nguyên vào routing: hai trường hợp đầu không tạo lối rẽ sai (vì không có nút chung) nhưng sẽ dựng hình sai tầng; bốn trường hợp sau có thể là **thiếu kết nối** thật.
- Pilot có 4 way `junction=roundabout` (ví dụ "Bùng binh Hùng Vương"), tất cả đều có `oneway=yes`.

Về "nút giao thực sự": mọi nút giao cùng mức trong OSM được biểu diễn bằng nút chung; kiểm tra trên cho thấy dữ liệu pilot **nhất quán về mặt topology ở mức 38 ngoại lệ trên 4.043 way**. Điều chưa biết là hướng rẽ được phép tại từng nút (mục 1.2).

## 4. Hầm, đường chui

OSM có 25 way `tunnel=*` (tổng 345 m): 18 lối đi bộ, 7 đường xe. **Không có hầm đường bộ hay hầm chui nút giao nào trong pilot.** Các "hầm" đường xe là **cổng thành xuyên qua tường Kinh thành** (ví dụ Cửa Quảng Đức 15,8 m; đoạn Nguyễn Trãi 26,4 m; Đinh Tiên Hoàng 14,6 m, `layer=-1`) và lối xuyên nhà. Không way nào có `maxheight` bằng số (một way ghi `below_default`).

Hệ quả: cổng thành phải được dựng như **lỗ mở trong khối tường** (tường dày ~21 m theo số công bố), không phải hầm dưới mặt đất dù OSM gắn `layer=-1`. Chiều cao/bề rộng thông xe của từng cổng là dữ liệu bắt buộc phải đo trước khi chỉ đường cho ô tô/xe du lịch — hiện **unknown**.

---

## 5. Địa hình

| Chỉ số (Copernicus GLO-30, cửa sổ pilot 151 × 166 điểm ảnh, ~30,9 m) | Giá trị |
|---|---|
| Toàn vùng: min / trung vị / p95 / max | 0,20 / 5,68 / 10,14 / 24,41 m |
| Trên điểm ảnh nước (WorldCover) : trung vị / p95 | 0,50 / 3,50 m |
| Trên điểm ảnh xây dựng: p05 / trung vị / p95 | 3,57 / 6,41 / 10,65 m |
| Trên điểm ảnh cây: trung vị / p95 | 5,23 / 10,79 m |
| GLO-30 trừ SRTM-skadi: trung bình / độ lệch chuẩn / p05 / p95 | −0,96 / 2,31 / −4,63 / +2,75 m |

Diễn giải:

- Pilot **rất phẳng**: 90% điểm ảnh nằm trong dải ~3–10 m. Sai số công bố của GLO-30 (LE90 < 4 m, chưa đọc đặc tả gốc) **cùng cỡ với toàn bộ biên độ địa hình** → DEM toàn cầu chỉ đủ để đặt mô hình "nằm đúng mặt đất" ở mức hiển thị; không phân giải được taluy đường, bờ kè, độ dốc đường dẫn cầu, nền Kinh thành so với phố.
- GLO-30 là **DSM**: giá trị trên khu xây dựng (trung vị 6,41 m) cao hơn mặt nước ~6 m và lẫn mái nhà, cây. Chênh −0,96 ± 2,31 m so với SRTM trộn lẫn khác biệt datum (EGM2008 vs EGM96), thời điểm (2010–2015 vs 2000) và làm tròn số nguyên — không tách được nếu không có điểm kiểm tra.
- Lớp phủ (ESA WorldCover 2021) trong pilot: xây dựng 60,1%, cây 20,2%, nước 13,6%, trồng trọt 3,6%, cỏ 2,0%.
- Hệ độ cao: GLO-30 theo EGM2008; hệ quốc gia Hòn Dấu lệch khoảng 0,86–0,87 m theo một số nghiên cứu (chỉ qua kết quả tìm kiếm, dấu chưa xác nhận). Chưa có mốc nào tại Huế để kiểm.

---

## 6. Công trình

### 6.1 Dấu chân

| Nguồn (pilot) | Số dấu chân | Trạng thái | Diện tích trung vị |
|---|---|---|---|
| OSM (vẽ tay) | 4.476 | observed | 107,1 m² |
| Google Open Buildings (ML) | 34.797 | derived | 43,9 m² |
| Microsoft ML Buildings | 21.842 | derived | 68,4 m² |
| **Tổng (Overture)** | **61.115** | 92,7% derived | — |

- OSM chỉ chứa ~7% số công trình; phần còn lại là dấu chân học máy. Ảnh tổng quan cho thấy phân bố không đều: OSM dày ở trung tâm bờ Nam và trong Hoàng thành; Google chiếm phần lớn nội Kinh thành phía tây/bắc; Microsoft ở bờ Nam và phía đông.
- Cờ chất lượng: **96** dấu chân ML chồng lên đa giác mặt nước; 0 dấu chân ML cắt tim đường chính; 8 dấu chân OSM cắt tim đường chính (cổng thành, nhà vượt đường — hợp lý).
- Độ tin cậy Google (`ml_confidence`): 5% thấp nhất 0,66; trung vị 0,74. Đây là điểm của mô hình, **không phải xác suất đã hiệu chuẩn tại Huế**.
- Chưa đo được tỷ lệ gộp/tách nhà liền kề (nhà ống) vì không có dữ liệu tham chiếu — đây là việc của bước kiểm định bằng LiDAR/ảnh UAV.

### 6.2 Chiều cao, số tầng, mái

| Thuộc tính | OSM (4.550 công trình) | Overture (61.115) |
|---|---|---|
| Chiều cao (`height`) | 2 | 2 (0,003%) |
| Số tầng | 40 | 36 (0,06%) |
| Dạng mái | 1 | 1 |
| Tên | 178 | — |
| `building:architecture` | 175 | — |

Với nguồn mở, **chiều cao công trình gần như hoàn toàn unknown**. Nguồn bổ sung đã thử: Google Open Buildings 2.5D Temporal (mốc 2023), gán theo thống kê vùng lên từng dấu chân (`validation/building_height_check.json`):

- 51.230 / 61.115 dấu chân (**83,8%**) nhận được ước lượng; 16,2% không có (mô hình không coi vị trí đó là nhà).
- Phân bố ước lượng: p05 3,65 m; trung vị 5,66 m; p95 9,13 m; p99 12,65 m; chỉ 1,85% trên 11 m — phù hợp về bậc độ lớn với đô thị thấp tầng và trần 11 m trong Kinh thành (quy định chỉ biết qua kết quả tìm kiếm).
- So với 29 công trình có thẻ số tầng trong OSM (giả định 3,3 m/tầng): lệch tuyệt đối trung vị **3,2 m**, lệch trung bình +1,8 m. Ví dụ khớp: khách sạn 15 tầng → ước lượng 49,6 m (15 × 3,3 = 49,5). Mẫu quá nhỏ và chiều cao tầng là giả định, nên đây là **chỉ báo, không phải đánh giá độ chính xác**.
- Với di tích, ước lượng **không dùng được**: Kỳ Đài (đài 3 tầng ~17,5 m theo số công bố) không được mô hình nhận là công trình (0 điểm ảnh); điện Thái Hòa chỉ có 6 điểm ảnh, ước lượng 5,9 m; Ngọ Môn 9,4 m (trung vị) trong khi nền đài đã cao gần 5 m cộng lầu Ngũ Phụng hai tầng.

### 6.3 Công trình biểu tượng trong OSM

| Công trình | Đối tượng OSM | Thuộc tính có | Thiếu |
|---|---|---|---|
| Ngọ Môn | way 172657562 | `building=yes`, `building:levels=3` | chiều cao, mái, cấu trúc chữ U |
| Kỳ Đài | way 218427614 | `building=yes` | chiều cao, 3 tầng đài, cột cờ |
| Điện Thái Hòa | way 531031566 | `building:levels=2`, wikidata Q6826745 | chiều cao, mái trùng thiềm |
| Điện Kiến Trung | way 285990348 | `building=yes` | tất cả |
| Kinh thành | relation 21657722 `historic=castle` | ranh | chiều cao/bề dày tường, pháo đài |
| Hoàng thành | node 5182931945 | điểm, wikidata Q10769129 | hình học tường |
| Tường thành | 18 đối tượng `city_wall` (Overture infrastructure) | tim tường | chiều cao, bề dày |

Wikidata không có chiều cao (P2048) cho bất kỳ mục nào trong 7 mục đã tra; chỉ có chiều dài cầu Trường Tiền (402,60 m) và diện tích Kinh thành (159,71 ha).

---

## 7. Ảnh tham chiếu

- Wikimedia Commons (truy vấn theo tọa độ, trạng thái cuối 2026-11-14 04:12 UTC): **208 tệp** quanh 5 mốc — Ngọ Môn ≥ 50 và điện Thái Hòa ≥ 100 (chạm giới hạn mỗi truy vấn), Kỳ Đài 13, cầu Trường Tiền 36, cầu Phú Xuân 9. **158 tệp** có giấy phép mở đọc được từ metadata (CC BY 95, CC BY-SA 40, CC0 11, phạm vi công cộng 12); 50 tệp chưa có trường giấy phép trong phản hồi. Danh mục: Citadel of Huế 456 tệp, Imperial City 201, Flag Tower 55, Truong Tien Bridge 49, Phu Xuan Bridge 10. **Chưa tải được tệp ảnh nào**: máy chủ ảnh của Wikimedia trả HTTP 429 (giới hạn tốc độ) ở mọi lần thử; danh sách ảnh kèm tác giả/giấy phép/URL nằm trong `validation/commons_reference_photos.csv` để tải lại sau.
- Sentinel-2: 1 cảnh sạch mây (S2B, 2026-03-30, 0,007% mây) — đủ để kiểm tra bố cục sông/hào/khối đô thị ở 10 m, không đủ cho công trình.
- Ảnh đường phố mở: Panoramax **0 ảnh** tại Huế (đã truy vấn); Mapillary chưa kiểm được (cần token); KartaView lỗi chứng chỉ TLS.
- Mô hình 3D tham chiếu: 55 mô hình Sketchfab liên quan đã đọc metadata; không mô hình nào của Trường Tiền hay Kỳ Đài; các mô hình Đại Nội chi tiết nhất của Hue Museum of Heritages không cho tải.

---

## 8. Tóm tắt nghiệm thu dữ liệu pilot

| Hạng mục | Đủ để hiển thị 3D? | Đủ để chỉ đường? | Căn cứ |
|---|---|---|---|
| Hình học mạng đường | Có | Có điều kiện (cần kiểm kết nối tại 6 điểm + cổng thành) | §1, §3 |
| Chiều lưu thông | Có (không ảnh hưởng hình) | **Không** — 94% way xe cơ giới chỉ là mặc định | §1.1 |
| Số làn, bề rộng, vỉa hè | Nội suy được theo phân cấp | **Không** | §1.1 |
| Tốc độ, biển báo | — | **Không** — 2% km đường chính | §1.1 |
| Cấm rẽ | — | **Không** — 13 quan hệ, không biết độ đầy đủ | §1.2 |
| Cầu: vị trí, chiều dài | Có (lệch 1–8% so với số công bố) | Vị trí có; tải trọng/giờ cấm phải xác minh | §2 |
| Cầu: cao độ, tĩnh không, kết cấu | **Không có dữ liệu** → phải mô hình hóa có ràng buộc | Không | §2.3 |
| Địa hình | Có ở mức nền (30 m) | Không dùng cho độ dốc | §5 |
| Mặt nước, bờ sông | Có (đa giác OSM) | — | A06 |
| Dấu chân công trình | Có (93% là ML, cần lọc) | Không liên quan | §6.1 |
| Chiều cao công trình | Ước lượng ML ±3 m cho 84% | Không liên quan | §6.2 |
| Di tích biểu tượng | **Không** — chỉ có dấu chân | — | §6.3 |
