# 🎨 REFERENCE IMAGES — Tạo ảnh tham chiếu đầu tiên

> File này chứa 2 prompt ĐẶC BIỆT để gen ra ảnh tham chiếu chuẩn cho Bờm và Phú ông.

---

## 🎯 TẠI SAO CẦN FILE NÀY?

Khi gen ảnh nhân vật bằng AI, **ảnh tham chiếu (reference image)** là cực kỳ quan trọng để:
- ✅ Giữ phong cách đồng nhất giữa các frame
- ✅ Giữ màu sắc nhất quán
- ✅ Giữ tỉ lệ, khuôn mặt, biểu cảm

**Bạn CẦN gen 2 ảnh tham chiếu này TRƯỚC khi gen các frame.**

---

## 👦 BỜM — Reference Portrait

### File output: `bom-base.png` hoặc `bom-reference.png`

### 📋 PROMPT:
```
Create a 2D flat illustration character reference sheet for Vietnamese peasant boy "Bờm".

STRICT STYLE RULES:
- STRICTLY 2D flat illustration, NO 3D, NO realistic shading
- Vietnamese tranh dân gian folk art style
- Cel-shading only, clean thick black outline lines (3-4px stroke)
- Like children's book illustration, flat colors NO gradients
- Background TRANSPARENT, 1024x1024, full body from head to toe
- Hands with exactly 5 fingers each NOT deformed, normal human hands

BỜM CHARACTER DESIGN (LOCK ALL COLORS EXACTLY):
- Đầu: slightly oversized head (anime/chibi proportions 1:4 head-to-body)
- Tóc: jet black (hex #1A1A1A), short messy hair in Vietnamese farmer boy style
- Mặt: round sweet face, beige wheat skin (hex #F4D5A0)
- Mắt: BIG round expressive eyes (anime style), dark brown iris (hex #3D2817) with 2 white highlight dots, long eyelashes visible
- Lông mày: thick black eyebrows in natural arch
- Mũi: tiny dot or simple line
- Môi: thin black outline only, NO fill color
- Má: 2 small pink blush dots (hex #FFB6C1) on cheeks
- Thân: small slim boy body, neck visible
- Áo: warm reddish-brown shirt (hex #A0522D), short sleeve áo tứ thân style
- Quần: deep navy blue pants (hex #1E3A5F), loose Vietnamese farmer pants
- Chân: bare feet OR simple brown sandals (hex #5D4037)
- Tỉ lệ: chibi proportions, head ~1/4 of total height
- Biểu cảm: friendly innocent smile, looking slightly up at viewer with curious eyes

🚫 NEGATIVE:
```
background, scenery, floor, ground, shadow on ground, multiple characters, waterm ark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading
```

---

## 🎩 PHÚ ÔNG — Reference Portrait

### File output: `phuong-base.png` hoặc `phuong-reference.png`

### 📋 PROMPT:
```
Create a 2D flat illustration character reference sheet for Vietnamese wealthy village landlord "Phú ông".

STRICT STYLE RULES:
- STRICTLY 2D flat illustration, NO 3D, NO realistic shading
- Vietnamese tranh dân gian folk art style
- Cel-shading only, clean thick black outline lines (3-4px stroke)
- Like children's book illustration, flat colors NO gradients
- Background TRANSPARENT, 1024x1024, full body from head to toe
- Hands with exactly 5 fingers each NOT deformed, normal human hands

