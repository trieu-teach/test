import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bell, Settings } from 'lucide-react'
import { useGameStore } from '@/stores/gameStore'
import { CoinDisplay, CupDisplay } from '@/components/game/CurrencyDisplay'

export function TopBar({ title, subtitle }) {
  const user = useGameStore((s) => s.user)
  const coins = useGameStore((s) => s.coins)
  const cups = useGameStore((s) => s.cups)

  return (
    <div className="sticky top-0 z-30 backdrop-blur-lg bg-white/60 border-b border-white/50">
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Title */}
        <div>
          {title && (
            <h1 className="text-xl lg:text-2xl font-display font-black gradient-text">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xs lg:text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Currency (hide on small mobile if too many) */}
          <div className="hidden sm:flex items-center gap-2">
            <CoinDisplay amount={coins} size="sm" />
            <CupDisplay amount={cups} size="sm" />
          </div>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2 rounded-full bg-white shadow-md"
          >
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-finteen-coral rounded-full border-2 border-white" />
          </motion.button>

          {/* Avatar */}
          <Link to="/profile">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-finteen-coral via-finteen-purple to-finteen-sky flex items-center justify-center text-white text-xl shadow-lg border-2 border-white">
                {user.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-finteen-gold text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                {user.level}
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
