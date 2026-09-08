import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'
import { HomePage } from '@/pages/HomePage'
import { PackagesPage } from '@/pages/PackagesPage'
import { MyPackagesPage } from '@/pages/MyPackagesPage'
import { ChapterPage } from '@/pages/ChapterPage'
import { QuizPage } from '@/pages/QuizPage'
import { PiggyPage } from '@/pages/PiggyPage'
import { ShopPage } from '@/pages/ShopPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { VisualNovelDemoPage, VisualNovelPlayPage } from '@/pages/VisualNovelDemoPage'
import { PackagePlayPage } from '@/pages/PackagePlayPage'

function AnimatedRoutes() {
  const location = useLocation()
  const isQuiz = location.pathname.startsWith('/chapter/') &&
    location.pathname.split('/').length > 3

  // Route chơi VN hiển thị fullscreen, không có sidebar/topbar
  const isVNPlaying = location.pathname.startsWith('/vn-play')

  if (isVNPlaying) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location}>
            <Route path="/vn-play" element={<VisualNovelPlayPage />} />
            <Route path="/vn-play/:packageId" element={<PackagePlayPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <>
      <Sidebar />
      <div className="lg:ml-64 min-h-screen">
        {!isQuiz && <TopBar />}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/my-packages" element={<MyPackagesPage />} />
              <Route path="/chapter/:packageId" element={<ChapterPage />} />
              <Route path="/chapter/:packageId/:chapterId" element={<QuizPage />} />
              <Route path="/piggy" element={<PiggyPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/vn-demo" element={<VisualNovelDemoPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