PHÚ ÔNG CHARACTER DESIGN (LOCK ALL COLORS EXACTLY):
- Mũ khăn xếp: tall cylindrical black turban hat (hex #1A1A1A), high like rich Vietnamese landlord
- Mặt: chubby round OLD MAN face, beige wheat skin (hex #F4D5A0), age lines visible
- Râu: SHORT white beard (hex #F5F5DC) below chin only, NO long flowing beard
- Mắt: small narrow eyes with thick bushy black eyebrows, smug arrogant look
- Mũi: simple shape
- Áo dài: ROYAL BLUE robe (hex #1F4E79), dài tay, fat belly very visible
- Viền áo: goldenrod yellow trim (hex #DAA520) along collar and sleeve edges
- Cổ áo: closed traditional Vietnamese áo dài collar
- Tay: one hand holding wooden cane
- Gậy: saddle brown wood cane (hex #8B4513) with curved handle top
- Tay kia: để trên bụng (kiểu nhà giàu)
- Chân: black traditional Vietnamese shoes

⚠️ CRITICAL STYLE NOTES (AI thường tự sáng tạo sai):
- This is a VILLAGE LANDLORD, NOT ROYAL EMPEROR
- WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE
- NO PHOENIX EMBROIDERY, NO DRAGON EMBROIDERY
- Only simple gold trim along edges, NO fancy embroidery
- NO crown, NO royal court regalia
- Body: short, fat, chuby - NOT tall and majestic

Pose: standing 3/4 view, holding cane with right hand, left hand on fat belly, arrogant confident proud smile, looking down slightly as if looking down at peasants.

🚫 NEGATIVE (QUAN TRỌNG - phải có những từ này):
```
red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style, crown, royal hat, imperial, dynasty, multiple characters, background, scenery, floor, ground, shadow on ground, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading
```

---

## 📋 CHECKLIST SAU KHI GEN ẢNH THAM CHIẾU

### Với BỜM:
- [ ] Áo màu nâu-đỏ `#A0522D`?
- [ ] Quần màu navy `#1E3A5F`?
- [ ] Da màu `#F4D5A0`?
- [ ] Tóc đen tuyệt đối?
- [ ] Mắt to tròn, có 2 chấm trắng highlight?
- [ ] Tỉ lệ chibi (đầu to)?
- [ ] Background transparent?
- [ ] Tay 5 ngón bình thường?
- [ ] Không có mũ?

### Với PHÚ ÔNG:
- [ ] Mũ khăn xếp đen cao?
- [ ] Áo **ROYAL BLUE** `#1F4E79`? (KHÔNG phải đỏ!)
- [ ] Viền vàng `#DAA520` đơn giản (KHÔNG có thêu phượng/rồng)?
- [ ] Râu trắng ngắn?
- [ ] Gậy gỗ nâu có đầu cong?
- [ ] Bụng to, mập mạp?
- [ ] Mặt già, lông mày dày?
- [ ] Background transparent?
- [ ] Tay 5 ngón bình thường?

---

## 🔄 WORKFLOW TỔNG THỂ

```
Bước 1: GEN ẢNH THAM CHIẾU (file này)
         ↓
         ↓ Lưu: bom-base.png, phuong-base.png
         ↓
Bước 2: GEN 24 FRAME BỜM (BASE_ANIMATION_FRAMES.md)
         ↓ Upload bom-base.png vào TỪNG lần gen
         ↓
Bước 3: GEN 24 FRAME PHÚ ÔNG (BASE_ANIMATION_FRAMES.md)
         ↓ Upload phuong-base.png vào TỪNG lần gen
         ↓
Bước 4: GEN 12 ENDING/KARMA (ENDING_AND_KARMA_FRAMES.md)
         ↓ Upload TƯƠNG ỨNG base image
         ↓
Bước 5: Verify tất cả có màu khớp với bảng HEX không
         ↓
Bước 6: Done! Animation ready!
```

---

## 💡 MẸO NẾU GEMINI VẪN SAI MÀU

### Phương án A: Thêm vào cuối prompt
```
IMPORTANT: The hex codes above are MANDATORY. Use EXACT RGB values:
- Royal blue = RGB(31, 78, 121) = #1F4E79  ← this is BLUE, not red
- Jet black = RGB(26, 26, 26) = #1A1A1A
Do NOT use red, crimson, or any warm color for the robe.
```

### Phương án B: Thêm vào NEGATIVE
```
red robe, crimson robe, scarlet, maroon, fire, orange-red, 
phoenix, dragon, royal, emperor, dynasty, imperial, crown
```

### Phương án C: Gen nhiều lần, chọn ảnh tốt nhất
- Gen 4 ảnh → chọn 1 cái đúng màu nhất
- Nếu 4 ảnh đều sai → gen lại với prompt đơn giản hơn

---

## 🎓 LỊCH SỬ

| Ngày | Ghi chú |
|------|---------|
| 2026-09-07 | Tạo file reference, thêm anti-red-robe protection |
| 2026-09-07 | Phát hiện AI đã tự gen Phú ông áo ĐỎ thêu phượng thay vì xanh |
