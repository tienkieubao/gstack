# A4 — Bộ dữ liệu mở toàn cầu cho bản đồ 3D Huế (ghi chú nghiên cứu)

> Trạng thái: ĐANG THỰC HIỆN — bản lưu tạm #1 (2026-11-14, sau ~18 lượt gọi). Bảng đầy đủ sẽ thay thế phần "ghi chú thô" bên dưới.
> AOI: 16.2–16.75°N, 107.0–108.2°E; thí điểm quanh Kinh thành 16.47°N 107.58°E.
> LƯU Ý MẠNG: WebFetch thất bại ENOTFOUND với MỌI host đã thử (kể cả các host được cho là mở). Toàn bộ dữ kiện hiện tại = "chỉ qua kết quả tìm kiếm".

## Ghi chú thô (độ cao) — sẽ chuyển thành bảng

- Copernicus DEM GLO-30: DSM; EGM2008 (EPSG:3855); ngang WGS84 (EPSG:4326); LE90 < 4 m (dọc), CE90 < 6 m (ngang); ghi nguồn "produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved"; miễn phí toàn cầu trừ Armenia & Azerbaijan (theo GEE); EEA-10 hạn chế; GEE có bản GLO30 2024_1; S3 GLO-90 = s3://copernicus-dem-90m/ (GLO-30 chưa xác nhận tên bucket qua tìm kiếm).
- SRTMGL1 v003: tháng 2/2000 (11–22/02/2000); EGM96 (EPSG:5773); lấp khoảng trống bằng ASTER GDEM2/GMTED2010/NED; "openly shared, without restriction" (EOSDIS).
- AW3D30 v4.1 (4/2024): DSM từ ALOS PRISM 2006-01-24..2011-05-12; cần đăng ký JAXA.
- ASTER GDEM v3: phát hành 5/8/2019; WGS84/EGM96; 20 m @95% (dọc); RMSE 8.52 m (CONUS); miễn phí qua LP DAAC / Japan Space Systems.
- FABDEM v1.2: bare-earth từ GLO-30, 60°S–80°N, 1"; MAE rừng 5.15→2.88 m, đô thị 1.61→1.12 m; COG ở V1.2; (CC BY-NC-SA cần kiểm tiếp).
- DeltaDTM: CC-BY 4.0; 4TU DOI 10.4121/21997565; 30 m; MAE 0.43 m; CoastalDEM: "Commercial/free for research only", hiện v3.0, liên hệ Climate Central.
- TanDEM-X 90 m: miễn phí cho mục đích khoa học; 30 m EDEM: miễn phí khoa học/phi thương mại, không chuyển nhượng; download.geoservice.dlr.de/TDM30_EDEM/.
- MERIT DEM: 3" (~90 m), EGM96; CC-BY-NC 4.0 HOẶC ODbL 1.0; đăng ký Google Form, mật khẩu qua email.
- ALOS PALSAR RTC DEM: không sinh từ PALSAR; SRTMGL1 nội suy về 12.5 m, đã đổi sang độ cao ellipsoid (geoid_adjust) → không dùng thay DEM.
- GEDI L2A v2: elev_lowestmode so với ellipsoid WGS84; footprint 25 m; định vị ~10 m. ICESat-2 ATL08: h_te_best_fit; sai số địa hình < 0.75 m ở rừng boreal; lệch 0.18 m so ALS.
- Terrain Tiles AWS: s3://elevation-tiles-prod (us-east-1), terrarium/normal/geotiff/skadi; không cần tài khoản.
- Đánh giá DEM tại VN/Huế: chưa tìm thấy nghiên cứu riêng (lượt 1).

## Nhật ký truy vấn (tạm)

1. WebFetch earth-search.aws.element84.com/v1/search?... → ENOTFOUND
2. WebFetch docs.overturemaps.org/schema/reference/transportation/segment → ENOTFOUND
3. WebFetch docs.overturemaps.org/schema/reference/buildings/building → ENOTFOUND
4. WebFetch docs.overturemaps.org/attribution/ → ENOTFOUND
5. WebFetch developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30 → ENOTFOUND
6. WebFetch wiki.openstreetmap.org/wiki/Overture_Maps → ENOTFOUND
7–18. WebSearch: Copernicus DEM (x2), SRTM/NASADEM, AW3D30, ASTER GDEM, FABDEM, DeltaDTM/CoastalDEM, TanDEM-X, MERIT, PALSAR RTC, GEDI/ICESat-2, Terrain Tiles/OpenTopography, DEM accuracy Vietnam.

