import { Cpu, Plus } from 'lucide-react'
import { systems } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Systems() {
  return (
    <section id="systems" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          icon={Cpu}
          label="Systems"
          title="The kind of problems I like to make tractable"
        />

        <div className="mt-12 border border-border">
          {systems.map((item, i) => (
            <article
              key={item.label}
              className="grid gap-px border-b border-border bg-border last:border-0 md:grid-cols-[12rem_1fr]"
            >
              <div className="flex items-center gap-3 bg-background p-5">
                <Plus className="size-4 text-accent" aria-hidden />
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  0{i + 1} / {item.label}
                </span>
              </div>
              <div className="bg-background p-5 sm:p-7">
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
