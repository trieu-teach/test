import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95'

  const variants = {
    primary:
      'btn-shine bg-primary text-primary-foreground shadow-lg hover:shadow-xl',
    secondary:
      'bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90',
    outline:
      'border-2 border-primary bg-transparent text-primary hover:bg-primary/10',
    ghost: 'hover:bg-accent/20 text-foreground',
    gradient:
      'bg-gradient-to-r from-finteen-coral to-finteen-purple text-white shadow-lg',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-base',
    lg: 'h-14 px-8 text-lg',
    xl: 'h-16 px-10 text-xl rounded-2xl',
    icon: 'h-10 w-10',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
