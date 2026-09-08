import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useGameStore } from '@/stores/gameStore'
import { formatNumber } from '@/lib/utils'

export function PiggyBank({ coins, onOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const addCoins = useGameStore((s) => s.addCoins)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="relative cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-pink-300/30 blur-2xl rounded-full" />

      {/* Piggy body */}
      <motion.div
        animate={isOpen ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-40 mx-auto"
      >
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <defs>
            <radialGradient id="pigGrad" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#FFB3D1"/>
              <stop offset="100%" stopColor="#FF6B9D"/>
            </radialGradient>
          </defs>
          {/* Body */}
          <ellipse cx="100" cy="100" rx="80" ry="55" fill="url(#pigGrad)" stroke="#C2185B" strokeWidth="3"/>
          {/* Snout */}
          <ellipse cx="155" cy="100" rx="20" ry="18" fill="#FFB3D1" stroke="#C2185B" strokeWidth="3"/>
          <circle cx="151" cy="95" r="3" fill="#C2185B"/>
          <circle cx="159" cy="95" r="3" fill="#C2185B"/>
          <circle cx="151" cy="105" r="3" fill="#C2185B"/>
          <circle cx="159" cy="105" r="3" fill="#C2185B"/>
          {/* Ear */}
          <path d="M75 55 Q85 35 95 50 Z" fill="#FF6B9D" stroke="#C2185B" strokeWidth="3"/>
          {/* Eye */}
          <circle cx="125" cy="80" r="4" fill="#C2185B"/>
          <circle cx="126" cy="79" r="1.5" fill="white"/>
          {/* Slot */}
          <rect x="95" y="55" width="30" height="4" rx="2" fill="#C2185B"/>
          {/* Legs */}
          <rect x="40" y="148" width="15" height="12" fill="#FF6B9D" stroke="#C2185B" strokeWidth="2" rx="3"/>
          <rect x="60" y="148" width="15" height="12" fill="#FF6B9D" stroke="#C2185B" strokeWidth="2" rx="3"/>
          <rect x="125" y="148" width="15" height="12" fill="#FF6B9D" stroke="#C2185B" strokeWidth="2" rx="3"/>
          <rect x="145" y="148" width="15" height="12" fill="#FF6B9D" stroke="#C2185B" strokeWidth="2" rx="3"/>
          {/* Tail */}
          <path d="M25 100 Q15 95 18 105 Q22 110 25 105" stroke="#C2185B" strokeWidth="3" fill="#FF6B9D"/>
        </svg>

        {/* Coin slot animation when open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-pink-300"
            >
              <span className="text-pink-600 font-bold">
                💰 {formatNumber(coins)} xu
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating coins */}
      <div className="absolute top-0 -right-4">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl"
        >
          🪙
        </motion.div>
      </div>
    </motion.div>
  )
}
