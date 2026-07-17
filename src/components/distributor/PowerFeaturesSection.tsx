import { motion } from "motion/react"
import { Reveal } from "../motion/Reveal"

type FeatureCard = {
  title: string
  description: string
  variant: "green" | "green-dark" | "gradient"
}

function SquareCard({ card, delay = 0 }: { card: FeatureCard; delay?: number }) {
  const variantClass = {
    green: "feature-card-green",
    "green-dark": "feature-card-green-dark",
    gradient: "feature-card-gradient",
  }[card.variant]
  const isLight = card.variant === "gradient"

  return (
    <motion.div
      className={`${variantClass} flex h-[160px] w-[160px] shrink-0 flex-col justify-start p-3 sm:h-[180px] sm:w-[180px] sm:p-4 xl:h-[210px] xl:w-[210px]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      <div className="flex flex-col gap-2 sm:gap-3.5">
        <h3
          className={`font-jakarta text-sm font-semibold leading-tight tracking-[0.03em] sm:text-base xl:text-xl ${
            isLight ? "text-[#132502]" : "text-white"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`font-jakarta text-xs leading-snug tracking-[0.05em] sm:text-sm ${
            isLight ? "text-[#132502]/70" : "text-white/58"
          }`}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}

const cards = {
  longLifecycle: {
    title: "Long Lifecycle High Endurance",
    description: "Sustained maximum power delivery across thousands of cycles.",
    variant: "green-dark" as const,
  },
  highEnergy: {
    title: "High Energy Density Matrix",
    description: "Maximized spatial storage efficiency.",
    variant: "green" as const,
  },
  intellectual: {
    title: "Intellectual Lithium BMS Safety",
    description: "Constantly regulating multicell.",
    variant: "green-dark" as const,
  },
  telemetry: {
    title: "Industrial Grade Real-Time Telemetry",
    description: "Direct app-connected.",
    variant: "gradient" as const,
  },
  structural: {
    title: "Structural Crush Reliability",
    description: "Laser-welded enclosure protection built.",
    variant: "green" as const,
  },
  superior: {
    title: "Superior Thermal Stability",
    description: "Engineered specifically for localized high thermal shifts.",
    variant: "green-dark" as const,
  },
}

export function PowerFeaturesSection() {
  return (
    <section className="px-4 pb-4 pt-10 sm:px-6 lg:px-10 xl:px-[111px] xl:pb-2 xl:pt-16">
      <Reveal>
        <div className="power-section-bg relative mx-auto max-w-[1218px] overflow-hidden px-4 py-8 sm:px-6 sm:py-10 xl:h-[815px] xl:px-0 xl:py-0">
          <p
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[48px] tracking-[0.05em] text-white/[0.05] sm:text-[80px] xl:text-[150px]"
            style={{ fontFamily: "'PT Serif Caption', serif" }}
          >
            NOIFY
          </p>

          <div className="relative z-10 flex w-full flex-col gap-5 xl:hidden">
            <div className="mb-2 max-w-full sm:max-w-[320px]">
              <h2 className="text-gradient-green font-jakarta text-[28px] font-bold tracking-[0.02em] sm:text-[32px]">
                Power That Doesn&apos;t Quit
              </h2>
              <p className="mt-4 font-jakarta text-sm tracking-[0.05em] text-white/58 sm:mt-5 sm:whitespace-nowrap sm:text-base">
                Built to replace inverters, run heavy loads
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-[24px] md:gap-[34px]">
              {Object.values(cards).map((card, i) => (
                <SquareCard key={card.title} card={card} delay={i * 0.06} />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto hidden h-full w-full max-w-[1218px] xl:block">
            <div className="absolute flex flex-col gap-5" style={{ left: 112, top: 66 }}>
              <h2 className="text-gradient-green max-w-[265px] font-jakarta text-[40px] font-bold leading-tight tracking-[0.02em]">
                Power That Doesn&apos;t Quit
              </h2>
              <p className="whitespace-nowrap font-jakarta text-base tracking-[0.05em] text-white/58">
                Built to replace inverters, run heavy loads
              </p>
            </div>

            <div
              className="absolute grid grid-cols-2 gap-[34px]"
              style={{ left: 112, top: 295, width: 454, height: 454 }}
            >
              <SquareCard card={cards.highEnergy} delay={0.05} />
              <div aria-hidden className="h-[210px] w-[210px]" />
              <SquareCard card={cards.intellectual} delay={0.12} />
              <SquareCard card={cards.superior} delay={0.18} />
            </div>

            <div
              className="absolute grid grid-cols-2 gap-[34px]"
              style={{ left: 653, top: 66, width: 454, height: 454 }}
            >
              <SquareCard card={cards.longLifecycle} delay={0.08} />
              <SquareCard card={cards.telemetry} delay={0.14} />
              <div aria-hidden className="h-[210px] w-[210px]" />
              <SquareCard card={cards.structural} delay={0.2} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
