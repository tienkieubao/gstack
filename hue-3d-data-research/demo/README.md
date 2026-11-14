# Huế 3D · khu pilot — bản demo chạy trên trình duyệt

Bản xem 3D vùng pilot (22,8 km² quanh Kinh thành và sông Hương) dựng hoàn toàn từ dữ liệu mở đã tải trong `../samples/`, kèm chế độ lái UAV và một đoạn bay tự động luồn dưới cầu Trường Tiền. **Đây là mô phỏng minh họa** theo quyết định phạm vi ngày 2026-11-14: không dùng để lập kế hoạch bay thật.

## Chạy

```bash
cd hue-3d-data-research/demo
python3 serve.py            # mở http://localhost:8000
```

Không cần cài gì thêm để xem: `app.js` (đã đóng gói) và `data/*.json` nằm sẵn trong thư mục. Cần trình duyệt có WebGL (Chrome, Edge, Firefox, Safari bản mới). Lần tải đầu đọc khoảng 9,4 MB dữ liệu (gồm ảnh nền Sentinel-2 0,4 MB).

Dựng lại từ mã nguồn:

```bash
python3 ../scripts/11_build_demo_data.py   # samples/ -> demo/data/*.json (gồm traffic.json: mạng đường cho xe mô phỏng)
python3 ../scripts/12_build_demo_imagery.py  # Sentinel-2 -> demo/data/ground_s2.jpg
npm install && npm run build               # src/*.js -> app.js, page.html -> index.html
```

## Ba chế độ

| Chế độ | Điều khiển |
|---|---|
| Khám phá | Chuột trái kéo, chuột phải xoay, cuộn để phóng to; trên điện thoại dùng một ngón kéo, hai ngón xoay/phóng. Bấm vào công trình, cầu, tường thành, mặt đất hoặc mặt nước để xem nguồn dữ liệu và mức tin cậy |
| Lái UAV | `↑/↓` hoặc `W/S` tiến lùi · `←/→` hoặc `Q/E` xoay · `A/D` sang ngang · `Space/Shift` hoặc `R/F` lên xuống · `C` đổi góc nhìn · `Esc` thoát. Hai cần điều khiển trên màn hình dùng được bằng chuột (máy tính) hoặc ngón tay (điện thoại). Dòng "Điều khiển" trong bảng thông số cho biết trang đang nhận lệnh nào. Xoay tăng dần (tối đa mặc định 34°/giây); thanh trượt "Độ nhạy xoay" chỉnh từ 11 đến 80°/giây, trang nhớ lựa chọn |
| Lộ trình bay | Chọn một trong bốn lộ trình bay tự động; bấm vào thẻ để xem đường bay trên bản đồ, bấm **Bay ▶** để bay. Khi bay có thanh tiến độ, điểm sắp tới và nút "Dừng lộ trình, tự lái". Hết lộ trình, UAV dừng lại và bạn cầm lái tiếp |

### Các lộ trình

| Lộ trình | Đi qua | Dài · thời gian | Độ cao |
|---|---|---|---|
| Dọc sông Hương | Cầu Dã Viên → lướt sát mặt sông → Cầu Phú Xuân → Cầu Trường Tiền → Cồn Hến | 4,2 km · ~2,5 phút | 4–114 m (lướt ~3 m trên mặt nước, vượt lên trên các cầu) |
| Kinh thành – Đại Nội | Nghênh Lương Đình → Phu Văn Lâu → bay vòng quanh Kỳ Đài → Ngọ Môn → Điện Thái Hòa → Tử Cấm Thành → Điện Kiến Trung → Duyệt Thị Đường → Cửa Hiển Nhơn → Cửa Đông Ba | 3,4 km · ~2,6 phút | 11–121 m |
| Phố hai bờ | Ga Huế → Trường Quốc Học → Nhà thờ Phủ Cam → Vincom Plaza Huế → Công viên 3 Tháng 2 → Chợ Đông Ba → Cầu Gia Hội | 5,0 km · ~2,8 phút | 21–173 m |
| Luồn dưới cầu Trường Tiền | Hạ sát mặt sông, chạm nước, luồn qua nhịp 3, vòng lại qua nhịp 4 | 0,9 km · ~55 giây | 1–47 m |

Các điểm dừng là đối tượng OpenStreetMap thật (tọa độ lấy từ dữ liệu mẫu, xem `meta.json` → `route_points`). Độ cao do máy lập: đường bay được làm mượt rồi **tự nâng** ở mọi chỗ cách mái nhà, tường thành, mặt cầu, vòm cầu Trường Tiền hoặc cột cờ Kỳ Đài dưới 8 m, cách mặt đất trống dưới 15 m hoặc mặt nước dưới 3 m; độ dốc lên/xuống tối đa 32%. Kiểm tra dọc từng 2 m của cả bốn lộ trình: không điểm nào chạm vào mô hình. Lộ trình "Luồn dưới cầu Trường Tiền" giữ đường bay vẽ tay vì nó cố ý đi dưới mặt cầu.

