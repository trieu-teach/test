#!/usr/bin/env python3
"""
Script tách nền + resize hàng loạt cho frame animation Bờm & Phú ông
Yêu cầu: pip install rembg pillow onnxruntime
"""
import os
from pathlib import Path
from PIL import Image
from rembg import remove

INPUT_DIR = Path("./input_frames")
OUTPUT_DIR = Path("./public/images/thang-bom/characters/frames")
SIZE = 1024

def process_image(input_path: Path, output_path: Path):
    """Tách nền + resize về 1024x1024"""
    img = Image.open(input_path).convert("RGBA")
    
    # Tách nền
    img_no_bg = remove(img)
    
    # Crop về bounding box của nhân vật
    bbox = img_no_bg.getbbox()
    if bbox:
        # Thêm padding 5%
        w, h = img_no_bg.size
        pad_x = int((bbox[2] - bbox[0]) * 0.05)
        pad_y = int((bbox[3] - bbox[1]) * 0.05)
        bbox = (
            max(0, bbox[0] - pad_x),
            max(0, bbox[1] - pad_y),
            min(w, bbox[2] + pad_x),
            min(h, bbox[3] + pad_y),
        )
        img_cropped = img_no_bg.crop(bbox)
    
    # Resize giữ aspect ratio
    img_resized = img_cropped.resize((SIZE, SIZE), Image.LANCZOS)
    
    # Căn giữa vào canvas trong suốt
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img_resized, (0, 0), img_resized)
    
    canvas.save(output_path, "PNG")
    print(f"OK: {output_path.name}")

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    for img_path in INPUT_DIR.glob("*.png"):
        output_path = OUTPUT_DIR / img_path.name
        process_image(img_path, output_path)
    
    # Cũng xử lý jpg
    for img_path in INPUT_DIR.glob("*.jpg"):
        output_path = OUTPUT_DIR / (img_path.stem + ".png")
        process_image(img_path, output_path)

if __name__ == "__main__":
    main()
