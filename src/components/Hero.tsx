import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { routes } from "../config/navigation"
import { HeroReveal, Stagger, StaggerItem } from "./motion/Reveal"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-0 overflow-hidden bg-noify-bg lg:min-h-[700px]">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[700px] w-[55%] max-w-[675px] xl:block">
        <div className="relative mx-auto h-full w-full max-w-[604px]">
          <motion.div
            className="hero-ring absolute left-[80px] top-[116px] h-[486px] w-[486px]"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="hero-ring absolute left-[101px] top-[137px] h-[444px] w-[444px]"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.img
            src="/images/hero-battery-v2-1dc189.webp"
            alt="Noify E-Rickshaw and Battery"
            className="absolute left-0 top-[127px] z-10 h-[548px] w-[604px] object-contain"
            style={{ filter: "drop-shadow(0px 2px 2px rgba(70, 149, 1, 1))" }}
            initial={reduce ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 pb-8 pt-8 sm:px-6 sm:pt-10 lg:px-[80px] lg:pb-10 lg:pt-[100px] xl:px-[117px] xl:pt-[120px]">
        <Stagger className="flex max-w-[598px] flex-col gap-8 sm:gap-12 lg:gap-[60px]">
          <StaggerItem>
            <div className="flex items-start gap-2 sm:items-center">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-noify-accent sm:mt-0" />
              <span className="font-inter text-xs leading-snug tracking-[-0.015em] text-[#96C4AE] sm:text-sm sm:leading-[14px]">
                Manufacturer · E-Rickshaw / EV / Commercial Batteries
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="max-w-[598px] font-space text-[32px] leading-[1.15] tracking-[-0.005em] text-white sm:text-[40px] lg:text-[44px] xl:text-[48px]">
                <span className="text-white">Premium </span>
                <span className="text-[#2C9F01]">Energy Storage </span>
                <span className="text-white">&amp; </span>
                <span className="text-[#2C9F01]">Battery Solutions </span>
                <span className="text-white">for Global B2B markets.</span>
              </h1>
              <p className="max-w-[461px] font-inter text-sm tracking-[0.05em] text-[#CBD5E1] sm:text-base">
                Scalable, high-performance power infrastructure engineered for industrial
                reliability.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <Link
                  to={routes.distributor}
                  className="btn-green flex h-14 w-full items-center justify-center gap-2 font-inter text-base font-bold tracking-[0.04em] text-white sm:h-16 sm:w-[235px]"
                >
                  Become a Partner
                  <img src="/images/arrow-icon.svg" alt="" className="h-[18px] w-[18px]" />
                </Link>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <Link
                  to={routes.solutions}
                  className="btn-outline-green flex h-14 w-full items-center justify-center font-inter text-base font-bold tracking-[0.11em] text-[#7DC553] sm:h-16 sm:w-[193px]"
                >
                  View Solutions
                </Link>
              </motion.div>
            </div>
          </StaggerItem>
        </Stagger>

        <HeroReveal delay={0.25} className="relative mt-8 flex h-[280px] items-center justify-center sm:mt-10 sm:h-[360px] xl:hidden">
          <div className="hero-ring absolute h-[220px] w-[220px] sm:h-[280px] sm:w-[280px]" />
          <div className="hero-ring absolute h-[190px] w-[190px] sm:h-[250px] sm:w-[250px]" />
          <img
            src="/images/hero-battery-v2-1dc189.webp"
            alt="Noify E-Rickshaw and Battery"
            className="relative z-10 h-full w-auto max-w-full object-contain"
            style={{ filter: "drop-shadow(0px 2px 2px rgba(70, 149, 1, 1))" }}
            fetchPriority="high"
            decoding="async"
          />
        </HeroReveal>
      </div>
    </section>
  )
}
