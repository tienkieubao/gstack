# A2 — Di sản, mô hình 3D, bản đồ lịch sử, học thuật, video (Huế)

Ngày khảo sát: 2026-11-14. Người thực hiện: tác tử nghiên cứu A2. Bản cuối của phiên này.

## 0. Hạn chế công cụ — ĐỌC TRƯỚC

1. **WebFetch thất bại với mọi host đã thử** (`getaddrinfo ENOTFOUND`), kể cả các host được giao là "truy cập được": `api.sketchfab.com`, `commons.wikimedia.org`, `vi.wikipedia.org`, `www.wikidata.org`, `hue.gov.vn`. Sau 7 lần lỗi liên tiếp trên 5 host, tôi dừng thử WebFetch (không dùng Bash cho mạng theo yêu cầu).
2. **Ngân sách WebSearch của phiên bị hết** ở lần gọi thứ 48 (giới hạn 200 lượt/turn dùng chung giữa các tác tử). Truy vấn cuối (Sketchfab "Hue Museum of Heritages" / "dulichphohue") không được thực hiện.
3. Hệ quả: **TẤT CẢ nguồn dưới đây có trạng thái "chỉ qua kết quả tìm kiếm"** trừ khi ghi khác. Không có trang/API nào được tôi mở trực tiếp. Cụ thể CHƯA lấy được:
   - Trường `license`, `isDownloadable`, `publishedAt`, `faceCount`, `vertexCount` từ API Sketchfab (số tam giác ghi dưới đây là từ snippet trang Sketchfab, không phải API).
   - Số tệp của từng category Wikimedia Commons (categoryinfo).
   - Toạ độ (P625) của các QID Wikidata.
   - Tuyên bố quyền (rights statement) của từng bản đồ Gallica/LOC/UT.
4. URL ghi trong tài liệu là URL xuất hiện nguyên văn trong kết quả tìm kiếm; tôi không tự dựng URL.

Quy ước trạng thái: **[TK]** = "chỉ qua kết quả tìm kiếm"; **[LỖI]** = "URL không truy cập được (lỗi ENOTFOUND)"; **[KTT]** = "không tìm thấy".

---

## 1. Trung tâm Bảo tồn Di tích Cố đô Huế (TTBTDTCĐ Huế / HMCC) — chương trình số hoá

| Tên | Tác giả/đơn vị | URL trang gốc | URL tải | Loại / định dạng | Phạm vi | Thu thập vs công bố | Độ phân giải / chính xác | Truy cập | Giấy phép (nguyên văn) | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|---|
| Quét 3D + HBIM điện Thái Hòa | TTBTDTCĐ Huế + UALS (Hàn Quốc); báo khác ghi AGS Technologies quét 3D trước trùng tu | https://vietnamnet.vn/en/thai-hoa-palace-digitalisation-to-preserve-image-database-2372938.html ; https://en.qdnd.vn/culture-sports/culture/thai-hoa-palace-digitization-to-preserve-image-database-574943 ; https://baovanhoa.vn/di-san/hue-day-manh-so-hoa-co-vat-va-cong-trinh-di-tich-kien-truc-11161.html | không có | Point cloud TLS + mô hình HBIM (định dạng không nêu) | Điện Thái Hòa (Đại Nội) | 2023–2025 (theo báo); bài báo 2025 | ">5.200 cấu kiện" được số hoá (theo báo) | Dữ liệu do Trung tâm giữ; không thấy kênh tải công khai | không nêu | [TK] |
| Bài báo "3D Scan and HBIM of Thai Hoa Hall for the Conservation of Hue's Cultural Heritage" | Hoàng Việt Trung, Nguyễn, Lê, Võ, Nguyễn, Ngô, Bae, Jung, Min, Duong | https://isprs-archives.copernicus.org/articles/XLVIII-M-9-2025/587/2025/ | PDF: https://isprs-archives.copernicus.org/articles/XLVIII-M-9-2025/587/2025/isprs-archives-XLVIII-M-9-2025-587-2025.pdf | Bài báo (PDF); mô tả quy trình Scan-to-HBIM | Điện Thái Hòa | Công bố 1/10/2025 | Leica RTC360, 254 trạm quét trong + ngoài; kết hợp ảnh photogrammetry độ phân giải cao | Truy cập mở (ISPRS Archives) | Không nêu trong snippet (ISPRS Archives thường CC BY — CHƯA kiểm) | [TK]. DOI 10.5194/isprs-archives-XLVIII-M-9-2025-587-2025. **Dữ liệu đính kèm: không thấy nêu** |
| Số hoá 3D cổ vật | TTBTDTCĐ Huế + doanh nghiệp công nghệ | https://www.sggp.org.vn/so-hoa-co-do-hue-post675697.html ; https://baovanhoa.vn/van-hoa/day-manh-ung-dung-cong-nghe-trong-bao-ton-va-phat-huy-gia-tri-di-san-hue-102018.html | không có | Mô hình 3D cổ vật | 207 cổ vật (33 bảo vật quốc gia) đã quét; kế hoạch ~11.000 hiện vật (báo 2025) | các năm khác nhau | không nêu | Không thấy tải công khai | không nêu | [TK] |
| VR "Đi tìm Hoàng cung đã mất"; tour VR/QR 3D điện Thái Hòa; app "Di tích Huế"; không gian metaverse (Phygital Labs, NFC 10 cổ vật) | TTBTDTCĐ Huế và đối tác | https://www.vietnamplus.vn/so-hoa-di-san-tien-de-cho-phattrien-cong-nghiep-van-hoa-post977202.vnp ; https://nhadautu.vn/dua-cong-nghe-so-vao-bao-ton-di-san-hue-d92139.html | không có | Sản phẩm trải nghiệm (VR/app) — có phục dựng số Hoàng cung | Đại Nội/Tử Cấm Thành | VR ra mắt 2019 | không nêu | Trải nghiệm tại chỗ/app; không có mô hình tải | không nêu | [TK] |
| Dự án CyArk + Seagate (lăng Tự Đức, cung An Định) | CyArk, Seagate, TTBTDTCĐ Huế | https://hanoitimes.vn/hue-use-photo-real-3d-models-to-digitally-preserve-historical-monuments-3526.html ; https://vietnamnews.vn/sunday/features/451576/hue-uses-3d-tech-to-conserve-its-relics.html | xem mục 2 (Open Heritage 3D) | LiDAR mặt đất + photogrammetry | Lăng Tự Đức, cung An Định | thu 2018; công bố 2019 | xem mục 2 | xem mục 2 | xem mục 2 | [TK] |
| "Bản đồ số 3D di tích Huế" (một KTS Huế, nền Sketchfab, ra mắt 2014) | không rõ tên trong snippet | https://news.huengaynay.vn/culture/hue-relics-through-a-3d-digitized-map-44065.html | không rõ | Mô hình 3D dựng tay | Di tích Huế | bài 4/7/2017 | không nêu | chưa rõ còn hoạt động | không nêu | [TK] |
| Trang giới thiệu di tích (số liệu kích thước) | TTBTDTCĐ Huế | http://hueworldheritage.org.vn/TTBTDTCDH.aspx?TieuDeID=35&TinTucID=17&l=vn (Kỳ Đài); ...TinTucID=26 (Ngọ Môn); ...TinTucID=8 (Giới thiệu); https://eticket.hueworldheritage.org.vn/diem-den/dai-noi | — | Văn bản | — | — | — | Web | không nêu | [TK] (không fetch — host chưa thử trực tiếp do WebFetch hỏng toàn bộ) |

Kết luận lead 1: Trung tâm **giữ** dữ liệu quét 3D/HBIM (Thái Hòa, cổ vật); **không tìm thấy** mô hình, point cloud hay bản vẽ nào Trung tâm cho tải công khai. Muốn dùng phải xin phép Trung tâm.

