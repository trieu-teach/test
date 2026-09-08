import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Lock, Check, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { PACKAGES, CHAPTERS } from '@/data/content'
import { useGameStore } from '@/stores/gameStore'
import { getStoryByChapterId } from '@/data/stories'
import VisualNovelPlayer from '@/components/VisualNovelPlayer'
import { cn } from '@/lib/utils'

export function ChapterPage() {
  const { packageId } = useParams()
  const navigate = useNavigate()
  const completedChapters = useGameStore((s) => s.completedChapters)
  const [storyPlaying, setStoryPlaying] = useState(null)

  const pkg = PACKAGES.find((p) => p.id === packageId)
  const chapters = CHAPTERS[packageId] || []

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Không tìm thấy gói học!</p>
      </div>
    )
  }

  const completedCount = chapters.filter((c) =>
    completedChapters.includes(c.id)
  ).length

  // Visual Novel mode - mở game VN (Tìm hiểu)
  if (storyPlaying) {
    return (
      <VisualNovelPlayer
        chapter={storyPlaying}
        onComplete={() => setStoryPlaying(null)}
        onExit={() => setStoryPlaying(null)}
      />
    )
  }

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      {/* Hero */}
      <div
        className={cn(
          'rounded-b-[3rem] lg:rounded-3xl lg:m-4 lg:mb-6 p-6 lg:p-8 text-white relative overflow-hidden bg-gradient-to-br',
          pkg.color
        )}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 right-10 text-8xl animate-bounce-slow">
            {pkg.icon}
          </div>
        </div>

        <button
          onClick={() => navigate('/packages')}
          className="relative z-10 flex items-center gap-2 mb-4 text-white/90 hover:text-white font-bold"
        >
          <ArrowLeft className="h-5 w-5" /> Quay lại
        </button>

        <div className="relative z-10">
          <h1 className="text-3xl lg:text-4xl font-display font-black mb-2">
            {pkg.title}
          </h1>
          <p className="text-base opacity-95 mb-4">{pkg.description}</p>
          <div className="flex items-center gap-3">
            <Badge variant="gold">
              {completedCount}/{chapters.length} chương
            </Badge>
            {pkg.cupCollected && <Badge variant="mint">🏆 Đã có Cup</Badge>}
          </div>
        </div>
      </div>

      {/* Story Intro */}
      <div className="px-4 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-gradient-to-br from-finteen-cream to-pink-50 border-2 border-white/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📖</div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    Câu chuyện của chúng ta
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    "{pkg.storyHint}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Chapter List */}
      <div className="px-4 lg:px-8 mt-6">
        <h2 className="text-xl font-display font-bold mb-4">Danh sách chương</h2>

        <div className="space-y-3">
          {chapters.map((chapter, i) => {
            const isCompleted = completedChapters.includes(chapter.id)
            const isLocked = i > 0 && !completedChapters.includes(chapters[i - 1].id)
            const hasStory = !!getStoryByChapterId(chapter.id)

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className={cn(
                    'overflow-hidden border-2 border-white/60 transition-all',
                    isCompleted && 'ring-2 ring-finteen-mint',
                    isLocked && 'opacity-50'
                  )}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-md flex-shrink-0',
                        isCompleted
                          ? 'bg-gradient-to-br from-finteen-mint to-emerald-400 text-white'
                          : isLocked
                          ? 'bg-gray-200 text-gray-500'
                          : `bg-gradient-to-br ${pkg.color} text-white`
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-6 w-6" />
                      ) : isLocked ? (
                        <Lock className="h-5 w-5" />
                      ) : (
                        i + 1
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base">{chapter.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {chapter.story}
                      </p>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <Badge variant="outline" className="!text-xs">
                          {chapter.difficulty === 'easy' && '⭐ Dễ'}
                          {chapter.difficulty === 'medium' && '⭐⭐ Trung bình'}
                          {chapter.difficulty === 'hard' && '⭐⭐⭐ Khó'}
                        </Badge>
                        <Badge variant="gold" className="!text-xs">
                          🪙 {chapter.coin} xu
                        </Badge>
                        {chapter.isFinal && (
                          <Badge variant="purple" className="!text-xs">
                            🏆 Chương cuối
                          </Badge>
                        )}
                      </div>
                    </div>

                    {!isLocked && (
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        {hasStory && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setStoryPlaying(getStoryByChapterId(chapter.id))}
                            className="px-4 py-2.5 rounded-xl bg-gradient-to-br from-finteen-sunny to-yellow-400 hover:from-yellow-400 hover:to-finteen-sunny text-white font-bold text-sm shadow-lg flex items-center gap-1.5 whitespace-nowrap border-2 border-white/30"
                            title="Tìm hiểu - mở game visual novel"
                          >
                            <BookOpen className="h-4 w-4" />
                            <span>Tìm hiểu</span>
                          </motion.button>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(`/chapter/${packageId}/${chapter.id}`)}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-finteen-coral to-finteen-sunny flex items-center justify-center shadow-md"
                          title="Làm quiz"
                        >
                          <Play className="h-5 w-5 text-white" />
                        </motion.button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
