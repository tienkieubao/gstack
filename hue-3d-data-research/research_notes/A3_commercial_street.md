# A3 — Dịch vụ bản đồ thương mại (F) và ảnh đường phố (D) cho Huế

- Ngày khảo sát: 2026-11-14. Phạm vi: (F) dịch vụ bản đồ thương mại, (D) nền tảng ảnh đường phố, giá trị mặc định suy ra từ quy định, giá niêm yết ảnh vệ tinh / DSM thương mại.
- Trạng thái tệp: HOÀN TẤT đợt khảo sát (59 lượt gọi: 5 fetch, 54 tìm kiếm).

## 0. Cảnh báo phương pháp (đọc trước)

1. **Không mở được trang nào.** WebFetch trả `getaddrinfo ENOTFOUND` cho cả 4 host đã thử trong danh sách được cho là truy cập được: `developers.google.com`, `api.panoramax.xyz`, `thuvienphapluat.vn`, `wiki.openstreetmap.org`. Sau 4 host thất bại liên tiếp tôi dừng thử các host còn lại (`sites.research.google`, `docs.overturemaps.org`, `vi.wikipedia.org`, `commons.wikimedia.org`, `www.openstreetmap.org`) — các host này **chưa được thử**. Cần cho phép các host này trong cấu hình mạng của phiên rồi chạy lại phần kiểm chứng.
2. Hệ quả: **mọi dữ kiện dưới đây có trạng thái "chỉ qua kết quả tìm kiếm"**, trừ các dòng ghi rõ "URL không truy cập được" hoặc "không tìm thấy". Không có điều khoản nào được tôi đọc trực tiếp trên trang gốc; các câu trích là từ đoạn trích/tóm tắt của công cụ tìm kiếm và phải được đối chiếu lại trước khi dùng làm căn cứ pháp lý.
3. Truy vấn Panoramax cho bbox Huế **không thực hiện được** — kết quả "có/không có ảnh ở Huế" là CHƯA BIẾT, không phải "không có".
4. Nguyên tắc áp dụng xuyên suốt: quyền xem trong ứng dụng ≠ quyền trích xuất; không đề xuất vượt đăng nhập/CAPTCHA/paywall hay dùng endpoint nội bộ.

Ký hiệu trạng thái: **[TK]** = "chỉ qua kết quả tìm kiếm"; **[LỖI]** = "URL không truy cập được (lỗi ENOTFOUND)"; **[KTT]** = "không tìm thấy".

---

## 1. Bảng nguồn (a)

### 1.1 Google

| Tên / nhà cung cấp | URL trang gốc · URL API/dữ liệu | Loại dữ liệu · định dạng | Bằng chứng độ phủ tại Huế | Ngày thu thập / cập nhật · độ phân giải | Truy cập · chi phí/quota | Giấy phép (thương mại / lưu trữ / dẫn xuất / phân phối lại / ghi nguồn) | Trạng thái |
|---|---|---|---|---|---|---|---|
| Map Tiles API — Photorealistic 3D Tiles (Google) | https://developers.google.com/maps/documentation/tile/3d-tiles-overview · bảng độ phủ: https://developers.google.com/maps/coverage và https://developers.google.com/maps/documentation/javascript/3d/coverage | Lưới 3D có texture; OGC 3D Tiles (glTF) | **Chưa xác định.** Trang coverage có dòng Vietnam (VN) với dấu "có" ở cột gộp "Map Tiles 2D / 3D" nhưng đánh dấu **không có** ở cột "Maps 3D (JavaScript, Android, iOS)". Không kết quả nào nêu thành phố Việt Nam có lưới 3D. Google chỉ nói "over 49 countries", "2500 cities". | Không công bố ngày chụp; dữ liệu coverage "updated daily at 11:00 UTC" | API key + tài khoản thanh toán. SKU Enterprise: 1.000 sự kiện miễn phí/tháng, sau đó ~6,00 USD/1.000 (giảm dần đến ~2,40 USD ở bậc 5.000.000+) — ánh xạ bậc giá là suy luận từ đoạn trích | TM: được hiển thị trong ứng dụng theo hợp đồng. Lưu trữ: cấm pre-fetch/index/store/cache ngoài điều kiện hợp đồng (ví dụ nêu: tải hàng loạt tile). Dẫn xuất: **cấm** — chỉ dùng cho trực quan hoá; cấm "image analysis, machine interpretation, object detection or identification"; đối tượng 3D đặt chồng lên không được "extracted, traced, or derived" từ tile. PPL: không. Ghi nguồn: bắt buộc logo/attribution Google. | [TK]; trang policies và coverage: [LỖI] |
| Map Tiles API — 2D Tiles (roadmap/satellite/terrain) | https://developers.google.com/maps/documentation/tile/overview | Raster tile PNG/JPEG | Việt Nam có dấu "có" ở cột "Map Tiles 2D / 3D" (cấp quốc gia, không phải cấp thành phố) | Không công bố | SKU Essentials: 100.000 miễn phí/tháng, sau đó ~0,60 USD/1.000 | Như trên: chỉ hiển thị; không cache/tải hàng loạt; không trace/số hoá | [TK] |
| Map Tiles API — Street View Tiles | https://developers.google.com/maps/documentation/tile/overview | Tile ảnh panorama | Xem dòng Street View bên dưới | — | 100.000 miễn phí/tháng, sau đó ~2,00 USD/1.000 | Như trên | [TK] |
| Street View (ảnh) + Street View Static API | https://developer.google.com/maps/documentation/streetview/policies · https://developers.google.com/maps/documentation/streetview/usage-limits | Ảnh panorama / ảnh tĩnh ≤640×640 px | Có bằng chứng gián tiếp: xe Street View được ghi nhận chạy qua TP Huế năm 2019 (https://muziyemi.blogspot.com/p/history-of-google-street-view-vietnam.html); ảnh 360° di tích Huế (Đại Nội, nhà thờ Phủ Cam, cung An Định, sông Hương) có từ ~2014 (https://www.insideasiatours.com/blog/explore-imperial-hue); Wikipedia "Google Street View in Asia" ghi năm 2025 Google bổ sung/khôi phục độ phủ Việt Nam (hai bản ghi mâu thuẫn: 1/2025 và 6/2025). **Chưa có bằng chứng về mức độ phủ từng tuyến phố Huế.** | Ngày chụp hiển thị theo từng ảnh trong ứng dụng; không có lịch công bố | API key (+ chữ ký số khuyến nghị) | Dùng theo Agreement với Google; nội dung chịu hạn chế cache (chỉ place ID được miễn); không trích xuất/dẫn xuất (áp dụng điều khoản chung Maps Platform) | [TK] |
| Roads API — Speed Limits | https://developers.google.cn/maps/documentation/roads/speed-limits · https://developers.google.com/maps/documentation/roads/usage-and-billing · https://developers.google.com/maps/asset-tracking-plan | Giới hạn tốc độ theo đoạn đường; JSON | Không có công bố độ phủ theo quốc gia trong kết quả | — | **Chỉ dành cho khách có giấy phép Asset Tracking** ("available only to Asset Tracking customers"; gói cho đội xe lớn, liên hệ Sales; phí cố định hằng tháng). Con số 20 USD/1.000 và ~10.000 USD/năm chỉ từ blog bên thứ ba — chưa xác nhận | Hiển thị/dùng trong ứng dụng theo hợp đồng; không lưu thành bộ dữ liệu riêng | [TK] |
| Routes API (gồm TWO_WHEELER) | https://developers.google.com/maps/documentation/routes/route_two_wheel · https://developers.google.com/maps/documentation/javascript/routes/coverage-two-wheeled | Tuyến, ETA, giao thông; JSON | Việt Nam (VN) nằm trong danh sách hỗ trợ định tuyến xe hai bánh (cấp quốc gia) | Thời gian thực | API key; TWO_WHEELER tính giá cao hơn; tính năng "beta", phải cảnh báo người dùng | Chỉ dùng kết quả trong ứng dụng; không lưu thành dữ liệu mạng lưới | [TK] |
| Điều khoản Maps Platform (cấm dùng) | https://cloud.google.com/maps-platform/terms/maps-service-terms · bản chép bên thứ ba: https://www.workspot.com/legal/google-map-platform-provider-terms/ | Văn bản pháp lý | — | Bản lưu trữ Service Terms có mốc 2025-06-04 | — | Cấm "export, extract, or scrape" nội dung; cấm tạo nội dung dựa trên Maps Content — ví dụ nêu: trace/số hoá đường và viền nhà từ ảnh vệ tinh, dựng mô hình 3D nhà từ ảnh 45°, dựng mô hình địa hình từ giá trị Elevation. Số mục (3.2.3) **chưa xác nhận từ bản chính thức** | [TK] |
| Giá sau 01/03/2025 | https://developers.google.com/maps/billing-and-pricing/march-2025 · https://developers.google.com/maps/billing-and-pricing/pricing · https://developers.google.com/maps/billing-and-pricing/faq | Bảng giá | — | Hiệu lực 01/03/2025 | Bỏ credit 200 USD/tháng; thay bằng ngưỡng miễn phí theo SKU: Essentials 10.000, Pro 5.000, Enterprise 1.000 sự kiện/tháng (Map Tiles Essentials: 100.000); chiết khấu khối lượng tự động tới bậc 5.000.000+ | — | [TK] |
| Open Buildings v3 (Google Research) | https://sites.research.google/open-buildings/ · https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings_v3_polygons | Đa giác nhà + điểm tin cậy; CSV/GeoParquet (qua Earth Engine: FeatureCollection) | **Có ở cấp quốc gia**: VNM nằm trong danh sách quốc gia v3. Chưa kiểm tra mật độ/độ chính xác tại Huế | Suy luận tháng 5/2023 trên ảnh 50 cm; ngày ảnh từng vùng không đồng nhất | Tải tự do, không cần key | **CC BY 4.0 hoặc ODbL v1.0** (người dùng chọn). TM: được. Lưu trữ: được. Dẫn xuất: được. PPL: được (ODbL có share-alike cho CSDL). Ghi nguồn: bắt buộc. Lưu ý: danh mục Earth Engine chỉ ghi CC-BY-4.0 | [TK]; sites.research.google chưa thử fetch |
| Open Buildings 2.5D Temporal v1 | https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings-temporal_v1 · bài báo: https://arxiv.org/html/2310.11622v3 | Raster: xác suất có nhà, số nhà phân số, chiều cao nhà (0–100 m so với địa hình); GeoTIFF / EE ImageCollection | Vùng phủ gồm Đông Nam Á (cấp vùng); chưa kiểm tra ô lưới Huế | Hằng năm 2016–2023, từ Sentinel-2; độ phân giải hiệu dụng 4 m (raster phát hành ở 0,5 m). Sai số chiều cao: bài báo nêu MAE 1,5 m cho phương pháp — **chưa xác nhận áp dụng cho sản phẩm phát hành** | Tải tự do | CC BY 4.0 hoặc ODbL v1.0. TM/lưu/dẫn xuất/PPL: được; ghi nguồn bắt buộc | [TK] |

