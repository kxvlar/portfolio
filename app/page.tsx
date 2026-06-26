import { About } from '@/components/site/about'
import { Experience } from '@/components/site/experience'
import { Hero } from '@/components/site/hero'
import { LogoMarquee } from '@/components/site/logo-marquee'
import { Projects } from '@/components/site/projects'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteNav } from '@/components/site/site-nav'
import { Systems } from '@/components/site/systems'
import { Tools } from '@/components/site/tools'

export default function Page() {
  return (
    <>
      <SiteNav />
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
