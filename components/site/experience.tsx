import { Briefcase } from 'lucide-react'
import { contact, experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const profile = [
  ['Name', contact.name],
  ['Location', contact.location],
  ['Role', 'ML Engineer & Data Scientist'],
  ['Focus', 'Production ML, data systems, applied AI'],
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          icon={Briefcase}
          label="Experience"
          title="The journey so far"
        />

        <div className="mt-12 border border-border">
          <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
            <span className="size-3 rounded-full border border-border bg-accent" />
            <span className="size-3 rounded-full border border-border" />
            <span className="size-3 rounded-full border border-border" />
            <span className="ml-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              /keval-resume.sh
            </span>
          </div>

          <div className="grid md:grid-cols-[18rem_1fr]">
            <div className="border-b border-border p-6 md:border-r md:border-b-0">
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                $ whoami
              </p>
              <dl className="mt-4 space-y-2 font-mono text-sm">
                {profile.map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <dt className="w-24 shrink-0 text-muted-foreground">
                      {k}:
                    </dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border border-border bg-background p-3 font-mono text-xs leading-relaxed text-muted-foreground">
                &gt; Comfortable from feature engineering and validation to
                deployment, research translation, and operator-facing tools.
              </p>
            </div>

            <div className="p-6">
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                $ cat work-experience
              </p>
              <ol className="mt-4 space-y-px">
                {experiences.map((w) => (
                  <li
                    key={`${w.role}-${w.org}`}
                    className="border border-border bg-background p-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div>
                        <div className="font-display font-bold">{w.role}</div>
                        <div className="text-xs text-muted-foreground">
                          {w.href ? (
                            <a
                              href={w.href}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-accent"
                            >
                              {w.org}
                            </a>
                          ) : (
                            w.org
                          )}
                          {' / '}
                          {w.type} / {w.location}
                        </div>
                      </div>
                      <span className="font-mono text-xs text-accent">
                        {w.period}
                      </span>
                    </div>
                    <ul className="mt-3 grid gap-2 text-xs leading-relaxed text-muted-foreground">
                      {w.bullets.map((bullet) => (
                        <li key={bullet} className="border-l border-border pl-3">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
