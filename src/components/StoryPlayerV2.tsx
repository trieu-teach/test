import React, { useState, useEffect, useCallback, useMemo } from "react";
import { CharacterAnimator } from "./CharacterAnimator";
import "../styles/story-player-v2.css";
import {
  STORY_TREE,
  START_NODE,
  StoryNode,
  Choice,
  getBackgroundFor,
} from "../story/storyTree";
import {
  GameState,
  ChoiceLog,
  Achievement,
  createInitialState,
  applyChoice,
  saveState,
  loadState,
  clearState,
  undoLastChoice,
  checkAchievements,
  ACHIEVEMENTS,
} from "../story/gameState";

interface StoryPlayerV2Props {
  onEnding?: (endingId: string) => void;
}

export function StoryPlayerV2({ onEnding }: StoryPlayerV2Props) {
  // Load state from localStorage on mount
  const [state, setState] = useState<GameState>(() => {
    return loadState() ?? createInitialState();
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() =>
    checkAchievements(state)
  );

  const currentNode: StoryNode | undefined = STORY_TREE[state.currentNodeId];

  // Save state whenever it changes
  useEffect(() => {
    saveState(state);
    setAchievements(checkAchievements(state));
  }, [state]);

  // Notify when ending reached
  useEffect(() => {
    if (currentNode?.isEnding && onEnding) {
      onEnding(currentNode.id);
    }
  }, [currentNode, onEnding]);

  // Auto-scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.currentNodeId]);

  const handleChoice = useCallback((choice: Choice) => {
    setState((prev) => applyChoice(prev, choice));
  }, []);

  const handleUndo = useCallback(() => {
    setState((prev) => undoLastChoice(prev));
  }, []);

  const handleRestart = useCallback(() => {
    if (
      confirm("Bạn có chắc muốn chơi lại từ đầu? Tiến trình hiện tại sẽ mất.")
    ) {
      clearState();
      setState(createInitialState());
    }
  }, []);

  const visibleChoices = useMemo(() => {
    if (!currentNode) return [];
    return currentNode.choices.filter((c) => {
      if (c.condition?.karma !== undefined) {
        return state.karma >= c.condition.karma;
      }
      return true;
    });
  }, [currentNode, state.karma]);

  const isEnding = currentNode?.isEnding ?? false;

  if (!currentNode) {
    return (
      <div className="story-error">
        <p>Lỗi: Không tìm thấy node "{state.currentNodeId}"</p>
      </div>
    );
  }

  return (
    <div className={`story-player-v2 ${isEnding ? "is-ending" : ""}`}>
      {/* ===== HUD ===== */}
      <div className="story-hud">
        <span className="scene-counter">
          📖 Scene {currentNode.scene} / 12
          {isEnding && " • 🏁 ENDING"}
        </span>

        <span
          className={`karma-meter ${getKarmaClass(state.karma)}`}
          title="Karma — điểm thiện ác"
        >
          {state.karma >= 0 ? "✨" : "💀"} Karma: {state.karma}
        </span>

        <span className="visit-counter">
          🗺️ {state.visitedNodes.size}/
          {Object.keys(STORY_TREE).length} node
        </span>
      </div>

      {/* ===== Title ===== */}
      <h2 className="story-title">{currentNode.title}</h2>

            {/* ===== Scene ===== */}
      <div className="story-scene">
        <div
          className="background-layer"
          style={{
            backgroundImage: `url(${getBackgroundFor(currentNode)})`,
          }}
        />
        <div className="character-stage">
          {/* Chỉ overlay CharacterAnimator khi:
              1. characterInBackground = false (explicit, dùng BG trống cần overlay)
              2. speaker = "bom" hoặc "phuong" (có thoại) */}
          {currentNode.characterInBackground !== false && currentNode.speaker === "bom" && (
            <CharacterAnimator
              character="bom"
              scene={currentNode.emotion}
              size={300}
            />
          )}
          {currentNode.characterInBackground !== false && currentNode.speaker === "phuong" && (
            <CharacterAnimator
              character="phuong"
              scene={currentNode.emotion}
              size={300}
            />
          )}
          {currentNode.speaker === "narrator" && (
            <div className="narrator-icon">📜</div>
          )}
        </div>

        <div className="story-text">
          <div className="speaker-label">
            {getSpeakerLabel(currentNode.speaker)}
          </div>
          <p className="narration">{currentNode.text}</p>
        </div>
      </div>

      {/* ===== Ending ===== */}
      {isEnding && (
        <div className={`ending-summary ending-${currentNode.endingType}`}>
          <h3>{currentNode.endingTitle}</h3>
          <p>{currentNode.endingSummary}</p>
        </div>
      )}

      {/* ===== Choices ===== */}
      <div className="choices-container">
        {visibleChoices.map((choice, idx) => (
          <button
            key={choice.id}
            className="choice-button"
            onClick={() => handleChoice(choice)}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {choice.emoji && (
              <span className="choice-emoji">{choice.emoji}</span>
            )}
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

      {/* ===== Footer controls ===== */}
      <div className="story-footer">
        <button
          className="footer-button undo"
          onClick={handleUndo}
          disabled={state.choices.length === 0}
          title="Quay lại lựa chọn trước"
        >
          ↶ Quay lại
        </button>

        <button
          className="footer-button restart"
          onClick={handleRestart}
          title="Chơi lại từ đầu"
        >
          🔄 Chơi lại
        </button>

        <div className="achievements-count">
          🏆 {achievements.filter((a) => a.unlocked).length}/
          {achievements.length}
        </div>
      </div>

      {/* ===== Recent choices trail ===== */}
      {state.choices.length > 0 && (
        <div className="choice-trail">
          <small>
            <strong>Hành trình:</strong>{" "}
            {state.choices
              .slice(-5)
              .map((c) => c.label.substring(0, 30) + "...")
              .join(" → ")}
          </small>
        </div>
      )}

      {/* ===== Achievement toast (newly unlocked) ===== */}
      <AchievementToast achievements={achievements} />
    </div>
  );
}

function getSpeakerLabel(speaker: StoryNode["speaker"]): string {
  switch (speaker) {
    case "bom":
      return "👦 Bờm:";
    case "phuong":
      return "🎩 Phú ông:";
    case "narrator":
      return "📖 Người kể chuyện:";
  }
}

function getKarmaClass(karma: number): string {
  if (karma >= 5) return "good";
  if (karma <= -3) return "bad";
  return "neutral";
}

/** Toast thông báo khi unlock achievement */
function AchievementToast({
  achievements,
}: {
  achievements: Achievement[];
}) {
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(
    null
  );
  const [seenIds] = useState(() => new Set<string>());

  useEffect(() => {
    const newOne = achievements.find(
      (a) => a.unlocked && !seenIds.has(a.id)
    );
    if (newOne) {
      seenIds.add(newOne.id);
      setShowAchievement(newOne);
      const timer = setTimeout(() => setShowAchievement(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [achievements, seenIds]);

  if (!showAchievement) return null;

  return (
    <div className="achievement-toast">
      <span className="achievement-emoji">{showAchievement.emoji}</span>
      <div>
        <strong>🏆 Achievement mở khóa!</strong>
        <div>{showAchievement.title}</div>
        <small>{showAchievement.description}</small>
      </div>
    </div>
  );
}