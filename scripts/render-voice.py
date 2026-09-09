"""Render 23 câu thoại truyện Thằng Bờm bằng VieNeu-TTS (offline, Apache 2.0).

User chốt: **toàn bộ dùng giọng nu-luu-loat**, clone từ clip mẫu đã xin phép.
Không chia vai — một giọng đọc hết cả lời kể lẫn lời thoại.

VOICE để trống nhưng giữ lại: muốn tách vai sau thì điền character -> tên giọng preset
(20 giọng dựng sẵn trong vieneu/assets/voices_v3_turbo.json).

Chạy:  render-bom.py [id...]   (không truyền id thì làm hết)
"""
from __future__ import annotations

import json
import re
import sys
import time
import wave
from pathlib import Path

from vieneu import Vieneu

SCRATCH = Path(__file__).parent
LINES = SCRATCH / "debt-ch1.json"
OUT = Path(r"D:\Đồ Án\demo\public\audio\thang-bom")
REF = Path(r"D:\Talk\openmontage-control\samples\voices\REF-nu-luu-loat.wav")

NARRATOR = "nu-luu-loat"
VOICE = {}  # trống = mọi vai dùng NARRATOR (nu-luu-loat)

# Bỏ emoji và khung trang trí — máy đọc sẽ phát âm chúng thành tiếng lạ.
EMOJI = re.compile(
    "[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF\u2728\u2B50\uFE0F]+"
)


def clean(t: str) -> str:
    t = EMOJI.sub(" ", t)
    t = t.replace("—", ",").replace("…", "...")
    t = re.sub(r"\s+", " ", t).strip()
    return t


def dur(p: Path) -> float:
    with wave.open(str(p)) as w:
        return w.getnframes() / w.getframerate()


def main(only: set[str]) -> int:
    lines = json.loads(LINES.read_text(encoding="utf-8"))
    if only:
        lines = [l for l in lines if l["id"] in only]
    OUT.mkdir(parents=True, exist_ok=True)

    t0 = time.time()
    v = Vieneu()
    v.add_voice(NARRATOR, str(REF))
    print(f"nạp model + đăng ký giọng: {time.time() - t0:.1f}s\n")

    print(f"{'id':<18}{'vai':<12}{'ký tự':>6}{'giây':>7}{'render':>8}")
    manifest, fails, total = {}, [], 0.0

    for l in lines:
        voice = VOICE.get(l["character"], NARRATOR) if l["type"] != "narrator" else NARRATOR
        text = clean(l["text"])
        dst = OUT / f"{l['id']}.wav"

        t = time.time()
        try:
            audio = v.infer(text=text, voice=voice, temperature=0.8)
            v.save(audio, str(dst))
        except Exception as exc:
            print(f"{l['id']:<18}{voice:<12}{len(text):>6}{'—':>7}  LỖI {type(exc).__name__}: {exc}")
            fails.append(l["id"])
            # Cùng lỗi hai lần là hỏng có hệ thống, dừng thay vì đốt thời gian.
            if len(fails) >= 2:
                print(f"\nDừng: {len(fails)} câu lỗi liên tiếp.")
                return 1
            continue

        sec = dur(dst)
        total += sec
        manifest[l["id"]] = {"src": f"/audio/thang-bom/{dst.name}", "sec": round(sec, 2), "voice": voice}
        print(f"{l['id']:<18}{voice:<12}{len(text):>6}{sec:>7.2f}{time.time() - t:>7.0f}s")

    (OUT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n{len(manifest)}/{len(lines)} câu · tổng {total:.1f} giây ({total / 60:.1f} phút) "
          f"· mất {time.time() - t0:.0f}s")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(set(sys.argv[1:])))
