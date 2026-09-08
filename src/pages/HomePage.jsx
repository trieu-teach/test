import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Flame, Star, BookOpen, ArrowRight } from 'lucide-react'
import { useGameStore } from '@/stores/gameStore'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { CoinDisplay, CupDisplay } from '@/components/game/CurrencyDisplay'
import { PiggyBank } from '@/components/game/PiggyBank'

export function HomePage() {
  const user = useGameStore((s) => s.user)
  const coins = useGameStore((s) => s.coins)
  const cups = useGameStore((s) => s.cups)
  const stats = useGameStore((s) => s.quizStats)

  const accuracy = stats.totalQuizzes > 0
    ? Math.round((stats.correctAnswers / stats.totalQuizzes) * 100)
    : 0

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-b-[3rem] lg:rounded-3xl lg:m-4 lg:mb-6 bg-gradient-to-br from-finteen-coral via-finteen-purple to-finteen-sky text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/20 rounded-full blur-xl" />
        </div>

        <div className="relative px-6 lg:px-10 py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-finteen-gold" />
              <span className="text-sm font-bold text-finteen-gold uppercase tracking-wider">
                Xin chào, {user.name}!
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-display font-black leading-tight mb-3">
              Hôm nay bạn sẽ học<br />
              <span className="text-finteen-gold">điều gì hay ho?</span> ✨
            </h1>
            <p className="text-base lg:text-lg opacity-95 max-w-md">
              Mỗi câu chuyện cổ tích sẽ dạy bạn một bài học tài chính thú vị!
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Flame className="h-4 w-4 text-orange-300" />
              <span className="text-sm font-bold">{user.streak} ngày liên tiếp</span>
            </div>
            <CoinDisplay amount={coins} size="sm" className="!shadow-md" />
            <CupDisplay amount={cups} size="sm" className="!shadow-md" />
          </motion.div>
        </div>
      </section>

      {/* Continue Learning Card */}
      <section className="px-4 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-finteen-mint/30 to-finteen-sky/30 border-2 border-white/60">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl animate-bounce-slow">📖</div>
                  <h2 className="text-lg font-display font-bold">Tiếp tục học</h2>
                </div>
                <span className="text-xs font-bold text-muted-foreground">
                  Đang học dở
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Câu chuyện: Phú ông và Thằng Bờm
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chương 2: Phú ông cho Bờm vay tiền với lãi... không tưởng tượng nổi!
              </p>

              <ProgressBar value={45} max={100} color="mint" showLabel={false} />

              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground">45% hoàn thành</span>
                <Link to="/packages">
                  <Button size="sm" className="gap-2">
                    Học tiếp <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Piggy Bank Hero */}
      <section className="px-4 lg:px-8 mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-pink-50 to-orange-50 border-2 border-white/60">
            <CardContent className="p-6 flex flex-col lg:flex-row items-center gap-4">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-display font-black mb-2">
                  Heo đất của bạn
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Số xu bạn đã tiết kiệm được. Mỗi đồng xu là một bước tới ước mơ!
                </p>
                <Link to="/piggy">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Star className="h-4 w-4" />
                    Mở heo đất
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <PiggyBank coins={coins} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Quick Stats Grid */}
      <section className="px-4 lg:px-8 mt-6">
        <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
          <Star className="h-5 w-5 text-finteen-gold" />
          Thành tích của bạn
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <QuickStatCard
            icon="🎯"
            label="Độ chính xác"
            value={`${accuracy}%`}
            color="from-finteen-mint to-emerald-400"
          />
          <QuickStatCard
            icon="📝"
            label="Bài đã làm"
            value={stats.totalQuizzes}
            color="from-finteen-sky to-blue-500"
          />
          <QuickStatCard
            icon="🏆"
            label="Cup có"
            value={cups}
            color="from-finteen-gold to-orange-500"
          />
          <QuickStatCard
            icon="📈"
            label="Mastery"
            value={`${Math.round(stats.masteryLevel * 100)}%`}
            color="from-finteen-purple to-violet-500"
          />
        </div>
      </section>

      {/* Story Cards */}
      <section className="px-4 lg:px-8 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-bold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-finteen-coral" />
            Câu chuyện nổi bật
          </h2>
          <Link to="/packages" className="text-sm font-bold text-primary">
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StoryPreviewCard
            color="from-pink-400 to-rose-500"
            icon="🐷"
            title="Tấm và Heo Đất"
            description="Học cách tiết kiệm từ Tấm"
            tag="Mới"
          />
          <StoryPreviewCard
            color="from-amber-400 to-orange-500"
            icon="💎"
            title="Aladdin & Phép Màu Lãi Kép"
            description="Cây đèn thần có gì đặc biệt?"
            tag="Hot"
          />
          <StoryPreviewCard
            color="from-violet-400 to-purple-500"
            icon="📈"
            title="Anh Khoai và Lạm Phát"
            description="100k hôm qua và hôm nay..."
            tag="Sắp ra"
          />
        </div>
      </section>
    </div>
  )
}

function QuickStatCard({ icon, label, value, color }) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Card className="border-2 border-white/60">
        <CardContent className="p-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-md mb-3`}
          >
            {icon}
          </div>
          <p className="text-2xl font-display font-black">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function StoryPreviewCard({ color, icon, title, description, tag }) {
  return (
    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
      <Card className="overflow-hidden border-2 border-white/60">
        <div
          className={`h-32 bg-gradient-to-br ${color} relative flex items-center justify-center text-6xl`}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
          <span className="relative animate-bounce-slow">{icon}</span>
          <span className="absolute top-2 right-2 px-2 py-1 bg-white/90 text-xs font-bold rounded-full">
            {tag}
          </span>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-base mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
