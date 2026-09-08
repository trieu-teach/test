# đŸ¨ PROMPT Táº O áº¢NH CHO TRUYá»†N "THáº°NG Bá»œM VĂ€ PHĂ Ă”NG"

> DĂ¹ng cĂ¡c prompt dÆ°á»›i Ä‘Ă¢y trong **Google Gemini** (gemini.google.com) hoáº·c **Google AI Studio** vá»›i model hĂ¬nh áº£nh (Imagen 3 / Gemini 2.0 Flash vá»›i image generation).
> Sau khi táº¡o áº£nh, táº£i vá» vĂ  Ä‘áº·t vĂ o `finteen-app/public/images/thang-bom/`

---

## đŸ­ MASTER STYLE PROMPT (paste vĂ o system prompt hoáº·c Ä‘áº§u má»—i láº§n)

```
Children's picture book illustration, Vietnamese fairy tale style,
warm pastel colors, soft watercolor texture, Studio Ghibli inspired,
cute round-faced characters, simple backgrounds with village feel,
slightly textured paper effect, gentle lighting, no text in image,
aspect ratio 16:9 (for backgrounds) or 1:1 (for characters),
wholesome family-friendly art style suitable for ages 8-14
```

---

## đŸŒ… BACKGROUND SCENES (áº£nh ná»n 16:9)

### BG-01: LĂ ng quĂª ven sĂ´ng buá»•i sĂ¡ng
```
A peaceful Vietnamese countryside village by a river at sunrise,
traditional bamboo houses with thatched roofs, rice paddies in
foreground, ancient banyan tree in center, misty mountains in
background, golden morning light, Studio Ghibli style, soft
watercolor pastel colors, no text, no people, 16:9 aspect ratio
```

### BG-02: NhĂ  Tháº±ng Bá»m (nhĂ  tranh Ä‘Æ¡n sÆ¡)
```
A small humble bamboo hut with thatched roof in Vietnamese countryside,
wooden door, simple yard with dried corn hanging, small vegetable
garden, a worn straw mat outside, banyan tree beside, sunny day,
children's book illustration style, warm pastel colors, no text,
no people, 16:9 aspect ratio
```

### BG-03: Gá»‘c Ä‘a vĂ  kho vĂ ng giáº¥u
```
Ancient giant banyan tree with thick roots, a small mound of earth
beside it (hiding spot), golden morning sunlight filtering through
leaves, peaceful Vietnamese countryside background, soft watercolor,
children's book illustration, no text, no people, 16:9 aspect ratio
```

### BG-04: NhĂ  PhĂº Ă”ng (nhĂ  to giĂ u cĂ³)
```
A grand traditional Vietnamese wealthy house with red lacquered
wooden doors, curved tile roof, golden decorations, stone lion
statues at entrance, ornate courtyard, contrast with simple village
around it, children's book illustration, pastel but slightly richer
colors, no text, no people, 16:9 aspect ratio
```

### BG-05: CĂ¡nh Ä‘á»“ng lĂºa rá»™ng
```
Wide golden rice paddy field stretching to horizon, Vietnamese
countryside, a few farmers working in distance, blue sky with white
clouds, Studio Ghibli pastoral style, warm sunny atmosphere,
children's book illustration, no text, no people, 16:9 aspect ratio
```

### BG-06: PhĂ²ng lĂ m viá»‡c cá»§a PhĂº Ă”ng (cĂ³ giáº¥y tá», bĂ n)
```
Interior of a wealthy Vietnamese merchant's office, dark wooden
desk, abacus, scrolls of debt contracts, gold ingots in background,
red wooden pillars, dim warm lighting through paper window,
traditional Asian interior, children's book illustration style,
no text, no people, 16:9 aspect ratio
```

### BG-07: Cáº£nh Bá»m buá»“n bĂ£ trÆ°á»›c nhĂ  trá»‘ng (ending bad)
```
Empty Vietnamese countryside village scene, an abandoned thatched
hut with broken door, fallen rice stalks scattered, grey cloudy
sky, sad atmosphere but still child-appropriate, no scary elements,
children's book illustration, muted colors, no text, no people,
16:9 aspect ratio
```

### BG-08: Cáº£nh Bá»m vui váº» Ä‘á»©ng cĂ¹ng báº¡n bĂ¨ (ending good)
```
Happy Vietnamese countryside scene, group of children playing
near rice paddies, golden sunset light, ancient banyan tree,
joyful atmosphere, Studio Ghibli style, vibrant warm pastel colors,
children's book illustration, no text, 16:9 aspect ratio
```

