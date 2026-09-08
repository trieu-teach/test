import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  BookOpen,
  Library,
  PiggyBank,
  ShoppingBag,
  User,
  Trophy,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/', icon: Home, label: 'Trang chủ' },
  { path: '/packages', icon: BookOpen, label: 'Gói học' },
  { path: '/my-packages', icon: Library, label: 'Gói của tôi' },
  { path: '/piggy', icon: PiggyBank, label: 'Heo đất' },
  { path: '/shop', icon: ShoppingBag, label: 'Cửa hàng' },
  { path: '/profile', icon: User, label: 'Hồ sơ' },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 p-4 z-40">
        <div className="glass-card rounded-3xl p-4 flex flex-col h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 p-3 mb-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="text-4xl"
            >
              🐷
            </motion.div>
            <div>
              <h1 className="text-xl font-display font-black gradient-text">
                FinTeen
              </h1>
              <p className="text-xs text-muted-foreground">
                Học tài chính cùng mình!
              </p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path))

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all relative',
                      isActive
                        ? 'bg-gradient-to-r from-finteen-coral to-finteen-purple text-white shadow-lg'
                        : 'text-foreground hover:bg-white/50'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute right-2 w-1.5 h-6 bg-white rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* Footer info */}
          <div className="mt-4 p-4 bg-gradient-to-br from-finteen-gold to-orange-400 rounded-2xl text-white">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-5 w-5" />
              <span className="font-bold">Hôm nay</span>
            </div>
            <p className="text-xs opacity-90">
              Bạn đã học được 5 phút! Tiếp tục nào! 🚀
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t-2 border-pink-100 shadow-2xl">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive =
              location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path))

            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1 flex-1"
              >
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={cn(
                    'p-2 rounded-2xl transition-all',
                    isActive
                      ? 'bg-gradient-to-br from-finteen-coral to-finteen-purple text-white shadow-lg'
                      : 'text-muted-foreground'
                  )}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <span
                  className={cn(
                    'text-[10px] font-bold',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
