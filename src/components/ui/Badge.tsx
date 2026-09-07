import { cn } from '../../lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'muted' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  const variants = {
    accent: 'bg-accent text-black',
    muted: 'bg-white/10 text-white/80',
    outline: 'border border-white/20 text-white/80',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
