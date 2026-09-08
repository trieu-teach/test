import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import VisualNovelPlayer from '@/components/VisualNovelPlayer'
import { useGameStore } from '@/stores/gameStore'
import { getFirstStoryOfPackage, getNextStoryOfPackage, PACKAGE_STORIES } from '@/data/stories'
import { PACKAGES } from '@/data/content'

// Trang chơi game VN cho 1 gói - chơi nối tiếp các story trong gói
export function PackagePlayPage() {
  const { packageId } = useParams()
  const navigate = useNavigate()
  const completedChapters = useGameStore((s) => s.completedChapters)
  const markChapterComplete = useGameStore((s) => s.markChapterComplete)

  const pkg = PACKAGES.find((p) => p.id === packageId)
  const [currentStory, setCurrentStory] = useState(() =>
    getFirstStoryOfPackage(packageId, completedChapters)
  )
  const [showCongrats, setShowCongrats] = useState(false)
  const [completedCount, setCompletedCount] = useState(0)
  const [allDone, setAllDone] = useState(false)
  // 🆕 Key để force re-mount VisualNovelPlayer khi restart (reset về scene 0)
  const [playerKey, setPlayerKey] = useState(0)

  if (!pkg || !currentStory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-white bg-gradient-to-br from-purple-900 to-pink-900">
        <p className="text-xl">Không tìm thấy truyện!</p>
        <button
          onClick={() => navigate('/packages')}
          className="px-6 py-3 bg-white text-purple-900 font-bold rounded-xl"
        >
          ← Về danh sách gói
        </button>
      </div>
    )
  }

  const totalStories = PACKAGE_STORIES[packageId]?.length || 1

  const handleComplete = () => {
    // Đánh dấu story hiện tại hoàn thành
    markChapterComplete(currentStory.id)

    // Tìm story kế tiếp
    const next = getNextStoryOfPackage(packageId, currentStory.id, [
      ...completedChapters,
      currentStory.id,
    ])

    setCompletedCount((c) => c + 1)

    if (next) {
      // Chuyển sang story kế tiếp
      setCurrentStory(next)
    } else {
      // Hết gói - hiện congrats
      setAllDone(true)
      setShowCongrats(true)
    }
  }

  const handleExit = () => {
    if (
      window.confirm('Bạn có chắc muốn thoát? Tiến trình sẽ được lưu.')
    ) {
      navigate('/packages')
    }
  }

  // 🆕 Chơi lại story hiện tại (khi bad ending → reset về scene 0, KHÔNG mark complete)
  const handleRestart = () => {
    setPlayerKey((k) => k + 1) // force re-mount VisualNovelPlayer
  }

  const handleContinueAfterCongrats = () => {
    setShowCongrats(false)
    navigate('/my-packages')
  }

  return (
    <>
      {/* Player */}
      {!showCongrats && (
        <VisualNovelPlayer
          key={playerKey}
          chapter={currentStory}
          onComplete={handleComplete}
          onExit={handleExit}
          onRestart={handleRestart}
        />
      )}

      {/* Congrats modal khi hoàn thành cả gói */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 max-w-md w-full text-white text-center shadow-2xl relative"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-7xl mb-4"
              >
                🏆
              </motion.div>
              <h2 className="text-3xl font-black mb-2">Hoàn thành gói!</h2>
              <p className="text-lg opacity-90 mb-1">
                Chúc mừng bạn đã chơi xong
              </p>
              <p className="text-xl font-bold mb-6">{pkg.title}</p>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-bold">{completedCount}/{totalStories} chương</span>
                </div>
                <div className="text-3xl">{pkg.icon}</div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/my-packages')}
                  className="flex-1 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition"
                >
                  ← Gói của tôi
                </button>
                <button
                  onClick={() => {
                    // Chơi lại từ đầu
                    setShowCongrats(false)
                    setCompletedCount(0)
                    setAllDone(false)
                    setCurrentStory(getFirstStoryOfPackage(packageId, []))
                  }}
                  className="flex-1 py-3 bg-white text-purple-600 hover:bg-yellow-100 rounded-xl font-bold transition shadow-lg"
                >
                  🔄 Chơi lại
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