Bảng thông số khi bay: độ cao trên mặt nước/mặt đất, tốc độ, khoảng trống tới đáy cầu (khi đang ở dưới mặt cầu), số lần chạm nước, số lần va chạm.

Âm thanh động cơ: bật khi bấm "Lái UAV" hoặc "Bay dưới cầu Trường Tiền" (trình duyệt chỉ cho phát âm thanh sau một thao tác của người xem). Phím `M` hoặc nút "Âm thanh" trên bảng thông số để bật/tắt; trang nhớ lựa chọn trên trình duyệt đó. Âm thanh được tổng hợp trực tiếp bằng Web Audio, không dùng tệp ghi âm:

- 4 cánh quạt quay lệch nhau một chút, tạo tiếng "vo vo" có nhịp phách như máy thật; cao độ và độ to tăng theo lực đẩy (lên cao, tăng tốc, xoay), giảm khi hạ độ cao.
- Tiếng gió cánh quạt; tiếng xì bụi nước khi bay thấp hơn ~3 m trên mặt sông; tiếng nước bắn khi chạm nước; tiếng va đập khi đâm vào công trình, trụ cầu.
- Âm lượng giảm theo khoảng cách từ camera tới UAV; tự tắt khi về chế độ Khám phá.

## Xe cộ và người đi bộ (mô phỏng)

Đường phố có xe máy, xe đạp/xích lô, ô tô, xe buýt/xe khách và người đi bộ di chuyển theo thời gian thực. **Đây là mô phỏng, không phải dữ liệu giao thông thật**: không có nguồn mở thời gian thực nào cho giao thông Huế, và dự án không mua hay đăng ký dịch vụ trả phí.

| Thành phần | Nguồn | Mức |
|---|---|---|
| Mạng đường, nút giao | OpenStreetMap: mỗi đường được cắt tại mọi nút dùng chung với đường khác (8.662 đoạn) | Dữ liệu |
| Đường một chiều | Thẻ `oneway` của OSM (636 đoạn) | Dữ liệu; đường không gắn thẻ coi là hai chiều |
| Cấm loại xe | Thẻ OSM `access`, `motorcar`, `motorcycle`, `hgv`, `maxweight`… (87 đoạn) và thẻ cấm theo giờ. Ví dụ cầu Trường Tiền: cấm ô tô 06:30–08:00, 11:00–13:30, 16:00–18:00, 21:00–05:00, cấm xích lô giờ cao điểm. Trình mô phỏng áp theo giờ Huế hiện tại | Dữ liệu OSM (chưa kiểm chứng ngoài thực địa) |
| Tỷ lệ loại xe | Xe máy 76%, ô tô 15%, xe đạp/xích lô 5%, xe buýt/xe khách 4% | Giả định |
| Tốc độ | Xe máy 27–40 km/h, ô tô 31–45 km/h trên đường chính; giảm trên đường nhỏ và khi tới nút giao | Giả định |
| Mật độ theo giờ | Đường cong cao điểm sáng, trưa, chiều; vắng sau 22 giờ. Lấy giờ Huế (UTC+7) của máy người xem | Giả định |
| Hành vi | Đi bên phải, giữ khoảng cách với xe phía trước cùng làn, chậm lại ở nút giao; không có đèn tín hiệu, xe không nhường nhau trong nút giao | Đơn giản hóa |

Chỉ khu vực đang xem có xe: xe ra khỏi vùng nhìn sẽ xuất hiện lại trên một con đường gần tâm nhìn (máy tính tối đa 2.200 xe và 900 người, điện thoại 700 và 260). Bảng "Lớp dữ liệu" có công tắc bật/tắt và ô chọn mật độ (theo giờ Huế, thưa, vừa, đông); dòng trạng thái cho biết giờ Huế và số xe, người đang mô phỏng. Bấm vào một xe để xem loại xe và tốc độ. UAV bay thấp có thể va vào xe (tính là một lần va chạm). Khi bay thấp trên phố có tiếng xe cộ và còi (tổng hợp, không phải ghi âm).

## Hình ảnh

