/**
 * Story state machine — quản lý:
 *  - Lưu/tải progress vào localStorage
 *  - Tính achievement dựa trên choices
 *  - Tracking visited nodes (để hiển thị map)
 *  - Undo choice (cho phép backtrack)
 */

import {
  STORY_TREE,
  START_NODE,
  StoryNode,
  Choice,
} from "./storyTree";

export interface GameState {
  currentNodeId: string;
  history: string[];           // list of node ids visited in order
  choices: ChoiceLog[];        // all choices made
  karma: number;
  visitedNodes: Set<string>;   // all nodes ever visited
  unlockedEndings: Set<string>;
  startedAt: number;
  lastSavedAt: number;
}

export interface ChoiceLog {
  nodeId: string;
  choiceId: string;
  label: string;
  timestamp: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  unlocked: boolean;
  unlockedAt?: number;
}

const STORAGE_KEY = "bom-story-state-v1";
const ACHIEVEMENTS_KEY = "bom-story-achievements-v1";

/** Initial state */
export function createInitialState(): GameState {
  return {
    currentNodeId: START_NODE,
    history: [START_NODE],
    choices: [],
    karma: 0,
    visitedNodes: new Set([START_NODE]),
    unlockedEndings: new Set(),
    startedAt: Date.now(),
    lastSavedAt: Date.now(),
  };
}

/** Save to localStorage */
export function saveState(state: GameState): void {
  try {
    const serializable = {
      ...state,
      visitedNodes: Array.from(state.visitedNodes),
      unlockedEndings: Array.from(state.unlockedEndings),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {
    console.warn("Cannot save state:", e);
  }
}

/** Load from localStorage */
export function loadState(): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      ...parsed,
      visitedNodes: new Set(parsed.visitedNodes ?? []),
      unlockedEndings: new Set(parsed.unlockedEndings ?? []),
    };
  } catch (e) {
    console.warn("Cannot load state:", e);
    return null;
  }
}

/** Clear state */
export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(ACHIEVEMENTS_KEY);
}

/** Apply choice to state (immutable) */
export function applyChoice(
  state: GameState,
  choice: Choice
): GameState {
  const nextNode = STORY_TREE[choice.nextNodeId];
  const newKarma = state.karma + (choice.karmaDelta ?? 0);
  const newEndings = new Set(state.unlockedEndings);
  const newVisited = new Set(state.visitedNodes);
  newVisited.add(choice.nextNodeId);

  if (nextNode?.isEnding) {
    newEndings.add(choice.nextNodeId);
  }
  if (choice.unlocksEnding) {
    newEndings.add(choice.unlocksEnding);
  }

  return {
    ...state,
    currentNodeId: choice.nextNodeId,
    history: [...state.history, choice.nextNodeId],
    choices: [
      ...state.choices,
      {
        nodeId: state.currentNodeId,
        choiceId: choice.id,
        label: choice.label,
        timestamp: Date.now(),
      },
    ],
    karma: newKarma,
    visitedNodes: newVisited,
    unlockedEndings: newEndings,
    lastSavedAt: Date.now(),
  };
}

/** Undo last choice (backtrack) */
export function undoLastChoice(
  state: GameState
): GameState {
  if (state.choices.length === 0) return state;
  const lastChoice = state.choices[state.choices.length - 1];
  const previousNodeId = lastChoice.nodeId;

  // Re-compute karma by subtracting the last choice's karma delta
  const previousNode = STORY_TREE[lastChoice.nodeId];
  const lastChoiceObj = previousNode?.choices.find(
    (c) => c.id === lastChoice.choiceId
  );
  const karmaRestored =
    state.karma - (lastChoiceObj?.karmaDelta ?? 0);

  return {
    ...state,
    currentNodeId: previousNodeId,
    history: state.history.slice(0, -1),
    choices: state.choices.slice(0, -1),
    karma: karmaRestored,
    lastSavedAt: Date.now(),
  };
}

