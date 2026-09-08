import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  STORY_TREE,
  START_NODE,
  StoryNode,
  Choice,
} from "../story/storyTree";
import { CharacterAnimator } from "./CharacterAnimator";

interface StoryState {
  currentNodeId: string;
  history: string[];
  karma: number;
  unlockedEndings: Set<string>;
}

interface StoryPlayerProps {
  initialNodeId?: string;
  onEnding?: (endingId: string) => void;
}

/**
 * StoryPlayer — Engine chính chạy câu chuyện phân nhánh
 *
 * Flow:
 *   1. Hiển thị node hiện tại + animation của nhân vật
 *   2. Hiển thị choices
 *   3. Khi user click choice → chuyển node + cập nhật state
 *   4. Nếu là ending → trigger callback
 */
export function StoryPlayer({
  initialNodeId = START_NODE,
  onEnding,
}: StoryPlayerProps) {
  const [state, setState] = useState<StoryState>({
    currentNodeId: initialNodeId,
    history: [initialNodeId],
    karma: 0,
    unlockedEndings: new Set(),
  });

  const currentNode: StoryNode | undefined = STORY_TREE[state.currentNodeId];

  /** Tính visible choices dựa trên condition (karma, etc) */
  const visibleChoices = useMemo(() => {
    if (!currentNode) return [];
    return currentNode.choices.filter((c) => {
      if (c.condition?.karma !== undefined) {
        return state.karma >= c.condition.karma;
      }
      return true;
    });
  }, [currentNode, state.karma]);

  const handleChoice = useCallback(
    (choice: Choice) => {
      setState((prev) => {
        const next: StoryState = {
          currentNodeId: choice.nextNodeId,
          history: [...prev.history, choice.nextNodeId],
          karma: prev.karma + (choice.karmaDelta ?? 0),
          unlockedEndings: new Set(prev.unlockedEndings),
        };

        // Track ending
        const nextNode = STORY_TREE[choice.nextNodeId];
        if (nextNode?.isEnding) {
          next.unlockedEndings.add(choice.nextNodeId);
          if (choice.unlocksEnding) {
            next.unlockedEndings.add(choice.unlocksEnding);
          }
        }

        return next;
      });
    },
    []
  );

  // Notify parent khi ending
  useEffect(() => {
    if (currentNode?.isEnding && onEnding) {
      onEnding(currentNode.id);
    }
  }, [currentNode, onEnding]);

  // Auto-scroll to top khi node mới
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.currentNodeId]);

  if (!currentNode) {
    return (
      <div className="story-error">
        <p>Lỗi: Không tìm thấy node "{state.currentNodeId}"</p>
      </div>
    );
  }

  const isEnding = currentNode.isEnding;
  const isBomSpeaker = currentNode.speaker === "bom";
  const isPhuongSpeaker = currentNode.speaker === "phuong";

  return (
    <div className={`story-player ${isEnding ? "is-ending" : ""}`}>
      {/* HUD: scene number + karma */}
      <div className="story-hud">
        <span className="scene-counter">
          📖 Scene {currentNode.scene}
          {isEnding && " • 🏁 ENDING"}
        </span>
        <span
          className={`karma-meter ${state.karma >= 5 ? "good" : state.karma <= -3 ? "bad" : ""}`}
          title="Karma điểm"
        >
          {state.karma >= 0 ? "✨" : "💀"} {state.karma}
        </span>
      </div>

      {/* Title + speaker */}
      <h2 className="story-title">{currentNode.title}</h2>

      {/* Character animation + text */}
      <div className="story-scene">
        <div className="character-stage">
          {isBomSpeaker && (
            <CharacterAnimator
              character="bom"
              scene={currentNode.emotion}
              size={280}
            />
          )}
          {isPhuongSpeaker && (
            <CharacterAnimator
              character="phuong"
              scene={currentNode.emotion}
              size={280}
            />
          )}
          {!isBomSpeaker && !isPhuongSpeaker && (
            <div className="narrator-icon">📜</div>
          )}
        </div>

        <div className="story-text">
          {/* Hiển thị tên người nói */}
          <div className="speaker-label">
            {currentNode.speaker === "bom" && "👦 Bờm:"}
            {currentNode.speaker === "phuong" && "🎩 Phú ông:"}
            {currentNode.speaker === "narrator" && "📖 Người kể chuyện:"}
          </div>
          <p className="narration">{currentNode.text}</p>
        </div>
      </div>

      {/* Ending summary */}
      {isEnding && (
        <div className={`ending-summary ending-${currentNode.endingType}`}>
          <h3>{currentNode.endingTitle}</h3>
          <p>{currentNode.endingSummary}</p>
        </div>
      )}

      {/* Choices */}
      <div className="choices-container">
        {visibleChoices.map((choice, idx) => (
          <button
            key={choice.id}
            className="choice-button"
            onClick={() => handleChoice(choice)}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {choice.emoji && <span className="choice-emoji">{choice.emoji}</span>}
            <span className="choice-label">{choice.label}</span>
            {choice.karmaDelta !== undefined && choice.karmaDelta !== 0 && (
              <span
                className={`karma-badge ${choice.karmaDelta > 0 ? "pos" : "neg"}`}
              >
                {choice.karmaDelta > 0 ? "+" : ""}
                {choice.karmaDelta}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* History indicator */}
      {state.history.length > 1 && (
        <div className="history-tracker">
          <small>
            🛤️ Đã đi qua {state.history.length - 1} quyết định
            {state.unlockedEndings.size > 0 &&
              ` • 🏁 Mở khóa ${state.unlockedEndings.size} ending`}
          </small>
        </div>
      )}
    </div>
  );
}

/**
 * StoryWithIntro — wrapper có intro + restart
 */
export function StoryWithIntro() {
  const [started, setStarted] = useState(false);
  const [seenEndings, setSeenEndings] = useState<string[]>([]);
  const [resetKey, setResetKey] = useState(0);

  const handleEnding = (endingId: string) => {
    setSeenEndings((prev) =>
      prev.includes(endingId) ? prev : [...prev, endingId]
    );
  };

  if (!started) {
    return (
      <div className="story-intro">
        <h1>🌾 Truyện: Thằng Bờm</h1>
        <p className="tagline">
          Câu chuyện cổ tích — Nhưng lần này, <strong>BẠN</strong> là người quyết định.
        </p>
        <ul className="feature-list">
          <li>🌳 30+ scene với nhiều nhánh rẽ</li>
          <li>🎯 12+ quyết định ảnh hưởng kết quả</li>
          <li>🏁 8 kết thúc khác nhau</li>
          <li>✨ Hệ thống karma — quyết định tốt/xấu</li>
          <li>🎬 Nhân vật chuyển động theo cảm xúc</li>
        </ul>
        <button className="start-button" onClick={() => setStarted(true)}>
          ▶️ Bắt đầu câu chuyện
        </button>
      </div>
    );
  }

  return (
    <div className="story-wrapper" key={resetKey}>
      <StoryPlayer key={resetKey} onEnding={handleEnding} />

      {seenEndings.length > 0 && (
        <div className="ending-tracker">
          <h4>🏁 Kết thúc đã xem: {seenEndings.length}/8+</h4>
          <div className="ending-badges">
            {seenEndings.map((id) => (
              <span key={id} className="ending-badge">
                {STORY_TREE[id]?.endingTitle ?? id}
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        className="restart-button"
        onClick={() => {
          setResetKey((k) => k + 1);
        }}
      >
        🔄 Chơi lại từ đầu
      </button>
    </div>
  );
}