---

## đŸ‘¦ CHARACTER SPRITES (áº£nh nhĂ¢n váº­t 1:1, kĂ­ch thÆ°á»›c ~512x512)

> **Quy táº¯c:** Má»—i nhĂ¢n váº­t cáº§n 3 mood: **neutral** (bĂ¬nh thÆ°á»ng), **happy** (vui), **sad** (buá»“n). PhĂº Ă”ng cáº§n thĂªm **tempting** (gáº¡ gáº«m).
Children's picture book illustration, Vietnamese fairy tale style,
warm pastel colors, soft watercolor texture, Studio Ghibli inspired,
cute round-faced characters, simple backgrounds with village feel,
slightly textured paper effect, gentle lighting, no text in image,
aspect ratio 16:9 (for backgrounds) or 1:1 (for characters),
wholesome family-friendly art style suitable for ages 8-14
### CHAR-Tháº±ng-Bá»m-neutral
```
A 12-year-old Vietnamese boy farmer character, round friendly face,
sun-tanned skin, short black hair, wearing simple brown Ă¡o bĂ  ba
traditional shirt and dark shorts, conical hat (nĂ³n lĂ¡) in hand,
kind honest expression, Studio Ghibli character design, children's
book illustration, clean white background, full body or upper body,
1:1 aspect ratio
```

### CHAR-Tháº±ng-Bá»m-happy
```
Same Vietnamese boy farmer character as before but smiling brightly,
eyes sparkling with hope, holding a small gold coin in hand, slightly
jumping pose showing excitement, cheerful warm colors, Studio Ghibli
character design, children's book illustration, clean white
background, 1:1 aspect ratio
```

### CHAR-Tháº±ng-Bá»m-sad
```
Same Vietnamese boy farmer character but with sad worried expression,
head slightly down, hands empty, muted darker tones, melancholy but
not scary, Studio Ghibli character design, children's book
illustration, clean white background, 1:1 aspect ratio
```

### CHAR-PhĂº-Ă”ng-neutral
```
A 50-year-old wealthy Vietnamese merchant man, round face with thin
mustache, small cunning eyes, wearing rich red and gold traditional
Ă¡o dĂ i, gold rings on fingers, hair tied in topknot, sly slight
smile, Studio Ghibli character design, children's book illustration,
clean white background, 1:1 aspect ratio
```

### CHAR-PhĂº-Ă”ng-tempting
```
Same wealthy Vietnamese merchant character but with arms spread wide
in welcoming gesture, big fake friendly smile, holding a bag of
gold coins in one hand and a debt contract scroll in the other,
slightly sneaky expression, Studio Ghibli character design,
children's book illustration, clean white background, 1:1 aspect ratio
```

### CHAR-PhĂº-Ă”ng-sad (khi bá»‹ há»i choĂ¡y)
```
Same wealthy Vietnamese merchant character but with red flushed
face showing embarrassment, sweating slightly, hiding the debt
contract behind his back, sheepish caught expression, Studio Ghibli
character design, children's book illustration, clean white
background, 1:1 aspect ratio
```

### CHAR-Mint-curious (nhĂ¢n váº­t dáº«n chuyá»‡n)
```
A 10-year-old Vietnamese girl with pigtails, curious thoughtful
expression, hand on chin as if asking a question, wearing pink
Ă¡o bĂ  ba, holding a small piggy bank, bright intelligent eyes,
Studio Ghibli character design, children's book illustration,
clean white background, 1:1 aspect ratio
```

### CHAR-Heo-Heo-proud (báº¡n Ä‘á»“ng hĂ nh khuyĂªn báº£o)
```
A cute magical talking piggy bank character standing on hind legs,
wearing small round glasses, holding an open book with money wisdom,
proud wise expression, sparkling around body, Studio Ghibli
character design, children's book illustration, clean white
background, 1:1 aspect ratio
```

---

## đŸï¸ ILLUSTRATION PROMPTS (áº£nh minh hoáº¡ nhá» cho scene 1:1)

### ILL-01: Bá»m Ä‘áº¿m vĂ ng dÆ°á»›i gá»‘c Ä‘a
```
A 12-year-old Vietnamese boy farmer sitting under a giant banyan
tree, carefully counting a few small gold coins on a cloth, peaceful
sun-dappled scene, Studio Ghibli style, children's book illustration,
warm pastel colors, no text, 1:1 aspect ratio
```