/** Achievement definitions */
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-step",
    title: "Bước đầu tiên",
    description: "Bắt đầu câu chuyện Bờm",
    emoji: "🌱",
    unlocked: false,
  },
  {
    id: "kind-soul",
    title: "Tâm hồn nhân hậu",
    description: "Đạt karma +5",
    emoji: "✨",
    unlocked: false,
  },
  {
    id: "dark-path",
    title: "Con đường tối",
    description: "Đạt karma -5",
    emoji: "💀",
    unlocked: false,
  },
  {
    id: "completionist",
    title: "Người hoàn thiện",
    description: "Thăm 50% tổng số node",
    emoji: "🗺️",
    unlocked: false,
  },
  {
    id: "all-endings",
    title: "Bậc thầy câu chuyện",
    description: "Mở khóa tất cả các ending",
    emoji: "🏆",
    unlocked: false,
  },
  {
    id: "no-undo",
    title: "Quyết đoán",
    description: "Hoàn thành câu chuyện không dùng undo",
    emoji: "⚡",
    unlocked: false,
  },
  {
    id: "smart-trader",
    title: "Người buôn khôn",
    description: "Đi nhánh bargain với Phú ông",
    emoji: "💼",
    unlocked: false,
  },
  {
    id: "helper",
    title: "Người giúp đỡ",
    description: "Giúp bà cụ trong rừng",
    emoji: "💪",
    unlocked: false,
  },
  {
    id: "humble-wish",
    title: "Ước khiêm tốn",
    description: "Chọn quả đá trong phép thử",
    emoji: "🪨",
    unlocked: false,
  },
  {
    id: "village-rebel",
    title: "Người dấy loạn",
    description: "Gọi dân làng chống Phú ông",
    emoji: "📢",
    unlocked: false,
  },
  {
    id: "greedy-wish",
    title: "Ước tham lam",
    description: "Chọn quả vàng trong phép thử",
    emoji: "💰",
    unlocked: false,
  },
];

/** Check and update achievements */
export function checkAchievements(state: GameState): Achievement[] {
  const totalNodes = Object.keys(STORY_TREE).length;
  const visitedRatio = state.visitedNodes.size / totalNodes;
  const endingsCount = state.unlockedEndings.size;
  const totalEndings = Object.values(STORY_TREE).filter(
    (n) => n.isEnding
  ).length;

  const stored = loadAchievements();
  const updated = ACHIEVEMENTS.map((a) => {
    let unlocked = stored.find((s) => s.id === a.id)?.unlocked ?? false;
    let unlockedAt =
      stored.find((s) => s.id === a.id)?.unlockedAt;

    // Check each achievement
    if (!unlocked) {
      switch (a.id) {
        case "first-step":
          if (state.history.length > 1) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "kind-soul":
          if (state.karma >= 5) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "dark-path":
          if (state.karma <= -5) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "completionist":
          if (visitedRatio >= 0.5) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "all-endings":
          if (endingsCount >= totalEndings) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "no-undo":
          // Will check elsewhere — based on tracking
          break;
        case "smart-trader":
          if (
            state.choices.some((c) => c.choiceId === "bp-agree")
          ) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "helper":
          if (
            state.choices.some((c) => c.choiceId === "fe-help")
          ) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "humble-wish":
          if (
            state.choices.some((c) => c.choiceId === "fwt-stone")
          ) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "village-rebel":
          if (
            state.choices.some((c) => c.choiceId === "village-help")
          ) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
        case "greedy-wish":
          if (
            state.choices.some((c) => c.choiceId === "fwt-gold")
          ) {
            unlocked = true;
            unlockedAt = Date.now();
          }
          break;
      }
    }

    return { ...a, unlocked, unlockedAt };
  });

  saveAchievements(updated);
  return updated;
}

function loadAchievements(): Achievement[] {
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
    return raw ? JSON.parse(raw) : ACHIEVEMENTS;
  } catch {
    return ACHIEVEMENTS;
  }
}

function saveAchievements(achievements: Achievement[]): void {
  try {
    localStorage.setItem(
      ACHIEVEMENTS_KEY,
      JSON.stringify(achievements)
    );
  } catch (e) {
    console.warn("Cannot save achievements:", e);
  }
}

/** Helper: Get all paths to ending (for debug / map view) */
export function getStoryMap(): {
  nodes: { id: string; title: string; isEnding: boolean }[];
  edges: { from: string; to: string; label: string }[];
} {
  const nodes = Object.values(STORY_TREE).map((n) => ({
    id: n.id,
    title: n.title,
    isEnding: !!n.isEnding,
  }));

  const edges: { from: string; to: string; label: string }[] = [];
  for (const node of Object.values(STORY_TREE)) {
    for (const choice of node.choices) {
      edges.push({
        from: node.id,
        to: choice.nextNodeId,
        label: choice.label,
      });
    }
  }

  return { nodes, edges };
}

/** Hint for current node (which ending path leads to) */
export function getEndingHint(node: StoryNode): string | null {
  if (node.isEnding) return node.endingTitle ?? null;
  // Follow first choice to see path
  if (node.choices.length === 0) return null;
  const firstPath = STORY_TREE[node.choices[0].nextNodeId];
  return getEndingHint(firstPath);
}