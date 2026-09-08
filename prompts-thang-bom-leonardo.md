# 🎯 PROMPT TỐI ƯU RIÊNG CHO LEONARDO.AI (Batch + Tách Nền)

> File riêng cho phần generate bằng **Leonardo.ai** với chiến lược:
> 1. Batch generation (4 ảnh/lần, chọn 1 đẹp nhất)
> 2. **Tách nền tự động** (transparent PNG) cho sprite nhân vật
> 3. Consistent character (giữ phong cách đồng nhất giữa các ảnh)
>
> File gốc `prompts-thang-bom.md` chứa prompt cho Google Gemini/Gemini AI Studio.
> File này (`prompts-thang-bom-leonardo.md`) chứa prompt đã tối ưu riêng cho Leonardo.

---

## 📋 MỤC LỤC

1. [⚙️ Cài đặt Leonardo (làm 1 lần đầu)](#-cài-đặt-leonardo-làm-1-lần-đầu)
2. [🎨 Quy tắc tách nền cho sprite](#-quy-tắc-tách-nền-cho-sprite)
3. [📦 BATCH 1: Bờm reference + 5 mood](#-batch-1-bờm-reference--5-mood)
4. [📦 BATCH 2: Phú Ông reference + 4 mood](#-batch-2-phú-ông-reference--4-mood)
5. [📦 BATCH 3: Mint + Heo Heo](#-batch-3-mint--heo-heo)
6. [📦 BATCH 4: 5 BG chính](#-batch-4-5-bg-chính)
7. [📦 BATCH 5: BG buồn/vui + bài học](#-batch-5-bg-buồnvui--bài-học)
8. [📦 BATCH 6: 5 illustration cho scene](#-batch-6-5-illustration-cho-scene)
9. [🎯 Mẹo Consistent Character nâng cao](#-mẹo-consistent-character-nâng-cao)
10. [💡 Tiết kiệm token](#-tiết-kiệm-token)
11. [✅ Checklist sau khi generate xong](#-checklist-sau-khi-generate-xong)

---

## ⚙️ CÀI ĐẶT LEONARDO (làm 1 lần đầu)

### 🔗 Đăng ký

1. Vào https://leonardo.ai → **Sign up free**
2. Verify email
3. Free tier: ~150 token/ngày (refresh mỗi ngày)

### 🎨 Model & Preset

**Model**: `Leonardo Anime XL` (hoặc `DreamShaper v7`)

**Preset**: `Anime Pastel` hoặc `Illustration`

### 🛠️ Generation Settings

| Setting | Value | Ghi chú |
|---------|-------|---------|
| **Number of Images** | `4` | Để chọn 1 đẹp nhất |
| **BG Image Size** | `1472 x 736` | Tỉ lệ 16:9 cho background |
| **Sprite/Illust Size** | `1024 x 1024` | Tỉ lệ 1:1 cho nhân vật |
| **Guidance Scale** | `7-9` | Càng cao càng bám prompt |
| **Steps** | `30-40` | |
| **Contrast** | `Medium` | |
| **Sampler** | `Euler` | |

### 🚫 Negative Prompt (paste vào ô "Negative Prompt", áp dụng cho TẤT CẢ)

```
text, watermark, signature, blurry, deformed, ugly, bad anatomy, extra limbs, scary, realistic photo, 3d render, nsfw, cropped, out of frame
```

### ⭐ Quality Boosters (thêm vào CUỐI mỗi prompt)

```
, masterpiece, best quality, highly detailed, soft lighting, illustration style, Studio Ghibli inspired, children's picture book
```

---

## 🎨 QUY TẮC TÁCH NỀN CHO SPRITE

> ⚠️ Sprite nhân vật **BẮT BUỘC phải tách nền** (PNG transparent) vì khi render đè lên BG, khung vuông sẽ rất xấu. Leonardo.ai **KHÔNG tự tách nền 100%**, phải làm thủ công.

### ❌ Vấn đề hiện tại

Sprite hiện tại dùng file JPG → có **khung background** của ảnh gốc → trông xấu khi đè lên BG.

### ✅ Cách 1: Yêu cầu nền đơn sắc từ prompt (KHUYẾN NGHỊ - đã áp dụng trong tất cả prompt dưới đây)

Thay vì `white simple background`, tôi đã dùng cụm này trong **tất cả 16 prompt sprite** ở Batch 1, 2, 3:

```
, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design
```

**Leonardo có hiểu flag `TRANSPARENT PNG`** - nó sẽ cố gắng tạo ảnh nền trong suốt luôn! Test thử trước 1 ảnh để xác nhận.

### ✅ Cách 2: Dùng "Transparent Background" trong Leonardo (Alchemy)

Sau khi generate xong ảnh có nền trắng:

1. Click vào ảnh đã generate
2. Tìm nút **"Remove Background"** hoặc **"Transparent BG"** (trong bảng actions bên phải)
3. Leonardo sẽ tự động xóa nền → tải PNG về

⚠️ **Lưu ý**: Tính năng này tốn thêm token (Alchemy). Nếu token ít, dùng Cách 3.

### ✅ Cách 3: Tool tách nền free bên ngoài (MIỄN PHÍ 100%)

Sau khi Leonardo generate ra (nền trắng hoặc xanh pastel):

1. **Remove.bg** - https://remove.bg (free, nhanh nhất)
   - Upload ảnh → tự động tách nền trong 5 giây
   - Tải PNG transparent về

2. **PhotoRoom** - https://photoroom.com (free)

3. **Canva** - Mở ảnh → Edit → BG Remover (mất 1 lần Pro trial, hoặc dùng thử free)

### 🔄 Workflow tách nền

```
[Bước 1] Generate ảnh sprite bằng Leonardo (prompt có "TRANSPARENT PNG")
        ↓
[Bước 2] Tải ảnh về máy (chọn format PNG, KHÔNG chọn JPG)
        ↓
[Bước 3] Nếu ảnh vẫn có nền → Upload lên remove.bg → tải PNG transparent về
        ↓
[Bước 4] Đổi tên đúng theo checklist → bỏ vào folder characters/
        ↓
[Bước 5] Báo lại tôi để update code
```

### 🎯 Tip quan trọng

**Prompt chỉ định transparent chỉ hoạt động ~60%** - Leonardo đôi khi vẫn vẽ nền trắng đặc. **Luôn chạy qua remove.bg** để chắc chắn. Đừng tin tưởng 100% vào `TRANSPARENT PNG`.

### ❌ Những prompt KHÔNG cần tách nền

- **BG (Batch 4, 5)**: Có sẵn `no people` → KHÔNG cần tách, để nguyên JPG
- **Illustration (Batch 6)**: Là ảnh minh họa object (cuộn giấy, cảnh 2 người...) → **CÓ THỂ** giữ nguyên JPG, không cần tách nền

---

## 📦 BATCH 1: Bờm reference + 5 mood

> ⚠️ **LÀM BATCH NÀY TRƯỚC TIÊN!** Tạo ảnh Bờm gốc → lưu URL → dùng làm reference cho các sprite sau để đảm bảo giống nhau.

### Bước 1.1: Tạo reference Bờm (paste vào Leonardo, generate 4 ảnh, chọn 1 đẹp nhất)

```
masterpiece, best quality, anime style, 12-year-old Vietnamese boy farmer character, round cute face, big expressive eyes, brown conical hat (non la), simple brown ao ba ba clothes, barefoot, standing neutral pose, looking at viewer, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting, illustration
```

→ Chọn ảnh đẹp nhất → **lưu URL** (Copy Image URL) → đặt làm `bom-reference.png`

### Bước 1.2: Tạo 5 mood Bờm (paste từng cái, lần lượt)

#### 🎭 Bờm vui (happy) → `bom-happy.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat and brown ao ba ba, big joyful toothy smile, both arms raised up in celebration, eyes sparkling with happiness, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting
```

#### 🎭 Bờm buồn (sad/thinking) → `bom-thinking.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, head slightly bowed down, sad worried expression, eyebrows drooping, holding hands clasped together near chest, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft dim lighting
```

#### 🎭 Bờm hào hứng (excited) → `bom-excited.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, eyes wide and sparkling with excitement, big open mouth grin, both fists raised high in the air, jumping pose, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting
```

#### 🎭 Bờm lo lắng (worried) → `bom-worried.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, biting lower lip nervously, wide anxious eyes, sweat drops on forehead, both hands gripping edges of shirt, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting
```

#### 🎭 Bờm bình thường (neutral) → `bom-neutral.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, calm gentle smile, hands relaxed at sides, standing straight, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting
```

---

## 📦 BATCH 2: Phú Ông reference + 4 mood

> Làm sau khi xong Batch 1.

### Bước 2.1: Tạo reference Phú Ông

```
masterpiece, best quality, anime style, wealthy Vietnamese merchant character, round chubby face with small eyes and thin mustache, red traditional ao dai with gold embroidery, black turban hat with gold trim, gold rings on fingers, gold chain necklace, standing proud with hands behind back, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting
```

→ Chọn 1 đẹp nhất → lưu URL → đặt làm `phuong-reference.png`

### Bước 2.2: 4 mood Phú Ông

#### 🎭 Phú Ông tự mãn (smug) → `phuong-smug.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai and gold trim, smirking sly smile, one hand stroking thin mustache, half-closed eyes looking down arrogantly, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 🎭 Phú Ông giận dữ (angry) → `phuong-angry.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai, angry face with eyebrows sharply bent down, mouth open yelling, fist raised shaking, red flushed cheeks, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 🎭 Phú Ông buồn/ngại (sad) → `phuong-sad.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai, worried flustered face, sweat drops on forehead, biting lips nervously, both hands wiping sweat, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 🎭 Phú Ông bình thường (neutral) → `phuong-neutral.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai, calm expression with slight smile, standing straight with hands behind back, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

---

## 📦 BATCH 3: Mint + Heo Heo

> 2 nhân vật phụ. Có thể làm song song với Batch 2.

### Mint reference → `mint-reference.png`

```
masterpiece, best quality, anime style, 13-year-old Vietnamese girl character, short black hair with small pink ribbon, friendly round face with big bright eyes, wearing modern simple school shirt with blue skirt, hands clasped together cheerfully, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book, soft lighting
```

### Mint vui (happy) → `mint-happy.png`

```
masterpiece, best quality, anime style, same Vietnamese girl character with short black hair and pink ribbon, big bright joyful smile, eyes sparkling, both hands raised pointing up excitedly, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

### Mint tò mò (curious) → `mint-curious.png`

```
masterpiece, best quality, anime style, same Vietnamese girl character with short black hair and pink ribbon, curious tilted head, one hand on chin thinking, big curious eyes, slight smile, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

### Heo Heo proud → `heo-heo-proud.png`

```
masterpiece, best quality, anime style, round cute Vietnamese clay pig character (to heo dat), pink chubby cheeks, big toothy proud grin, eyes half-closed looking smug, gold coin in mouth, small trotters on hips, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

### Heo Heo celebrate → `heo-heo-celebrate.png`

```
masterpiece, best quality, anime style, same round cute Vietnamese clay pig, big joyful toothy grin, eyes closed in delight, both trotters raised up celebrating, confetti stars around, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

---

## 📦 BATCH 4: 5 BG chính

> Image Size đổi sang `1472 x 736` (16:9). **KHÔNG CẦN tách nền** - tải JPG cho nhẹ.
> VẪN dùng negative prompt phía trên, nhưng BỎ flag TRANSPARENT.

### 🌅 Làng quê buổi sáng → `bg-lang-que.jpg`

```
masterpiece, best quality, anime style, peaceful Vietnamese countryside village at sunrise, traditional bamboo houses with thatched roofs, rice paddies in foreground, giant ancient banyan tree in center, misty mountains in background, golden morning sunlight, soft clouds, no people, 16:9 wide landscape, Studio Ghibli style, children's picture book, soft watercolor pastel
```

### 🌾 Cánh đồng lúa rộng → `bg-canh-dong-lua.jpg`

```
masterpiece, best quality, anime style, wide golden Vietnamese rice paddy field stretching to horizon, ripe yellow rice ready for harvest, blue sky with fluffy white clouds, small straw hat farmers in distance, warm sunny atmosphere, no people in foreground, 16:9 wide landscape, Studio Ghibli style, children's picture book, soft watercolor
```

### 🌳 Gốc cây đa → `bg-goc-da.jpg`

```
masterpiece, best quality, anime style, giant ancient Vietnamese banyan tree with thick twisted roots, soft green moss, golden morning sunlight filtering through canopy of green leaves, small mound of earth beside tree as hiding spot, peaceful countryside background, dappled light rays, no people, 16:9 wide landscape, Studio Ghibli style, children's picture book, soft watercolor
```

### 🏠 Nhà Phú Ông (cổng) → `bg-nha-phu-ong.jpg`

```
masterpiece, best quality, anime style, grand traditional Vietnamese wealthy house exterior, large red lacquered wooden main doors, curved tile roof with golden decorations, two stone lion statues flanking entrance, ornate wooden courtyard, contrast with simple village houses nearby, no people, 16:9 wide landscape, Studio Ghibli style, children's picture book, pastel but richer colors
```

### 🏚️ Nhà Bờm (nhà tranh) → `bg-nha-bom.jpg`

```
masterpiece, best quality, anime style, small humble Vietnamese bamboo hut with thatched roof, simple wooden door, small yard with dried corn hanging from eaves, small vegetable garden beside, worn straw mat outside door, ancient banyan tree in distance, sunny day, no people, 16:9 wide landscape, Studio Ghibli style, children's picture book, warm pastel colors
```

---

## 📦 BATCH 5: BG buồn/vui + bài học

> Size `1472 x 736` (16:9). JPG.

### 🛋️ Phòng Phú Ông → `bg-phong-phu-ong.jpg`

```
masterpiece, best quality, anime style, interior of wealthy Vietnamese merchant's office, dark polished wooden desk with abacus, scrolls of contracts and papers, gold ingots stacked on shelf in background, red wooden pillars, traditional paper window with warm dim light filtering through, no people, 16:9 wide landscape, Studio Ghibli style, children's picture book
```

### 😢 Bờm buồn trước nhà trống (ending xấu) → `bg-bom-buon-nha-trong.jpg`

```
masterpiece, best quality, anime style, sad empty Vietnamese countryside, abandoned thatched hut with broken wooden door hanging off, scattered fallen rice stalks on ground, grey overcast sky with dark clouds, melancholic but child-appropriate atmosphere, no scary elements, single small boy silhouette standing far away looking at ruin, 16:9 wide landscape, Studio Ghibli style, children's picture book, muted colors
```

### 😢 Bờm buồn nhiều hơn (alt) → `bg-bom-buon.jpg`

```
masterpiece, best quality, anime style, very sad Vietnamese countryside at twilight, broken thatched hut with collapsed roof, scattered belongings on muddy ground, single small boy farmer sitting on ground hugging knees, dark grey cloudy sky, no scary elements, 16:9 wide landscape, Studio Ghibli style, children's picture book, muted blue-grey colors
```

### 🎉 Cảnh Bờm vui cùng bạn bè (ending tốt) → `bg-bom-vui-ban-be.jpg`

```
masterpiece, best quality, anime style, happy Vietnamese countryside scene, group of children playing and laughing near golden rice paddies, giant ancient banyan tree, golden sunset light with orange pink sky, joyful celebration atmosphere, 16:9 wide landscape, Studio Ghibli style, children's picture book, vibrant warm pastel colors
```

### 📖 BG bài học chung (cho b10) → `bg-bai-hoc.jpg`

```
masterpiece, best quality, anime style, end-of-story Vietnamese countryside village panorama, giant friendly banyan tree in center, golden rice paddies, soft white clouds, hopeful uplifting sunrise atmosphere, warm golden light, book-closing vibe, no people, 16:9 wide landscape, Studio Ghibli style, children's picture book, warm pastel colors
```

---

## 📦 BATCH 6: 5 illustration cho scene

> Size `1024 x 1024` (1:1). JPG. **KHÔNG cần tách nền** (ảnh minh họa có nhiều object/2 nhân vật).
> VẪN dùng negative prompt phía trên.

### 💰 Bờm đếm vàng dưới gốc đa → `bom-dem-vang.jpg`

```
masterpiece, best quality, anime style, 12-year-old Vietnamese boy farmer sitting under giant banyan tree, carefully counting small gold coins on a blue cloth, sun-dappled peaceful scene, full body, 1:1 square, Studio Ghibli style, children's picture book, warm pastel colors
```

### 🚪 Phú Ông gõ cửa nhà Bờm → `gap-phuong.jpg`

```
masterpiece, best quality, anime style, wealthy Vietnamese merchant in red ao dai knocking on wooden door of small humble bamboo hut, two characters visible, contrast between rich and poor merchant, friendly but slightly sly merchant smile, 1:1 square, Studio Ghibli style, children's picture book, warm pastel colors
```

### 📜 Cuộn hợp đồng (object only) → `doc-hop-dong.jpg`

```
masterpiece, best quality, anime style, Vietnamese scroll contract unrolled on wooden table, magnifying glass beside it, ominous but child-appropriate tone, visible tiny text marks but no readable English or Vietnamese letters, 1:1 square, Studio Ghibli style, children's picture book, soft lighting
```

### 👥 Bờm + Phú Ông đọc HĐ cùng nhau → `doc-hop-dong-cung.jpg`

```
masterpiece, best quality, anime style, two Vietnamese characters sitting at wooden table reading a scroll contract together, friendly Vietnamese boy farmer with conical hat pointing at contract, wealthy merchant in red ao dai sitting opposite looking patient, 1:1 square, Studio Ghibli style, children's picture book, warm pastel colors
```

### 😢 Bờm vỡ nợ - mất trắng → `bom-vo-no.jpg`

```
masterpiece, best quality, anime style, sad Vietnamese boy farmer character standing in empty ruined courtyard, broken pottery on ground, autumn leaves falling around, muted blue-grey colors, melancholy but not scary, small boy with head bowed, 1:1 square, Studio Ghibli style, children's picture book, soft lighting
```

---

## 🎯 MẸO CONSISTENT CHARACTER NÂNG CAO

> Sau khi tạo xong reference Bờm đầu tiên, dùng ảnh đó làm reference cho 5 mood sau để các sprite giống nhau 80-90%.

### Bước 1: Lưu reference

1. Generate reference Bờm (Bước 1.1 ở Batch 1)
2. Chọn ảnh đẹp nhất → click vào ảnh → **"Download"** hoặc copy URL

### Bước 2: Dùng Image2Image

1. Vào trang ảnh đó → click **"Use as Reference"** hoặc **"Image2Image"**
2. Upload ảnh reference Bờm
3. Giữ **"Init Strength" = 0.65-0.75**
   - Cao quá (0.85+) → giống hệt, không có chỗ sáng tạo
   - Thấp quá (0.4-) → khác reference, không consistent
4. Paste các prompt mood Bờm ở Bước 1.2 → generate

### Bước 3: Apply cho các nhân vật khác

- Tương tự cho **Phú Ông** (sau khi có `phuong-reference.png`)
- Tương tự cho **Mint** (sau khi có `mint-reference.png`)
- Tương tự cho **Heo Heo** (sau khi có `heo-heo-reference.png`)

### 💡 Kết quả mong đợi

- Khuôn mặt giống nhau **80-90%**
- Màu sắc áo/đầu giống nhau **95%+**
- Mood (vui/buồn/hào hứng) thay đổi theo prompt

---

## 💡 TIẾT KIỆM TOKEN

Free tier cho ~150 token/ngày. Đây là cách tiết kiệm:

| Mẹo | Tiết kiệm |
|-----|-----------|
| **KHÔNG dùng "Alchemy"** (trừ khi cần tách nền) | -50% token |
| **Dùng preset có sẵn** thay vì custom quá nhiều | -20% token |
| **Generate 4 ảnh/lần**, chọn 1 đẹp nhất | -75% token (so với 1 ảnh/lần × 4 lần) |
| **Không upscale** ngay (để dành token) | -30% token |
| **Dùng size vừa đủ** (1024x1024 hoặc 1472x736) | -30% token |

### 📊 Ước tính token cho cả 6 batch

| Batch | Số ảnh | Token ước tính |
|-------|--------|----------------|
| 1 | 6 ảnh × 1.5 (4 ảnh/lần) | ~9 |
| 2 | 5 ảnh × 1.5 | ~8 |
| 3 | 5 ảnh × 1.5 | ~8 |
| 4 | 5 ảnh × 1.5 | ~8 |
| 5 | 4 ảnh × 1.5 | ~6 |
| 6 | 5 ảnh × 1.5 | ~8 |
| **Tổng** | **30 ảnh** | **~47 token** |

→ Đủ dùng trong **1 ngày** nếu có 150 token, hoặc **2-3 ngày** nếu free tier thấp hơn.

---

## ✅ CHECKLIST SAU KHI GENERATE XONG

### 📂 Folder `characters/` (PNG transparent)

```
[ ] bom-reference.png        (reference gốc - giữ làm base)
[ ] bom-happy.png
[ ] bom-thinking.png
[ ] bom-excited.png
[ ] bom-worried.png
[ ] bom-neutral.png

[ ] phuong-reference.png
[ ] phuong-smug.png
[ ] phuong-angry.png
[ ] phuong-sad.png
[ ] phuong-neutral.png

[ ] mint-reference.png
[ ] mint-happy.png
[ ] mint-curious.png

[ ] heo-heo-reference.png
[ ] heo-heo-proud.png
[ ] heo-heo-celebrate.png
```

### 📂 Folder `backgrounds/` (JPG)

```
[ ] bg-lang-que.jpg
[ ] bg-canh-dong-lua.jpg
[ ] bg-goc-da.jpg
[ ] bg-nha-phu-ong.jpg
[ ] bg-nha-bom.jpg
[ ] bg-phong-phu-ong.jpg
[ ] bg-bom-buon-nha-trong.jpg
[ ] bg-bom-buon.jpg
[ ] bg-bom-vui-ban-be.jpg
[ ] bg-bai-hoc.jpg
```

### 📂 Folder `illustrations/` (JPG)

```
[ ] bom-dem-vang.jpg
[ ] gap-phuong.jpg
[ ] doc-hop-dong.jpg
[ ] doc-hop-dong-cung.jpg
[ ] bom-vo-no.jpg
```

### 🎉 Sau khi tải đủ

Báo lại tôi. Tôi sẽ **tự động cập nhật mapping** trong:

1. `src/data/sprites.jsx` → mapping PNG transparent cho sprite
2. `src/data/backgrounds.jsx` → mapping JPG cho BG
3. `src/data/stories.js` → mapping illustration cho scene

→ App sẽ render đúng ảnh + sprite đè đẹp lên BG không bị khung vuông! 🎨

---

## 🎭 PROMPT BỔ SUNG: MULTI-POSE CHO ANIMATION TƯƠNG TÁC

> **Tính năng mới (Sept 2026):** Sprite có thể chuyển pose theo scene!
> Ví dụ: Bờm `idle` → `reachOut` (vươn tay) → `grabMoney` (cầm tiền) → `celebrate` (nhảy mừng)
>
> Code đã có sẵn 11 pose (`idle`, `reachOut`, `grabMoney`, `celebrate`, `shocked`, `bowed`, `leanForward`, `leanBack`, `offerMoney`, `proud`, `explain`) với CSS animation mượt mà.
>
> Khi generate ảnh sprite, hãy tạo **NHIỀU POSE** cho mỗi nhân vật (không chỉ 1 mood) để animation có thể chuyển động linh hoạt.

### 📦 BATCH 7: Multi-pose cho Bờm (thêm vào sprite hiện có)

> Bổ sung thêm 4 pose mới cho Bờm: vươn tay, cầm tiền, giơ tay cao, nghiêng về phía trước.
> Size `1024 x 1024` (1:1), PNG transparent.

#### 🤲 Bờm vươn tay ra (reachOut) → `bom-reach-out.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, right arm stretched out forward reaching toward viewer with open palm, expectant happy expression on face, body slightly leaning forward, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 💰 Bờm cầm tiền (grabMoney) → `bom-grab-money.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, both hands held up near chest holding a small glowing gold coin pouch, joyful surprised expression, eyes sparkling with happiness, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 🙌 Bờm giơ tay cao ăn mừng (celebrate) → `bom-celebrate.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, both arms raised high up in the air triumphantly, big wide smile, jumping pose with feet off ground, sparkle stars around character, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 🧐 Bờm nghiêng về phía trước chất vấn (leanForward) → `bom-lean-forward.png`

```
masterpiece, best quality, anime style, same Vietnamese boy farmer character with brown conical hat, leaning forward confidently with hands on hips, serious but friendly questioning expression, eyebrows raised, body slightly tilted forward, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

### 📦 BATCH 8: Multi-pose cho Phú Ông

#### 🤲 Phú Ông đưa tiền (offerMoney) → `phuong-offer-money.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai and gold trim, left arm extended forward offering a small money pouch toward viewer with sly smiling expression, other hand stroking thin mustache, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 😱 Phú Ông sốc (shocked) → `phuong-shocked.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai, shocked expression with wide eyes and open mouth, both hands raised defensively near face, sweat drops on forehead, body leaning back slightly, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

#### 😤 Phú Ông giải thích bẫy (explain) → `phuong-explain.png`

```
masterpiece, best quality, anime style, same wealthy Vietnamese merchant with red ao dai, angry explanatory expression with one hand pointing finger upward accusingly, other hand gesturing broadly, eyebrows bent down sharply, full body, ISOLATED ON PURE WHITE BACKGROUND with TRANSPARENT PNG output, character cutout, no shadow no floor no environment, Studio Ghibli character design, children's picture book
```

### 🗺️ MAPPING POSE ↔ SCENE

| Scene | Character | Pose | File cần có |
|-------|-----------|------|-------------|
| b4 (Phú Ông đưa tiền) | phuong | `offerMoney` | phuong-offer-money.png |
| b5 (Bờm vươn tay) | bom | `reachOut` | bom-reach-out.png |
| b7-trap (Bờm cầm tiền) | bom | `grabMoney` + `moneyTransfer` | bom-grab-money.png |
| b8-smart (Bờm mừng) | bom | `celebrate` | bom-celebrate.png |
| b7-smart (Bờm chất vấn) | bom | `leanForward` | bom-lean-forward.png |
| b9-smart (Phú Ông sốc) | phuong | `shocked` | phuong-shocked.png |
| b8-trap (Phú Ông giải thích) | phuong | `explain` | phuong-explain.png |

### 📋 CẬP NHẬT CHECKLIST SPRITE (PNG transparent)

```
[ ] bom-reference.png        (reference gốc)
[ ] bom-happy.png
[ ] bom-thinking.png
[ ] bom-excited.png
[ ] bom-worried.png
[ ] bom-neutral.png
[ ] bom-reach-out.png        🆕 MỚI - vươn tay
[ ] bom-grab-money.png       🆕 MỚI - cầm tiền
[ ] bom-celebrate.png        🆕 MỚI - giơ tay cao
[ ] bom-lean-forward.png     🆕 MỚI - nghiêng về trước

[ ] phuong-reference.png
[ ] phuong-smug.png
[ ] phuong-angry.png
[ ] phuong-sad.png
[ ] phuong-neutral.png
[ ] phuong-offer-money.png   🆕 MỚI - đưa tiền
[ ] phuong-shocked.png       🆕 MỚI - sốc
[ ] phuong-explain.png       🆕 MỚI - giải thích

[ ] mint-reference.png
[ ] mint-happy.png
[ ] mint-curious.png

[ ] heo-heo-reference.png
[ ] heo-heo-proud.png
[ ] heo-heo-celebrate.png
```

### 💡 TIP TẠO MULTI-POSE NHANH

**Sau khi đã có reference Bờm** (từ Batch 1), làm thêm pose:

1. Vào reference Bờm → **"Use as Reference"** / **Image2Image**
2. Upload ảnh reference
3. **Init Strength = 0.55-0.65** (thấp hơn mood để tạo pose khác)
4. Paste prompt pose mới → Generate
5. Chọn 1 ảnh đẹp nhất → tách nền → lưu

**Lợi ích:** Khuôn mặt Bờm giống nhau 90%, chỉ khác pose tay.

---

## 📝 GHI CHÚ

- File gốc `prompts-thang-bom.md` vẫn chứa prompt cho **Google Gemini** (Imagen 3 / Gemini 2.0 Flash)
- File này `prompts-thang-bom-leonardo.md` chứa prompt đã tối ưu riêng cho **Leonardo.ai**
- **KHÔNG xóa file gốc**, dùng song song cho 2 engine khác nhau
- Nếu Leonardo từ chối generate ảnh nào (token hết / content policy), dùng file gốc để paste vào Gemini thay thế
