import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Trophy, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { PACKAGES } from '@/data/content'
import { useGameStore } from '@/stores/gameStore'
import { cn } from '@/lib/utils'

export function MyPackagesPage() {
  const unlockedPackages = useGameStore((s) => s.unlockedPackages)
  const completedChapters = useGameStore((s) => s.completedChapters)

  // Lọc các gói đang học (đã unlock) và có progress
  const myPackages = PACKAGES.filter((p) => unlockedPackages.includes(p.id))

  // Tính stats
  const totalChapters = myPackages.reduce((sum, p) => sum + p.chapters, 0)
  const completedCount = myPackages
    .filter((p) => unlockedPackages.includes(p.id))
    .reduce((sum, p) => {
      return sum + (completedChapters.filter((c) => c.startsWith(p.id)).length || 0)
    }, 0)
  const cupsCollected = myPackages.filter((p) => p.cupCollected).length

  if (myPackages.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="min-h-screen pb-24 lg:pb-8 px-4 lg:px-8 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl lg:text-4xl font-display font-black">
            Gói học của tôi 📖
          </h1>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="h-7 w-7 text-finteen-gold" />
          </motion.div>
        </div>
        <p className="text-muted-foreground">
          Những gói bạn đang học - tiếp tục nào! 🚀
        </p>
      </motion.div>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 grid grid-cols-3 gap-3"
      >
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-display font-black text-primary">
            {myPackages.length}
          </div>
          <div className="text-xs text-muted-foreground">Gói đang học</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-display font-black text-finteen-mint">
            {completedCount}/{totalChapters}
          </div>
          <div className="text-xs text-muted-foreground">Chương hoàn thành</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-display font-black text-finteen-gold">
            {cupsCollected} 🏆
          </div>
          <div className="text-xs text-muted-foreground">Cup đã nhận</div>
        </div>
      </motion.div>

      {/* Active Package - tiếp tục học */}
      {myPackages.filter((p) => p.completed > 0 && !p.cupCollected).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Đang học dở
          </h2>
          <ContinueLearningBanner />
        </motion.div>
      )}

      {/* My Packages Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-finteen-gold" />
          Tất cả gói của tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {myPackages.map((pkg, i) => (
            <MyPackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function ContinueLearningBanner() {
  const unlockedPackages = useGameStore((s) => s.unlockedPackages)
  const myPackages = PACKAGES.filter((p) => unlockedPackages.includes(p.id))
  const continuePkg = myPackages.find((p) => p.completed > 0 && !p.cupCollected)

  if (!continuePkg) return null

  const progress = (continuePkg.completed / continuePkg.chapters) * 100

  return (
    <Link to={`/chapter/${continuePkg.id}`}>
      <Card className="overflow-hidden border-2 border-white/60 hover:shadow-2xl transition-all cursor-pointer">
        <div className={cn('h-2 bg-gradient-to-r', continuePkg.color)} />
        <CardContent className="p-5 flex items-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl"
          >
            {continuePkg.icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-lg mb-1">
              {continuePkg.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {continuePkg.completed}/{continuePkg.chapters} chương • {Math.round(progress)}%
            </p>
            <ProgressBar
              value={continuePkg.completed}
              max={continuePkg.chapters}
              showLabel={false}
              color="primary"
            />
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 text-primary font-bold"
          >
            Tiếp <ArrowRight className="h-5 w-5" />
          </motion.div>
        </CardContent>
      </Card>
    </Link>
  )
}

function MyPackageCard({ pkg, index }) {
  const completedChapters = useGameStore((s) => s.completedChapters)
  const myCompleted = completedChapters.filter((c) => c.startsWith(pkg.id)).length
  const progress = (pkg.completed / pkg.chapters) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <Card className="overflow-hidden border-2 border-white/60 relative">
        {/* Header with gradient */}
        <div
          className={cn(
            'h-32 bg-gradient-to-br relative overflow-hidden flex items-center justify-center',
            pkg.color
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl relative z-10"
          >
            {pkg.icon}
          </motion.div>
          {pkg.cupCollected && (
            <div className="absolute top-3 right-3 z-20">
              <Badge variant="gold" className="!shadow-lg">
                <Trophy className="h-3 w-3 fill-white" />
                Cup
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-5">
          <h3 className="font-display font-bold text-lg mb-1">{pkg.title}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 min-h-[40px]">
            {pkg.description}
          </p>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-bold">
                {pkg.completed}/{pkg.chapters} chương
              </span>
              <span className="font-bold text-primary">{Math.round(progress)}%</span>
            </div>
            <ProgressBar
              value={pkg.completed}
              max={pkg.chapters}
              showLabel={false}
              color={pkg.cupCollected ? 'gold' : 'primary'}
            />
          </div>

          {/* Action */}
          <Link to={`/chapter/${pkg.id}`} className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'w-full py-3 rounded-xl font-bold text-white shadow-lg transition-all',
                pkg.cupCollected
                  ? 'bg-gradient-to-r from-finteen-gold to-orange-500 btn-shine'
                  : `bg-gradient-to-r ${pkg.color}`
              )}
            >
              {pkg.cupCollected
                ? '✓ Xem lại'
                : pkg.completed > 0
                ? 'Tiếp tục học →'
                : 'Bắt đầu học →'}
            </motion.button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function EmptyState() {
  return (
    <div className="min-h-screen pb-24 lg:pb-8 px-4 lg:px-8 py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-8xl mb-4"
        >
          📚
        </motion.div>
        <h2 className="text-2xl font-display font-black mb-2">
          Chưa có gói học nào
        </h2>
        <p className="text-muted-foreground mb-6">
          Hãy khám phá các gói học tập và bắt đầu hành trình tài chính của bạn!
        </p>
        <Link to="/packages">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-finteen-coral to-finteen-purple text-white font-bold rounded-2xl shadow-lg"
          >
            Khám phá gói học →
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