### ILL-02: PhĂº Ă”ng gĂµ cá»­a nhĂ  Bá»m
```
Wealthy Vietnamese merchant with red Ă¡o dĂ i knocking on door of a
small humble bamboo hut, two characters interacting, contrast between
rich and poor, Studio Ghibli character design, children's book
illustration, no text, 1:1 aspect ratio
```

### ILL-03: Há»£p Ä‘á»“ng ná»£ cĂ³ báº«y
```
A Vietnamese scroll contract unrolled on a wooden table, visible
small text "10% lĂ£i" but with tiny footnotes about hidden fees,
magnifying glass beside it, ominous but child-appropriate tone,
Studio Ghibli style, no readable text in image, 1:1 aspect ratio
```

### ILL-04: Bá»m vá»¡ ná»£ - máº¥t tráº¯ng (ending bad)
```
Sad Vietnamese boy farmer character standing in empty ruined
courtyard with broken pots, autumn leaves falling, muted colors,
melancholy but not scary, Studio Ghibli character design,
children's book illustration, no text, 1:1 aspect ratio
```

### ILL-05: Bá»m Ä‘á»c há»i ká»¹ há»£p Ä‘á»“ng (ending good)
```
Smart Vietnamese boy farmer character holding contract scroll and
asking questions to a flustered merchant, wise thoughtful pose,
Studio Ghibli character design, children's book illustration,
no text, 1:1 aspect ratio
```

---

## đŸ“ Cáº¤U TRĂC THÆ¯ Má»¤C LÆ¯U áº¢NH

```
finteen-app/
â””â”€â”€ public/
    â””â”€â”€ images/
        â””â”€â”€ thang-bom/
            â”œâ”€â”€ backgrounds/
            â”‚   â”œâ”€â”€ bg-01-lang-que.jpg
            â”‚   â”œâ”€â”€ bg-02-nha-bom.jpg
            â”‚   â”œâ”€â”€ bg-03-goc-da.jpg
            â”‚   â”œâ”€â”€ bg-04-nha-phu-ong.jpg
            â”‚   â”œâ”€â”€ bg-05-dong-lua.jpg
            â”‚   â”œâ”€â”€ bg-06-phong-phu-ong.jpg
            â”‚   â”œâ”€â”€ bg-07-bom-buon.jpg
            â”‚   â””â”€â”€ bg-08-bom-vui.jpg
            â”œâ”€â”€ characters/
            â”‚   â”œâ”€â”€ bom-neutral.png
            â”‚   â”œâ”€â”€ bom-happy.png
            â”‚   â”œâ”€â”€ bom-sad.png
            â”‚   â”œâ”€â”€ phu-ong-neutral.png
            â”‚   â”œâ”€â”€ phu-ong-tempting.png
            â”‚   â”œâ”€â”€ phu-ong-flustered.png
            â”‚   â”œâ”€â”€ mint-curious.png
            â”‚   â””â”€â”€ piggy-proud.png
            â””â”€â”€ illustrations/
                â”œâ”€â”€ ill-01-dem-vang.jpg
                â”œâ”€â”€ ill-02-go-cua.jpg
                â”œâ”€â”€ ill-03-hop-dong.jpg
                â”œâ”€â”€ ill-04-vo-no.jpg
                â””â”€â”€ ill-05-doc-hop-dong.jpg
```

---

## đŸ€ CĂCH DĂ™NG NHANH