### 1.2 Nhà cung cấp quốc tế khác

| Tên / nhà cung cấp | URL | Loại dữ liệu | Độ phủ Huế / Việt Nam | Truy cập · chi phí | Giấy phép (TM / lưu / dẫn xuất / PPL / ghi nguồn) | Trạng thái |
|---|---|---|---|---|---|---|
| Mapbox Satellite / Mapbox data | https://docs.mapbox.com/data/tilesets/guides/imagery/ · https://www.mapbox.com/imagery | Ảnh vệ tinh raster, vector tile | Toàn cầu; không có số liệu riêng Huế | Token; giá theo mức dùng (không tra) | Hiển thị: theo ToS. Dẫn xuất: chỉ được trace cho **OpenStreetMap** hoặc mục đích **phi thương mại**; "producing derivative vector tilesets from imagery for commercial purposes" cần Mapbox Commercial Satellite license. Ngoài ra không được trace/derive/extract. | [TK] |
| HERE (Map Content, ISA, Traffic) | https://docs.here.com/map-rendering/docs/coverage-info-map-image-api · https://here.com/node/71121 | Bản đồ dẫn đường, giao thông thời gian thực, tốc độ giới hạn (ISA) | Việt Nam ở mức "HERE Map" trong bảng coverage Map Image API (hiển thị); Real-Time Traffic có ở Việt Nam (thông cáo 2022). Tốc độ giới hạn cho đường Việt Nam: **không tìm thấy xác nhận** | Hợp đồng doanh nghiệp; phải xin báo giá | Giấy phép doanh nghiệp theo hợp đồng; không có quyền dẫn xuất mặc định | [TK] |
| TomTom (Maps / Orbis) | — (không có trang độ phủ Việt Nam trong kết quả) | Bản đồ dẫn đường, tốc độ giới hạn | **Không tìm thấy** bằng chứng độ phủ Việt Nam | Phải xin báo giá | Theo hợp đồng | [KTT] |
| Esri World Imagery | https://wiki.openstreetmap.org/wiki/Template:Esri_image | Ảnh vệ tinh/hàng không raster | Toàn cầu; ngày ảnh tại Huế chưa kiểm tra | Tự do trong trình biên tập OSM | Esri cấp "non-exclusive right to use the World Imagery map to trace features and validate edits in the creation of vector data" — tức được trace cho OSM; Esri giữ quyền với ảnh; không phải mọi lớp Esri đều dùng được. Không có quyền tải/lưu ảnh hàng loạt. | [TK]; wiki: [LỖI] |
| Bing Aerial | https://wiki.openstreetmap.org/wiki/Bing | Ảnh vệ tinh raster | Toàn cầu | Tự do trong trình biên tập OSM | "Bing has granted the right to trace from their aerial imagery for the purpose of contributing content to OpenStreetMap"; ảnh không phải giấy phép mở. Trace cho mục đích khác OSM: không được cấp. | [TK] |
| Maxar / Vantor (lớp ảnh cho OSM) | https://wiki.openstreetmap.org/wiki/Maxar · https://lists.openstreetmap.org/pipermail/talk/2023-July/088334.html | Ảnh vệ tinh raster | — | **Đã ngừng**: từ 7/2023 Maxar thu hồi quyền truy cập API cho trình biên tập OSM; không thấy bằng chứng khôi phục dưới tên Vantor | Không còn dùng được cho OSM | [TK] |
| Apple Look Around | https://news.tuoitre.vn/apple-cars-to-roam-vietnam-for-look-around-enhancements-10378331.htm · https://e.vnexpress.net/news/news/apple-deploys-map-imaging-vehicles-in-vietnam-4712023.html | Ảnh đường phố (chỉ xem trong Apple Maps) | Apple thu ảnh tại Việt Nam từ 2/2024 (Đông Nam Bộ), Bắc Trung Bộ từ 5/3/2024 (Huế thuộc vùng này nhưng không được nêu tên), kéo dài >7 tháng, 20 xe Hyundai Tucson + ba lô cảm biến. **Chưa thấy công bố Look Around đã mở ở Việt Nam.** | Chỉ xem; không có API ảnh | Không có quyền tải/dẫn xuất | [TK] |

