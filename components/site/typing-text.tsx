'use client'

import { useEffect, useRef, useState } from 'react'

type TypingTextProps = {
  /** A single string, or several strings to cycle through. */
  text: string | string[]
  /** ms per character */
  speed?: number
  /** ms to wait before deleting (only when cycling) */
  pause?: number
  /** show the blinking caret */
  caret?: boolean
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3'
}

export function TypingText({
  text,
  speed = 55,
  pause = 1600,
  caret = true,
  className,
  as: Tag = 'span',
}: TypingTextProps) {
  const phrases = Array.isArray(text) ? text : [text]
  const cycling = phrases.length > 1

  const [display, setDisplay] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>(
    'typing',
  )
  const [index, setIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)

  // only begin once the element scrolls into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const current = phrases[index]

    if (phase === 'typing') {
      if (display.length < current.length) {
        const t = setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          speed,
        )
        return () => clearTimeout(t)
      }
      if (cycling) {
        const t = setTimeout(() => setPhase('deleting'), pause)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'deleting') {
      if (display.length > 0) {
        const t = setTimeout(
          () => setDisplay(current.slice(0, display.length - 1)),
          speed / 2,
        )
        return () => clearTimeout(t)
      }
      setIndex((i) => (i + 1) % phrases.length)
      setPhase('typing')
    }
  }, [display, phase, started, index, phrases, cycling, speed, pause])

  return (
    <Tag ref={ref as never} className={className}>
      {display}
      {caret && (
        <span aria-hidden className="blink ml-0.5 inline-block">
          _
        </span>
      )}
    </Tag>
  )
}
