import { cn } from '../../lib/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements
}

export function Section({ children, className, id, as: Component = 'section' }: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        'py-20 md:py-24 lg:py-section-desktop',
        className,
      )}
    >
      {children}
    </Component>
  )
}
