import { ArrowUpRight, Code2, Link2, Mail, MapPin } from 'lucide-react'
import { contact } from '@/lib/portfolio-data'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects & Research', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

const socials = [
  { label: 'GitHub', href: contact.github, icon: Code2 },
  { label: 'LinkedIn', href: contact.linkedin, icon: Link2 },
]

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border"
    >
      <img
        src="/footer-dithered.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="border border-border bg-background/70 p-8 backdrop-blur-sm sm:p-12">
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            Open to ML, data, and applied AI work
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-balance sm:text-6xl">
            Have a messy system or model problem? Let&apos;s make it usable.
          </h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 font-bold text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            Start a conversation
            <ArrowUpRight className="size-5" />
          </a>
        </div>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-xl font-bold">
              Keval<span className="text-accent">/&gt;</span> Amin
            </a>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="size-4" /> {contact.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" /> {contact.location}
              </span>
            </div>
          </div>

          <FooterLinks title="Menu" items={nav} />

          <div>
            <h3 className="text-xs tracking-widest text-muted-foreground uppercase">
              Social
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-accent"
                  >
                    <Icon className="size-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest text-muted-foreground uppercase">
              Signal
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Production ML, statistical modeling, AI agents, data pipelines,
              and research systems.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Keval Amin. All rights reserved.</span>
          <span className="tracking-widest uppercase">
            Retro Cyber-Brutalism // ML Systems
          </span>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({
  title,
  items,
}: {
  title: string
  items: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-xs tracking-widest text-muted-foreground uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-accent">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
