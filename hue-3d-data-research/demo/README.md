# Huế 3D · khu pilot — bản demo chạy trên trình duyệt

Bản xem 3D vùng pilot (22,8 km² quanh Kinh thành và sông Hương) dựng hoàn toàn từ dữ liệu mở đã tải trong `../samples/`, kèm chế độ lái UAV và một đoạn bay tự động luồn dưới cầu Trường Tiền. **Đây là mô phỏng minh họa** theo quyết định phạm vi ngày 2026-11-14: không dùng để lập kế hoạch bay thật.

## Chạy

```bash
cd hue-3d-data-research/demo
python3 serve.py            # mở http://localhost:8000
```

Không cần cài gì thêm để xem: `app.js` (đã đóng gói) và `data/*.json` nằm sẵn trong thư mục. Cần trình duyệt có WebGL (Chrome, Edge, Firefox, Safari bản mới). Lần tải đầu đọc khoảng 9 MB dữ liệu.

Dựng lại từ mã nguồn:

```bash
python3 ../scripts/11_build_demo_data.py   # samples/ -> demo/data/*.json
npm install && npm run build               # src/*.js -> app.js, page.html -> index.html
```

## Ba chế độ

| Chế độ | Điều khiển |
|---|---|
| Khám phá | Chuột trái kéo, chuột phải xoay, cuộn để phóng to; trên điện thoại dùng một ngón kéo, hai ngón xoay/phóng. Bấm vào công trình, cầu, tường thành, mặt đất hoặc mặt nước để xem nguồn dữ liệu và mức tin cậy |
| Lái UAV | `↑/↓` hoặc `W/S` tiến lùi · `←/→` hoặc `Q/E` xoay · `A/D` sang ngang · `Space/Shift` hoặc `R/F` lên xuống · `C` đổi góc nhìn · `Esc` thoát. Hai cần điều khiển trên màn hình dùng được bằng chuột (máy tính) hoặc ngón tay (điện thoại). Dòng "Điều khiển" trong bảng thông số cho biết trang đang nhận lệnh nào |
| Bay dưới cầu Trường Tiền | Bay tự động ~55 giây: hạ thấp trên mặt sông, chạm nước, luồn qua nhịp 3, vòng lại qua nhịp 4, rồi trả quyền lái |

Bảng thông số khi bay: độ cao trên mặt nước/mặt đất, tốc độ, khoảng trống tới đáy cầu (khi đang ở dưới mặt cầu), số lần chạm nước, số lần va chạm.

Âm thanh động cơ: bật khi bấm "Lái UAV" hoặc "Bay dưới cầu Trường Tiền" (trình duyệt chỉ cho phát âm thanh sau một thao tác của người xem). Phím `M` hoặc nút "Âm thanh" trên bảng thông số để bật/tắt; trang nhớ lựa chọn trên trình duyệt đó. Âm thanh được tổng hợp trực tiếp bằng Web Audio, không dùng tệp ghi âm:

- 4 cánh quạt quay lệch nhau một chút, tạo tiếng "vo vo" có nhịp phách như máy thật; cao độ và độ to tăng theo lực đẩy (lên cao, tăng tốc, xoay), giảm khi hạ độ cao.
- Tiếng gió cánh quạt; tiếng xì bụi nước khi bay thấp hơn ~3 m trên mặt sông; tiếng nước bắn khi chạm nước; tiếng va đập khi đâm vào công trình, trụ cầu.
- Âm lượng giảm theo khoảng cách từ camera tới UAV; tự tắt khi về chế độ Khám phá.

## Cái gì là dữ liệu, cái gì là giả định

| Thành phần | Nguồn | Mức |
|---|---|---|
| Vị trí đường, cầu, mặt nước, dấu chân công trình, tường thành | OpenStreetMap / Overture 2026-10-21.0 | Dữ liệu (cộng đồng vẽ hoặc học máy) |
| Chiều cao công trình | Thẻ OSM (34 nhà) → ước lượng học máy Open Buildings 2.5D 2023 (≈ 84%) → mặc định 4,5 m (≈ 16%) | Chủ yếu ước lượng; xem bằng chế độ tô màu "Theo nguồn chiều cao" |
| Mặt đất | Copernicus GLO-30 (30 m), lọc và làm mượt | Thay thế gần đúng, không phải số đo địa hình |
| Mực nước, độ sâu lòng sông | Quy ước 0,5 m; độ sâu tự đặt | Giả định |
| Bề rộng đường | Theo cấp đường OSM (và số làn khi có) | Giả định |
| Cao độ mặt cầu | Mô hình ràng buộc: cao độ mặt đất hai đầu, dốc lên mượt, phẳng ở độ cao = mực nước + khoảng tĩnh không giả định (6,5 m cầu lớn, 2,2 m cầu nhỏ) | Giả định |
| Cầu Trường Tiền | 6 nhịp đều dọc tim cầu OSM (số nhịp, chiều dài 402,6 m theo nguồn công bố); vòm cao 9 m, dầm 1,2 m, kích thước trụ là giả định | Phác thảo |
| Ngọ Môn, Kỳ Đài, điện Thái Hòa | Dấu chân OSM + số liệu công bố (Kỳ Đài 17,5 m, cột cờ 37 m; nền Ngọ Môn ~5 m); tỷ lệ các tầng mái là giả định | Phác thảo |
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
- Mái nhà phẳng; không có texture ảnh; không có biển báo, cột điện, dây điện.
