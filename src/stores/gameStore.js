import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useGameStore = create(
  persist(
    (set, get) => ({
      // User state
      user: {
        name: 'Bạn nhỏ',
        avatar: '🦊',
        level: 5,
        xp: 450,
        streak: 7,
      },

      // Currency
      coins: 2450,
      cups: 2,

      // Progress
      completedChapters: ['compound-1', 'compound-2'],
      currentChapter: 'savings-1',
      unlockedPackages: ['savings', 'interest', 'debt', 'inflation'],

      // Stats
      quizStats: {
        totalQuizzes: 18,
        correctAnswers: 64,
        avgEstimateError: 0.32,
        masteryLevel: 0.68,
      },

      // Inventory
      ownedItems: ['avatar-fox-default', 'theme-mint'],

      // Actions
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      removeCoins: (amount) =>
        set((state) => ({ coins: Math.max(0, state.coins - amount) })),

      addCup: () => set((state) => ({ cups: state.cups + 1 })),
      addXP: (amount) =>
        set((state) => {
          const newXP = state.user.xp + amount
          const newLevel = Math.floor(newXP / 200) + 1
          return {
            user: {
              ...state.user,
              xp: newXP,
              level: newLevel,
            },
          }
        }),

      completeChapter: (chapterId) =>
        set((state) => ({
          completedChapters: [...new Set([...state.completedChapters, chapterId])],
        })),

      purchaseItem: (itemId, cost) => {
        const state = get()
        if (state.cups >= (cost.cups || 0) && state.coins >= (cost.coins || 0)) {
          set({
            cups: state.cups - (cost.cups || 0),
            coins: state.coins - (cost.coins || 0),
            ownedItems: [...state.ownedItems, itemId],
          })
          return true
        }
        return false
      },

      recordQuizResult: (correct, total, errorRatio) =>
        set((state) => {
          const stats = state.quizStats
          const newTotal = stats.totalQuizzes + 1
          const newCorrect = stats.correctAnswers + (correct ? 1 : 0)
          // Use log scale for error ratio
          const logError = Math.log10(1 + errorRatio)
          const newAvgError =
            (stats.avgEstimateError * stats.totalQuizzes + logError) / newTotal
          return {
            quizStats: {
              totalQuizzes: newTotal,
              correctAnswers: newCorrect,
              avgEstimateError: newAvgError,
              masteryLevel: Math.min(1, stats.masteryLevel + (correct ? 0.02 : 0.005)),
            },
          }
        }),

      resetProgress: () =>
        set({
          coins: 0,
          cups: 0,
          completedChapters: [],
          quizStats: {
            totalQuizzes: 0,
            correctAnswers: 0,
            avgEstimateError: 0,
            masteryLevel: 0,
          },
        }),
    }),
    {
      name: 'finteen-game-storage',
    }
  )
)
