const items = [
  'PYTHON',
  'SQL',
  'ML OPS',
  'CAUSAL',
  'AGENTS',
  'WEB3',
  'NLP',
  'DATA',
]

export function LogoMarquee() {
  const row = [...items, ...items]
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-6">
      <div className="flex w-max animate-marquee items-center gap-16 px-8 [--marquee-duration:28s]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-2xl font-bold text-muted-foreground/60 select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