Dự án quốc tế khác (đều [TK], không thấy dữ liệu mở):
- **Waseda (GS Nakagawa Takeshi)**: KAKEN 11691158 — https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-11691158 ; KAKEN 26820275 "Reconstruction Study of Decorative Paintings at Can Chanh Dien" — https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-26820275 ; JSPS "Reconstruction of the historical environment on Complex of Hue monuments" (CG + GIS) — https://www.jsps.go.jp/j-grantsinaid/12_kiban/ichiran_19/e-data/e54_nakagawa.pdf ; mô hình gỗ 1:10 điện Cần Chánh (~2012). Sản phẩm: báo cáo đo vẽ, CG 3D; không thấy kho dữ liệu tải.
- **KAIST (Hàn Quốc)**: phim 3D ~10 phút phục dựng Hổ Quyền, bàn giao 31/5/2010 — https://southeastasianarchaeology.com/2010/06/09/hue-city-recreated-digitally-3d ; https://www.koreajoongangdaily.com/business/koreans-help-restore-site-in-vietnam/10435014 . Chỉ là phim, không phải dữ liệu.
- **GCREP / GEKE e.V. (Đức, Andrea Teufel)**: An Định, Tả Vu, Tối Linh Từ, bình phong lăng Tự Đức, Phụng Tiên — https://news.huengaynay.vn/windows/german-imprint-on-the-heritage-of-hue-69424.html . Là bảo quản tu bổ, không phải dữ liệu 3D.
- **EFEO / BAVH**: Bulletin des Amis du Vieux Hué 1914–1944 số hoá trên Internet Archive — https://archive.org/details/40BAVH/30_3BAVH.PDF (có bình đồ, bản vẽ trong các số; chưa kiểm số nào). Ảnh Jean Le Pichon (EFEO) — https://digitizing-vietnam-website.vercel.app/en/highlights/jean-le-pichon-vietnam-photograph .
- **UNESCO**: hồ sơ di sản 678 — https://whc.unesco.org/en/list/678/documents (bản đồ khoanh vùng trong hồ sơ; chưa mở).

---

## 2. Mô hình 3D trực tuyến

### 2.1 Sketchfab (API KHÔNG truy cập được — mọi trường license/isDownloadable/publishedAt là "chưa xác minh")

| Tên mô hình | Tác giả | viewerUrl | Số tam giác/đỉnh (theo snippet) | License | isDownloadable | publishedAt | Trạng thái |
|---|---|---|---|---|---|---|---|
| Hue Citadel | Hue Museum of Heritages (@hue-museum-of-heritages) | https://sketchfab.com/3d-models/hue-citadel-113687d51c5c4ec18f914bf5bc34f467 | ~2,2M tam giác | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| Ngọ Môn | Hue Museum of Heritages | https://sketchfab.com/3d-models/ngo-mon-1e07806a73ba42febc746a0c58142576 | ~197k tam giác | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| Ngọ Môn - Meridian Gate Imperial City of Hue | korotovool | https://sketchfab.com/3d-models/ngo-mon-meridian-gate-imperial-city-of-hue-6acf4f949d5247f3afa6afdaa7c188bd | ~28,9k tam giác; dựng tay từ ảnh tham khảo | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| Ngọ Môn (Meridian Gate) 3D Model | Đào Minh Đức (@dmd_hn) | https://sketchfab.com/3d-models/ngo-mon-meridian-gate-3d-model-4a1866001d034611a47b9116695da1d2 | ~256k tam giác | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| Complex of Hué Monuments - Tomb of Tu Duc | CyArk (theo snippet) | https://sketchfab.com/3d-models/complex-of-hue-monuments-tomb-of-tu-duc-c8c6304d8ff846f89f972164b2eda9ac | không rõ | chưa xác minh (tiêu đề có nhãn "NoAI") | chưa xác minh | chưa xác minh | [TK] |
| Tu Duc's Tomb – Stele Building (CyArk dataset) | CyArk | https://sketchfab.com/3d-models/tu-ducs-tomb-stele-building-cyark-dataset-b5d78ecd5e62483192d7ccd193bc063b | không rõ | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| Hoa Khiem Temple, Tomb of Emperor Tu Duc | CyArk (theo snippet) | https://sketchfab.com/3d-models/hoa-khiem-temple-tomb-of-emperor-tu-duc-ed319997b5354c1eb9b8dbf810044295 | không rõ | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| An Dinh Palace, Historic City of Hue, Vietnam | CyArk (theo snippet) | https://sketchfab.com/3d-models/an-dinh-palace-historic-city-of-hue-vietnam-fd6df65eae404a7dbf006f68e7857a2e | ~1,5M tam giác (snippet không rõ thuộc bản nào trong 2 bản An Định) | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| An Dinh Palace photogrammetry + lidar | không rõ | https://sketchfab.com/3d-models/an-dinh-palace-photogrammetry-lidar-dca05e147d79420eb3696eefcf8e1f19 | xem dòng trên | chưa xác minh (nhãn "NoAI") | chưa xác minh | chưa xác minh | [TK] |
| An Dinh Palace, Vietnam | không rõ | https://sketchfab.com/3d-models/an-dinh-palace-vietnam-b0232236c2df44aa8c7e55c1362b18a3 | không rõ | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |
| Đại Hồng Chung (chùa Thiên Mụ) | vudn54 | https://sketchfab.com/3d-models/ai-hong-chung-chua-thien-mu-a567dbe70045482eba5902e29778d6f2 | 250k tam giác / 125,2k đỉnh | chưa xác minh | chưa xác minh | chưa xác minh | [TK] (chỉ là chuông, không phải chùa) |
| TUYÊN ĐỈNH (Cửu Đỉnh) | vudn54 | https://sketchfab.com/3d-models/tuyen-inh-16758b5def3f42bdb6d9619a4217e8a6 | không rõ | chưa xác minh | chưa xác minh | chưa xác minh | [TK] |

Bộ sưu tập/tài khoản cần duyệt thêm (chưa mở): https://sketchfab.com/vudn54/collections/hue-2275ef70eac04fa482e2690156075fb8 ; https://sketchfab.com/viktoriamai87/collections/imperial-city-hue-e40da29ef53740a785b144a615841547 ; https://sketchfab.com/dulichphohue/models ; https://sketchfab.com/e88asia/models ; https://sketchfab.com/alrawlinson (tượng rồng Thế Tổ Miếu) ; https://sketchfab.com/dmd_hn .

**[KTT] trên Sketchfab (qua tìm kiếm):** cầu Trường Tiền, cầu Phú Xuân, tháp Phước Duyên/chùa Thiên Mụ (toàn công trình), Kỳ Đài, tường/hào/cổng Kinh thành riêng lẻ, điện Thái Hòa, điện Kiến Trung, lăng Khải Định, Quốc Học, chợ Đông Ba.

Việc cần làm lại khi có mạng: chạy `https://api.sketchfab.com/v3/search?type=models&q=<từ khoá>&downloadable=true` cho 9 từ khoá đã giao và `https://api.sketchfab.com/v3/models/<uid>` cho 12 uid ở bảng trên.

### 2.2 Open Heritage 3D / CyArk / Zenodo