### 1.3 Nhà cung cấp Việt Nam

| Tên / nhà cung cấp | URL | Loại dữ liệu | Tuyên bố về Huế / 3D / giao thông | Truy cập · giá công khai | Điều khoản trích xuất | Trạng thái |
|---|---|---|---|---|---|---|
| VIETMAP Maps API | https://maps.vietmap.vn · https://maps.vietmap.vn/docs · https://maps.vietmap.vn/docs/map-api/overview · giới hạn: https://maps.vietmap.vn/docs/map-api/console/usage-limitation/ · quy đổi: https://maps.vietmap.vn/docs/map-api/console/request-to-transaction/ | Tile, tìm kiếm, geocode, route (ô tô, xe máy, xe tải, container), map matching, matrix, TSP, lớp giao thông | Tự công bố dữ liệu toàn quốc tự xây dựng, gồm biển báo, tốc độ giới hạn, vị trí camera tốc độ ở 34 tỉnh/thành (tuyên bố của hãng, không riêng Huế). Không thấy tuyên bố 3D Huế. | API key (`apikey`); tính theo "transaction"; trang docs nêu 60.000 giao dịch/tháng miễn phí trong 2 tháng (diễn đạt mơ hồ) và mức thử ~500 giao dịch/ngày; nâng cấp qua Zalo OA / maps.info@vietmap.vn. Bảng giá đầy đủ: không trích được | Điều khoản lưu trữ/dẫn xuất: **không tìm thấy** → coi như không có quyền; cấp phép dữ liệu doanh nghiệp: phải xin báo giá | [TK] |
| VIETMAP Live (ứng dụng) | https://apps.apple.com/vn/app/id1574847851 | Cảnh báo tốc độ, camera, biển cấm (ứng dụng người dùng cuối) | App Store nêu ~3.000 vị trí camera và >10.000 biển tốc độ, cập nhật hằng tháng (toàn quốc) | Thuê bao ứng dụng | Chỉ xem trong ứng dụng; không phải nguồn dữ liệu | [TK] |
| Goong Maps | https://goong.io/en/ · https://help.goong.io | Tile, Places, Directions, Geocoding | Chỉ dữ liệu Việt Nam; không có tuyên bố riêng Huế/3D | Key; tính phí theo mức dùng; một bài cá nhân nêu tặng 100 USD/tháng (chưa xác nhận) | Điều khoản cache/trích xuất: không tìm thấy | [TK] |
| Map4D (IOTLink) | https://nhandan.vn/map4d-nen-tang-ban-do-so-thuan-viet-dau-tien-post677909.html (bài báo; trang sản phẩm chính thức không xuất hiện trong kết quả) | Bản đồ 2D/3D/4D, SDK/API | **Không tìm thấy** tuyên bố nào về mô hình 3D Huế trên Map4D. Nguồn chủ yếu 2020–2021 | Không có giá công khai | Không tìm thấy | [TK]/[KTT] |
| Viettel Maps | https://apps.apple.com/vn/app/viettel-maps/id1501635906 | Ứng dụng bản đồ (Viettel Business Solutions) | Không có tuyên bố riêng Huế | Không thấy API công khai cho nhà phát triển, không thấy giá | Không tìm thấy | [TK]/[KTT] |
| Vmap (Vietnam Post) | https://hanoitimes.vn/made-in-vietnam-digital-map-launched-42406.html | Địa chỉ (23,4 triệu địa chỉ khi ra mắt 2019), tìm đường | Không riêng Huế | Không thấy API/giá | Không tìm thấy | [TK] |
| VNPT Maps | — | — | — | — | — | [KTT] |
| TrackAsia | https://track-asia.com/en/price-list · https://docs.track-asia.com/api-playground/ | Tile, geocoding, routing trên nền **OpenStreetMap** | Phụ thuộc độ phủ OSM tại Huế | Bảng giá công khai (pay-as-you-go và gói tháng; ví dụ gói M1 500.000 VNĐ/tháng; tile dưới 200.000 request: 0đ; routing ~17.000đ/1.000 request — số liệu trích kém, cần mở trang) | Dữ liệu gốc OSM (ODbL) nên phần dữ liệu OSM lấy trực tiếp từ OSM sẽ sạch quyền hơn; điều khoản riêng của TrackAsia: không tìm thấy | [TK] |
| Vietbando | — | — | — | — | — | [KTT] |
| eKGIS / eKMap | — | — | — | — | — | [KTT] |
| Nền tảng bản đồ số quốc gia / Cổng thông tin không gian địa lý Việt Nam (Cục Đo đạc, Bản đồ và Thông tin địa lý) | https://mae.gov.vn/chuyen-muc/do-dac-ban-do-va-thong-tin-dia-ly-299.htm (chuyên mục) | Dữ liệu không gian địa lý quốc gia | Không thấy API dùng chung hay sản phẩm 3D; có QCVN 86:2025/BNNMT về bản đồ địa hình 1:10.000 | Không rõ | Không rõ | [TK]/[KTT] |
| Chính quyền TP Huế — thí điểm bản sao số | https://hue.gov.vn/Portals/0/Uploads/VBPL/Nam2026/Thang6/00.00.H57-334-KH-UBND-2026-PL2_signed.pdf | Kế hoạch (không phải dữ liệu) | Kế hoạch 334/KH-UBND năm 2026: thí điểm bản sao số tại phường Thuận Hóa, Sở KH&CN đầu mối, hạn năm 2026. Chưa thấy sản phẩm công khai. | Phải liên hệ Sở KH&CN / IOC (Hue-S) | Chưa có | [TK] |
| Huế Smart Digital City Model (Ramboll / AASCTF / UBND tỉnh Thừa Thiên Huế) | https://www.ramboll.com/en-apac/projects/government-and-public/hue-smart-digital-city-model | Mô hình 3D số của Huế dựng từ dữ liệu vệ tinh (phục vụ quy hoạch) | **Có — đúng địa bàn Huế** (tài liệu dự án từ 2023). Không rõ định dạng, LOD, có công khai hay không | Phải xin từ chủ đầu tư | Không rõ | [TK] |
| HBIM điện Thái Hòa | https://isprs-archives.copernicus.org/articles/XLVIII-M-9-2025/587/2025/ | Quét 3D + HBIM một công trình | Đại Nội Huế (một công trình) | Bài báo mở; dữ liệu gốc phải xin tác giả | Theo giấy phép bài báo (chưa kiểm tra) | [TK] |

