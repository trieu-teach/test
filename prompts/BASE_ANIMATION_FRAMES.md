# Animation Frame Prompts — Bờm & Phú ông (Base + Animation)

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

## 🔒 BẢNG MÀU CỐ ĐỊNH (COLOR LOCK) — Dùng cho MỌI prompt!

> ⚠️ **QUAN TRỌNG**: Mỗi prompt bên dưới đều đã nhúng mã HEX chuẩn để Gemini giữ màu đồng nhất giữa các frame. **KHÔNG ĐƯỢC XOÁ phần mã màu!**

### 👦 BỜM Palette:

| Bộ phận | Mã HEX | Mô tả |
|---------|--------|-------|
| 🔴 Áo | **#A0522D** | warm reddish-brown sienna (vỏ quế khô) |
| 🔵 Quần | **#1E3A5F** | deep navy blue (xanh navy đậm) |
| 🟡 Da | **#F4D5A0** | warm wheat beige (da ngăm nắng) |
| ⚫ Tóc | **#1A1A1A** | jet black tuyệt đối |
| 🟤 Mắt | **#3D2817** | dark brown iris + 2 chấm trắng |
| 🩷 Má | **#FFB6C1** | chấm hồng nhẹ khi cười |
| 🟫 Giày | **#5D4037** | chân trần hoặc dép lê nâu |

### 🎩 PHÚ ÔNG Palette:

| Bộ phận | Mã HEX | Mô tả |
|---------|--------|-------|
| ⚫ Mũ khăn xếp | **#1A1A1A** | jet black tuyệt đối |
| 🔵 Áo dài | **#1F4E79** | royal blue (xanh hoàng gia) |
| 🟡 Viền vàng | **#DAA520** | gold trim (vàng đồng) |
| ⚪ Râu | **#F5F5DC** | short white beard |
| 🟤 Gậy | **#8B4513** | wooden cane (gỗ nâu saddle) |
| 🟡 Da | **#F4D5A0** | warm wheat beige |

---

## 🎨 Style keywords mạnh (đã nhúng sẵn vào từng prompt)

```
STRICTLY 2D flat illustration, NO 3D, NO realistic shading, 
cel-shading only, clean thick black outline lines, 
Vietnamese tranh dân gian folk art style, 
flat colors, simple shapes, like children's book illustration,
```

---

## 👦 BỜM — 17 Frames (Visual Novel Style)