| Tên | Đơn vị | URL gốc | URL tải | Loại dữ liệu | Phạm vi | Thu thập vs công bố | Độ phân giải | Truy cập | Giấy phép (nguyên văn theo snippet) | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|---|
| Complex of Hué Monuments – Tomb of Tu Duc | CyArk (collector); Open Heritage 3D (distributor) | https://openheritage3d.org/project.php?id=n06n-qa49 ; DOI https://doi.org/10.26301/n06n-qa49 | Zenodo: https://zenodo.org/records/10363230 ; liên quan: https://zenodo.org/records/10352165 , https://zenodo.org/records/10348588 , https://zenodo.org/records/10379033 (Stele Building) | "LiDAR - Terrestrial, Photogrammetry - Terrestrial, Photogrammetry - Aerial" | Lăng Tự Đức (Hòa Khiêm điện, nhà bia, lăng Hoàng hậu) | thu hè 2018; Zenodo "Published May 3, 2019" | một bản ghi Zenodo: mô hình xử lý từ "1021 aerial + 1179 terrestrial photos"; kích thước point cloud không có trong snippet | Trang OH3D: gửi yêu cầu qua email để nhận link; Zenodo: tải trực tiếp (chưa kiểm) | **Mâu thuẫn giữa các bản ghi**: trang OH3D "CC BY-NC-SA"; một bản ghi Zenodo "cc-by-nc-sa-2.0"; hai bản ghi Zenodo khác (một "Tomb of Tu Duc", một "Stele Building") "cc-by-4.0". Chưa xác định bản ghi nào mang giấy phép nào | [TK] |
| An Dinh Palace | CyArk / Open Heritage 3D | https://openheritage3d.org/project/4z5b-vz23 ; DOI 10.26301/4z5b-vz23 | qua yêu cầu email (theo snippet) | LiDAR + photogrammetry (mặt đất, trên không) | Cung An Định | 2018 / 2019 | không rõ | như trên | "CC BY-NC-SA" | [TK] |
| Tomb of Tu Duc – 3D Tiles | construkted.com (đăng lại dữ liệu CyArk) | https://construkted.com/asset/dvb6qzy9id/ | không rõ | 3D Tiles/mesh xem web | Lăng Tự Đức | — | — | xem web | theo nguồn gốc CyArk; trang ghi nhầm DOI 4z5b-vz23 | [TK] |
| Google Arts & Culture – Tomb of Tu Duc | Google + CyArk + TTBTDTCĐ Huế | https://artsandculture.google.com/story/dQWxmedSprpz8w ; https://artsandculture.google.com/story/twUBSDNH8yJsJQ ; ảnh: https://artsandculture.google.com/asset/meridian-gate/mgHcKf8VUNIrnw?hl=en , https://artsandculture.google.com/asset/flag-tower-in-front-of-meridian-gate/wgEha364hqebTA?hl=vi | không | Trưng bày web, ảnh | Tự Đức; ảnh Ngọ Môn, Kỳ Đài | 2018–2019 | — | chỉ xem | không nêu | [TK] |

Lưu ý phạm vi: dữ liệu CyArk **không** bao phủ Đại Nội/Kinh thành — chỉ lăng Tự Đức (ngoại ô tây nam) và cung An Định.

### 2.3 Kho thương mại / khác (chỉ là đầu mối, đều [TK])

- CGTrader (trả phí, royalty-free): https://www.cgtrader.com/3d-models/architectural/other/hue-imperial-city-dai-noi-hue-3d ; https://www.cgtrader.com/3d-models/architectural/other/meridian-gate-and-hall-of-central-harmony ; https://www.cgtrader.com/3d-models/architectural/decoration/meridian-gate-hue-vietnam ; https://www.cgtrader.com/3d-models/architectural/other/hien-lam-cac-3d-model (Hiển Lâm Các, 1:1, 17 m, 25 USD, SKP/3DS/OBJ).
- 3D Warehouse: tác giả "Tung V" — https://3dwarehouse.sketchup.com/user/1654337275087610630955742/Tung-V (được dùng làm nguồn cho add-on MSFS https://en.flightsim.to/file/21345/imperial-city-of-hue). Điều khoản 3D Warehouse chưa kiểm.
- Fab: https://www.fab.com/listings/0859658d-5d86-4ea9-9268-24df720e63f8 (nội dung chưa rõ).
- Global Digital Heritage: [KTT] (không xuất hiện trong bất kỳ kết quả nào).

---

## 3. Wikimedia Commons & Wikidata

### 3.1 Tên category Commons (tồn tại theo tiêu đề kết quả tìm kiếm; **số tệp: KHÔNG lấy được** — API [LỖI])

| Đối tượng | Category | URL | Số tệp | Trạng thái |
|---|---|---|---|---|
| Quần thể di tích | Category:Complex of Huế Monuments | https://commons.wikimedia.org/wiki/Category:Complex_of_Hu%E1%BA%BF_Monuments | chưa có | [TK] |
| Kinh thành | Category:Citadel of Huế | https://commons.wikimedia.org/wiki/Category:Citadel_of_Hu%E1%BA%BF | chưa có | [TK] |
| Hoàng thành/Đại Nội | Category:Imperial City, Huế | https://commons.wikimedia.org/wiki/Category:Imperial_City,_Hu%E1%BA%BF | chưa có | [TK] |
| Ngọ Môn | Category:Meridian Gate (Citadel of Huế) | https://commons.wikimedia.org/wiki/Category:Meridian_Gate_(Citadel_of_Hu%E1%BA%BF) | chưa có | [TK] |
| Kỳ Đài | Category:Flag Tower of Huế | https://commons.wikimedia.org/wiki/Category:Flag_Tower_of_Hu%E1%BA%BF | chưa có | [TK] |
| Cầu Trường Tiền | Category:Truong Tien Bridge | https://commons.wikimedia.org/wiki/Category:Truong_Tien_Bridge | chưa có | [TK] |
| Cầu Phú Xuân | Category:Phu Xuan Bridge | https://commons.wikimedia.org/wiki/Category:Phu_Xuan_Bridge | chưa có | [TK] |
| Chùa Thiên Mụ | Category:Pagoda of the Celestial Lady | https://commons.wikimedia.org/wiki/Category:Pagoda_of_the_Celestial_Lady | chưa có | [TK] |
| Thành phố | Category:Hue | https://commons.wikimedia.org/wiki/Category:Hue | chưa có | [TK] |

Ghi chú: các tên tôi đoán ban đầu ("Category:Meridian Gate (Huế)", "Category:Trường Tiền Bridge", "Category:Thiên Mụ Pagoda") **không** xuất hiện — dùng đúng tên ở bảng. Lệnh cần chạy lại: `https://commons.wikimedia.org/w/api.php?action=query&prop=categoryinfo&titles=<Category:...>|...&format=json`.

### 3.2 Wikidata QID (theo tiêu đề kết quả trên wikidata.org; **toạ độ P625 chưa kiểm**)

| Đối tượng | QID | Nhãn trên Wikidata | Trạng thái |
|---|---|---|---|
| Hoàng thành Huế | Q10769129 | Imperial City of Hue | [TK] (cũng được node OSM 5182931945 gắn) |
| Kinh thành Huế | Q877185 | Huế citadel | [TK] |
| Quần thể di tích Cố đô Huế | Q10810560 | Complex of Huế Monuments | [TK] |
| Ngọ Môn | Q7023311 | Ngọ Môn | [TK] |
| Điện Thái Hòa | Q6826745 | Hall of Supreme Harmony (Imperial City of Huế) | [TK] |
| Thế Miếu | Q3211275 | Thế Miếu | [TK] |
| Cầu Trường Tiền | Q10752407 | Trang Tien Bridge | [TK] |
| Chùa Thiên Mụ | Q975568 | Thiên Mụ Temple | [TK] |
| Lăng Khải Định | Q7818621 | Tomb of Khai Dinh | [TK] |
| Lăng Minh Mạng | Q7481070 | Tomb of Emperor Minh Mang | [TK] |
| Trấn Hải thành | Q10829227 | Trấn Hải Fortress | [TK] |
| Chùa Từ Hiếu | Q10748576 | Từ Hiếu pogoda | [TK] |
| TP Huế | Q36167 | Huế | [TK] |
| Kỳ Đài, cầu Phú Xuân, điện Kiến Trung, cầu Dã Viên, Quốc Học, chợ Đông Ba | — | — | [KTT] trong kết quả (chưa chắc là không có) |

Toạ độ duy nhất thấy được: Ngọ Môn 16°28′05″N 107°34′34″E (enwiki "Meridian Gate (Huế)", qua snippet).

---

## 4. Bản đồ / bình đồ lịch sử

