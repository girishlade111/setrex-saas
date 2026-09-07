import { cn } from '../lib/cn'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function Marquee({ children, className, speed = 30 }: MarqueeProps) {
  return (
    <div className={cn('marquee-track overflow-hidden', className)}>
      <div
        className="marquee-content flex w-max animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
