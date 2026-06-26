import { User } from 'lucide-react'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          icon={User}
          label="About Me"
          title="Building models, agents, and data systems that survive reality"
          align="left"
        />
        <div className="mt-10 border border-border bg-background">
          <p className="max-w-5xl p-6 text-base leading-relaxed text-muted-foreground sm:p-8 md:text-lg">
            I build production ML systems, end-to-end data pipelines, and
            applied AI tools that turn ambiguous problems into decision-ready
            software. My work spans blockchain asset quality, economics
            research, AI agents, causal inference, and full-stack products that
            make complex models usable by real operators. Also a Triple Major in Statistics, Economics (Honors) and Politics and Government @ UC Berkeley- Sciences Po Dual BA.

  
          </p>
        </div>
      </div>
    </section>
  )
}