- **Ảnh vệ tinh phủ mặt đất**: Sentinel-2 L2A cảnh S2B_48QYD_20260330 (màu thật, độ phân giải gốc 10 m), chiếu về khung cảnh và nội suy lên 4 m/px. Nội suy chỉ làm ảnh mịn hơn, không thêm chi tiết: ở độ phân giải này thấy rõ ruộng, mảng cây, bãi cát, màu nước, nhưng không thấy từng nhà hay vạch đường. Ảnh được chỉnh sáng, tương phản, độ bão hòa để hiển thị; điểm ảnh không còn là số đo phản xạ. Ở gần, mặt đất có thêm hạt nhiễu thủ tục để đỡ nhòe.
- **Bầu trời và nắng**: bầu trời tán xạ vật lý (Sky của three.js), mặt trời cố định hướng tây tây nam, cao 38° (khoảng 15 giờ). Không gắn với ngày giờ thật.
- **Bóng đổ**: công trình, cây, cầu, tường thành và UAV đổ bóng lên nhau và lên mặt đất. Vùng bóng đi theo UAV khi bay, theo tâm nhìn khi khám phá. Mặc định bật trên máy tính, tắt trên điện thoại.
- **Mặt tiền và mái**: cửa sổ theo tầng 3,3 m, tầng trệt mở kiểu nhà ống, vệt bẩn chân tường, ố vữa; mái màu ấm có hàng ngói, mái bê tông có vết loang. Tất cả là **mẫu vẽ thủ tục**, không lấy từ ảnh thật của từng nhà: số tầng, vị trí cửa, loại mái chỉ là minh họa. Chi tiết mờ dần sau ~350 m để không nhấp nháy.
- **Cây**: tán cây có độ gồ ghề, đổ bóng.

Bảng "Lớp dữ liệu" có hai công tắc: "Ảnh vệ tinh mặt đất" (tắt để về màu theo lớp phủ ESA WorldCover) và "Bóng đổ" (tắt nếu máy chậm). Khi tô màu "Theo nguồn chiều cao", mẫu mặt tiền tự tắt để màu nguồn dễ đọc.

## Cái gì là dữ liệu, cái gì là giả định

| Thành phần | Nguồn | Mức |
|---|---|---|
| Vị trí đường, cầu, mặt nước, dấu chân công trình, tường thành | OpenStreetMap / Overture 2026-10-21.0 | Dữ liệu (cộng đồng vẽ hoặc học máy) |
| Chiều cao công trình | Thẻ OSM (34 nhà) → ước lượng học máy Open Buildings 2.5D 2023 (≈ 84%) → mặc định 4,5 m (≈ 16%) | Chủ yếu ước lượng; xem bằng chế độ tô màu "Theo nguồn chiều cao" |
| Mặt đất | Copernicus GLO-30 (30 m), lọc và làm mượt | Thay thế gần đúng, không phải số đo địa hình |
| Màu mặt đất | Ảnh Sentinel-2 L2A 2026-03-30 (10 m), chỉnh màu hiển thị | Dữ liệu ảnh, độ phân giải thô; nhà nhỏ hơn ~20 m không nhận ra |
| Cửa sổ, mặt tiền, ngói, bóng đổ, hướng nắng | Vẽ thủ tục trong shader | Minh họa |
| Mực nước, độ sâu lòng sông | Quy ước 0,5 m; độ sâu tự đặt | Giả định |
| Bề rộng đường | Theo cấp đường OSM (và số làn khi có) | Giả định |
| Cao độ mặt cầu | Mô hình ràng buộc: cao độ mặt đất hai đầu, dốc lên mượt, phẳng ở độ cao = mực nước + khoảng tĩnh không giả định (6,5 m cầu lớn, 2,2 m cầu nhỏ) | Giả định |
| Cầu Trường Tiền | 6 nhịp đều dọc tim cầu OSM (số nhịp, chiều dài 402,6 m theo nguồn công bố); vòm cao 9 m, dầm 1,2 m, kích thước trụ là giả định | Phác thảo |
| Ngọ Môn, Kỳ Đài, điện Thái Hòa | Dấu chân OSM + số liệu công bố (Kỳ Đài 17,5 m, cột cờ 37 m; nền Ngọ Môn ~5 m); tỷ lệ các tầng mái là giả định | Phác thảo |
| Vincom Plaza Huế + tháp Meliá Vinpearl | Khối đế 5 tầng thương mại (công bố) trên dấu chân OSM; tháp 33 tầng nổi (Nhà Đầu Tư 2018; Meliá ghi 34) đặt theo vùng ≥ 60 m của ảnh độ cao học máy Open Buildings 2.5D 2023. Cao ~116 m = 5 × 4,5 m + 28 × 3,3 m (chiều cao tầng giả định). OSM ghi cả khối 160 m / 39 tầng, học máy ~99 m: các nguồn chưa khớp | Phác thảo |
| Nhà thờ chính tòa Phủ Cam | Mặt bằng chữ thập đo trên dấu chân OSM; mặt trước là đầu gần đường Nguyễn Trường Tộ; hai tháp chuông 43,5 m (7 tầng) và mái 32 m theo số liệu công bố; hình tháp theo ảnh Commons 2024 (CC BY 4.0, Chainwit.). Mái hiên, độ dốc mái, cửa sổ là giả định | Phác thảo |
| Cây | Rải ngẫu nhiên (hạt giống cố định) trong ô "tree cover" của ESA WorldCover, tránh nhà/đường/nước; 72 cây có vị trí OSM | Minh họa |
| Vật lý UAV, va chạm, nước bắn, âm thanh động cơ | Mô hình đơn giản kiểu trò chơi; âm thanh tổng hợp, không ghi từ máy bay thật | Minh họa |