> ⚠️ **Đây là VISUAL NOVEL, không phải game platformer!**
>
> Bờm chỉ cần **static expressions + poses** cho hội thoại, KHÔNG cần animation chạy/nhảy nhiều frame.
>
> **Đã có sẵn** (5 ảnh): bom-happy, bom-thinking, bom-neutral (JPG), bom-walk-03/04/05 (PNG) → dùng cho 5 frames.
> **Cần gen thêm** (11 ảnh): 5 expressions + 5 poses + 1 walk.
>
> Style đã nhúng sẵn: Bờm = Vietnamese peasant boy, chubby face, brown-red shirt (hex #A0522D), navy pants (hex #1E3A5F), wheat skin (hex #F4D5A0), jet black hair

---

## 📊 TỔNG QUAN 17 FRAMES BỜM

| Nhóm | Số lượng | Frames | Mục đích |
|------|----------|--------|---------|
| **EXPRESSIONS** | 8 frames | 01-08 | Biểu cảm trong hội thoại |
| **POSES** | 7 frames | 09-15 | Tư thế theo ngữ cảnh |
| **TRANSITIONS** | 2 frames | 16-17 | Hiệu ứng xuất hiện (CSS fade) |

---

## 😊 EXPRESSIONS (8 frames - Quan trọng nhất)

### **01. bom-happy-smile** ✅ ĐÃ CÓ (`dist/.../bom-happy.jpg`)

**Không cần gen. Đã có sẵn ảnh `bom-happy.jpg`. Dùng luôn.**

Mô tả: Bờm cười toe toét, mắt híp lại, hai tay giơ lên cao hoặc đặt lên hông. Tóc hơi bồng. Dùng khi Bờm vui mừng, thắng cuộc, reo hò.

---

### **02. bom-think-puzzle** ✅ ĐÃ CÓ (`dist/.../bom-thinking.jpg`)

**Không cần gen. Đã có sẵn ảnh `bom-thinking.jpg`. Dùng luôn.**

Mô tả: Bờm đứng suy nghĩ, tay chống cằm hoặc gãi đầu, mắt nhìn lên cao, miệng hơi mím. Khi Bờm đang nghĩ cách đối phó Phú ông.

---

### **03. bom-smirk-mischievous** ❌ CẦN GEN

📋 **PROMPT** (paste vào Gemini, kèm `bom-happy.jpg` làm reference):
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi biểu cảm.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight
├─ Chân mày: đen đậm, 1 bên nhướn lên cao, 1 bên bình thường
├─ Môi: cười mép lệch về 1 bên (smirk)
└─ Má: chấm hồng nhẹ (hex #FFB6C1)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body, head ~25% total height. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm đứng nghiêng người, 1 tay chống hông, tay kia giơ ngón trỏ lên như vừa nghĩ ra ý tưởng. Mắt nheo lại tinh quái, miệng cười mép lệch (smirk - quan trọng cho cốt truyện khi Bờm đã nghĩ ra cách lừa Phú ông).

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-smirk-mischievous.jpg`

---

### **04. bom-worried** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi biểu cảm.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight, mắt mở to lo lắng
├─ Chân mày: đen đậm, 2 bên nhíu lên cao (kiểu worry)
├─ Môi: mím chặt, khóe miệng kéo xuống
└─ Má: chấm hồng nhẹ (hex #FFB6C1)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body, head ~25% total height. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm đứng khom người, 2 tay bấu vào nhau trước ngực, mắt nhìn qua vai như sợ bị phát hiện. Trán có 1-2 giọt mồ hôi nhỏ. Khi Bờm lo lắng kế hoạch bị lộ, hoặc sợ Phú ông đòi tiền.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-worried.jpg`

---

### **05. bom-confident** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi biểu cảm.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight, mắt mở sáng
├─ Chân mày: đen đậm, tự tin thẳng
├─ Môi: cười nhẹ tự tin
└─ Má: chấm hồng nhẹ (hex #FFB6C1)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body, head ~25% total height. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm đứng thẳng lưng, ngẩng đầu, 2 tay khoanh trước ngực. Dáng đứng tự tin kiêu hãnh. Khi Bờm đã chắc chắn 100% kế hoạch thành công.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-confident.jpg`

---

### **06. bom-sad** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi biểu cảm.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối, rủ xuống
├─ Mắt: dark brown iris (hex #3D2817), mí mắt cụp xuống buồn bã
├─ Chân mày: đen đậm, 2 đầu kéo xuống
├─ Môi: mím cong xuống (frown)
└─ Má: không có chấm hồng (vì đang buồn)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body, head ~25% total height. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm cúi đầu, vai sụp xuống, 2 tay buông thõng 2 bên. Có thể có 1 giọt nước mắt nhỏ ở khóe mắt. Khi Bờm thua cuộc, mất tiền, hoặc kết thúc buồn.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-sad.jpg`

---

### **07. bom-angry** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi biểu cảm.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn dựng đứng kiểu giận
├─ Mắt: dark brown iris (hex #3D2817), mắt mở to sắc lạnh
├─ Chân mày: đen đậm, 2 bên nhíu sâu vào nhau (kiểu angry)
├─ Môi: mím chặt kéo ngang hoặc mở hét
└─ Má: chấm hồng đậm hơn (hex #FF9999) vì giận

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body, head ~25% total height. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm đứng 2 chân chắc, 2 tay nắm chặt đấm trước ngực hoặc 1 tay chỉ mặt đối phương. Có thể có 1-2 dấu "!" nổi giận bên cạnh đầu (kiểu manga). Khi Bờm bị ăn hiếp, bị Phú ông chửi mắng.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-angry.jpg`

---

### **08. bom-surprised** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi biểu cảm.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817), mắt mở TO tròn xoe (kiểu surprised anime)
├─ Chân mày: đen đậm, 2 bên giật lên cao
├─ Môi: mở thành hình chữ O nhỏ
└─ Má: chấm hồng nhẹ (hex #FFB6C1)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body, head ~25% total height. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm lùi lại 1 bước, 2 tay giơ lên ngang vai (kiểu giật mình). Có thể có 1-2 dấu "?" bay lên đầu (kiểu manga). Khi Bờm ngạc nhiên trước điều gì đó bất ngờ (ví dụ Phú ông đồng ý cho vay tiền).

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-surprised.jpg`

---

## 🧍 POSES (7 frames - Tư thế theo ngữ cảnh)

### **09. bom-idle-stand** ✅ ĐÃ CÓ (`dist/.../bom-neutral.jpg`)

**Không cần gen. Đã có sẵn ảnh `bom-neutral.jpg`. Dùng luôn.**

Mô tả: Bờm đứng thẳng, tay buông 2 bên, mặt bình thường. Pose mặc định khi không có biểu cảm đặc biệt.

---

### **10. bom-running-side** ✅ ĐÃ CÓ (`images/.../bom-walk-03.png`)

**Không cần gen. Đã có sẵn ảnh `bom-walk-03.png` (PNG transparent). Dùng luôn.**

Mô tả: Bờm đang chạy sang ngang, 1 chân trước 1 chân sau, tay đung đưa. Khi Bờm đi nhanh, chạy vội trong cutscene.

---

### **11. bom-sit-ground** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight
├─ Chân mày: đen đậm cong tự nhiên
├─ Môi: chỉ viền đen đơn giản
└─ Giày: chân trần hoặc dép lê nâu (hex #5D4037)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body. SAME BODY SIZE với bom-happy.jpg (nhưng ngồi nên tổng chiều cao thấp hơn).

POSE: Bờm ngồi bệt dưới đất, 2 chân duỗi thẳng về phía trước hoặc gập 1 chân. 2 tay đặt trên đầu gối hoặc 1 tay chống cằm. Mặt nhìn về phía trước, có thể buồn hoặc suy nghĩ. Khi Bờm ngồi ở gốc đá, ngồi nghỉ chân, ngồi buồn.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible (ngồi nên chiếm nửa dưới khung), 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-sit-ground.jpg`

---

### **12. bom-kneel** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight, mắt nhìn lên cầu xin
├─ Chân mày: đen đậm, 2 bên nhíu lên cầu xin
├─ Môi: hơi mở nói lời van xin
└─ Má: chấm hồng nhẹ (hex #FFB6C1)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm quỳ gối, 2 đầu gối chạm đất, 2 tay chắp trước ngực kiểu cầu xin (như chắp tay lạy). Đầu hơi cúi xuống khiêm tốn. Khi Bờm quỳ lạy Phú ông xin vay tiền, hoặc van xin tha thứ.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible (quỳ nên chiếm nửa dưới khung), 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-kneel.jpg`

---

### **13. bom-carry-bag** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối
├─ Mắt: dark brown iris (hex #3D2817) + 2 chấm trắng highlight
├─ Chân mày: đen đậm cong tự nhiên
└─ Môi: cười nhẹ vì vui khi mang đồ

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body. SAME BODY SIZE với bom-happy.jpg.

PROP: 1 cái túi vải nhỏ màu nâu (hex #8B4513) có dây kéo qua vai, bên trong có vài cục đất/đá vàng lấp lánh. Túi đeo chéo qua người (crossbody bag).

POSE: Bờm đứng thẳng, vai phải đeo túi vải (crossbody), tay trái đặt lên túi hoặc tay phải giữ quai túi. Dáng đi khoe khoang đang mang theo "đồ quý". Khi Bờm đi bán đất/đá cho Phú ông, hoặc mang tiền về nhà.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-carry-bag.jpg`

---

### **14. bom-beg** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối, rủ xuống
├─ Mắt: dark brown iris (hex #3D2817), mắt cụp xuống buồn + giả vờ khóc
├─ Chân mày: đen đậm, 2 đầu kéo lên cao cầu xin
├─ Môi: cong xuống như sắp khóc
└─ Má: chấm hồng nhẹ (hex #FFB6C1)

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body. SAME BODY SIZE với bom-happy.jpg.

POSE: Bờm đứng khom người, 2 tay chắp trước ngực xin xỏ, mắt ngước lên nhìn Phú ông với vẻ tội nghiệp. Lưng hơi khom về phía trước. Khi Bờm GIẢ VỜ xin tiền Phú ông (giả vờ nghèo khổ để lừa).

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-beg.jpg`

---

### **15. bom-victory** ❌ CẦN GEN

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Bờm trong ảnh tham chiếu. Chỉ thay đổi pose.

BỜM CHARACTER — COLOR LOCK (KHÔNG ĐƯỢC THAY ĐỔI):
├─ Áo: warm reddish-brown sienna color (hex #A0522D)
├─ Quần: deep navy blue color (hex #1E3A5F)
├─ Da: warm wheat beige (hex #F4D5A0)
├─ Tóc: jet black (hex #1A1A1A), tóc ngắn hơi rối, vểnh lên vui
├─ Mắt: dark brown iris (hex #3D2817), mắt híp lại cười rạng rỡ
├─ Chân mày: đen đậm, giật lên cao vui mừng
├─ Môi: cười rộng, miệng mở to reo hò "YEAH!"
└─ Má: chấm hồng đậm (hex #FF9999) vì phấn khích

📐 PROPORTION LOCK: chibi proportions 1:4 head-to-body. SAME BODY SIZE với bom-happy.jpg.

PROP: Có thể cầm 1 xấp tiền giấy vàng hoặc 1 túi vàng giơ cao trên đầu bằng 1 tay.

POSE: Bờm đứng 2 chân rộng bằng vai, 1 tay giơ cao trên đầu cầm tiền/vàng, tay kia giơ ngón cái (thumbs up) hoặc khoanh trước ngực. Có thể có dấu sao/sparkle lấp lánh xung quanh. Khi Bờm thắng cuộc lừa Phú ông, ăn mừng chiến thắng.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands, hands NORMAL SIZE not fat.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, mutated, disfigured, fat hands, chubby hands, large hands, oversized hands
```

💾 **Save as**: `dist/images/thang-bom/characters/bom-victory.jpg`

---

## 🚪 TRANSITIONS (2 frames - Hiệu ứng CSS)

### **16. bom-enter-fade** ⚙️ DÙNG CSS

**Không cần gen ảnh.** Dùng hiệu ứng CSS fade-in khi Bờm xuất hiện:
```css
.bom-enter {
  animation: fadeInScale 0.5s ease-out;
}
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
```

Code React tự động áp dụng khi `enter="fade"` trong `StoryPlayerV2.tsx`.

---

### **17. bom-exit-fade** ⚙️ DÙNG CSS

**Không cần gen ảnh.** Dùng hiệu ứng CSS fade-out khi Bờm rời đi:
```css
.bom-exit {
  animation: fadeOutScale 0.5s ease-in;
}
@keyframes fadeOutScale {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.8); }
}
```

Code React tự động áp dụng khi `exit="fade"` trong `StoryPlayerV2.tsx`.

---

## 📊 TỔNG KẾT BỜM

| Nhóm | Tổng | Đã có | Cần gen |
|------|------|-------|---------|
| **8 Expressions** | 8 | 2 (happy, thinking) | **6** (smirk, worried, confident, sad, angry, surprised) |
| **7 Poses** | 7 | 3 (idle-stand, running-side, walk) | **5** (sit-ground, kneel, carry-bag, beg, victory) |
| **2 Transitions** | 2 | 2 (CSS) | **0** |
| **TỔNG** | **17** | **7** | **11** |

### 📋 CHECKLIST GEN THÊM (11 ảnh):
- [ ] `bom-smirk-mischievous.jpg` ⭐ quan trọng - lúc lừa Phú ông
- [ ] `bom-worried.jpg`
- [ ] `bom-confident.jpg`
- [ ] `bom-sad.jpg`
- [ ] `bom-angry.jpg`
- [ ] `bom-surprised.jpg`
- [ ] `bom-sit-ground.jpg`
- [ ] `bom-kneel.jpg`
- [ ] `bom-carry-bag.jpg` ⭐ quan trọng - mang đất đi bán
- [ ] `bom-beg.jpg`
- [ ] `bom-victory.jpg` ⭐ quan trọng - kết thúc thắng

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

## 🎩 PHÚ ÔNG — 24 Frames

> **Style đã nhúng sẵn**: Phú ông = chubby old man, tall black khan xep hat, royal blue robe with gold trim, short white beard, holding wooden cane

### 🎯 QUAN TRỌNG: GEN ẢNH THAM CHIẾU TRƯỚC

> ⚠️ **Phải gen ảnh Phú ông chuẩn LÀM REFERENCE trước khi gen 24 frames!**
> 
> Dùng prompt dưới đây, gen ra 1 ảnh đẹp → lưu làm `phuong-portrait.png` → upload ảnh này vào MỌI lần gen sau.

**00. phuong-reference-portrait:**

📋 **PROMPT**:
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
- Mũ khăn xếp: tall black (hex #1A1A1A), high cylindrical turban hat
- Mặt: chubby round old man face, beige wheat skin (hex #F4D5A0)
- Râu: SHORT white beard (hex #F5F5DC) below chin only, NO long flowing beard
- Mắt: small narrow eyes with thick bushy black eyebrows, smug expression
- Áo dài: royal blue robe (hex #1F4E79) dài tay, fat belly visible
- Viền áo: goldenrod yellow trim (hex #DAA520) along collar and sleeves
- Cổ áo: closed traditional Vietnamese áo dài collar with gold trim
- Tay: one hand holding wooden cane
- Gậy: saddle brown wood cane (hex #8B4513) with curved handle top
- Chân: black traditional shoes

THIS IS A VILLAGE LANDLORD, NOT ROYALTY. WEARS SIMPLE ROYAL BLUE ROBE, NOT RED EMPEROR ROBES. NO PHOENIX EMBROIDERY, NO DRAGON EMBROIDERY. Just plain royal blue with simple gold trim along edges.

Pose: standing front-facing, slightly turned 3/4 view, holding cane with right hand, left hand on belly, arrogant confident proud smile, looking down slightly as if looking at peasants.

🚫 **NEGATIVE**:
```
fat hands, chubby hands, large hands, oversized hands, mutated, disfigured, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style, crown, royal hat, crown prince, multiple characters, background, scenery, floor, ground, shadow on ground, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading
```

---

### 🧍 IDLE & MOVEMENT (8 frames)

**01. phuong-idle-cane-lean:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Vietnamese wealthy landlord "Phú ông", chubby old man, tall black khan xep hat (hex #1A1A1A), royal blue robe (hex #1F4E79) with gold trim (hex #DAA520), short white beard, holding wooden cane with both hands, leaning weight on cane, smug satisfied expression, looking down.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**02. phuong-idle-stretch:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông chubby old man with khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520), stretching lazily, one hand on lower back, yawning, heavy-lidded eyes, bored rich expression, free hand on belly.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**03. phuong-walk-01-cane-down:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông walking slowly, cane planted forward, back foot pushing off, hunched posture, frowning impatient, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**04. phuong-walk-02-cane-up:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông taking step, cane lifted, front foot moving forward, aristocratic slow gait, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**05. phuong-sit-throne:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông sitting on ornate chair, legs crossed, one hand on armrest, other on belly, smug superior expression, chin up, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style, throne photo
```

---

**06. phuong-stand-authority:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông standing tall, both hands on cane head like a scepter, chest out, beard pointing forward, commanding imposing look, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**07. phuong-stomp-angry:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông stomping foot in anger, cane slammed on ground, body leaning forward aggressive, eyebrows V-shape, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**08. phuong-walk-away-haughty:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose.

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

Phú ông turning to walk away, hand waving dismissively without looking back, cane swinging, arrogant retreating, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

### 🗣️ TALKING & SCHEMING (6 frames)

**09. phuong-speak-commanding:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông speaking commandingly, mouth in sneer, right hand pointing cane forward like a judge, stern commanding voice pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**10. phuong-speak-condescending:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông speaking condescendingly, looking down nose, one eyebrow raised, slight smirk, hand on hip, patronizing tone pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**11. phuong-laugh-mocking:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông laughing mockingly, hand on belly, head back, eyes squinted with malice, mocking cruel laugh pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**12. phuong-scheme-strokebeard:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông scheming, stroking short beard with right hand, left hand on chin, eyes half-lidded cunning, scheming plotting pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**13. phuong-flatter-fakekind:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông faking kindness for manipulation, palms together in fake prayer, head tilted, overly sweet smile that does not reach eyes, deceptive pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**14. phuong-dismiss-wave:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông dismissing someone, hand flicking outward in "go away" gesture, bored annoyed face, looking away, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

### 😡 STRONG EMOTIONS (6 frames)

**15. phuong-angry-shout:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông furious, mouth wide in angry shout, eyebrows V-shape deep, face red warm tint, both hands raised in fists, leaning forward screaming, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**16. phuong-surprised-betrayed:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông shocked and betrayed, eyes wide, mouth in O, hat tilting back, hands on chest in disbelief, "How dare you!" pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**17. phuong-panic-falling:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông falling backward, hat flying off head, arms flailing, legs in air, comedic panic face, motion lines, wearing royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**18. phuong-worried-sweat:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông worried nervous, sweat drop on temple, hand on hat holding it down, eyes darting side to side, biting lip, anxious pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**19. phuong-angry-thinking:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông angry but thinking, hand on chin, eyebrows furrowed deep, mouth twisted in frustrated growl, scheming revenge pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**20. phuong-defeated-humbled:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông defeated, hat off, hair messy, head down in shame, shoulders slumped, small "I am sorry" pose, wearing royal blue robe (hex #1F4E79) with gold trim (hex #DAA520), beard hair messy.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

### 🎭 STORY-SPECIFIC (4 frames)

**21. phuong-meet-bom-superior:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông meeting poor peasant boy for first time, looking down with disdain, nose upturned, hand on cane head haughtily, rich looking at poor, class divide pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**22. phuong-offer-deal-fakekind:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông making the deal, fake sweet smile, holding out bag of gold with one hand, hidden scheming eyes, "trust me" deceptive pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**23. phuong-gloat-victory:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông gloating after tricking the peasant, laughing hand on belly, pure smug satisfaction, "I won" pose, wearing tall black khan xep hat (hex #1A1A1A) and royal blue robe (hex #1F4E79) with gold trim (hex #DAA520).
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

**24. phuong-final-defeated-apologize:**

📋 **PROMPT**:
```
Giữ nguyên 100% phong cách, tỉ lệ, màu sắc, line art của nhân vật Phú ông trong ảnh tham chiếu. Chỉ thay đổi pose và biểu cảm.

STRICTLY 2D flat illustration, NO 3D, NO realistic shading, cel-shading only, clean thick black outline lines (3-4px stroke), Vietnamese tranh dân gian folk art style, flat colors no gradients, simple shapes, like children's book illustration, full body character from head to toe visible, 1024x1024, transparent background, centered character, hands with exactly 5 fingers each NOT deformed, normal human hands.

Phú ông finally defeated, kneeling on ground, hands together begging forgiveness, hat in hand placed on ground before him, truly humbled, learning lesson pose, wearing royal blue robe.
```

🚫 **NEGATIVE**:
```
background, scenery, floor, ground, shadow on ground, multiple characters, watermark, blurry, low quality, deformed hands, extra fingers, ugly, realistic, 3d, photo, gradient shading, complex shading, red robe, emperor robe, phoenix embroidery, dragon embroidery, royal court style
```

---

## 📊 Tổng kết

| Nhân vật | Idle/Move | Talk/Gesture | Emotion | Story | Tổng |
|----------|-----------|--------------|---------|-------|------|
| Bờm | 8 | 6 | 6 | 4 | **24** |
| Phú ông | 8 | 6 | 6 | 4 | **24** |
| **Tổng** | 16 | 12 | 12 | 8 | **48** |

## 🎯 Điểm mạnh của prompt mới:

✅ Có **dòng "Giữ nguyên 100% phong cách..."** ở đầu mỗi prompt — ép AI giữ style
✅ Có **keyword mạnh**: `STRICTLY 2D`, `NO 3D`, `cel-shading only`, `thick black outline`
✅ Có **Vietnamese tranh dân gian folk art** — ép style dân gian Việt Nam
✅ Có **Negative riêng cho mỗi frame** — kiểm soát chất lượng tốt hơn
✅ Có **đủ thông tin nhân vật** trong prompt (màu áo, mũ, râu...) — tránh bị Gemini quên

## 📝 Ghi chú:

- File này chứa **48 frames animation chính**
- File `ENDING_AND_KARMA_FRAMES.md` chứa **frames bổ sung** cho ending + karma states
- Mỗi frame có 2 khối: **PROMPT** (to) và **NEGATIVE** (nhỏ)
- Copy khối PROMPT vào ô Prompt, copy khối NEGATIVE vào ô Negative của Gemini
