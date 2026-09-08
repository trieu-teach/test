#!/usr/bin/env python3
"""
Tạo sprite sheet gộp nhiều frame thành 1 ảnh lớn để dùng trong game/web
"""
from pathlib import Path
from PIL import Image

CHAR_DIR = Path("./public/images/thang-bom/characters/frames")
OUT_DIR = Path("./public/images/thang-bom/characters/spritesheets")
FRAME_SIZE = 512  # resize mỗi frame xuống cho vừa sprite
COLS = 6

def make_spritesheet(name: str, frame_paths: list[Path]):
    """Ghép frame thành 1 ảnh lớn"""
    if not frame_paths:
        print(f"Khong co frame nao cho {name}")
        return
    
    rows = (len(frame_paths) + COLS - 1) // COLS
    sheet_w = COLS * FRAME_SIZE
    sheet_h = rows * FRAME_SIZE
    
    sheet = Image.new("RGBA", (sheet_w, sheet_h), (0, 0, 0, 0))
    
    for i, fp in enumerate(frame_paths):
        img = Image.open(fp).convert("RGBA")
        img = img.resize((FRAME_SIZE, FRAME_SIZE), Image.LANCZOS)
        col = i % COLS
        row = i // COLS
        sheet.paste(img, (col * FRAME_SIZE, row * FRAME_SIZE), img)
    
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"{name}-spritesheet.png"
    sheet.save(out_path, "PNG")
    
    # Tạo JSON metadata
    meta = {
        "name": name,
        "frame_size": FRAME_SIZE,
        "cols": COLS,
        "rows": rows,
        "total_frames": len(frame_paths),
        "frames": [
            {
                "index": i,
                "filename": fp.name,
                "x": (i % COLS) * FRAME_SIZE,
                "y": (i // COLS) * FRAME_SIZE,
            }
            for i, fp in enumerate(frame_paths)
        ],
    }
    
    meta_path = OUT_DIR / f"{name}-spritesheet.json"
    meta_path.write_text(
        __import__("json").dumps(meta, indent=2, ensure_ascii=False)
    )
    
    print(f"OK: {out_path.name} ({len(frame_paths)} frames)")

def main():
    bom_frames = sorted(CHAR_DIR.glob("bom-*.png"))
    phuong_frames = sorted(CHAR_DIR.glob("phuong-*.png"))
    
    make_spritesheet("bom", bom_frames)
    make_spritesheet("phuong", phuong_frames)

if __name__ == "__main__":
    main()
