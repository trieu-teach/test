# Ending & Karma Animation Frames — Bonus

## ⚡ Cách dùng NHANH (TL;DR)

### 📌 Hiểu cấu trúc file trước đã:

Mỗi frame có dạng thế này:

```
**XX. ten-frame:**                       ← Tên frame (KHÔNG copy)

📋 **PROMPT**:                          ← Nhãn (KHÔNG copy)
```                                     ← Dấu mở code block
Nội dung prompt dài...                  ← ⭐ COPY CÁI NÀY
Nội dung prompt dài...                  ← ⭐ COPY CÁI NÀY
```                                     ← Dấu đóng code block

🚫 **NEGATIVE**:                        ← Nhãn (KHÔNG copy)
```                                     ← Dấu mở code block
background, scenery...                  ← ⭐ COPY CÁI NÀY (1 dòng)
```                                     ← Dấu đóng code block
```

### 🎯 Quy tắc COPY đơn giản:

| Thấy cái gì | Có copy không? |
|-------------|----------------|
| Tên frame kiểu `**01. bom-idle-...**` | ❌ KHÔNG copy |
| Nhãn `📋 **PROMPT**:`, `🚫 **NEGATIVE**:` | ❌ KHÔNG copy |
| Dấu ``` (3 dấu backtick) | ❌ KHÔNG copy |
| Dấu `---` ngang | ❌ KHÔNG copy |
| **Text bên trong khối ``` ```** | ✅ **COPY CÁI NÀY!** |

### 🚀 Workflow gen 1 frame:

1. **Tìm frame** cần gen (cuộn xuống tới số đó)
2. **Copy phần PROMPT** (text dài bên trong ``` đầu tiên) → paste vào ô Prompt chính của Gemini
3. **Copy phần NEGATIVE** (1 dòng ngắn bên trong ``` thứ 2) → paste vào ô Negative của Gemini (NẾU có ô đó)
4. **Upload ảnh reference** (`bom-base.png` hoặc `phuong-portrait.png`) — rất quan trọng!
5. **Bấm Generate!**

> 💡 **Mẹo Gemini:** Nếu Gemini không có ô Negative riêng, bạn có thể thêm dòng negative vào CUỐI ô Prompt chính.

---

## 🔒 BẢNG MÀU CỐ ĐỊNH (COLOR LOCK) — Dùng cho MỌI prompt Ending/Karma!

> ⚠️ **QUAN TRỌNG**: Đồng nhất 100% với `BASE_ANIMATION_FRAMES.md`. Xem bảng màu đầy đủ ở file đó.

### Tóm tắt nhanh:
- 👦 **Bờm**: Áo #A0522D (nâu-đỏ), Quần #1E3A5F (navy), Da #F4D5A0
├── Áo: hex #1F4E79 (royal blue)
├── Mũ: hex #1A1A1A (đen)
├── Vàng: hex #DAA520
├── Râu: hex #F5F5DC
├── Gậy: hex #8B4513
└── Da: hex #F4D5A0

---

## 🎭 ENDING VARIANTS — BỜM

### 🌾 Ending: Bình yên (Good-Thiện)

**25. bom-ending-peaceful-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm grown old age, sitting relaxed on porch, holding small cane, peaceful wise smile, wrinkles on face, gray hair, wearing brown-red traditional robe (hex #A0522D), warm golden lighting on character only.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, other people, wife, grandchildren, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

**26. bom-ending-peaceful-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm elderly sage, hands together in gratitude at chest, eyes closed in serenity, wise calm smile, gray beard now, peaceful transcendent pose, wearing brown-red robe (hex #A0522D).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

### 👑 Ending: Lãnh đạo làng

**27. bom-ending-leader-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm grown up as village leader, wearing simple but neat brown-red leadership robe (hex #A0522D) with subtle dark gold trim (hex #8B6914), standing tall on small podium step, humble confident smile, hand raised in greeting, wearing brown-red and dark gold robe (hex #A0522D áo, hex #8B6914 gold accent).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, villagers, crowd, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

**28. bom-ending-leader-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm as adult village teacher, gentle patient smile, one hand pointing as if explaining lesson, other hand on hip, kind mentor pose, wearing brown-red simple robe.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, children, students, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

### 🌟 Ending: Thần kỳ

**29. bom-ending-magical-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm glowing with soft golden aura around body, arms outstretched welcomingly, eyes shining with inner wisdom light, mystical sage pose, wearing white and gold ethereal robe, lotus petals floating around him.
```

🚫 **NEGATIVE**:
```
background scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex background
```

---

**30. bom-ending-magical-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm ascending upward transformation, peaceful transcendental smile, arms gently at sides, white and gold ethereal robe, motion lines suggesting upward float, glowing aura.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style, complex background
```

---

### 💀 Ending: Bất cẩn (Bad)

**31. bom-ending-bad-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm in chains, looking down in shame, head hanging low, regret heavy pose, dark muted brown-red clothes, dark circles under eyes, defeated sad expression.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, prison bars, chains texture realistic, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

**32. bom-ending-bad-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm wandering alone, single tear on cheek, slumped shoulders, tired wandering pose, dark muted worn brown-red clothes, looking at ground, defeated lonely expression.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, road, path, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

## 🎭 ENDING VARIANTS — PHÚ ÔNG

### 😢 Ending: Bị giáng cấp (Humbled)

**33. phuong-ending-humbled-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông humbled and apologetic, kneeling with hands clasped begging forgiveness, hat off placed on ground, head bowed low in shame, wearing simple faded royal blue robe (hex #1F4E79) without gold trim, truly sorry expression.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**34. phuong-ending-humbled-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông begging on knees, hands together in desperate prayer pose, hat off, tears on cheeks, faded simple blue robe, broken cane beside him, total loss of pride.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

## ✨ KARMA STATE FRAMES

### Bờm — Karma cao (giàu có, khoe khoang)

**35. bom-karma-high-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm now wealthy version, wearing fancy gold-trimmed brown-red robe, big smug grin, holding gold coins in hand, chest puffed with pride, slight arrogant pose, same character but richer clothes.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**36. bom-karma-high-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm wealthy but secretly helping a poor person, kind generous smile, hand giving gold to off-screen, wearing gold-trimmed robe, hidden good deed pose.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, other people, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

### Bờm — Karma thấp (nghèo, hối hận)

**37. bom-karma-low-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm poor and guilty, wearing torn faded brown-red shirt, dark circles under eyes, looking down sadly, hands empty at sides, regretful ashamed pose, head hanging.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**38. bom-karma-low-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D, kiểu vỏ cây quế khô)
├─ Quần: deep navy blue color (hex #1E3A5F, xanh navy đậm cổ điển)
├─ Da: warm wheat beige (hex #F4D5A0, da ngăm nắng làng quê Việt)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối kiểu nông dân
├─ Mắt: dark brown iris (hex #3D2817) với 2 chấm trắng highlight, mắt to tròn anime-style
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản, không tô màu
├─ Má: chấm hồng nhẹ (hex #FFB6C1) khi cười
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm begging on knees, hands together pleading, torn clothes, looking up with desperate guilty eyes, empty bowl pose, asking for forgiveness and food.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, other people, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

### Phú ông — Karma cao (càng giàu càng tham)

**39. phuong-karma-high-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông ultra rich version, wearing extra fancy royal blue robe (hex #1F4E79) with heavy gold embroidery (hex #DAA520), multiple gold rings on fingers, holding money bag greedily, eyes gleaming with greed, fat belly bigger, even more arrogant smirk.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**40. phuong-karma-high-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông counting gold piles, cackling with greed, hands rubbing together, eyes on gold not on people, rich hoarding pose, fancy gold-trimmed robe.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, gold piles realistic, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading
```

---

### Phú ông — Karma thấp (phá sản, khổ sở)

**41. phuong-karma-low-01:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông now penniless, wearing torn faded blue robe without gold trim, hat missing or simple cloth wrap, looking thin and hungry, eyes hollow with regret, begging pose.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**42. phuong-karma-low-02:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và trạng thái.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông on ground crying, hands over face, broken cane beside him, torn simple blue robe, all wealth lost, total ruin and regret pose, empty bowl in front.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

## 🔄 TRANSITION FRAMES

### Bờm — Angry build-up

**43. bom-emotion-buildup-angry:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Bờm in transitional anger moment, mouth in growl, eyebrows starting to furrow, fists clenching at sides, slight lean forward, warning pose before full anger.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

### Phú ông — Defeated collapse

**44. phuong-emotion-collapse:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

PHÚ ÔNG CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Mũ khăn xếp: jet black (hex #1A1A1A) cao kiểu nhà giàu xưa
├─ Áo dài: royal blue (hex #1F4E79) dài tay, dáng mập mạp
├─ Viền áo + cổ áo: goldenrod vàng đồng (hex #DAA520) đơn giản
├─ Râu: short white beard (hex #F5F5DC) ngắn trắng ngà
├─ Gậy: saddle brown gỗ (hex #8B4513) có đầu gậy cong
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Mắt: nhỏ, lông mày dày đậm, biểu cảm kiêu ngạo
└─ Outline: pure black (hex #000000) viền 3-4px

⚠️ STYLE NOTE: This is a VIETNAMESE VILLAGE LANDLORD, NOT royal court emperor. WEARS ROYAL BLUE ROBE, NOT RED EMPEROR ROBE. NO PHOENIX/DRAGON EMBROIDERY. Only simple gold trim along edges.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông transitional defeat, knees buckling, hat falling off, eyes wide with shock, hands reaching out in disbelief, just lost everything pose.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

### Cảnh cuối — 2 nhân vật chung

**45. bom-phuong-final-together:**

📋 **PROMPT**:
```
Tạo 2 nhân vật Việt Nam folk tale style đứng cạnh nhau, giữ 100% phong cách flat 2D cartoon Việt Nam.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines, Vietnamese tranh dân gian folk art style, flat colors, simple shapes, like children's book illustration, two full body characters, 1024x1024, transparent background.

On the left: Bờm grown up, wearing simple brown-red shirt, humble kind smile, hands at sides in relaxed pose. On the right: Phú ông humbled, wearing simple blue robe without gold, hat off, looking down apologetic. Both characters full body visible, side by side composition.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, third character, extra person
```

---

## 📊 Tổng kết file này

| Loại | Bờm | Phú ông | Tổng |
|------|-----|---------|------|
| Ending variants | 8 | 2 | 10 |
| Karma states | 4 | 4 | 8 |
| Transitions | 1 | 1 | 2 |
| Final together | - | - | 1 |
| **Tổng** | **13** | **7** | **21** |

## 🎯 Điểm mạnh của prompt mới:

✅ **Dòng "Giữ nguyên 100% phong cách..."** ép AI giữ style
✅ **STRICTLY 2D, NO 3D, cel-shading only** — chống style 3D
✅ **Vietnamese tranh dân gian folk art** — ép style dân gian
✅ **Negative riêng** cho mỗi frame — kiểm soát tốt hơn
✅ **Mô tả chi tiết** — tránh AI hallucinate

## 📝 Ghi chú:

- File này chứa **21 frames bổ sung** (ending + karma + transitions)
- File `BASE_ANIMATION_FRAMES.md` chứa **48 frames chính**
- Tổng cộng app sẽ có **69 frames animation**
- Mỗi frame có 2 khối: **PROMPT** (to) và **NEGATIVE** (nhỏ)
