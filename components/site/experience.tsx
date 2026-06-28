import { Briefcase } from 'lucide-react'
import { contact, experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const profile = [
  ['Name', contact.name],
  ['Location', contact.location],
  ['Role', 'ML Engineer & Data Scientist'],
  ['Focus', 'Production ML, data systems, applied AI'],
]

const education = [
  {
    school: 'University of California, Berkeley',
    items: [
      'Bachelor in Statistics at College of Computing, Data Science and Society',
      'Bachelor in Economics at College of Letters and Sciences',
    ],
  },
  {
    school: 'Sciences Po',
    items: [
      'Bachelor in Politics and Government',
      'Euro-North American minor',
      'International Trade and Finance minor',
    ],
  },
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
            <span className="size-3 rounded-full border border-red-500/70 bg-red-500" />
            <span className="size-3 rounded-full border border-yellow-400/70 bg-yellow-400" />
            <span className="size-3 rounded-full border border-green-500/70 bg-green-500" />
            <span className="ml-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              /keval-resume.sh
            </span>
          </div>

          <div className="grid md:grid-cols-[18rem_1fr]">
            <div className="border-b border-border p-6 md:border-r md:border-b-0">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
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
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                $ cat education
              </p>
              <div className="mt-4 grid gap-px border border-border bg-border">
                {education.map((group) => (
                  <div key={group.school} className="bg-background p-4">
                    <div className="font-display font-bold">{group.school}</div>
                    <ul className="mt-3 grid gap-2 text-xs leading-relaxed text-muted-foreground">
                      {group.items.map((item) => (
                        <li key={item} className="border-l border-border pl-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                $ cat work-experience
              </p>
              <ol className="mt-4 space-y-px">
                {experiences.map((w) => (
                  <li
                    key={`${w.role}-${w.org}`}
                    className="border border-border bg-background p-4"
                  >
                    <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-start">
                      <div className="min-w-0">
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
                      <span className="font-mono text-xs whitespace-nowrap text-muted-foreground sm:pt-1">
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
