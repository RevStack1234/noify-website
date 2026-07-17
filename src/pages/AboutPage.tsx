import { AboutStats } from "../components/about/AboutStats"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {
  HeroReveal,
  Reveal,
  RevealLeft,
  RevealRight,
} from "../components/motion/Reveal"
import { Seo } from "../components/Seo"

export function AboutPage() {
  return (
    <div className="min-h-screen bg-noify-bg">
      <Seo
        title="About Noify Energy — Building the Future of Energy Storage"
        description="Noify Energy is on a mission to build the underlying energy storage layer that powers sustainable industrial and commercial growth through advanced lithium battery technology."
        keywords="noify energy, about noify, energy storage company, battery manufacturer, sustainable energy"
        path="/about"
      />
      <Header />

      <main className="mx-auto max-w-[1440px] px-4 pb-8 sm:px-6 lg:px-[59px] lg:pb-5">
        <div className="rounded-b-lg bg-noify-card px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-[105px] lg:pb-16 lg:pt-12">
          <HeroReveal className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16 sm:gap-6 lg:mb-24">
            <h1 className="font-space text-[28px] font-bold tracking-[0.05em] text-white sm:text-[32px] lg:text-[40px]">
              Powering Tomorrow, Today.
            </h1>
            <p className="max-w-[863px] font-inter text-base tracking-[0.06em] text-[rgba(148,163,184,0.83)] sm:text-lg sm:tracking-[0.11em] lg:text-xl">
              We manufacture high-grade battery systems designed for industrial endurance and
              sustainable energy storage.
            </p>
          </HeroReveal>

          <Reveal className="mb-12 flex flex-col items-center gap-8 sm:mb-16 sm:gap-10 lg:mb-24 lg:flex-row lg:items-center lg:gap-[158px]">
            <div className="h-[240px] w-full max-w-[415px] overflow-hidden rounded-3xl border border-[rgba(212,212,212,0.54)] sm:h-[347px]">
              <picture>
                <source srcSet="/images/about-commitment.webp" type="image/webp" />
                <img
                  src="/images/about-commitment.png"
                  alt="Our Commitment"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            <h2 className="max-w-[525px] text-center font-inter text-2xl tracking-[0.05em] text-white sm:text-3xl lg:text-4xl">
              Our Commitment to Quality
            </h2>
          </Reveal>

          <div className="-mx-4 mb-12 sm:-mx-6 sm:mb-16 lg:-mx-[105px] lg:mb-24">
            <AboutStats />
          </div>

          <div className="relative mb-12 flex flex-col gap-6 sm:mb-20 sm:gap-8 lg:mb-24 lg:flex-row lg:items-center lg:gap-0">
            <RevealLeft className="flex max-w-[596px] flex-col gap-3 sm:gap-4 lg:pr-8">
              <h2 className="font-jakarta text-3xl font-bold leading-[1.4] tracking-[-0.022em] text-white sm:text-4xl sm:leading-[1.5]">
                Where We&apos;re Headed
              </h2>
              <p className="font-inter text-lg font-medium leading-[1.35] tracking-[-0.022em] text-[#A7A7A7] sm:text-2xl sm:leading-[1.3]">
                To build the underlying energy storage layer that powers sustainable industrial
                infrastructure and seamless global electric mobility.&quot;
              </p>
            </RevealLeft>
            <RevealRight className="h-[220px] w-full max-w-[441px] shrink-0 overflow-hidden rounded-[22px] border border-[#A3A3A3] sm:h-[316px] lg:ml-auto">
              <picture>
                <source srcSet="/images/about-vision-6fa52a.webp" type="image/webp" />
                <img
                  src="/images/about-vision-6fa52a.png"
                  alt="Where We're Headed"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </RevealRight>
          </div>

          <div className="relative flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-[58px]">
            <RevealLeft className="h-[220px] w-full max-w-[454px] shrink-0 overflow-hidden rounded-xl border border-[#A3A3A3] sm:h-[320px]">
              <picture>
                <source srcSet="/images/about-purpose-10db35.webp" type="image/webp" />
                <img
                  src="/images/about-purpose-10db35.png"
                  alt="Our Purpose"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
              />
              </picture>
            </RevealLeft>
            <RevealRight className="flex flex-col gap-4 sm:gap-6">
              <h2 className="font-jakarta text-3xl font-bold leading-[1.4] tracking-[-0.022em] text-white sm:text-4xl sm:leading-[1.5]">
                Our Purpose
              </h2>
              <p className="max-w-[538px] font-inter text-lg font-medium leading-[1.45] tracking-[-0.022em] text-white/55 sm:text-2xl sm:leading-[1.5]">
                Engineered to distribute high-capacity, safe, and smart energy storage units across
                highly scaling offline networks and specialized B2B distribution ecosystems.
              </p>
            </RevealRight>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
