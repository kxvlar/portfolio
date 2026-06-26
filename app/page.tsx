'use client'

import { useState } from 'react'
import { About } from '@/components/site/about'
import { Experience } from '@/components/site/experience'
import { Hero } from '@/components/site/hero'
import { HyperspaceIntro } from '@/components/site/hyperspace-intro'
import { LogoMarquee } from '@/components/site/logo-marquee'
import { Projects } from '@/components/site/projects'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteNav } from '@/components/site/site-nav'
import { Systems } from '@/components/site/systems'
import { Tools } from '@/components/site/tools'

export default function Page() {
  const [introFinished, setIntroFinished] = useState(false)

  return (
    <>
      <HyperspaceIntro onFinish={() => setIntroFinished(true)} />
      {introFinished && <SiteNav />}
      <main>
        <Hero />
        <About />
        <Projects />
        <LogoMarquee />
        <Experience />
        <Systems />
        <Tools />
      </main>
      <SiteFooter />
    </>
  )
}
