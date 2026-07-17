import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { masterCatalogPdf, routes } from "../../config/navigation"
import { HeroReveal } from "../motion/Reveal"

export function DistributorHero() {
  return (
    <section className="w-full">
      <HeroReveal>
        <img
          src="/images/distributor-hero-7c2940.png"
          alt="Advanced Lithium Battery Solutions"
          className="h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[579px]"
        />
      </HeroReveal>

      <div className="flex justify-center bg-noify-bg px-6 py-8 lg:py-11">
        <HeroReveal delay={0.15} className="flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
          <motion.a
            href={masterCatalogPdf.href}
            download={masterCatalogPdf.download}
            className="btn-green flex h-[59px] w-full max-w-[314px] shrink-0 items-center justify-center px-6 font-jakarta text-base font-bold tracking-[0.05em] text-white sm:w-[314px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Master PDF
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={routes.solutions}
              className="flex h-[59px] w-full max-w-[314px] shrink-0 items-center justify-center rounded-lg border border-[#68b400] bg-transparent px-6 font-inter text-base font-bold tracking-[0.05em] text-[#64B000] sm:w-[314px]"
            >
              Show All Models
            </Link>
          </motion.div>
        </HeroReveal>
      </div>
    </section>
  )
}