### 1.4 Ảnh đường phố

| Tên / nhà cung cấp | URL | Loại · định dạng | Bằng chứng độ phủ tại Huế | Truy cập · chi phí | Giấy phép | Trạng thái |
|---|---|---|---|---|---|---|
| Mapillary (Meta) | https://mapillary.com/legal · https://www.mapillary.com/developer · https://mapillary.com/osm · https://help.mapillary.com/hc/en-us/articles/115001770409-CC-BY-SA-license-for-open-data | Ảnh/chuỗi ảnh, điểm phát hiện (biển báo, đối tượng); JPEG, vector tile, JSON qua API v4 | **Không có số liệu riêng Huế.** Việt Nam: Be Group thu ảnh 360° từ 4/2023 ở TP.HCM và Hà Nội, đã thêm 1.796 biển báo vào OSM (https://blog.mapillary.com/update/2024/05/16/Be-Group-Vietnam-Mapillary-Imagery.html); Hà Nội có độ phủ rộng nhưng chủ yếu trục chính. | API v4 cần token miễn phí (theo đề bài; chi tiết rate limit không trích được) | Ảnh: **CC BY-SA** (ToU hiệu lực 15/02/2024: "User Content from other users is subject to the Creative Commons Share Alike (CC BY-SA) license, unless we indicate otherwise"; Mapillary có thể áp bộ điều khoản khác như CC BY-NC-SA trong một số trường hợp). Dẫn xuất: có quyền đặc biệt đưa metadata dẫn xuất vào **OpenStreetMap**. Giấy phép của map features/traffic signs cho dùng ngoài OSM và dùng thương mại: **chưa xác định** — phải đọc mục 3, 11, 12 của ToU hoặc hỏi Mapillary bằng văn bản. Ghi nguồn: bắt buộc. | [TK]; wiki OSM: [LỖI] |
| KartaView (Grab; trước là OpenStreetCam) | https://en.wikipedia.org/wiki/KartaView · https://wiki.openstreetmap.org/wiki/KartaView | Ảnh đường phố | Không tìm thấy bằng chứng tại Huế | Tài khoản OSM; API: không thấy tài liệu chính thức trong kết quả | Ảnh CC BY-SA 4.0; máy chủ và app mới: độc quyền. **Còn hoạt động?** Wikipedia ghi "Active"; có thread diễn đàn OSM ngày 14/05/2026 "Kartaview iOS will not upload" và thread cũ "Is Kartaview dead?" → còn tồn tại nhưng bảo trì yếu; chưa xác nhận API còn chạy | [TK] |
| Panoramax | https://wiki.openstreetmap.org/wiki/Panoramax · https://api.panoramax.xyz/api/search?bbox=107.55,16.44,107.61,16.49&limit=5 | Ảnh đường phố liên bang; STAC API | **CHƯA BIẾT** — truy vấn bbox Huế thất bại do mạng. Gián tiếp: >10 instance, không thấy instance Việt Nam; OSM-FR và IGN giữ ~97% ảnh; instance OSM-FR đang giới hạn "only for testing if outside of France" | Tự do, không cần key để tìm kiếm | Theo từng instance (thường CC BY-SA 4.0 hoặc Licence Ouverte/Etalab) — chưa xác nhận qua kết quả | [LỖI] cho API; phần còn lại [TK] |
| Mapilio | https://community.openstreetmap.org/t/mapilios-support-for-openstreetmap/99021 | Ảnh đường phố | Không tìm thấy | — | Không tìm thấy giấy phép | [KTT] |
| Bing Streetside (Microsoft) | https://community.openstreetmap.org/t/bing-streetside-discontinued/137189 | Ảnh đường phố | Không có bằng chứng từng phủ Việt Nam | Dịch vụ dường như bị gỡ khỏi Bing Maps khoảng 10/2025 (theo bản sao Wikipedia + thread OSM) | — | [TK] |
| Tour VR360 địa phương (chỉ xem) | https://vietnam.travel/vietnam-virtual-tours (Kinh thành Huế, lăng Minh Mạng) · https://vr360.com.vn/en/lang-khai-dinh-hue (lăng Khải Định) · https://vietnamnews.vn/life-style/1439082/hue-monuments-conservation-centre-launches-e-ticket-and-virtual-reality-experience.html | Panorama 360° trên web; VR tại chỗ | Có — các điểm di sản Huế | Xem trên web | **Chỉ xem.** Không có giấy phép tái sử dụng công bố; chỉ dùng làm đầu mối tham chiếu trực quan, muốn dùng ảnh phải xin phép chủ sở hữu | [TK] |

### 1.5 Ảnh vệ tinh và DSM/DTM thương mại — giá niêm yết công khai

Lưu ý: không trang nào được mở; các con số lấy từ đoạn trích của đại lý, nhiều trang không ghi ngày. Loại giấy phép (nội bộ / đa người dùng / dẫn xuất) **không thấy** trong kết quả → phải hỏi khi xin báo giá.

