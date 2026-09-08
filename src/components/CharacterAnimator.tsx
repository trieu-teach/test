import React, { useState, useEffect, useRef } from "react";

interface CharacterAnimatorProps {
  character: "bom" | "phuong";
  scene?:
    | "idle"
    | "walk"
    | "talk"
    | "laugh"
    | "sad"
    | "angry"
    | "scheme"
    | "celebrate"
    | "fall";
  size?: number;
  fps?: number;
  loop?: boolean;
  className?: string;
}

/**
 * Bộ frame được map theo scene.
 * Mỗi scene = 1 list tên file PNG nằm trong /images/thang-bom/frames/bom/
 * (PNG transparent - dùng cho animation frame-by-frame)
 */
const SCENE_FRAMES: Record<string, { bom: string[]; phuong: string[] }> = {
  idle: {
    bom: ["bom-idle-breath-01.png", "bom-idle-breath-02.png"],
    // Phú ông fallback về ảnh JPG đã có sẵn
    phuong: ["phuong-neutral.jpg"],
  },
  walk: {
    // Chỉ có 1 frame walk thật (bom-walk-03.png), dùng nó cho tất cả step
    bom: ["bom-walk-03.png", "bom-idle-breath-01.png", "bom-walk-03.png"],
    phuong: ["phuong-neutral.jpg", "phuong-smug.jpg"],
  },
  talk: {
    bom: [
      "bom-idle-breath-01.png",
      "bom-idle-breath-02.png",
      "bom-idle-breath-01.png",
    ],
    phuong: ["phuong-neutral.jpg", "phuong-smug.jpg"],
  },
  laugh: {
    bom: ["bom-idle-breath-01.png"],
    phuong: ["phuong-smug.jpg"],
  },
  sad: {
    bom: ["bom-idle-breath-02.png"],
    phuong: ["phuong-sad.jpg"],
  },
  angry: {
    bom: ["bom-idle-breath-01.png"],
    phuong: ["phuong-sad.jpg", "phuong-smug.jpg"],
  },
  scheme: {
    bom: ["bom-idle-breath-02.png"],
    phuong: ["phuong-smug.jpg", "phuong-neutral.jpg"],
  },
  celebrate: {
    bom: ["bom-idle-breath-01.png", "bom-idle-breath-02.png"],
    phuong: ["phuong-smug.jpg"],
  },
  fall: {
    bom: ["bom-idle-breath-01.png"],
    phuong: ["phuong-sad.jpg", "phuong-neutral.jpg"],
  },
};

const FRAMES_BASE = "/images/thang-bom/frames/bom";

export function CharacterAnimator({
  character,
  scene = "idle",
  size = 300,
  fps = 8,
  loop = true,
  className = "",
}: CharacterAnimatorProps) {
  const frames = SCENE_FRAMES[scene]?.[character] ?? [];
  const [frameIdx, setFrameIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setFrameIdx(0);
  }, [scene, character]);

  useEffect(() => {
    if (frames.length <= 1) return;
    const interval = 1000 / fps;
    timerRef.current = setInterval(() => {
      setFrameIdx((prev) => {
        const next = prev + 1;
        if (next >= frames.length) return loop ? 0 : prev;
        return next;
      });
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [frames, fps, loop]);

  if (frames.length === 0) return null;

  const currentFrame = frames[frameIdx];
  // Phú ông chưa có PNG frames, fallback sang JPG trong /characters/phuong/
  const basePath = character === "phuong"
    ? "/images/thang-bom/characters/phuong"
    : FRAMES_BASE;
  const src = `${basePath}/${currentFrame}`;

  return (
    <img
      src={src}
      alt={`${character} ${scene} frame ${frameIdx + 1}/${frames.length}`}
      width={size}
      height={size}
      className={`character-animator ${className}`}
      style={{
        imageRendering: "pixelated",
        objectFit: "contain",
        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
        transition: "transform 0.2s ease",
      }}
    />
  );
}

/**
 * Component narrative — chuyển scene tự động theo timeline
 */
interface NarrativeProps {
  character: "bom" | "phuong";
  timeline: { scene: string; durationMs: number }[];
  size?: number;
  onComplete?: () => void;
}

export function CharacterNarrative({
  character,
  timeline,
  size = 400,
  onComplete,
}: NarrativeProps) {
  const [sceneIdx, setSceneIdx] = useState(0);
  const currentScene = timeline[sceneIdx];

  useEffect(() => {
    if (!currentScene) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setSceneIdx((i) => Math.min(i + 1, timeline.length));
    }, currentScene.durationMs);
    return () => clearTimeout(timer);
  }, [sceneIdx, timeline, onComplete, currentScene]);

  if (!currentScene) return null;

  return (
    <div className="character-narrative">
      <CharacterAnimator
        character={character}
        scene={currentScene.scene as never}
        size={size}
        key={`${character}-${currentScene.scene}`}
      />
    </div>
  );
}

/**
 * Sample storyboard — câu chuyện Bờm 12 scene
 */
export const BOM_STORY_TIMELINE = [
  { scene: "idle", durationMs: 2000 },
  { scene: "walk", durationMs: 4000 },
  { scene: "talk", durationMs: 3000 },
  { scene: "celebrate", durationMs: 2000 },
  { scene: "walk", durationMs: 4000 },
  { scene: "laugh", durationMs: 2000 },
  { scene: "celebrate", durationMs: 2000 },
  { scene: "sad", durationMs: 3000 },
  { scene: "angry", durationMs: 2500 },
  { scene: "scheme", durationMs: 3000 },
  { scene: "celebrate", durationMs: 3000 },
  { scene: "idle", durationMs: 2000 },
];

export const PHUONG_STORY_TIMELINE = [
  { scene: "idle", durationMs: 2000 },
  { scene: "scheme", durationMs: 3500 },
  { scene: "laugh", durationMs: 2000 },
  { scene: "celebrate", durationMs: 2500 },
  { scene: "scheme", durationMs: 3000 },
  { scene: "angry", durationMs: 2500 },
  { scene: "scheme", durationMs: 3000 },
  { scene: "fall", durationMs: 2500 },
  { scene: "sad", durationMs: 3000 },
  { scene: "angry", durationMs: 2500 },
  { scene: "sad", durationMs: 3500 },
  { scene: "idle", durationMs: 2000 },
];
