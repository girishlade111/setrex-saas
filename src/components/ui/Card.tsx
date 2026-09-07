import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative overflow-hidden rounded-card border border-white/[0.08] bg-surface-200/60 backdrop-blur-xl',
        glow && 'glow-border',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