| Sản phẩm | Nguồn giá | Giá / km² | Đơn tối thiểu | Trạng thái |
|---|---|---|---|---|
| Pléiades Neo (30 cm; HD15 = 15 cm) | https://skywatch.com/geospatial-data-providers/airbus/ (catalog 6/2026, "indicative") | HD15: 25 USD lưu trữ; 35 USD đặt chụp | 25 km² | [TK] |
| Pléiades Neo | https://docs.up42.com/data/tasking-min-charges · https://docs.up42.com/data/pleiades-neo | Tính bằng credit UP42 (không quy đổi được) | Đặt chụp: 100 km²; Airbus tính tiền lưu trữ từ 25 km² | [TK] |
| Airbus 30 cm lưu trữ (ví dụ) | https://geoawesome.com/demystifying-satellite-data-pricing-a-comprehensive-guide/ | ~18 EUR | 25 km² | [TK] |
| Pléiades 1A/1B 50 cm pan-sharpened | https://landinfo.com/satellite-imagery-pricing/ (không ghi ngày) | 37,50 USD lưu trữ; 62,50 USD đặt chụp | — | [TK] |
| Maxar/Vantor WorldView-3 30 cm | https://landinfo.com/wp-content/uploads/Imagery_LandInfo_202601-1.pdf (bảng giá 1/2026) | 45,00 USD lưu trữ pan-sharpened; 65,00 USD chụp mới; 33,00 USD chỉ toàn sắc | 25 km² lưu trữ; 50 km² chụp mới | [TK] |
| Maxar 30 cm lưu trữ (>90 ngày) | https://apollomapping.com/worldview (không ghi ngày; thấp hơn LandInfo ~2 lần) | 22,50 USD | 25 km² | [TK] |
| Maxar qua UP42 | https://docs.up42.com/data/maxar | Catalog từ 3.000 credit/km²; đặt chụp từ 1.300 credit/km² | 50 km² (đặt chụp) | [TK] |
| Planet SkySat 50 cm | https://apis.io/plans/skywatch/skywatch-plans-pricing/ (hồ sơ bên thứ ba về SkyWatch) | từ 10 USD lưu trữ; từ 12 USD đặt chụp | 1 km² lưu trữ; ~25 km² đặt chụp | [TK] |
| Planet SkySat lưu trữ | https://www.skyfi.com/pricing | từ 6 USD | Không yêu cầu tối thiểu (theo quảng cáo) | [TK] |
| SkyWatch EarthCache Enterprise | https://skywatch.com/geospatial-data-providers/planet/ | Không công bố | — | phải xin báo giá |
| WorldDEM Neo (5 m DSM/DTM) | https://docs.up42.com/data/worlddem-neo · https://oneatlas.airbus.com/service/worlddem | từ 750 credit UP42/km²; giá USD: phải xin báo giá (Apollo Mapping yêu cầu email) | 1 km² (DSM, DTM mức 1); 100 km² (DTM mức 2) | [TK] |
| WorldDEM 12 m DSM | https://apollomapping.com/digital-elevation-models/worlddem (không ghi ngày) | 6,25 USD | 100 km² | [TK] |
| AW3D Standard (2,5 m) | https://apollomapping.com/digital-elevation-models/aw3d-standard-dem | 3,00 USD | 400 km² | [TK] |
| AW3D Enhanced (0,5 / 1 / 2 m, làm theo đơn) | https://www.aw3d.jp/en/products/enhanced | Không công bố | Không xác nhận được | phải xin báo giá |
| Maxar Precision3D / Vantor Vivid Terrain 50 cm | https://skywatch.com/?p=996690 · https://docs.up42.com/data/vivid-terrain | từ 29,50 USD (lưu trữ, SkyWatch); UP42: từ 2.250 credit/km² (gói) | UP42: 10 km² | [TK] |

Ước lượng quy mô (tính toán của tôi, không phải báo giá): vùng lõi Huế ~6 km × 5,5 km ≈ 33 km² vượt mức tối thiểu 25 km² của hầu hết đơn lưu trữ; ở 22,50–45 USD/km² là khoảng 740–1.490 USD cho một cảnh 30 cm lưu trữ, chưa gồm phí xử lý và phụ phí giấy phép.

---

## 2. Ma trận quyền theo nhà cung cấp (b)

Chú giải: ✔ được; ✘ không; ◐ có điều kiện; ? không tìm thấy điều khoản (mặc định an toàn: coi như ✘). Tất cả ở mức [TK].

| Nhà cung cấp / sản phẩm | Hiển thị | Lưu trữ / cache | Dẫn xuất (trace, trích đối tượng, huấn luyện mô hình) | Phân phối lại | Thương mại |
|---|---|---|---|---|---|
| Google Map Tiles (2D, 3D, Street View tiles) | ✔ trong ứng dụng, kèm attribution | ✘ ngoài điều kiện hợp đồng; cấm tải hàng loạt | ✘ (cấm phân tích ảnh, nhận dạng đối tượng, trace, dựng 3D) | ✘ | ◐ chỉ dưới dạng hiển thị, trả phí |
| Google Street View (app / Static API) | ✔ | ✘ (chỉ place ID được cache) | ✘ | ✘ | ◐ hiển thị |
| Google Roads Speed Limits | ◐ chỉ khách Asset Tracking | ✘ | ✘ | ✘ | ◐ theo hợp đồng |
| Google Routes API | ✔ | ✘ thành bộ dữ liệu | ✘ | ✘ | ◐ hiển thị |
| Google Open Buildings v3 / 2.5D Temporal | ✔ | ✔ | ✔ | ✔ (kèm ghi nguồn; ODbL: share-alike CSDL) | ✔ |
| Mapbox Satellite | ✔ | ◐ theo ToS | ◐ chỉ cho OSM hoặc phi thương mại; thương mại cần giấy phép riêng | ✘ | ◐ |
| Esri World Imagery | ✔ | ✘ | ◐ trace/validate để tạo dữ liệu vector (ngữ cảnh OSM) | ✘ ảnh; ✔ dữ liệu OSM tạo ra | ◐ qua OSM (ODbL) |
| Bing Aerial | ✔ | ✘ | ◐ chỉ để đóng góp vào OSM | ✘ ảnh; ✔ dữ liệu OSM | ◐ qua OSM (ODbL) |
| Maxar/Vantor (lớp OSM) | ✘ đã ngừng 7/2023 | ✘ | ✘ | ✘ | ✘ |
| Maxar/Vantor, Airbus, Planet (mua ảnh) | ✔ | ✔ theo EULA | ◐ theo EULA — phải hỏi rõ quyền dẫn xuất và công bố sản phẩm dẫn xuất | ◐ thường chỉ sản phẩm dẫn xuất | ✔ có trả phí |
| HERE / TomTom | ✔ qua SDK | ◐ theo hợp đồng | ✘ mặc định | ✘ | ◐ hợp đồng doanh nghiệp |
| Apple Look Around | ✔ chỉ trong Apple Maps | ✘ | ✘ | ✘ | ✘ |
| VIETMAP / Goong / Map4D / Viettel Maps | ✔ qua API/SDK | ? | ? | ? | ◐ trả phí theo mức dùng; dữ liệu thô phải ký hợp đồng |
| TrackAsia | ✔ | ? (dữ liệu nền là OSM/ODbL) | ? | ? | ◐ |
| Mapillary — ảnh | ✔ | ✔ (CC BY-SA) | ✔ kèm share-alike; ◐ nếu ảnh thuộc nhóm điều khoản NC | ✔ kèm BY-SA | ◐ được theo CC BY-SA, trừ phần gắn điều khoản NC |
| Mapillary — map features / traffic signs | ✔ | ? | ◐ chắc chắn cho OSM; ngoài OSM chưa rõ | ? | ? |
| KartaView — ảnh | ✔ | ✔ (CC BY-SA 4.0) | ✔ kèm share-alike | ✔ | ✔ |
| Panoramax | ✔ | ✔ theo giấy phép instance | ✔ theo giấy phép instance | ✔ | ✔ (chưa xác nhận từng instance) |
| Tour VR360 Huế | ✔ | ✘ | ✘ | ✘ | ✘ |

