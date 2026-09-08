import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Badge({ variant = 'default', className, children, icon: Icon }) {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    gold: 'bg-gradient-to-r from-finteen-gold to-orange-500 text-white',
    mint: 'bg-gradient-to-r from-finteen-mint to-emerald-500 text-white',
    purple: 'bg-gradient-to-r from-finteen-purple to-violet-500 text-white',
    sky: 'bg-gradient-to-r from-finteen-sky to-blue-500 text-white',
    outline: 'border-2 border-primary bg-white text-primary',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-sm',
        variants[variant],
        className
      )}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {children}
    </motion.span>
  )
}
