import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

interface PlanetProps {
  className?: string
  size?: number
}

export function Planet({ className, size = 600 }: PlanetProps) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className={cn('relative rounded-full planet', className)}
      style={{
        width: size,
        height: size,
        filter: 'grayscale(100%) contrast(1.1)',
      }}
      aria-hidden="true"
    >
      {/* Illuminated edge */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 0%, transparent 40%)',
        }}
      />
      {/* Shadow edge */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 75% 75%, transparent 40%, rgba(0,0,0,0.8) 80%)',
        }}
      />
    </motion.div>
  )
}