Hệ quả thực tiễn cho dự án:

1. Nguồn duy nhất trong nhóm này có thể **đưa vào bộ dữ liệu của dự án** mà không cần đàm phán: Open Buildings v3, Open Buildings 2.5D Temporal, ảnh Mapillary/KartaView/Panoramax (nếu có ở Huế, kèm share-alike), và dữ liệu OSM được trace từ Esri/Bing theo đúng quy trình OSM.
2. Google 3D Tiles (nếu có ở Huế) chỉ dùng được làm **lớp nền hiển thị** trong trình xem, không được dùng làm nguồn dựng hình, đo chiều cao, hay huấn luyện.
3. Thuộc tính dẫn đường (tốc độ, cấm rẽ, camera) từ Google/HERE/TomTom/VIETMAP chỉ có qua hợp đồng; phương án không hợp đồng là giá trị mặc định theo quy định (mục 3) cộng quan sát thực địa/ảnh đường phố có giấy phép mở.

---

## 3. Bảng tốc độ mặc định suy ra từ quy định (c)

**Nhãn bắt buộc khi đưa vào dữ liệu: "suy ra từ quy định, không phải quan sát".** Biển báo tại hiện trường luôn ưu tiên hơn giá trị mặc định.

Nguồn: Thông tư 38/2024/TT-BGTVT (ký 15/11/2024, hiệu lực 01/01/2025, thay Thông tư 31/2019/TT-BGTVT). Văn bản gốc: https://vbpl.vn/TW/Lists/vbpq/Attachments/173068/Thông tư số 38.2024.TT-BGTVT.docx · https://luatvietnam.vn/giao-thong/thong-tu-38-2024-tt-bgtvt-toc-do-khoang-cach-an-toan-cua-xe-may-chuyen-dung-tham-gia-giao-thong-375831-d1.html. Tóm tắt dùng để lấy số: https://lawnet.vn/thong-tin-phap-luat/en/chinh-sach-moi/regulations-on-the-maximum-speed-of-motor-vehicles-in-vietnam-from-january-1-2025-174233.html · https://thuvienphapluat.vn/phap-luat/toc-do-toi-da-cho-phep-trong-khu-vuc-dong-dan-cu-toc-do-toi-da-ngoai-khu-dan-cu-bien-bao-khu-dan-cu-729542-203093.html. Trạng thái: **[TK]**; trang thuvienphapluat.vn: **[LỖI]**.

### 3.1 Trong khu vực đông dân cư (trừ đường cao tốc)

| Loại xe | Đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên | Đường hai chiều; đường một chiều có một làn xe cơ giới |
|---|---|---|
| Xe cơ giới, trừ các xe quy định tại Điều 7 và Điều 8 | 60 km/h | 50 km/h |

### 3.2 Ngoài khu vực đông dân cư (trừ đường cao tốc)

| Loại xe | Đường đôi; một chiều ≥2 làn xe cơ giới | Đường hai chiều; một chiều 1 làn xe cơ giới |
|---|---|---|
| Ô tô chở người đến 28 chỗ không kể chỗ người lái (trừ xe buýt); ô tô tải trọng tải ≤3,5 tấn | 90 | 80 |
| Ô tô chở người trên 28 chỗ (trừ xe buýt); ô tô tải trọng tải >3,5 tấn (trừ ô tô xi téc) | 80 | 70 |
| Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc; xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, trộn bê tông) | 70 | 60 |
| Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, trộn bê tông, ô tô xi téc | 60 | 50 |

### 3.3 Nhóm xe đặc thù và đường cao tốc

| Đối tượng | Tốc độ khai thác tối đa | Ghi chú |
|---|---|---|
| Xe máy chuyên dùng, xe gắn máy và các loại xe tương tự (trừ cao tốc) | 40 km/h | Điều 7 theo đa số nguồn |
| Xe chở người bốn bánh có gắn động cơ | 30 km/h | Điều 8; chỉ trong phạm vi/thời gian được phép hoạt động |
| Xe chở hàng bốn bánh có gắn động cơ | 50 km/h | Điều 8; như trên |
| Đường cao tốc | Tối đa 120 km/h | Điều 9; tốc độ tối đa/tối thiểu cụ thể theo phương án tổ chức giao thông được duyệt. Mức tối thiểu 60 km/h **chưa xác nhận** |

### 3.4 Những điểm CHƯA kiểm chứng trong bảng trên

1. **Số điều**: các nguồn không thống nhất bảng "trong khu đông dân cư" là Điều 5 hay Điều 6, và nhóm xe bốn bánh là Điều 7 hay Điều 8. Chỉ chắc chắn tiêu đề "Điều 8. Tốc độ khai thác tối đa cho phép đối với xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ…" và Điều 9 về cao tốc.
2. **Gán cột cho bảng 3.2**: đoạn trích xác nhận các cặp 90/80, 80/70, 70/60, 60/50 theo nhóm xe nhưng không ghi rõ cột; việc gán số lớn cho đường đôi dựa trên cấu trúc bảng 3.1 và Thông tư 31/2019. Mô tả nhóm xe ở hàng 3 và 4 được ghép từ đoạn trích tiếng Anh và hiểu biết sẵn có về văn bản — phải đối chiếu nguyên văn.
3. **Sửa đổi**: một đoạn trích nói Thông tư 38/2024 đã được sửa bởi Thông tư 09/2025/TT-BXD; tìm kiếm tiếp chỉ xác nhận Thông tư 09/2025/TT-BXD (13/6/2025, hiệu lực 01/7/2025) sửa nhiều thông tư do sắp xếp bộ máy/chính quyền hai cấp, không thấy thay đổi con số tốc độ. Cần kiểm tra bản hợp nhất.
4. Ranh giới "khu vực đông dân cư" xác định bằng biển báo (QCVN 41:2024), không suy ra được từ ranh giới hành chính → muốn áp bảng 3.1 hay 3.2 cho từng đoạn đường vẫn cần vị trí biển.

### 3.5 Văn bản liên quan