| Tên | Đơn vị giữ | URL | Loại / tỉ lệ | Năm | Tình trạng quyền | Trạng thái |
|---|---|---|---|---|---|---|
| "Plan de la citadelle de Hué" | BnF / Gallica | https://gallica.bnf.fr/ark:/12148/btv1b530231259 | Bình đồ (ảnh quét) | chưa rõ | Tuyên bố quyền trên bản ghi CHƯA kiểm | [TK] (tiêu đề + URL xuất hiện trong kết quả; không mở được) |
| Notice BnF (nội dung chưa rõ) | BnF | https://catalogue.bnf.fr/ark:/12148/cb35498635v | — | — | — | [TK] |
| "Hué, la citadelle : plan" (Fonds Silvestre, SHDMR_REP_46S) | Service historique de la Défense | https://servicehistorique-admin.cnmosis.dirisi.defense.gouv.fr/en/node/85367 | Bản thảo | 1850–1900 | chưa rõ; không chắc đã số hoá | [TK] |
| "Sketch of Hué" | Bodleian (danh mục Yale-NUS Historical Maps) | https://historicalmaps.yale-nus.edu.sg/catalog/bodleian-0325 | Sơ đồ | 1885 | chưa kiểm | [TK] |
| Hue 1:12,500, Series **L909**, Edition 3-AMS | US Army Map Service; bản quét tại UT Perry-Castañeda Library | https://maps.lib.utexas.edu/maps/vietnam.html ; bản GeoPDF USGS/NGA: https://store.usgs.gov/assets/MOD/StoreFiles/NGA/L909XHUE_geo.pdf | Bình đồ thành phố 1:12.500 | 1968 | Trang không trích được tuyên bố quyền; (sản phẩm cơ quan liên bang Hoa Kỳ — cần xác nhận trên trang) | [TK]. Lưu ý: lead ghi "L7014 city plan" là sai — bình đồ TP thuộc **L909** |
| Vietnam 1:50,000 Series L7014 | US AMS, 1964–1971; UT PCL + Texas Tech Vietnam Archive | https://maps.lib.utexas.edu/maps/vietnam.html ; ví dụ TTU: https://vva.vietnam.ttu.edu/repositories/2/digital_objects/635114 | Địa hình 1:50.000 | 1964–1971 | chưa kiểm | [TK]. **Số mảnh "6541 IV" cho Huế: không xác nhận được** |
| Indochina and Thailand 1:250,000, Series L509, [Hue, Sheet NE 48-16] | UT Libraries | https://collections.lib.utexas.edu/catalog/utlmaps:72fd5680-e737-4e5e-ab7c-8244b02489a6 | 1:250.000 | 1954 | chưa kiểm | [TK] |
| Bản đồ quân sự Hoa Kỳ về Huế (bản đồ Huế–Phú Cân 1:10.000 ~1960–1968; "controlled mosaic" 1:10.000 tháng 5/1968; bản đồ OSS 1945 về Kinh thành dựa trên atlas Pháp 1920 + không ảnh) | Library of Congress, Geography & Map Division | https://blogs.loc.gov/maps/2018/03/u-s-military-maps-of-hue-vietnam/ | Bình đồ / ảnh ghép | 1945, ~1960–1968 | chưa kiểm; mosaic 1968 có ghi hạn chế sử dụng thời đó; chưa rõ có ảnh số | [TK] |
| Hue City 1:25,000 (1968) | Battle Archives (bán bản in) | https://www.battlearchives.com/products/hue-city-vietnam-1-25-000-topographical-map | — | 1968 | thương mại | [TK] |
| BAVH 1914–1944 (có bình đồ Kinh thành/cung điện) | Internet Archive | https://archive.org/details/40BAVH/30_3BAVH.PDF | PDF quét | 1914–1944 | chưa kiểm | [TK] |
| David Rumsey | — | — | — | — | — | [KTT] (không có bản đồ Huế trong kết quả) |

---

## 5. Học thuật: 3D/HBIM/GIS, lũ lụt, DEM, hình thái đô thị

