import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, Check, Users, Star, BookOpen, Play } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { PACKAGES } from '@/data/content'
import { useGameStore } from '@/stores/gameStore'
import { cn } from '@/lib/utils'

export function PackagesPage() {
  const unlockedPackages = useGameStore((s) => s.unlockedPackages)

  return (
    <div className="min-h-screen pb-24 lg:pb-8 px-4 lg:px-8 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex items-start justify-between gap-4 flex-wrap"
      >
        <div>
          <h1 className="text-3xl lg:text-4xl font-display font-black mb-2">
            Tất cả Gói học tập 📚
          </h1>
          <p className="text-muted-foreground">
            Khám phá tất cả các gói - chọn gói yêu thích để bắt đầu!
          </p>
        </div>
        <Link to="/my-packages">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 bg-gradient-to-r from-finteen-mint to-emerald-400 text-white font-bold rounded-2xl shadow-lg flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Gói của tôi →
          </motion.button>
        </Link>
      </motion.div>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 grid grid-cols-3 gap-3"
      >
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-display font-black text-primary">2</div>
          <div className="text-xs text-muted-foreground">Cup đã có</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-display font-black text-finteen-gold">
            {PACKAGES.filter((p) => p.cupCollected).length}/6
          </div>
          <div className="text-xs text-muted-foreground">Gói hoàn thành</div>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <div className="text-2xl font-display font-black text-finteen-mint">
            68%
          </div>
          <div className="text-xs text-muted-foreground">Tiến độ</div>
        </div>
      </motion.div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {PACKAGES.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>
    </div>
  )
}

function PackageCard({ pkg, index }) {
  const unlockedPackages = useGameStore((s) => s.unlockedPackages)
  const isUnlocked = unlockedPackages.includes(pkg.id)
  const progress = (pkg.completed / pkg.chapters) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <Card
        className={cn(
          'overflow-hidden border-2 border-white/60 relative',
          pkg.locked && 'opacity-60 grayscale'
        )}
      >
        {/* Header with gradient */}
        <div
          className={cn(
            'h-36 bg-gradient-to-br relative overflow-hidden flex items-center justify-center',
            pkg.color
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-7xl relative z-10"
          >
            {pkg.icon}
          </motion.div>

          {/* "Đã học" badge cho gói unlock */}
          {isUnlocked && !pkg.cupCollected && (
            <div className="absolute top-3 left-3 z-20">
              <Badge variant="mint" className="!shadow-lg">
                ✓ Đã học
              </Badge>
            </div>
          )}

          {/* Cup badge */}
          {pkg.cupCollected && (
            <div className="absolute top-3 right-3 z-20">
              <Badge variant="gold" className="!shadow-lg animate-bounce-slow">
                <Star className="h-3 w-3 fill-white" />
                Cup
              </Badge>
            </div>
          )}

          {/* Lock */}
          {pkg.locked && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
              <div className="text-center">
                <Lock className="h-8 w-8 text-white mx-auto mb-1" />
                <p className="text-xs text-white font-bold">Sắp mở</p>
              </div>
            </div>
          )}
        </div>

        <CardContent className="p-5">
          <h3 className="font-display font-bold text-lg mb-1">{pkg.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
            {pkg.description}
          </p>

          {/* Story hint */}
          <div className="bg-finteen-cream rounded-xl p-3 mb-4 text-xs italic">
            <span className="font-bold not-italic">📖 </span>
            {pkg.storyHint}
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-bold">
                {pkg.completed}/{pkg.chapters} chương
              </span>
              <span className="font-bold text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <ProgressBar
              value={pkg.completed}
              max={pkg.chapters}
              showLabel={false}
              color={pkg.cupCollected ? 'gold' : 'primary'}
            />
          </div>

          {/* Characters */}
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div className="flex gap-1">
              {pkg.characters.map((char) => (
                <Badge key={char} variant="outline" className="!text-xs">
                  {char}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action */}
          <PackageActionButton pkg={pkg} />
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Nút hành động gói học - click để mở thẳng game VN
function PackageActionButton({ pkg }) {
  const navigate = useNavigate()

  if (pkg.locked) {
    return (
      <button
        disabled
        className="w-full py-3 rounded-xl font-bold text-white bg-gray-400 cursor-not-allowed shadow-lg"
      >
        🔒 Chưa mở
      </button>
    )
  }

  const label = pkg.cupCollected
    ? '✓ Xem lại'
    : pkg.completed > 0
    ? 'Tiếp tục học →'
    : '🎮 Tìm hiểu ngay'

  return (
    <div className="flex gap-2">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate(`/vn-play/${pkg.id}`)}
        className={cn(
          'flex-1 py-3 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2',
          pkg.cupCollected
            ? 'bg-gradient-to-r from-finteen-gold to-orange-500 btn-shine'
            : `bg-gradient-to-r ${pkg.color}`
        )}
      >
        <Play className="h-4 w-4" fill="currentColor" />
        <span>{label}</span>
      </motion.button>
      <Link to={`/chapter/${pkg.id}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-full px-3 rounded-xl font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-finteen-coral shadow-sm"
          title="Xem danh sách chương"
        >
          <BookOpen className="h-5 w-5" />
        </motion.button>
      </Link>
    </div>
  )
}