Danh sách giả định đầy đủ cũng nằm trong `data/meta.json` (khóa `assumptions`) và trong `provenance.json` ở thư mục gốc.

Hai chi tiết đến thẳng từ đợt kiểm định dữ liệu:

- Đường chính của cầu Trường Tiền trong OpenStreetMap **thiếu thẻ `bridge`**. Bản demo vẫn dựng nó thành cầu nhờ kiểm tra hình học "đường nằm trên mặt nước ≥ 15 m".
- 93 dấu chân học máy nằm trên mặt nước bị loại bỏ trước khi dựng.

## Cấu trúc

| Tệp | Nội dung |
|---|---|
| `page.html` | Giao diện (dạng đoạn thân trang, dùng được cho nơi đăng tự thêm khung tài liệu) |
| `index.html` | Bản đầy đủ của `page.html` cho chạy cục bộ (sinh bởi `wrap.mjs`) |
| `src/main.js` | Nạp dữ liệu, chế độ, camera, chọn đối tượng, giao diện |
| `src/world.js` | Dựng địa hình, nước, đường, cầu, công trình, tường thành, mốc di tích, cây, bầu trời; hình khối va chạm |
| `src/uav.js` | Mô hình UAV, điều khiển, quỹ đạo bay dưới cầu Trường Tiền |
| `src/fx.js` | Bụi nước dưới cánh quạt, nước bắn khi chạm, vòng sóng |
| `src/audio.js` | Âm thanh động cơ tổng hợp (Web Audio) |
| `src/routes.js` | Định nghĩa 3 lộ trình, bộ lập đường bay tránh vật cản, đường bay xem trước |
| `src/traffic.js` | Giao thông mô phỏng: mạng đường, luật một chiều/cấm xe theo OSM, mật độ theo giờ, mô hình xe và người |
| `app.js` | Bản đóng gói (three.js 0.169.0 + mã trên) |
| `data/*.json` | Dữ liệu cảnh sinh bởi `../scripts/11_build_demo_data.py` |

Hệ tọa độ cảnh: mét, gốc tại tâm pilot trong EPSG:32648 (E 775352, N 1823015); x hướng đông, z hướng nam, y hướng lên (theo cao độ GLO-30, EGM2008).

## Nếu không điều khiển được

- Bấm một lần vào cảnh 3D. Nếu tiêu điểm đang ở ngoài khung demo, giữa màn hình sẽ hiện nút "Bấm vào đây để bàn phím điều khiển được UAV".
- Bộ gõ tiếng Việt (Unikey, EVKey, Telex/VNI) có thể đổi phím W thành "ư" và gửi lại mỗi phím dưới dạng "nhấn rồi nhả ngay", không có trạng thái giữ phím. Trang xử lý cả hai trường hợp: mỗi lần nhấn như vậy đẩy UAV một nhịp ~0,6 s và các lần lặp nối liền nhau. Nếu vẫn giật, tắt bộ gõ khi lái hoặc dùng phím mũi tên.
- Dùng hai cần tròn ở giữa đáy màn hình bằng chuột nếu bàn phím vẫn không ăn.

## Giới hạn đã biết

- Kiểm thử bằng trình duyệt không đầu (render phần mềm): giao diện máy tính 1100×700 và điện thoại Pixel 7, chế độ khám phá, lái tay, bay tự động trọn đoạn (khoảng trống nhỏ nhất tới đáy cầu đo được trong mô phỏng: 4,0 m; không va chạm). Chưa thử trên GPU thật hay trên iPhone.
- Khoảng 1,5 triệu tam giác (chưa kể cây và cầu dạng instance); máy tính phổ thông nên chạy tốt, điện thoại cũ có thể giật.
- Va chạm dùng hình lăng trụ theo dấu chân, đủ cho mái phẳng; không mô phỏng gió, pin, tín hiệu.
- Camera bám sau có thể chui vào dưới mặt cầu khi UAV vừa ra khỏi gầm cầu.
- Mái nhà phẳng (không có mái dốc, trừ mốc di tích); mặt tiền là mẫu thủ tục, không phải ảnh chụp từng nhà; không có biển báo, cột điện, dây điện.
- Bóng đổ tốn GPU: máy tính yếu có thể giật khi bật. Chưa đo khung hình trên GPU thật.
- Ảnh vệ tinh là một cảnh duy nhất (30/03/2026), không ghép nhiều ngày; chưa kiểm tra mây từng điểm ảnh trong vùng pilot.
