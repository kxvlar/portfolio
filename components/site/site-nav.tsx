'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects & Research', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

function Logo() {
  return (
    <a href="#home" className="font-display text-lg leading-none font-bold">
      <span className="block">
        Keval<span className="text-accent">/&gt;</span>
      </span>
      <span className="block">Amin</span>
    </a>
  )
}

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border border-border bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6">
        <Logo />

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden border border-foreground bg-foreground px-5 py-2 text-sm font-bold text-background transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground sm:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border border-border p-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl border border-border bg-background md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label} className="border-b border-border last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block bg-foreground px-5 py-3 text-sm font-bold text-background"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