| Văn bản | Nội dung dùng được | URL | Trạng thái |
|---|---|---|---|
| QCVN 41:2024/BGTVT (kèm Thông tư 51/2024/TT-BGTVT, ký 15/11/2024, hiệu lực 01/01/2025, thay QCVN 41:2019) | Hệ thống báo hiệu đường bộ; 5 nhóm biển (cấm, hiệu lệnh, nguy hiểm và cảnh báo, chỉ dẫn, phụ); mã biển để chuẩn hoá thuộc tính biển báo | https://hethongphapluat.com/quy-chuan-ky-thuat-quoc-gia-qcvn-41-2024-bgtvt-ve-bao-hieu-duong-bo/dieu-38 · https://pbgdpl.cantho.gov.vn/ban-hanh-quy-chuan-ky-thuat-quoc-gia-ve-bao-hieu-duong-bo | [TK]; mã biển khu đông dân cư (R.420/R.421) không xác nhận được |
| Luật Trật tự, an toàn giao thông đường bộ 36/2024/QH15 (27/6/2024, hiệu lực 01/01/2025) | Điều 12 "Chấp hành quy định về tốc độ và khoảng cách giữa các xe" — căn cứ ban hành Thông tư 38/2024 | https://thuvienphapluat.vn/van-ban/Giao-thong-Van-tai/Law-36-2024-QH15-Road-Traffic-Order-and-Safety-620124.aspx | [TK]; nội dung khoản: không trích được |
| Luật Đường bộ 35/2024/QH15 (hiệu lực 01/01/2025) | Điều 9 phân loại đường theo chức năng; Điều 10 cấp kỹ thuật của đường bộ — dùng để gán phân cấp đường | https://hethongphapluat.com/luat-duong-bo-2024/khoan-5-dieu-56 (trang cùng bộ) | [TK] |
| Nghị định 165/2024/NĐ-CP | Xe bốn bánh có gắn động cơ chỉ hoạt động trên tuyến có biển tốc độ tối đa 30 hoặc 50 km/h (từ 15/02/2025, theo một nguồn tin) | https://luatvietnam.vn/tin-van-ban-moi/bo-gtvt-yeu-cau-quan-ly-hoat-dong-cua-xe-bon-banh-co-gan-dong-co-theo-luat-moi-186-101023-article.html | [TK] |

---

## 4. Việc cần làm tiếp (theo thứ tự giá trị)

1. Cho phép mạng tới các host trong danh sách rồi chạy lại: (a) truy vấn Panoramax bbox Huế; (b) trang coverage Google để chốt câu hỏi 3D Tiles tại Việt Nam; (c) nguyên văn Điều 5–9 Thông tư 38/2024 và bản hợp nhất; (d) wiki OSM về Mapillary/Esri/Bing.
2. Kiểm tra độ phủ Mapillary tại Huế bằng API v4 chính thức với token miễn phí (truy vấn ảnh theo bbox) — đây là cách hợp lệ duy nhất để có con số.
3. Gửi yêu cầu báo giá và điều khoản dữ liệu thô tới VIETMAP (tốc độ, biển báo, camera cho địa bàn Huế) — đây là nguồn trong nước duy nhất tự công bố có các thuộc tính này.
4. Liên hệ Sở KH&CN TP Huế / chủ đầu tư dự án Huế Smart Digital City Model để hỏi khả năng chia sẻ mô hình 3D sẵn có.
5. Khi xin báo giá ảnh 30 cm / DSM, hỏi rõ: quyền dẫn xuất mô hình 3D, quyền công bố sản phẩm dẫn xuất trên web, số người dùng.

---

## 5. Nhật ký truy vấn (d)

### 5.1 URL đã fetch

| # | URL | Kết quả |
|---|---|---|
| F1 | https://developers.google.com/maps/documentation/tile/policies | ENOTFOUND |
| F2 | https://developers.google.com/maps/documentation/tile/coverage | ENOTFOUND |
| F3 | https://api.panoramax.xyz/api/search?bbox=107.55,16.44,107.61,16.49&limit=5 | ENOTFOUND |
| F4 | https://thuvienphapluat.vn/van-ban/Giao-thong-Van-tai/Thong-tu-38-2024-TT-BGTVT-…-630980.aspx (URL đoán theo mẫu, chưa xác nhận tồn tại) | ENOTFOUND |
| F5 | https://wiki.openstreetmap.org/wiki/Mapillary | ENOTFOUND |

Chưa thử: sites.research.google, docs.overturemaps.org, vi.wikipedia.org, commons.wikimedia.org, www.openstreetmap.org.

### 5.2 Truy vấn tìm kiếm

