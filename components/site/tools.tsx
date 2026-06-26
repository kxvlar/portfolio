import { Terminal } from 'lucide-react'
import { toolbelt } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Tools() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          icon={Terminal}
          label="Tech Stack"
          title="The stack behind the projects"
        />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {toolbelt.map((t) => (
            <div key={t.name} className="bg-background p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold">{t.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {t.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