## Bản lưu tạm #2 (sau ~36 lượt gọi) — ghi chú thô bổ sung

- Hòn Dấu vs EGM2008: VIGAC2014 = EGM2008 quasi-geoid + hằng số 0.86 m để dị thường độ cao tại trạm Hòn Dấu = 0 (isgeoid.polimi.it Vietnam); MSL Hòn Dấu 1950–2005 = 0 của hệ độ cao quốc gia; mô hình offset GNSS/thủy chuẩn std 5.9 cm. Không thấy số so EGM96.
- FABDEM: CC BY-NC-SA 4.0 (GEE community catalog, nhiều nguồn); một mirror ghi "Non-Commercial Government Licence" → cần xác nhận tại data.bris.ac.uk. FathomDEM: chưa có kết quả.
- NASADEM_HGT v001: tái xử lý SRTM + ASTER GDEM, ICESat GLAS, PRISM; HGT số nguyên theo EGM96, file SRTM-only float theo ellipsoid WGS84; dữ liệu NASA dùng tự do, ghi nguồn NASA JPL.
- GEBCO_2025: 15", public domain, ghi nguồn "GEBCO Compilation Group (2025) GEBCO 2025 Grid"; đã có trang GEBCO_2026; vùng nông có nguồn không theo MSL.
- Sentinel-2 COG: s3://sentinel-cogs (us-west-2) --no-sign-request; Earth Search v1 https://earth-search.aws.element84.com/v1/ ; collections sentinel-2-l2a và sentinel-2-c1-l2a. Ô MGRS Huế: CHƯA xác minh (48Q… theo suy luận UTM 48, band Q).
- NICFI: PlanetScope Tropical Mosaics rời chương trình NICFI từ 24/01/2025 (hết hợp đồng); Planet/KSAT gia hạn tạm cho người dùng hiện có; GFW ngừng hiển thị ảnh Planet.
- Esri World Imagery: không dùng để export tile offline (có layer "for Export" riêng); được phép can vẽ vector cho OSM; Wayback theo Esri Master Agreement/Terms of Use.
- Umbra: CC BY 4.0, s3://umbra-open-data-catalog (us-west-2). Capella: CC BY 4.0, s3://capella-open-data/data/.
- Overture: bản mới nhất tìm thấy 2026-10-21.0 (schema v2.0.0); buildings = OSM + Esri Community Maps + Microsoft ML Buildings + Google Open Buildings; loại bỏ height ≥ 900 m.
- Microsoft GlobalMLBuildingFootprints: ~1.4 tỷ, ODbL, ảnh Bing 2014–2024; cập nhật 13/08/2026; dataset-links.csv mới tại bfppub.blob.core.windows.net/$web/2026-07-24/dataset-links.csv; chiều cao chủ yếu Mỹ (Vexcel).
- Open Buildings 2.5D Temporal: 2016–2023, hiệu dụng 4 m (từ Sentinel-2), MAE chiều cao 1.5 m, CC-BY 4.0 + ODbL 1.0; phủ Đông Nam Á.
- GlobalBuildingAtlas: 2.75 tỷ polygon, LoD1 2.68 tỷ, RMSE cao 1.5–8.9 m theo châu lục, bản đồ cao 3 m từ PlanetScope; mediaTUM DOI 10.14459/2025mp1782307; giấy phép chưa rõ.

Nhật ký bổ sung: 19–36 WebSearch (Hòn Dấu, FABDEM licence, NASADEM, GEBCO, MGRS tile x2, Earth Search, NICFI, Maxar, Esri/Landsat, Umbra/Capella/OAM, cloud cover Huế, Overture release, Overture building schema, Overture segment schema, MS buildings, Google Open Buildings, GlobalBuildingAtlas).
