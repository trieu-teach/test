import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Play, BookOpen, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import VisualNovelPlayer from '@/components/VisualNovelPlayer'
import { demoChapter } from '@/data/demoChapter'

export function VisualNovelDemoPage() {
  const navigate = useNavigate()

  const startGame = () => {
    navigate('/vn-play')
  }

  return (
    <div className="min-h-screen pb-24 lg:pb-8 bg-gradient-to-br from-finteen-cream via-pink-50 to-purple-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-8 lg:p-12 rounded-b-[3rem] lg:rounded-3xl lg:m-4">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-10 right-10 text-9xl"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🎮
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-10 text-7xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Badge variant="gold" className="mb-3 text-sm">
            🎬 NEW - Thử nghiệm
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-display font-black mb-4 drop-shadow-lg">
            Visual Novel Mode
          </h1>
          <p className="text-lg lg:text-xl opacity-95 mb-6">
            Trải nghiệm câu chuyện cổ tích như một game RPG!<br/>
            Nhân vật hoạt hình, lời thoại typewriter, lựa chọn rẽ nhánh.
          </p>
          <Button
            onClick={startGame}
            size="lg"
            className="bg-white text-purple-600 hover:bg-yellow-100 font-black text-xl px-12 py-6 shadow-2xl hover:scale-105 transition"
          >
            <Play className="h-7 w-7 mr-2" fill="currentColor" />
            Bắt đầu chơi
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 lg:px-8 mt-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-display font-bold mb-6 text-center">
          🎨 Tính năng Visual Novel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            icon="🎭"
            title="Nhân vật SVG"
            desc="Mỗi nhân vật có 5+ biểu cảm: vui, buồn, tò mò, ngạc nhiên, suy tư..."
          />
          <FeatureCard
            icon="🌄"
            title="Phong cảnh"
            desc="6 backgrounds đa dạng: làng quê, tiệm kẹo, vườn thần, ngân hàng, nhà, cây cổ thụ"
          />
          <FeatureCard
            icon="💬"
            title="Typewriter Effect"
            desc="Chữ hiện ra từng ký tự một, tạo cảm giác đọc truyện thật sự"
          />
          <FeatureCard
            icon="🔀"
            title="Branching Story"
            desc="Lựa chọn của bạn thay đổi câu chuyện - mỗi lần chơi là một trải nghiệm khác"
          />
          <FeatureCard
            icon="🎬"
            title="Cinematic UI"
            desc="Black bars trên dưới, vignette effect, screen transitions mượt mà"
          />
          <FeatureCard
            icon="🎓"
            title="Bài học tích hợp"
            desc="Mỗi chapter kết thúc bằng lesson card tổng kết kiến thức"
          />
        </div>
      </div>

      {/* Demo characters */}
      <div className="px-4 lg:px-8 mt-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-display font-bold mb-6 text-center">
          👥 Nhân vật trong demo
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <CharacterPreview name="Mint" emoji="🧒" desc="Nhân vật chính - tò mò, dũng cảm" />
          <CharacterPreview name="Heo Heo" emoji="🐷" desc="Bạn đồng hành - khôn ngoan" />
          <CharacterPreview name="Cú Khôn Ngoan" emoji="🦉" desc="Thầy giáo tài chính" />
        </div>
      </div>

      {/* How to play */}
      <div className="px-4 lg:px-8 mt-8 max-w-3xl mx-auto">
        <Card className="bg-gradient-to-br from-finteen-sunny/20 to-finteen-coral/20 border-2 border-white/60">
          <CardContent className="p-6">
            <h3 className="font-display font-bold text-xl mb-3 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Cách chơi
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-finteen-coral">▸</span>
                <span><b>Click chuột</b> để chuyển cảnh / skip typewriter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-finteen-coral">▸</span>
                <span><b>Đọc lời thoại</b> của các nhân vật</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-finteen-coral">▸</span>
                <span><b>Chọn phương án</b> khi có choice - quyết định của bạn thay đổi câu chuyện</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-finteen-coral">▸</span>
                <span><b>Nút Pause</b> ở góc trên nếu cần dừng</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="h-full bg-white/80 backdrop-blur-sm border-2 border-white/60">
        <CardContent className="p-5">
          <div className="text-4xl mb-2">{icon}</div>
          <h3 className="font-display font-bold text-base mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function CharacterPreview({ name, emoji, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="text-center"
    >
      <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/60">
        <CardContent className="p-4">
          <div className="text-6xl mb-2">{emoji}</div>
          <h4 className="font-display font-bold">{name}</h4>
          <p className="text-xs text-muted-foreground mt-1">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Fullscreen Visual Novel Play Page - KHÔNG có sidebar/topbar
export function VisualNovelPlayPage() {
  const navigate = useNavigate()

  const handleComplete = () => {
    // Quay về trang demo
    navigate('/vn-demo')
  }

  const handleExit = () => {
    if (window.confirm('Bạn có chắc muốn thoát? Tiến trình chưa lưu sẽ bị mất.')) {
      navigate('/vn-demo')
    }
  }

  return (
    <VisualNovelPlayer
      chapter={demoChapter}
      onComplete={handleComplete}
      onExit={handleExit}
    />
  )
}