| Tên | Tác giả / đơn vị | URL / DOI | Loại | Phạm vi | Dữ liệu đính kèm? | Trạng thái |
|---|---|---|---|---|---|---|
| 3D Scan and HBIM of Thai Hoa Hall… | Hoàng V.T. và cs., ISPRS Archives 2025 | DOI 10.5194/isprs-archives-XLVIII-M-9-2025-587-2025 | Bài báo | Điện Thái Hòa | Không thấy nêu | [TK] |
| Reconstruction of the historical environment on Complex of Hue monuments (CG + GIS) | Nakagawa T., Waseda (JSPS) | https://www.jsps.go.jp/j-grantsinaid/12_kiban/ichiran_19/e-data/e54_nakagawa.pdf | Tóm tắt đề tài | Quần thể di tích, Cần Chánh | Không | [TK] |
| KAKEN 11691158 (đo nền móng, phục nguyên kích thước Cần Chánh; đo lăng Thiệu Trị) | Waseda | https://kaken.nii.ac.jp/en/report/KAKENHI-PROJECT-11691158/116911582001kenkyu_seika_hokoku_gaiyo | Báo cáo | Hoàng thành, lăng | Không | [TK] |
| Bài tổng quan số hoá quần thể di tích Huế (3D, VR/AR) 2025 | tạp chí Việt Nam (một trong hai URL: https://jos.hueuni.edu.vn/index.php/hujos-tt/article/download/4970/649/15385 hoặc https://jshou.edu.vn/houjs/article/download/856/706/1350 — snippet không cho biết URL nào) | — | Bài tổng quan | Kinh thành | Không | [TK] |
| Bài kiến trúc Kinh thành (Võ Ngọc Đức, ĐH Khoa học Huế) | HUSC | https://jos.husc.edu.vn/UPLOADS/numbers/1/15_fulltext_8.1.Ktruc - Vo Ngoc Duc.pdf | Bài báo | Kinh thành (số liệu kích thước) | Không | [TK] |
| GIS thành cổ Quảng Trị bằng GPS/UAV/quét 3D (2018) — tham khảo phương pháp | ĐH Khoa học Huế (URL khả dĩ: https://jos.husc.edu.vn/UPLOADS/numbers/94/1307_fulltext_7._dldc_-_hoang_hoa_tham.pdf — chưa xác nhận khớp) | — | Bài báo | Quảng Trị, không phải Huế | Không | [TK] |
| Impact of temporal rainfall patterns on flash floods in Hue City, Vietnam | Journal of Flood Risk Management, 3/2021 | https://doaj.org/article/75d6e48538ed406dadfb57e09dd67a1e (DOI không có trong snippet) | Bài báo mô hình ngập đô thị | TP Huế | Không rõ | [TK] |
| Mô phỏng thoát nước đô thị Huế (2013) | Sở GTVT TT-Huế (đăng lại) | https://sgtvt.thuathienhue.gov.vn/UploadFiles/TinTuc/2013/12/2/mo_phong_thoat_nuoc_do_thi_hue.pdf | Báo cáo | Đô thị Huế, có vùng Kinh thành | DEM lưới 10 m × 10 m từ 44.835 điểm độ cao, nền địa hình 1:2.000 của dự án **HueGIS** — không công bố | [TK] |
| Mô phỏng ngập hạ lưu Hương–Ô Lâu (2024) | Tạp chí KH ĐH Huế | https://jos.hueuni.edu.vn/index.php/hujos-ard/article/view/5272/687 | Bài báo | Hạ lưu sông Hương | DEM từ bản đồ địa hình 1:10.000; không đính kèm | [TK] |
| SOBEK 2D flood modelling Thua Thien-Hue (IAHR 2014) | — | https://www.iahr.org/library/info?pid=9737 | Bài hội nghị | Tỉnh | Không | [TK] |
| MIKE FLOOD lưu vực sông Hương | DHI | https://worldwide.dhigroup.com/global/references/apac/overview/reducing-flood-risk-in-central-vietnam | Giới thiệu dự án | Lưu vực | Không | [TK] |
| EGU25-3176: lập bản đồ ngập SAR đợt lũ 2020 TT-Huế, kiểm định bằng mốc lũ + ảnh drone | — | https://meetingorganizer.copernicus.org/EGU25/EGU25-3176.html | Tóm tắt hội nghị | Tỉnh | Ảnh drone không công bố | [TK] |
| UNOSAT: Satellite detected waters in Thua Thien Hue (22/10, 25/10, 10/11/2020) | UNITAR-UNOSAT; HDX / ReliefWeb | https://reliefweb.int/map/viet-nam/satellite-detected-waters-thua-thien-hue-province-viet-nam-10-november-2020-imagery ; bản ghi danh mục: https://geo.btaa.org/catalog/94206579-2861-43f5-8b3f-165ddaee6aef | Vector vùng ngập từ Sentinel-1 | Tỉnh | Có (shapefile trên HDX theo snippet); "CC BY-SA" theo snippet | [TK] |
| GlobalBuildingAtlas (footprint + chiều cao + LoD1 toàn cầu) | TUM (Zhu và cs.), ESSD 17, 6647, 2025 | https://essd.copernicus.org/articles/17/6647/2025/ ; DOI dữ liệu 10.14459/2025mp1782307 | Vector + raster chiều cao | Toàn cầu (cần kiểm ô phủ Huế) | Có; polygon "ODbL", LoD1 + height map "CC BY-NC 4.0" (theo snippet); RMSE chiều cao 1,5–8,9 m tuỳ châu lục | [TK] |
| 3D-GloBFP | — | Zenodo (DOI phần châu Á không có trong snippet; phần châu Mỹ/Phi/Đại Dương: 10.5281/zenodo.11319912) | Chiều cao công trình | Toàn cầu | Có | [TK] |
| Exploration of open data in Southeast Asia to generate 3D building models | NUS Urban Analytics Lab | https://ual.sg/publication/2020-3-dgeoinfo-3-d-asean | Bài báo | ĐNA | — | [TK] |
| Huế Smart Digital City Model | Ramboll / ADB AASCTF | https://www.ramboll.com/en-apac/projects/government-and-public/hue-smart-digital-city-model ; tờ rơi: https://events.development.asia/system/files/materials/2023/09/202309-aasctf-project-flyer-transforming-smart-city-future-hu-through-smart-digital-city-model.pdf | Mô hình 3D ArcGIS + CSDL GIS dựng từ ảnh vệ tinh | TP Huế | Không công bố; chủ sở hữu: chính quyền Huế/ADB | [TK] |
| Kế hoạch 334/KH-UBND (2026): thí điểm bản sao số đô thị phường Thuận Hóa; GIS đô thị giao Sở Xây dựng | UBND TP Huế | https://hue.gov.vn/Portals/0/Uploads/VBPL/Nam2026/Thang6/00.00.H57-334-KH-UBND-2026-PL2_signed.pdf | Văn bản | Phường Thuận Hóa | Chưa có sản phẩm | [TK] |
| DJI user story: drone lập bản đồ/3D sau lũ 10/2020 ở TT-Huế | DJI Enterprise | https://enterprise-insights.dji.com/user-stories/drone-search-and-rescue-vietnam-flood-landslides | Bài PR | (vùng sạt lở, không phải nội đô) | Không | [TK] |
| Tube house plans in Vietnam 1986–2015 | WIT Transactions 2017 | doi:10.2495/SDP170181 (bản Scribd: https://www.scribd.com/document/642472152/tube-house) | Bài báo | Toàn quốc, không riêng Huế | Không | [TK] |

**[KTT]:** DEM LiDAR công khai cho Huế; bộ dữ liệu chiều cao/số tầng riêng cho Huế; luận văn ĐH Huế dùng UAV/GIS 3D cho Kinh thành/Thượng thành; bộ dữ liệu Huế trên Figshare/Mendeley/Pangaea; khảo sát typology nhà ống riêng Huế.

---

## 6. UAV / ảnh trực giao / ảnh vệ tinh mở

| Nguồn | Kết quả | Trạng thái |
|---|---|---|
| OpenAerialMap — cảnh trên Huế | Không có cảnh nào xuất hiện trong kết quả tìm kiếm (công cụ tìm kiếm không lập chỉ mục danh mục OAM; cần truy vấn API OAM theo bbox) | [KTT] qua tìm kiếm — KHÔNG phải xác nhận là không có |
| Maxar Open Data — sự kiện lũ miền Trung VN/Huế 2020–2025 | Không thấy sự kiện Việt Nam/Huế nào; chương trình nói chung: giấy phép "Creative Commons Attribution Non-Commercial 4.0 (CC BY-NC 4.0)"; danh mục: https://registry.opendata.aws/maxar-open-data/ , https://source.coop/maxar/maxar-opendata | [KTT] qua tìm kiếm — cần duyệt STAC catalog |
| Copernicus "Devastating flooding in Vietnam" (cuối 10/2025) | https://www.copernicus.eu/en/media/image-day-gallery/devastating-flooding-vietnam — ảnh Sentinel, độ phân giải thấp so với nhu cầu 3D | [TK] |
| Sentinel Asia / MBRSC flood map 15/10/2023 (Quảng Bình–Quảng Trị–TT-Huế) | https://sentinel-asia.org/EO/2023/article20231013VN/MBRSC/MBRSC_Vietnam_Flood_Map.pdf | [TK] |
| Bộ ảnh drone photogrammetry mở cho nội đô Huế | Không tìm thấy | [KTT] |

---

## 7. Video — CHỈ LÀ ĐẦU MỐI tham khảo / xin phép

Không video nào dưới đây được xác minh giấy phép, ngày đăng, kênh hay có kèm track GPS. Mặc định của YouTube là "Standard YouTube License" (không cho tái sử dụng) trừ khi trang video ghi "Creative Commons Attribution"; phải mở từng trang để kiểm. Không tìm thấy video dashcam/lái xe nào có GPS track.

| Tiêu đề (theo kết quả tìm kiếm) | URL | Loại | Kênh / ngày / giấy phép / GPS | Trạng thái |
|---|---|---|---|---|
| Flycam Đại Nội Kinh Thành Huế - Công trình kiến trúc đồ sộ 4k Cinematic | https://youtube.com/watch?v=t7677a4Rxnw | Flycam | chưa kiểm | [TK] |
| [Flycam 4K] Hue - Vietnam Travel | https://www.youtube.com/watch?v=ZcBnZfWMa-I | Flycam | chưa kiểm | [TK] |
| Cố Đô Huế (flycam 4K, ~3.000 ngày tuổi) | https://www.youtube.com/watch?v=K1ie-Vgss-Q | Flycam | chưa kiểm | [TK] |
| Toàn cảnh thành phố Huế từ trên cao với góc quay flycam mới nhất | https://www.youtube.com/watch?v=7l46S45FUVg | Flycam | chưa kiểm | [TK] |
| [Flycam] Những ngày Huế ngập trong biển nước (shorts) | https://www.youtube.com/shorts/Ak83K9FSBTY | Flycam lũ | chưa kiểm | [TK] |
| Exploring Hue by Foot – Le Loi Street, Truong Tien Bridge & Imperial City Walk | https://www.youtube.com/watch?v=9qeLm_KKl08 | Đi bộ 4K | chưa kiểm | [TK] |
| Dong Ba Market Walk – Real Street Life & Local Culture in Hue | https://www.youtube.com/watch?v=ckN6Lvb0vlI | Đi bộ (chợ Đông Ba) | chưa kiểm | [TK] |
| Nightlife Hue Vietnam – Hue Night Walk – Vietnam 2025 [4K HDR] | https://www.youtube.com/watch?v=-_L1zjScWew | Đi bộ đêm | chưa kiểm (snippet: quay ~4/2024) | [TK] |
| Hue Night Walk | https://www.youtube.com/watch?v=cS-4_C1AKGg | Đi bộ đêm | chưa kiểm | [TK] |
| Walking Hue, Vietnam Streets: Incense Village (GoPro 12, 4K) | https://www.youtube.com/watch?v=DkLauIhtKDw | Đi bộ (làng hương Thủy Xuân) | chưa kiểm | [TK] |
| Kênh Flycam4K / FLYCAM VIỆT NAM | https://www.youtube.com/channel/UCYMji_qHciI90T8f_4mZhBg ; https://www.youtube.com/@flycamvietnam1908 | Kênh flycam | chưa kiểm | [TK] |
| 4K Drone Footage HUE – The Imperial City (2019), One Man Wolf Pack | https://www.onemanwolfpack.de/drone-videos/4k-drone-footage-hue-the-imperial-city-vietnam-2019-aerial-film-travel-video/ (đăng 2019-04-23) | Flycam | tác giả bán footage; chưa kiểm giấy phép | [TK] |
| DJI Forum thread (video drone Huế 4:55) | https://forum.dji.com/thread-187436-1-1.html | Flycam | chưa kiểm | [TK] |

Dashcam/lái xe/xe máy tại Huế: [KTT].

---

## 8. Ràng buộc chiều cao / số tầng

| Văn bản | Nội dung liên quan (theo snippet) | URL | Trạng thái |
|---|---|---|---|
| QĐ 2318/QĐ-UB (1999) — Điều lệ quản lý xây dựng theo QH chi tiết khu Kinh thành Huế | Nhà ở liền kề tối đa **2 tầng, cao không quá 11 m kể cả mái dốc**; một số tuyến tiếp cận phòng thành chỉ **1 tầng, cao tối đa ~4 m**. Hiệu lực hiện tại: chưa kiểm | https://thuvienphapluat.vn/van-ban/Xay-dung-Do-thi/Quyet-dinh-2318-QD-UB-quan-ly-xay-dung-theo-do-an-quy-hoach-chi-tiet-khu-kinh-thanh-Hue-Thua-Thien-Hue-1999-176012.aspx | [TK] |
| QĐ 2145/QĐ-UBND (2020) — phê duyệt Quy chế quản lý quy hoạch, kiến trúc đô thị Huế | Tồn tại; nội dung chiều cao theo khu chưa đọc | https://thuvienphapluat.vn/van-ban/Xay-dung-Do-thi/Quyet-dinh-2145-QD-UBND-2020-phe-duyet-Quy-che-quan-ly-quy-hoach-kien-truc-do-thi-Hue-455347.aspx | [TK] |
| QĐ 596 (19/3/2021) — QH chi tiết hai bờ sông Hương | Bờ Bắc hầu như hạn chế xây mới, nếu có tối đa khoảng 2 tầng; bờ Nam kiểm soát nghiêm chiều cao (theo báo Văn Hóa) | https://baovanhoa.vn/van-hoa/giu-truc-canh-quan-song-huong-bang-ky-luat-quy-hoach-235081.html | [TK] (nguồn báo chí, chưa có văn bản gốc) |
| QĐ 134/2025/QĐ-UBND (17/12/2025) — phân cấp thẩm quyền quản lý kiến trúc TP Huế | Giao Sở Xây dựng lập Quy chế quản lý kiến trúc TP | https://thuvienphapluat.vn/van-ban/Xay-dung-Do-thi/Quyet-dinh-134-2025-QD-UBND-phan-cap-tham-quyen-quan-ly-kien-truc-Hue-685418.aspx | [TK] |
| **Dự thảo** Quy chế quản lý kiến trúc TP Huế (6/2026) | Công trình dân dụng trong Kinh thành cao tối đa **11,0 m**; chiều cao tính từ cao độ mặt đất quy hoạch đến điểm cao nhất kể cả tum/mái dốc. Có tranh luận về đề xuất tới 12 tầng sát sông Hương (gần KS Hương Giang, Century). **Chưa thấy bản ban hành chính thức** | https://phongquang.hue.gov.vn/Portals/44/Uploads/TinBai/H57.105/Nam2026/Thang6/DU_THAO_QUY_CHE_QUAN_LY_KIEN_TRUC_THANH_PHO_HUE_5_6_2026_17_44_29_651_CH_10_6_2026_09_47_36_422_SA.pdf ; https://tuoitre.vn/hue-du-kien-siet-quan-ly-chieu-cao-cong-trinh-bao-ve-canh-quan-song-huong-100260623111529447.htm | [TK] |
| Hỏi đáp cổng tỉnh: nhà trong kiệt | Nhà 1 tầng + gác lửng tối đa ~7,5 m; nhà 2 tầng tối đa 11 m nếu tầng 2 lùi 12 m so với chỉ giới đường đỏ | https://tuongtac.thuathienhue.gov.vn/phan-anh/hoi-chieu-cao-xay-dung-nha-trong-kiet-a43588.html | [TK] |
| Điều chỉnh cục bộ QH chi tiết khu Kinh thành | — | https://sxd.thuathienhue.gov.vn/?cn=380&gd=3&tc=1648 | [TK] |

Hệ quả cho mô hình 3D: trong Kinh thành có thể đặt trần mặc định ≤ 11 m (≤ 2 tầng) cho nhà dân khi thiếu dữ liệu — đây là giả định quy hoạch, không phải đo đạc.

---

## 9. Bảng kích thước — "SỐ LIỆU CÔNG BỐ, CHƯA ĐO KIỂM"

Tất cả đều lấy qua snippet tìm kiếm; cột "Nguồn" là trang mà snippet trích.

### 9.1 Cầu

| Cầu | Chiều dài | Rộng | Nhịp | Năm | Tĩnh không / thông thuyền | Nguồn | Ghi chú |
|---|---|---|---|---|---|---|---|
| Trường Tiền | 402,60 m (nguồn khác: 401 m; enwiki ~403 m) | lòng cầu 6 m (nguồn khác 6,2 m) | 6 nhịp dầm thép vành lược ("6 nhịp 12 vài"), khẩu độ mỗi nhịp 67 m | hoàn thành 1899 (một nguồn Pháp ngữ: khởi công 5/1899, khánh thành 18/12/1900); mở rộng hành lang 1937 | không có; enwiki ghi "height 5.45 m" (không rõ là chiều cao vòm hay tĩnh không) | https://vi.wikipedia.org/wiki/C%E1%BA%A7u_Tr%C6%B0%E1%BB%9Dng_Ti%E1%BB%81n ; https://en.wikipedia.org/wiki/Truong_Tien_Bridge ; https://www.vietnammonpaysnatal.fr/pont-truong-tien-hue/ ; Commons Category:Truong Tien Bridge (402.6 m) | mâu thuẫn năm và nhà thầu (Eiffel vs Schneider et Cie et Letellier) |
| Phú Xuân | 374,65 m | 17 m; lòng cầu 12 m | không có trong snippet | không có trong snippet | không có | https://vi.wikipedia.org/wiki/C%E1%BA%A7u_Ph%C3%BA_Xu%C3%A2n | tải trọng 18 tấn; chỉ một nguồn |
| Dã Viên (đường bộ) | 542,5 m (gồm cả đường dẫn) | 24,5 m (4 làn + 2 lề bộ hành) | 5 nhịp | khánh thành 31/8/2012 | không có | https://vi.wikipedia.org/wiki/C%E1%BA%A7u_D%C3%A3_Vi%C3%AAn ; https://mytour.vn/vi/blog/bai-viet/cau-da-vien.html | — |
| Bạch Hổ (cầu đường sắt qua cồn Dã Viên) | 302,1 m (bờ Bắc → cồn) + 102,7 m (cồn → bờ Nam) | không có | không có | 1908 | không có | https://mytour.vn/vi/blog/bai-viet/cau-da-vien.html ; trang Structurae (chưa đọc): https://structurae.net/en/structures/bach-ho-bridge | nguồn nêu có tranh cãi tên gọi Bạch Hổ/Dã Viên |
| Nguyễn Hoàng | 380 m | 43 m | 5 nhịp | khởi công 23/12/2022 (một nguồn ghi 12/2021); thông xe kỹ thuật 26/3/2025 | "thông thuyền cao 6 m, rộng tối thiểu 30 m" (một nguồn: Việt Báo) | https://tuoitre.vn/thong-xe-cay-cau-hon-1-855-ti-dong-bac-qua-song-huong-2025032612161328.htm ; https://vietbao.vn/cay-cau-2-280-ty-dong-doi-mau-ky-ao-o-hue-535267.html | mâu thuẫn kết cấu: "vòm thép" (Tuổi Trẻ) vs "bê tông cốt thép" (Việt Báo) |
| Cầu vượt cửa biển Thuận An | 2,36 km | 20 m (4 làn); nhịp chính 23,5 m | nhịp chính extradosed 3 nhịp liên tục 120–218–120 m | hợp long 2025; "chính thức khai thác từ 30/7/2026" (tiêu đề báo Lâm Đồng, chưa kiểm) | khổ thông thuyền lớn nhất 218 m (bề ngang); trụ cao ~40 m; cho tàu đến 5.000 tấn; chiều cao tĩnh không: không có số rõ | https://baodautu.vn/batdongsan/tp-hue-cau-vuot-cua-bien-thuan-an-sap-thong-xe-ky-thuat-d393062.html ; https://www.vietnamplus.vn/cau-vuot-cua-bien-thuan-an-bieu-tuong-moi-cua-mot-do-thi-hue-hien-dai-post1126511.vnp ; https://baolamdong.vn/print/454269.html | ngoài AOI nội đô |

### 9.2 Kinh thành, Hoàng thành, Ngọ Môn, Kỳ Đài

| Đối tượng | Thông số | Giá trị | Nguồn | Ghi chú |
|---|---|---|---|---|
| Kinh thành | Chu vi | ~10 km (10.571 m: tôi KHÔNG tìm được nguồn cho con số này) | hueworldheritage.org.vn (snippet; có thể từ https://eticket.hueworldheritage.org.vn/diem-den/dai-noi hoặc ...TinTucID=8) ; vinwonders | Bài HUSC (Võ Ngọc Đức): mỗi cạnh 2.235 m, chu vi "gần 9.000 m" — mâu thuẫn |
| Kinh thành | Chiều cao thành | 6,6 m | như trên | HUSC: "tường cao trên 5 m" |
| Kinh thành | Bề dày | 21 m | như trên | — |
| Kinh thành | Cửa / pháo đài | 10 cửa (HUSC: 11 cửa), 24 pháo đài | như trên | — |
| Kinh thành | Xây dựng | khởi công 1805, hoàn thành 1832 | hueworldheritage.org.vn (snippet) | diện tích >500 ha theo VnExpress |
| Hoàng thành | Mặt bằng | gần vuông, mỗi bề ~600 m | hueworldheritage.org.vn (snippet) | enwiki: chu vi tường ~2,5 km; con số "2.416 m": không tìm được nguồn |
| Hoàng thành | Tường | gạch, cao 4 m, dày 1 m; có hào; 4 cửa | hueworldheritage.org.vn (snippet) | một nguồn |
| Tử Cấm Thành | Chu vi / tường | ~1.230 m; cao 3,72 m; dày 0,72 m | hueworldheritage.org.vn (snippet) | — |
| Ngọ Môn | Nền đài chữ U | đáy 57,77 m; cạnh bên 27,06 m; cao gần 5 m; chiếm đất >1.560 m² (kể cả lòng chữ U); 5 lối đi | http://hueworldheritage.org.vn/TTBTDTCDH.aspx?TieuDeID=35&TinTucID=26&l=vn (snippet) | vi.wikipedia: đáy 57,96 m; mỗi cánh 27,50 m; cao hơn 5 m; ~1.400 m² — mâu thuẫn nhỏ |
| Ngọ Môn | Lầu Ngũ Phụng | 2 tầng; nền cao 1,15 m trên đài; khung gỗ lim 100 cột | https://wikiwand.com/vi/Ng%E1%BB%8D_M%C3%B4n_(Ho%C3%A0ng_th%C3%A0nh_Hu%E1%BA%BF) | xây 1833 (Minh Mạng 14) |
| Kỳ Đài | Đài cờ | 3 tầng, tổng cao khoảng 17,5 m | http://hueworldheritage.org.vn/TTBTDTCDH.aspx?TieuDeID=35&TinTucID=17&l=vn (snippet); https://vi.wikipedia.org/wiki/K%E1%BB%B3_%C4%91%C3%A0i_(Hu%E1%BA%BF) | FOTW: 17,40 m; mia.vn: tầng ~5,5 + 6 + 7 m (≈18,5 m) |
| Kỳ Đài | Cột cờ | bê tông cốt sắt, "tổng chiều cao 37 m", dựng 1948 | như trên | FOTW nêu số khác (tổng 33,4 m / >41 m) — mâu thuẫn; "29,52 m": không tìm được nguồn |
| Kỳ Đài | Xây dựng | Gia Long 6 (1807) | hueworldheritage.org.vn (snippet) | — |
| Hiển Lâm Các | Chiều cao | 17 m | trang bán mô hình CGTrader | nguồn yếu |

---

## 10. Khoảng trống chính

1. Không có mô hình 3D/point cloud mở nào cho Đại Nội, Kinh thành, cầu Trường Tiền, Thiên Mụ; dữ liệu mở duy nhất chất lượng đo đạc là CyArk (lăng Tự Đức, An Định) với giấy phép NC ở phần lớn bản ghi.
2. Giấy phép và khả năng tải của các mô hình Sketchfab (đặc biệt "Hue Citadel" ~2,2M tam giác của Hue Museum of Heritages) chưa xác minh — ưu tiên số 1 khi có mạng.
3. Số tệp Commons và toạ độ Wikidata chưa lấy.
4. Không thấy LiDAR/DEM độ phân giải cao công khai; DEM trong nghiên cứu lũ là 10 m từ bản đồ 1:2.000–1:25.000 (không công bố).
5. OAM / Maxar: chưa duyệt danh mục trực tiếp — kết luận "không có" là chưa chắc.
6. Phú Xuân: thiếu năm xây dựng, số nhịp; mọi cầu: thiếu tĩnh không đứng.
7. Quy chế quản lý kiến trúc TP Huế mới: đang ở dạng dự thảo (6/2026); chưa đọc QĐ 2145/2020.

---

## 11. Nhật ký truy vấn

### 11.1 WebFetch (7 lần, tất cả thất bại)

| # | URL | Kết quả |
|---|---|---|
| F1 | https://api.sketchfab.com/v3/search?type=models&q=hue+imperial+city&count=24 | lỗi getaddrinfo ENOTFOUND |
| F2 | https://api.sketchfab.com/v3/search?type=models&q=hue+imperial+city&downloadable=true&count=24 | lỗi ENOTFOUND |
| F3 | https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Imperial_City,_Huế… | lỗi ENOTFOUND |
| F4 | https://commons.wikimedia.org/w/api.php?action=query&prop=categoryinfo&titles=… | lỗi ENOTFOUND |
| F5 | https://vi.wikipedia.org/wiki/Cầu_Trường_Tiền | lỗi ENOTFOUND |
| F6 | https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Imperial+City+of+Huế… | lỗi ENOTFOUND |
| F7 | https://hue.gov.vn/ | lỗi ENOTFOUND |

Chưa thử (dừng sau khi 5 host lỗi cùng kiểu): upload.wikimedia.org, hueworldheritage.org.vn, thuvienphapluat.vn, www.openstreetmap.org, wiki.openstreetmap.org.

### 11.2 WebSearch (48 lần; lần 48 không được thực hiện)

| # | Truy vấn | Kết quả một dòng |
|---|---|---|
| S1 | Trung tâm Bảo tồn Di tích Cố đô Huế số hóa 3D scan di tích HBIM thực tế ảo dữ liệu | Báo chí về số hoá; bài ISPRS 2025 Thái Hòa; 207 cổ vật; VR 2019 |
| S2 | sketchfab Huế imperial city Ngọ Môn 3D model downloadable | CyArk Tự Đức/An Định trên Sketchfab; Zenodo 10363230; CGTrader; flightsim.to |
| S3 | commons.wikimedia.org Category "Imperial City, Huế" OR "Meridian Gate (Huế)" OR "Trường Tiền Bridge" | Chỉ ra mirror Wikipedia; không có trang Commons |
| S4 | Hue Citadel 3D reconstruction photogrammetry terrestrial laser scanning HBIM paper | ISPRS 2025 (RTC360, 254 trạm); không có bài cho toàn Kinh thành |
| S5 | openheritage3d.org Tomb of Tu Duc Hue Vietnam dataset license DOI CyArk | DOI 10.26301/n06n-qa49; An Định 4z5b-vz23 CC BY-NC-SA; tải qua email |
| S6 | sketchfab "Hue" OR "Huế" "Thien Mu" OR "Truong Tien" OR "Kinh thanh" OR "Khai Dinh" | Thêm mô hình An Định, Hòa Khiêm; alrawlinson; không có Thiên Mụ/Trường Tiền |
| S7 | Waseda University … Can Chanh palace … 早稲田大学 フエ 勤政殿 復原 | KAKEN 11691158, 26820275; JSPS CG+GIS; mô hình 1:10 |
| S8 | KAIST OR 한국 디지털 복원 후에 황성 … | KAIST phim 3D Hổ Quyền 2010; UALS HBIM Thái Hòa 2023–2025 |
| S9 | gallica BnF "plan de la citadelle de Hué" OR "Plan de Hué" carte 1885 | Không ra Gallica; SHD Fonds Silvestre; Bodleian 1885 |
| S10 | University of Texas PCL Vietnam city plans Hue 1968 AMS 1:12,500 L7014 Hue 6541 IV | Hue 1:12.500 thuộc L909 Ed.3-AMS 1968; L7014 là 1:50.000; "6541 IV" không xác nhận |
| S11 | Hue city flood model LiDAR DEM Huong river inundation simulation building data | JFRM 2021; SOBEK; MIKE FLOOD; không có LiDAR |
| S12 | Maxar Open Data Program Vietnam flood Hue 2025 OR 2020 OR 2022 | Không có sự kiện VN; CC BY-NC 4.0 chung; UNOSAT 2020; Copernicus 10/2025 |
| S13 | cầu Trường Tiền dài 402,60 m 6 nhịp 12 vài rộng 6 m năm 1899 | 402,60 m; 6 nhịp × 67 m; lòng 6 m; mâu thuẫn 1899/1900 |
| S14 | cầu Phú Xuân … cầu Dã Viên … cầu Bạch Hổ chiều dài | Không có Phú Xuân; Bạch Hổ đường sắt 302,1 + 102,7 m |
| S15 | cầu Nguyễn Hoàng Huế thông xe 2025 … | 380 m, 5 nhịp, 43 m, thông xe KT 26/3/2025; thông thuyền 6 m × 30 m (1 nguồn) |
| S16 | cầu vượt cửa biển Thuận An … | 2,36 km; 20 m; 120–218–120 m extradosed |
| S17 | Kinh thành Huế chu vi 10.571 m thành cao 6,6 m dày 21 m; Hoàng thành…; Kỳ Đài…; Ngọ Môn… | ~10 km/6,6 m/21 m (vinwonders); HUSC: 2.235 m/cạnh |
| S18 | "cầu Phú Xuân" Huế "dài" "rộng" Eiffel 1970 1971 nhịp … | Không có số liệu Phú Xuân |
| S19 | Quy chế quản lý kiến trúc đô thị Huế chiều cao tối đa khu vực Kinh thành hai bờ sông Hương | Dự thảo 2026; QĐ 596/2021; QĐ 2318/1999 |
| S20 | OpenAerialMap Hue Vietnam drone orthophoto … flood 2020 | Không có OAM; UNOSAT/HDX; EGU25-3176; DJI story |
| S21 | wikidata "Imperial City of Huế" Q … | Q10769129 qua node OSM |
| S22 | Kỳ Đài Huế ba tầng đài cao 17,5 m cột cờ cao 29,52 m … | FOTW 17,40 m; mia.vn 5,5+6+7; BTCT 1948 |
| S23 | Hue Vietnam building height dataset OR "urban morphology" OR "3D city model" … | Không có bộ riêng Huế; GlobalBuildingAtlas; 3D-GloBFP |
| S24 | Huế bản sao số "digital twin" 3D thành phố GIS Huế HueCIT … LiDAR | KH 334/KH-UBND 2026; Ramboll/AASCTF |
| S25 | YouTube Huế 4K walking tour OR "driving tour" OR dashcam OR flycam … | Chỉ ra trang tour; DJI forum |
| S26 | GCREP … Andrea Teufel …; EFEO … Bulletin des Amis du Vieux Hué … | GCREP/GEKE; BAVH trên archive.org |
| S27 | Wikimedia Commons "Category:Ngọ Môn" OR … | Không ra Commons; toạ độ Ngọ Môn từ enwiki |
| S28 | nhà ống Huế typology "tube house" … | Không có nghiên cứu riêng Huế; WIT 2017 |
| S29 | "cầu Phú Xuân" sông Hương "dài" m "rộng" m xây dựng 1970 … | Không có |
| S30 | cầu Dã Viên đường bộ Huế dài 542,5 m rộng 23 m 5 nhịp 2012 | Không có (kết quả lạc đề) |
| S31 | hueworldheritage.org.vn Ngọ Môn nền đài …; Hoàng thành chu vi 2.416 m … | Không xác nhận; lầu Ngũ Phụng 100 cột, nền 1,15 m |
| S32 | flycam Huế 4K youtube … "Creative Commons" OR "flycam" 2024 2025 | One Man Wolf Pack 2019; DJI forum; không có thông tin giấy phép |
| S33 | [site commons.wikimedia.org] Category Huế Imperial City Meridian Gate Trường Tiền Bridge Thiên Mụ Flag Tower | Xác định 6 tên category đúng |
| S34 | [site wikidata.org] Ngọ Môn Huế OR "Cầu Trường Tiền" OR "Chùa Thiên Mụ" OR "Kỳ đài Huế" OR "Cầu Phú Xuân" | Q7023311, Q10752407, Q975568, Q10810560, Q3211275 |
| S35 | [site sketchfab.com] Huế Kinh thành Thế Tổ Miếu Thiên Mụ Trường Tiền Ngọ Môn 3D model | Hue Museum of Heritages (Hue Citadel, Ngọ Môn); korotovool; dmd_hn |
| S36 | [site zenodo.org, openheritage3d.org] Tomb of Tu Duc … license … | 4 bản ghi Zenodo; giấy phép mâu thuẫn (BY-NC-SA vs BY 4.0) |
| S37 | [site vi.wikipedia.org] cầu Phú Xuân…; cầu Dã Viên…; Kỳ Đài…; Ngọ Môn… | Phú Xuân 374,65 m/17 m; Dã Viên 542,5 m/24,5 m; Kỳ Đài 17,5 m/37 m; Ngọ Môn 57,96 m |
| S38 | [site hueworldheritage.org.vn] Kinh thành Huế chu vi …; Hoàng thành…; Kỳ Đài; Ngọ Môn | Kinh thành 10 km/6,6/21; Hoàng thành 600 m, 4 m, 1 m; Ngọ Môn 57,77/27,06; Kỳ Đài 17,5/37 |
| S39 | [site sketchfab.com] Trường Tiền bridge OR "Thien Mu" … OR "Hue Museum of Heritages" | vudn54 (Đại Hồng Chung, Tuyên Đỉnh); không có Trường Tiền |
| S40 | [site wikidata.org] Imperial City Huế OR "Kỳ Đài" Huế OR "Phú Xuân Bridge" OR "Thái Hòa" … | Q10769129, Q877185, Q6826745, Q7818621, Q7481070, Q10829227 |
| S41 | [site commons.wikimedia.org] Category Thiên Mụ Temple OR "Phú Xuân Bridge" OR "Thái Hòa Palace" … | Category:Pagoda of the Celestial Lady; Category:Phu Xuan Bridge; Category:Hue |
| S42 | [site thuvienphapluat.vn, hue.gov.vn, thuathienhue.gov.vn] Quy chế quản lý kiến trúc thành phố Huế … | Dự thảo 2026 (11,0 m); QĐ 2145/2020; QĐ 2318/1999 (2 tầng, 11 m); QĐ 134/2025 |
| S43 | [site loc.gov, maps.lib.utexas.edu, gallica.bnf.fr, davidrumsey.com] Hue Vietnam map 1968 city plan … | Gallica "Plan de la citadelle de Hué" (btv1b530231259); LOC blog (1:10.000, mosaic 5/1968, OSS 1945) |
| S44 | [site youtube.com] Huế 4K driving OR dashcam OR "walking tour" OR flycam Kinh thành Đại Nội 2025 | 5 video flycam + 2 kênh; không có dashcam |
| S45 | [site youtube.com] Hue Vietnam "walking tour" OR "driving tour" OR "motorbike ride" OR dashcam 4K … | 5 video đi bộ (Lê Lợi–Trường Tiền–Đại Nội, Đông Ba, đêm, làng hương); không có lái xe |
| S46 | "Kinh thành Huế" UAV OR "máy bay không người lái" … luận văn … Thượng thành Eo Bầu | Không có nghiên cứu UAV/GIS Kinh thành; bài tổng quan 2025; GIS thành cổ Quảng Trị 2018 |
| S47 | "Thừa Thiên Huế" OR "Huế" LiDAR DEM 1 m OR 2 m "mô hình số độ cao" ngập lụt … | Không có LiDAR; DEM 10 m (HueGIS 1:2.000) 2013; DEM từ 1:10.000 (2024) |
| S48 | "Hue Museum of Heritages" OR "hue-museum-of-heritages" OR "dulichphohue" sketchfab models license download | **Không thực hiện — hết ngân sách WebSearch của phiên** |
