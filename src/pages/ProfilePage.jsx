import { motion } from 'framer-motion'
import { Settings, LogOut, Edit3, Flame, Star, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { CoinDisplay, CupDisplay } from '@/components/game/CurrencyDisplay'
import { useGameStore } from '@/stores/gameStore'

export function ProfilePage() {
  const user = useGameStore((s) => s.user)
  const coins = useGameStore((s) => s.coins)
  const cups = useGameStore((s) => s.cups)
  const stats = useGameStore((s) => s.quizStats)

  const xpToNext = 200 - (user.xp % 200)
  const xpProgress = (user.xp % 200)

  const accuracy = stats.totalQuizzes > 0
    ? Math.round((stats.correctAnswers / stats.totalQuizzes) * 100)
    : 0

  return (
    <div className="min-h-screen pb-24 lg:pb-8 px-4 lg:px-8 py-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-finteen-coral via-finteen-purple to-finteen-sky text-white border-2 border-white/60 overflow-hidden relative mb-6">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 text-7xl animate-bounce-slow">✨</div>
            <div className="absolute bottom-2 left-2 text-5xl animate-bounce-slow" style={{ animationDelay: '1s' }}>🌟</div>
          </div>

          <CardContent className="p-8 relative">
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative mb-4"
              >
                <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-7xl border-4 border-white shadow-2xl">
                  {user.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-finteen-gold text-white text-base font-bold rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-lg">
                  {user.level}
                </div>
              </motion.div>

              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-display font-black">
                  {user.name}
                </h1>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 rounded-full bg-white/20"
                >
                  <Edit3 className="h-4 w-4" />
                </motion.button>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Đại gia tương lai 🌟
              </p>

              {/* Balance */}
              <div className="flex gap-3 mb-4">
                <CoinDisplay amount={coins} size="md" />
                <CupDisplay amount={cups} size="md" />
              </div>

              {/* Streak */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Flame className="h-4 w-4 text-orange-300" />
                <span className="font-bold">{user.streak} ngày liên tiếp</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* XP Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Card className="border-2 border-white/60">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold flex items-center gap-2">
                <Star className="h-5 w-5 text-finteen-gold" />
                Cấp {user.level} → {user.level + 1}
              </h3>
              <span className="text-sm font-bold text-primary">
                {user.xp} XP
              </span>
            </div>
            <ProgressBar value={xpProgress} max={200} color="gold" />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Còn {xpToNext} XP nữa để lên cấp!
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h3 className="font-display font-bold mb-3 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-finteen-coral" />
          Thống kê học tập
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon="🎯"
            label="Độ chính xác"
            value={`${accuracy}%`}
            color="from-finteen-mint to-emerald-400"
          />
          <StatCard
            icon="📝"
            label="Tổng bài làm"
            value={stats.totalQuizzes}
            color="from-finteen-sky to-blue-500"
          />
          <StatCard
            icon="📈"
            label="Mức độ thành thạo"
            value={`${Math.round(stats.masteryLevel * 100)}%`}
            color="from-finteen-purple to-violet-500"
          />
          <StatCard
            icon="🧠"
            label="Sai số TB"
            value={stats.avgEstimateError.toFixed(2)}
            color="from-finteen-gold to-orange-500"
          />
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <Card className="border-2 border-white/60">
          <CardContent className="p-5">
            <h3 className="font-display font-bold mb-3">Huy hiệu của bạn</h3>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: '🎯', label: 'First Quiz' },
                { icon: '🏆', label: 'First Cup' },
                { icon: '🔥', label: 'Streak 7' },
                { icon: '💎', label: 'Expert' },
                { icon: '🌟', label: 'Star' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-finteen-gold to-orange-400 flex items-center justify-center text-2xl shadow-lg">
                    {badge.icon}
                  </div>
                  <span className="text-[10px] font-bold text-center">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" size="lg" className="gap-2">
          <Settings className="h-4 w-4" /> Cài đặt
        </Button>
        <Button variant="outline" size="lg" className="gap-2 hover:!bg-red-50 hover:!text-red-500 hover:!border-red-300">
          <LogOut className="h-4 w-4" /> Đăng xuất
        </Button>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, color }) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Card className="border-2 border-white/60">
        <CardContent className="p-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-xl shadow-md mb-2`}>
            {icon}
          </div>
          <p className="text-2xl font-display font-black">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
