import type { LucideIcon } from 'lucide-react'
import { TypingText } from './typing-text'

type SectionHeadingProps = {
  label: string
  title: string
  icon?: LucideIcon
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  icon: Icon,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'flex flex-col items-center text-center'
          : 'flex flex-col items-start text-left'
      }
    >
      <div className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1 text-xs tracking-[0.25em] text-muted-foreground uppercase">
        {Icon ? <Icon className="size-3.5 text-accent" aria-hidden /> : null}
        {label}
      </div>
      <TypingText
        as="h2"
        text={title}
        className="mt-5 max-w-3xl font-display text-3xl font-bold text-balance sm:text-4xl md:text-5xl"
      />
    </div>
  )
}
