import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function ProgressBar({ value, max = 100, className, showLabel = true, color = 'primary' }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  const colorMap = {
    primary: 'bg-gradient-to-r from-finteen-coral to-finteen-purple',
    gold: 'bg-gradient-to-r from-finteen-gold to-orange-500',
    mint: 'bg-gradient-to-r from-finteen-mint to-emerald-400',
    sky: 'bg-gradient-to-r from-finteen-sky to-blue-500',
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-muted shadow-inner">
        <motion.div
          className={cn('h-full rounded-full', colorMap[color])}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-white/30 animate-shine"
               style={{ backgroundSize: '200% auto' }}/>
        </motion.div>
      </div>
      {showLabel && (
        <div className="mt-1 text-xs font-semibold text-muted-foreground flex justify-between">
          <span>{value}/{max}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  )
}
