import { TypingText } from './typing-text'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-grid pt-28 pb-10"
    >
      <div className="pointer-events-none absolute inset-0 hidden items-center justify-start lg:flex">
        <div className="relative ml-[4vw] h-[72svh] w-[36vw] max-w-[34rem] overflow-hidden border border-border/60 bg-black/70 opacity-68 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_82%,transparent)]">
          <img
            src="/keval-sproul.png"
            alt="Keval Amin in graduation regalia at Sproul Hall"
            className="h-full w-full object-cover object-[50%_42%] grayscale contrast-125 brightness-75 saturate-50"
          />
          <div className="absolute inset-0 bg-dots opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-4 border border-foreground/15" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
        <div className="relative h-[66svh] w-[88vw] max-w-[44rem] overflow-hidden border border-border/60 bg-black/70 opacity-72 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_78%,transparent)] sm:h-[72svh] lg:mr-[4vw] lg:w-[48vw] lg:max-w-[52rem]">
          <img
            src="/keval-graduation.png"
            alt="Keval Amin at UC Berkeley graduation"
            className="h-full w-full object-cover object-[58%_42%] grayscale contrast-125 brightness-75 saturate-50"
          />
          <div className="absolute inset-0 bg-dots opacity-25 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-transparent to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-4 border border-foreground/15" />
        </div>
      </div>
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <TypingText
          as="p"
          text={['ML ENGINEER', 'DATA SCIENTIST', 'APPLIED AI BUILDER']}
          className="font-mono text-sm tracking-[0.35em] text-accent uppercase sm:text-base"
        />
        <h1 className="mt-4 max-w-5xl font-display text-[15vw] leading-[0.85] font-bold text-balance sm:text-[12vw] lg:text-[9.5rem]">
          Keval Amin
        </h1>
      </div>
    </section>
  )
}
