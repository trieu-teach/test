import { motion } from 'framer-motion'
import { Coins, TrendingUp, Target, Award, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { PiggyBank as PiggyBankComp } from '@/components/game/PiggyBank'
import { CoinDisplay, CupDisplay } from '@/components/game/CurrencyDisplay'
import { useGameStore } from '@/stores/gameStore'
import { formatNumber } from '@/lib/utils'

export function PiggyPage() {
  const coins = useGameStore((s) => s.coins)
  const addCoins = useGameStore((s) => s.addCoins)
  const stats = useGameStore((s) => s.quizStats)

  const goals = [
    { id: 1, title: 'Mua sách mới', target: 100000, icon: '📚', color: 'mint' },
    { id: 2, title: 'Đi xem phim với bạn', target: 200000, icon: '🎬', color: 'sky' },
    { id: 3, title: 'Quà sinh nhật mẹ', target: 500000, icon: '🎁', color: 'coral' },
  ]

  return (
    <div className="min-h-screen pb-24 lg:pb-8 px-4 lg:px-8 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-3xl lg:text-4xl font-display font-black mb-2">
          Heo đất của mình 🐷
        </h1>
        <p className="text-muted-foreground">
          Mỗi đồng xu đều là một bước tới ước mơ của bạn!
        </p>
      </motion.div>

      {/* Main Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 border-2 border-white/60 mb-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-30">
            <span className="text-7xl animate-bounce-slow">🪙</span>
          </div>
          <CardContent className="p-8 text-center relative">
            <Badge variant="purple" className="mb-3">
              <Sparkles className="h-3 w-3" /> Tổng tiết kiệm
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-display font-black gradient-text mb-2">
              {formatNumber(coins)}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">xu đã tích lũy</p>

            <div className="flex justify-center my-6">
              <PiggyBankComp coins={coins} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <CoinDisplay amount={coins} size="lg" />
              <CupDisplay amount={2} size="lg" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick add */}
      <div className="mb-6">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Coins className="h-5 w-5 text-finteen-gold" />
          Thêm xu vào heo đất
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {[10, 20, 50, 100].map((amount) => (
            <motion.button
              key={amount}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addCoins(amount)}
              className="p-3 rounded-2xl bg-gradient-to-br from-finteen-gold/20 to-orange-100 border-2 border-finteen-gold/40 hover:border-finteen-gold transition-all"
            >
              <div className="text-lg font-bold text-finteen-gold">+{amount}</div>
              <div className="text-xs text-muted-foreground">xu</div>
            </motion.button>
          ))}
        </div>
        <p className="text-xs text-center text-muted-foreground mt-2 italic">
          💡 Trong game, xu sẽ tự động cộng khi bạn trả lời đúng!
        </p>
      </div>

      {/* Goals */}
      <div className="mb-6">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-finteen-coral" />
          Mục tiêu tiết kiệm
        </h3>
        <div className="space-y-3">
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              whileHover={{ x: 4 }}
            >
              <Card className="border-2 border-white/60">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{goal.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold">{goal.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        Mục tiêu: {formatNumber(goal.target)} xu
                      </p>
                    </div>
                  </div>
                  <ProgressBar
                    value={Math.min(coins, goal.target)}
                    max={goal.target}
                    showLabel={true}
                    color={goal.color}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Award className="h-5 w-5 text-finteen-purple" />
          Thành tích
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: '🎯', title: 'Chuẩn xác', unlocked: stats.masteryLevel > 0.5 },
            { icon: '⚡', title: 'Tốc độ', unlocked: true },
            { icon: '💎', title: 'Chuyên gia', unlocked: stats.masteryLevel > 0.8 },
            { icon: '🔥', title: 'Streak 7', unlocked: true },
            { icon: '🌟', title: 'Siêu sao', unlocked: false },
            { icon: '👑', title: 'Vua tiết kiệm', unlocked: false },
          ].map((ach, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className={`p-4 rounded-2xl border-2 text-center ${
                ach.unlocked
                  ? 'bg-gradient-to-br from-finteen-gold/20 to-orange-100 border-finteen-gold/60'
                  : 'bg-gray-100 border-gray-200 opacity-50'
              }`}
            >
              <div className="text-3xl mb-1">{ach.icon}</div>
              <div className="text-xs font-bold">{ach.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