### BÆ°á»›c 1: VĂ o Google AI Studio
- Má»Ÿ [aistudio.google.com](https://aistudio.google.com)
- Chá»n model **Gemini 2.0 Flash** (Experimental) - cĂ³ há»— trá»£ táº¡o áº£nh
- Hoáº·c dĂ¹ng **Imagen 3** riĂªng

### BÆ°á»›c 2: Paste tá»«ng prompt
- Copy **Master Style Prompt** + **BG-01** â†’ Generate â†’ Download
- Láº·p láº¡i vá»›i tá»«ng BG, CHAR, ILL

### BÆ°á»›c 3: Tá»‘i Æ°u náº¿u Gemini khĂ´ng há»— trá»£ áº£nh trá»±c tiáº¿p
- DĂ¹ng [Bing Image Creator](https://www.bing.com/images/create) (free, dĂ¹ng DALL-E 3)
- Hoáº·c [Leonardo.ai](https://leonardo.ai) (free tier tá»‘t)
- Hoáº·c [Ideogram.ai](https://ideogram.ai) (ráº¥t tá»‘t cho text/illustration)

### BÆ°á»›c 4: BĂ¡o láº¡i cho tĂ´i khi xong
- TĂ´i sáº½ update `VisualNovelPlayer` + `data/backgrounds.jsx` + `data/sprites.jsx`
  Ä‘á»ƒ dĂ¹ng áº£nh tháº­t thay vĂ¬ emoji/gradient

---

## đŸ’¡ Máº¸O Táº O áº¢NH

1. **Giá»¯ style nháº¥t quĂ¡n** - paste Master Style Prompt vĂ o Äáº¦U má»—i láº§n
2. **Náº¿u áº£nh cĂ³ chá»¯ Viá»‡t bá»‹ lá»—i** - thĂªm "no text, no letters, no words" vĂ o cuá»‘i
3. **Náº¿u nhĂ¢n váº­t khĂ´ng giá»‘ng nhau** - táº¡o 1 áº£nh reference trÆ°á»›c, rá»“i dĂ¹ng láº¡i mĂ´ táº£
4. **Aspect ratio:**
   - Background = 16:9 (ngang, cho scene)
   - Character = 1:1 (vuĂ´ng, cho sprite)
   - Illustration = 1:1 hoáº·c 4:3
5. **Format lÆ°u:** PNG cho character (transparent), JPG cho background (nháº¹ hÆ¡n)

---

## đŸ”„ áº¢NH Cáº¦N GENERATE THĂM (sau khi Ä‘Ă£ cĂ³ 8 BG + 8 sprite + 5 ill)

> Sau khi generate xong Ä‘á»£t 1, ngÆ°á»i dĂ¹ng tháº¥y váº«n cĂ²n thiáº¿u má»™t sá»‘ mood + illustration cho cĂ¡c scene. ÄĂ¢y lĂ  danh sĂ¡ch cáº§n bá»• sung:

### đŸ†• BG-09: Cáº£nh bĂ i há»c chung (cho scene b10)
```
End-of-story summary scene, Vietnamese countryside village panorama
with sunshine, a giant friendly banyan tree center, golden rice
paddies, soft clouds, hopeful uplifting atmosphere, book-closing
vibe, Studio Ghibli style, children's book illustration, warm
pastel colors, no text, no people, 16:9 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/backgrounds/bg-bai-hoc.jpg`

---

### đŸ†• CHAR-Bá»m-excited (Bá»m sung sÆ°á»›ng Ä‘ang Ä‘áº¿m vĂ ng)
```
A 12-year-old Vietnamese boy farmer, round happy face, brown
conical hat, simple brown Ă¡o bĂ  ba clothes, standing excited
with both arms raised high holding a small gold coin, big joyful
smile, eyes sparkling, plain transparent or pastel sky background,
Studio Ghibli style, children's book illustration, no text, 1:1
aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/characters/bom-excited.jpg`

### đŸ†• CHAR-Bá»m-worried (Bá»m lo láº¯ng sá»£ hĂ£i)
```
A 12-year-old Vietnamese boy farmer, round face showing worry,
brown conical hat, bitten lips, eyes wide looking nervously at
a piece of paper in his hand, sweat drops, hands gripping the
paper edge, plain transparent or pastel sky background, Studio
Ghibli style, children's book illustration, no text, 1:1 aspect
ratio
```
â†’ LÆ°u: `public/images/thang-bom/characters/bom-worried.jpg`

### đŸ†• CHAR-PhĂº Ă”ng-angry (PhĂº Ă”ng giáº­n dá»¯ Ä‘e doáº¡)
```
A wealthy Vietnamese merchant with red Ă¡o dĂ i, round chubby face
showing rage, eyebrows sharply bent down, mouth open yelling,
fist raised, gold rings on fingers, red flushed cheeks, plain
transparent or pastel sky background, Studio Ghibli style,
children's book illustration, no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/characters/phuong-angry.jpg`

### đŸ†• CHAR-PhĂº Ă”ng-proud (PhĂº Ă”ng tá»± Ä‘áº¯c kiĂªu ngáº¡o)
```
A wealthy Vietnamese merchant with red Ă¡o dĂ i, round chubby face
smirking smugly, one hand on chin stroking imaginary beard, eyes
half-closed looking down arrogantly at viewer, slight head tilt,
gold jewelry around neck, plain transparent or pastel sky
background, Studio Ghibli style, children's book illustration,
no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/characters/phuong-proud.jpg`

### đŸ†• CHAR-Mint-happy (Mint vui váº» dáº«n chuyá»‡n)
```
A 13-year-old Vietnamese girl with short black hair and small
ribbon, friendly round face with big bright smile, wearing simple
modern school Ă¡o, hands clasped together cheerfully, pastel pink
background, Studio Ghibli style, children's book illustration,
no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/characters/mint-happy.jpg`

### đŸ†• CHAR-Heo Heo-celebrate (Heo Heo Äƒn má»«ng)
```
A round cute Vietnamese-style clay pig (to heo dat) with pink
cheeks, big toothy grin, eyes closed in delight, both trotters
raised up celebrating, small confetti stars around, pastel sky
background, Studio Ghibli style, children's book illustration,
no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/characters/heo-heo-celebrate.jpg`

---

### đŸ†• ILL-06: Bá»m Ä‘i lĂ m ruá»™ng vá» (dĂ¹ng cho scene b2)
```
A 12-year-old Vietnamese boy farmer walking through golden rice
paddy at sunset, carrying a hoe over his shoulder, sweat on
forehead but happy smile, conical hat on back, Studio Ghibli
style, children's book illustration, warm sunset colors,
no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/illustrations/bom-lam-ruong.jpg`

### đŸ†• ILL-07: Bá»m cáº§m há»£p Ä‘á»“ng ngĂ¢y thÆ¡ (cho scene b7-trap)
```
A 12-year-old Vietnamese boy farmer smiling innocently while
holding out a Vietnamese scroll contract toward viewer,
completely unaware, golden sparkles around implying false promise,
Studio Ghibli style, children's book illustration, warm pastel
colors, no readable text in image, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/illustrations/bom-vay-vang.jpg`

### đŸ†• ILL-08: Bá»m vui + báº¡n bĂ¨ + Heo Heo + Mint (bĂ i há»c)
```
A 12-year-old Vietnamese boy farmer standing proudly in center,
surrounded by happy village friends, Mint the girl, and Heo Heo
the clay pig, all holding hands in circle, golden rice paddy
behind, Studio Ghibli group portrait, children's book
illustration, vibrant warm colors, no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/illustrations/bom-vui-nhom.jpg`

---

### đŸ†• ILL-09: Bá»m há»i choĂ¡y PhĂº Ă”ng Ä‘á»• má»“ hĂ´i (b7-smart)
```
A 12-year-old Vietnamese boy farmer pointing confidently at a
contract scroll while asking, opposite a flustered wealthy
merchant in red Ă¡o dĂ i wiping sweat from forehead, two
characters sharp contrast, Studio Ghibli style, children's
book illustration, no text, 1:1 aspect ratio
```
â†’ LÆ°u: `public/images/thang-bom/illustrations/bom-hoi-phuong.jpg`

---

## đŸ”— PROMPT RIĂNG CHO LEONARDO.AI

> âœ… **ÄĂ£ tĂ¡ch riĂªng sang file má»›i:** `prompts-thang-bom-leonardo.md`
>
> File nĂ y chá»©a:
> - 6 batch prompt Ä‘Ă£ tá»‘i Æ°u keyword cho Leonardo.ai
> - HÆ°á»›ng dáº«n 3 cĂ¡ch tĂ¡ch ná»n (transparent PNG) cho sprite
> - Checklist Ä‘áº§y Ä‘á»§ 30 áº£nh cáº§n generate
> - Máº¹o "Consistent Character" Ä‘á»ƒ giá»¯ 5 mood Bá»m/PhĂº Ă”ng giá»‘ng nhau
>
> File `prompts-thang-bom.md` (file nĂ y) chá»‰ chá»©a prompt cho **Google Gemini** (Imagen 3 / Gemini 2.0 Flash).
>
> DĂ¹ng song song 2 file cho 2 engine khĂ¡c nhau.



---

## 🎭 FILE BỔ SUNG: MULTI-POSE ANIMATION

Phần prompt cho multi-pose animation đã được tách riêng sang file mới để tránh lỗi encoding.

Xem chi tiết tại: **`prompts-thang-bom-pose.md`**
