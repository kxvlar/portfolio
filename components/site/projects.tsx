import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

function linkClass(label: string) {
  if (label === 'Live') {
    return 'border-red-500 bg-red-500 text-white hover:border-red-400 hover:bg-red-400'
  }
  if (label === 'Paper') {
    return 'border-foreground bg-foreground text-background hover:border-red-500 hover:bg-red-500 hover:text-white'
  }
  return 'border-border bg-secondary text-muted-foreground hover:border-foreground hover:text-foreground'
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          icon={FolderGit2}
          label="Projects & Research"
          title="Things I've built, modeled, and written"
        />

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col bg-background p-5 transition-colors hover:bg-secondary sm:p-6"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden border border-border bg-black">
                <img
                  src={p.image}
                  alt={`${p.name} project preview`}
                  className="h-full w-full object-cover opacity-80 grayscale transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-dots opacity-20 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <span className="absolute top-3 left-3 font-display text-6xl font-bold text-foreground/10">
                  {p.id}
                </span>
                <span className="absolute right-3 bottom-3 border border-border bg-black/90 px-2 py-1 text-[10px] tracking-widest text-red-500 uppercase">
                  {p.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <div className="mt-1 font-mono text-xs text-red-500">
                    {p.period}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  {p.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} ${link.label}`}
                      className={`inline-flex size-9 items-center justify-center border transition-colors ${linkClass(link.label)}`}
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-2 py-1 text-[10px] text-muted-foreground uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-5 grid gap-2 text-xs text-muted-foreground">
                {p.features.map((feature) => (
                  <li key={feature} className="border-l-2 border-red-500 pl-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
