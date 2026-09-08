import { motion } from 'framer-motion'
import { useState } from 'react'
import { Coins, Sparkles } from 'lucide-react'

export function CoinDisplay({ amount, label = 'Xu của bạn', size = 'md' }) {
  const sizeMap = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-xl px-6 py-3',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-2 ${sizeMap[size]} bg-gradient-to-r from-finteen-gold to-orange-400 text-white rounded-full font-bold shadow-lg border-2 border-yellow-300/50`}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <Coins className={size === 'lg' ? 'h-6 w-6' : size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
      </motion.div>
      <span>{amount.toLocaleString('vi-VN')}</span>
      {size === 'lg' && <Sparkles className="h-4 w-4" />}
    </motion.div>
  )
}

export function CupDisplay({ amount, size = 'md' }) {
  const sizeMap = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-xl px-6 py-3',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-2 ${sizeMap[size]} bg-gradient-to-r from-finteen-coral to-pink-500 text-white rounded-full font-bold shadow-lg border-2 border-white/50`}
    >
      <span className={size === 'lg' ? 'text-2xl' : 'text-lg'}>🏆</span>
      <span>{amount} Cup</span>
    </motion.div>
  )
}