| # | Truy vấn (rút gọn) | Kết quả một dòng |
|---|---|---|
| S1 | Google Photorealistic 3D Tiles coverage countries list Vietnam | Chỉ có "49 countries / 2500 cities"; không có danh sách nêu Việt Nam |
| S2 | Map Tiles API policies pre-fetching caching storage / object detection | Cấm cache/tải hàng loạt; chỉ trực quan hoá; cấm object detection; lớp phủ 3D không được trích/trace từ tile |
| S3 | Google Maps Platform Terms "No Creating Content…" "No Scraping" | Không có nguyên văn chính thức; bản chép bên thứ ba nêu cấm trace/số hoá, dựng 3D từ ảnh 45° |
| S4 | Roads API speed limits Asset Tracking | Speed Limits chỉ cho khách Asset Tracking; giá không công bố |
| S5 | Google Maps Platform pricing March 1 2025 | Bỏ credit 200 USD; ngưỡng miễn phí 10.000/5.000/1.000; Map Tiles 100.000 |
| S6 | Photorealistic 3D Tiles coverage details Vietnam Hanoi HCM | Không có thông tin riêng Việt Nam |
| S7 | Google Street View Việt Nam độ phủ Huế 2025 2026 | Chỉ ra tin về cập nhật địa danh hành chính; không có độ phủ Street View |
| S8 | Google Street View coverage Vietnam 2023 2024 Hue | Xe Street View qua Huế 2019; 2025 có bổ sung độ phủ Việt Nam (nguồn mâu thuẫn tháng) |
| S9 | Open Buildings v3 license coverage Vietnam | CC BY 4.0 + ODbL; 1,8 tỷ nhà; ảnh 50 cm; VNM có trong danh sách; suy luận 5/2023 |
| S10 | Open Buildings 2.5D Temporal 2016–2023 height | Hằng năm 2016–2023; hiệu dụng 4 m; chiều cao 0–100 m; CC BY 4.0/ODbL |
| S11 | Mapbox ToS satellite tracing OSM derive | Trace chỉ cho OSM/phi thương mại; thương mại cần Commercial Satellite license |
| S12 | OSM wiki Esri World Imagery / Bing / Maxar | Esri và Bing cấp quyền trace cho OSM; Maxar trạng thái chưa rõ |
| S13 | Mapillary license CC BY-SA map features API v4 | Ảnh CC BY-SA; quyền đặc biệt cho OSM; giấy phép map features chưa rõ |
| S14 | Thông tư 38/2024 Điều 6 Điều 7 tốc độ khu đông dân cư | Xác nhận 60/50 trong khu đông dân cư; hiệu lực 01/01/2025; gợi ý có sửa đổi bởi TT 09/2025/TT-BXD |
| S15 | Thông tư 38/2024 Điều 8, Điều 9, 30 km/h | Xe gắn máy, xe máy chuyên dùng 40; Điều 9 về cao tốc; 30 km/h chưa xác nhận |
| S16 | QCVN 41:2024/BGTVT Thông tư 51/2024 | Ký 15/11/2024, hiệu lực 01/01/2025, thay QCVN 41:2019; 5 nhóm biển |
| S17 | Luật 36/2024/QH15 Điều 12; Luật Đường bộ 35/2024/QH15 | Xác nhận tiêu đề điều và ngày hiệu lực; không có nội dung khoản |
| S18 | Vietmap API pricing tốc độ giới hạn camera | 12 endpoint; tính theo transaction; không có bảng giá trích được |
| S19 | Goong Maps API bảng giá điều khoản cache | Tính phí theo mức dùng; không có điều khoản cache |
| S20 | TT 38/2024 "đến 28 chỗ" 90 80 … (tiếng Việt) | Chỉ xác nhận cấu trúc và cặp 60/50; chưa đủ |
| S21 | TT 38/2024 Điều 8 xe bốn bánh 30/50; cao tốc 120/60 | Tiêu đề Điều 8 xác nhận; 30/50 thấy ở dự thảo; 120 ở tóm tắt; tối thiểu 60 chưa xác nhận |
| S22 | Map4D IOTLink bản đồ 3D Huế giá | Không có tuyên bố 3D Huế, không có giá; lộ ra dự án Ramboll |
| S23 | Huế bản đồ số 3D "bản sao số" Hue-S IOC | Kế hoạch 334/KH-UBND 2026 thí điểm bản sao số phường Thuận Hóa; HBIM điện Thái Hòa |
| S24 | Viettel Maps / VNPT Maps / Vmap | Chỉ có Vmap (2019, 23,4 triệu địa chỉ); không có Viettel/VNPT |
| S25 | TrackAsia price list; Vietbando; eKGIS | TrackAsia có bảng giá công khai, nền OSM; Vietbando/eKGIS không có kết quả |
| S26 | Circular 38/2024 outside densely populated areas (tiếng Anh) | Xác nhận các cặp 90/80, 80/70, 70/60, 60/50 theo nhóm xe; không ghi rõ cột |
| S27 | Mapillary Huế Việt Nam độ phủ | Be Group (HCM, Hà Nội) từ 4/2023; không có số liệu Huế |
| S28 | KartaView status 2026 | Wikipedia "Active"; thread OSM 5/2026 về lỗi upload iOS; ảnh CC BY-SA 4.0 |
| S29 | Panoramax coverage outside France Vietnam | >10 instance; OSM-FR giới hạn ngoài Pháp; không có instance Việt Nam |
| S30 | Apple Look Around Vietnam coverage | Thu ảnh từ 2/2024; chưa thấy công bố ra mắt |
| S31 | Mapilio license; Bing Streetside coverage | Streetside dường như bị gỡ 10/2025; Mapilio không có thông tin |
| S32 | Maxar imagery OSM service ended 2023 Vantor | Thu hồi API cho OSM từ 7/2023; chưa khôi phục |
| S33 | HERE / TomTom Vietnam coverage speed limits | HERE có traffic ở Việt Nam (2022); VIETMAP tự công bố có tốc độ/camera 34 tỉnh; TomTom không có |
| S34 | Pléiades Neo price per km² UP42 | SkyWatch HD15 25/35 USD; tối thiểu 25 km² lưu trữ, 100 km² đặt chụp; Pléiades 50 cm 37,50/62,50 USD |
| S35 | Maxar 30 cm price Apollo / SkyWatch / SkySat | LandInfo 1/2026: 45/65 USD; Apollo 22,50 USD; tối thiểu 25 km² |
| S36 | WorldDEM Neo / AW3D / Precision3D price | WorldDEM Neo 750 credit/km² (UP42), tối thiểu 1 km²; WorldDEM 12 m 6,25 USD |
| S37 | Vietmap dữ liệu tốc độ camera cấp phép doanh nghiệp | Vietmap Live: ~3.000 camera, >10.000 biển tốc độ; không có thông tin cấp phép dữ liệu |
| S38 | Thông tư 09/2025/TT-BXD sửa TT 38/2024 | TT 09/2025/TT-BXD sửa nhiều thông tư do sắp xếp bộ máy; không xác nhận sửa tốc độ |
| S39 | Viettel Maps API bảng giá | Chỉ có ứng dụng trên App Store; không có API/giá |
| S40 | VNPT Maps; Vietbando; eKMap | Không tìm thấy |
| S41 | Mapillary terms derived data map data license | ToU 15/02/2024: CC BY-SA trừ khi ghi khác, có thể áp CC BY-NC-SA; dẫn xuất cho OSM được phép |
| S42 | Planet SkySat price SkyWatch EarthCache | 10/12 USD (hồ sơ bên thứ ba); SkyFi từ 6 USD; EarthCache không công bố |
| S43 | Huế VR360 tham quan ảo Đại Nội | vietnam.travel 360° (Kinh thành, lăng Minh Mạng); vr360.com.vn (lăng Khải Định) |
| S44 | Map Tiles API coverage Vietnam (giới hạn developers.google.com) | Dòng VN: "có" ở cột gộp Map Tiles 2D/3D, "không" ở cột Maps 3D (JS/Android/iOS) |
| S45 | Open Buildings 2.5D height accuracy MAE | Bài báo Sirko et al.: MAE 1,5 m cho phương pháp |
| S46 | TomTom / HERE coverage Vietnam speed limits | HERE Map Image: Vietnam mức "HERE Map"; TomTom không có |
| S47 | Panoramax Vietnam; Mapillary Thừa Thiên Huế | Không có instance Panoramax Việt Nam; không có bằng chứng Mapillary riêng Huế |
| S48 | "nền tảng bản đồ số quốc gia" VNMap API | Chỉ có Cổng thông tin không gian địa lý Việt Nam và QCVN 86:2025/BNNMT; không có API |
| S49 | Google Routes API Vietnam two-wheeler terms | VN hỗ trợ TWO_WHEELER (beta, giá cao hơn); không có điều khoản cache |
| S50 | Xe bốn bánh có gắn động cơ 30/50 Điều 8 | 30 và 50 km/h xác nhận từ bản vbpl.vn; số điều (7 hay 8) không thống nhất |
| S51 | Google pricing list 3D Tiles / 2D / Street View Tiles | 3D: 1.000 miễn phí, 6,00 USD/1.000; 2D: 100.000, 0,60 USD; Street View: 100.000, 2,00 USD |
| S52 | Vietmap Maps API pricing transaction điều khoản | 60.000 giao dịch/tháng miễn phí 2 tháng (mơ hồ); không có điều khoản lưu trữ |
| S53 | AW3D Enhanced price; Precision3D pricing | AW3D Standard 3,00 USD, tối thiểu 400 km²; Enhanced theo đơn; Precision3D từ 29,50 USD |
| S54 | Street View Static API policies; Street View Huế 2025 | Dùng theo Agreement; hạn chế cache; ảnh ≤640×640; không có tin riêng Huế |
