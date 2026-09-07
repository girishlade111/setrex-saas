import { cn } from '../../lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'container' | 'content'
}

export function Container({ children, className, size = 'content' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8 lg:px-12',
        size === 'container' ? 'max-w-container' : 'max-w-content',
        className,
      )}
    >
      {children}
    </div>
  )
}
