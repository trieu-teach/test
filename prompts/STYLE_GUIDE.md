# 🎨 STYLE GUIDE — Bảng Màu & Tiêu Chuẩn Chung

> File tổng hợp để đảm bảo **mọi frame đều có style + màu giống nhau 100%**.

---

## 🔒 QUY TẮC VÀNG

1. **Mọi prompt PHẢI có style block** (đã nhúng sẵn vào từng frame)
2. **KHÔNG ĐƯỢC xoá** phần mã HEX color lock
3. **LUÔN upload ảnh tham chiếu** trước khi gen
4. **Màu nền PHẢI transparent** (PNG alpha)
5. **Khung hình 1024x1024**, full body từ đầu đến chân

---

## 👦 BỜM — Color Palette (CHUẨN)

```
🎨 BỜM MASTER COLORS — KHÔNG ĐƯỢC THAY ĐỔI GIỮA CÁC FRAME
```

| Bộ phận | Mã HEX | Tên màu | Hình ảnh mô tả |
|---------|--------|----------|----------------|
| 🔴 **Áo** | `#A0522D` | warm reddish-brown sienna | Vỏ quế khô, ấm áp |
| 🔵 **Quần** | `#1E3A5F` | deep navy blue | Xanh navy đậm cổ điển |
| 🟡 **Da** | `#F4D5A0` | warm wheat beige | Da ngăm nắng làng quê |
| ⚫ **Tóc** | `#1A1A1A` | jet black | Đen tuyệt đối |
| 🟤 **Mắt (iris)** | `#3D2817` | dark brown | Nâu sẫm |
| ⚪ **Mắt (highlight)** | `#FFFFFF` | pure white | 2 chấm tròn nhỏ |
| 🩷 **Má** | `#FFB6C1` | soft pink blush | Hồng nhẹ khi cười |
| 🟫 **Giày** | `#5D4037` | dark brown | Chân trần hoặc dép nâu |
| 🖤 **Outline** | `#000000` | pure black | Viền đen 3-4px |

### Đặc điểm nhận dạng Bờm:
- ✅ Đầu hơi to so với thân (tỉ lệ anime/chibi)
- ✅ Mắt to tròn, lông mi rõ
- ✅ Chân mày cong tự nhiên
- ✅ Tóc ngắn hơi rối kiểu nông dân
- ✅ Áo ngắn tay kiểu áo tứ thân
- ✅ Quần dài ống rộng

---

## 🎩 PHÚ ÔNG — Color Palette (CHUẨN)

```
🎨 PHÚ ÔNG MASTER COLORS — KHÔNG ĐƯỢC THAY ĐỔI GIỮA CÁC FRAME
```

| Bộ phận | Mã HEX | Tên màu | Hình ảnh mô tả |
|---------|--------|----------|----------------|
| ⚫ **Mũ khăn xếp** | `#1A1A1A` | jet black | Đen tuyệt đối |
| 🔵 **Áo dài** | `#1F4E79` | royal blue | Xanh hoàng gia đậm |
| 🟡 **Viền vàng** | `#DAA520` | goldenrod | Vàng đồng sang trọng |
| ⚪ **Râu** | `#F5F5DC` | beige/cream | Trắng ngà |
| 🟤 **Gậy** | `#8B4513` | saddle brown | Gỗ nâu đậm |
| 🟡 **Da** | `#F4D5A0` | warm wheat beige | Da ngăm (già hơn Bờm) |
| 🖤 **Outline** | `#000000` | pure black | Viền đen 3-4px |

### Đặc điểm nhận dạng Phú ông:
- ✅ Thân hình mập mạp, bụng to
- ✅ Mũ khăn xếp cao kiểu nhà giàu xưa
- ✅ Râu ngắn trắng
- ✅ Mắt nhỏ, lông mày dày
- ✅ Áo dài dài tay có viền vàng
- ✅ Luôn cầm gậy gỗ

---

## 🎯 STYLE BLOCK CHUẨN (chèn vào đầu mỗi prompt)

### Cho BỜM:
```
BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A)
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)
```

### Cho PHÚ ÔNG:
```
PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A)
├─ Áo dài: royal blue (hex #1F4E79)
├─ Viền vàng: goldenrod (hex #DAA520)
├─ Râu: beige/cream trắng ngà (hex #F5F5DC)
├─ Gậy: saddle brown gỗ (hex #8B4513)
└─ Da: warm wheat beige (hex #F4D5A0)
```

### Style chung (cho cả 2):
```
STRICTLY 2D flat illustration, NO 3D, NO realistic shading, 
cel-shading only, clean thick black outline lines (3-4px stroke), 
Vietnamese tranh dân gian folk art style, flat colors no gradients, 
simple shapes, like children's book illustration, 
full body character from head to toe visible, 1024x1024, 
transparent background, centered character, 
hands with exactly 5 fingers each NOT deformed, normal human hands.
```

---

## 🚫 NEGATIVE PROMPT CHUẨN

```
background, scenery, floor, ground, shadow on ground, 
multiple characters, watermark, blurry, low quality, 
deformed hands, extra fingers, ugly, realistic, 3d, photo, 
gradient shading, complex shading, mutated, disfigured
```

---

## 📐 TỈ LỆ & KHUNG HÌNH

```
Khung hình: 1024x1024 px (vuông)
Nhân vật: chiếm ~70-80% chiều cao khung
Vị trí: centered, hơi lệch phải 10% để chừa chỗ cho text/speech bubble
Padding: ~10-15% mỗi cạnh
Background: transparent (PNG alpha)
```

---

## 🧪 CHECKLIST TRƯỚC KHI ACCEPT ẢNH

Mỗi ảnh sau khi gen, check 5 tiêu chí:

- [ ] **Màu áo** đúng `#A0522D` / `#1F4E79` không?
- [ ] **Màu quần** đúng `#1E3A5F` không?
- [ ] **Da** đúng tone `#F4D5A0` không?
- [ ] **Tay** có 5 ngón không bị biến dạng?
- [ ] **Background** trong suốt (PNG alpha)?

Nếu **1 trong 5** tiêu chí sai → gen lại.

---

## 📁 LIÊN KẾT

- 📄 [BASE_ANIMATION_FRAMES.md](./BASE_ANIMATION_FRAMES.md) — 48 frames chính
- 📄 [ENDING_AND_KARMA_FRAMES.md](./ENDING_AND_KARMA_FRAMES.md) — 24 frames ending/karma
- 📁 [frames/bom/](../images/thang-bom/frames/bom/) — folder ảnh Bờm
- 📁 [frames/phuong/](../images/thang-bom/frames/phuong/) — folder ảnh Phú ông

---

## 🎓 LỊCH SỬ THAY ĐỔI

| Ngày | Thay đổi |
|------|----------|
| 2026-09-07 | Thêm bảng màu HEX chuẩn cho Bờm + Phú ông |
| 2026-09-07 | Thêm style block "COLOR LOCK" vào tất cả prompt |
| 2026-09-07 | Thêm chống biến dạng tay vào negative |
