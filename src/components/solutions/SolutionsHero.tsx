import { HeroReveal } from "../motion/Reveal"

export function SolutionsHero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden bg-[#020D09] sm:h-[550px] lg:h-[600px]">
      <picture>
        <source srcSet="/images/solutions-hero-590dfa.webp" type="image/webp" />
        <img
          src="/images/solutions-hero-590dfa.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="absolute inset-0 bg-[rgba(2,13,9,0.6)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-6 text-center">
        <HeroReveal className="flex flex-col items-center gap-4">
          <h1 className="font-space text-[28px] font-medium leading-tight tracking-[-0.005em] text-white sm:text-5xl lg:text-[64px] lg:leading-none lg:whitespace-nowrap">
            Advanced Energy Solutions
          </h1>
          <p className="max-w-[530px] font-inter text-base font-normal leading-normal tracking-[0.05em] text-[#C0C0C0] lg:text-xl">
            Reliable energy solutions designed to power everyday life, commercial operations, and
            sustainable mobility with exceptional performance and durability.
          </p>
        </HeroReveal>
      </div>
    </section>
  )
}
