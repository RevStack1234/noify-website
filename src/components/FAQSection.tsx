import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { easeSmooth } from "../motion/variants"
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal"

const faqs = [
  {
    question: "Which Noify battery series should I choose for E-Rickshaws?",
    answer:
      "Most E-Rickshaw fleets run on our 51.2V series (100Ah–200Ah) for daily duty cycles. Higher-demand routes and performance builds typically move to the 64V series. Our team can map the right model to your motor, controller, and route profile.",
  },
  {
    question: "How long do Noify LiFePO₄ batteries last?",
    answer:
      "Noify packs use Grade A+ prismatic LiFePO₄ cells engineered for thousands of full charge cycles under commercial use. With proper charging habits and BMS protection, fleets typically see multi-year service life before capacity drop becomes operationally significant.",
  },
  {
    question: "Are Noify batteries compatible with existing EV retrofits?",
    answer:
      "Yes. Our drop-in compatible LiFePO₄ packs are designed to replace lead-acid batteries in most E-Rickshaw and light EV models with minimal modification. The form-factor matched casing and standard terminal layouts make retrofitting straightforward for dealers and fleet operators.",
  },
  {
    question: "Can dealers and OEMs become distribution partners?",
    answer:
      "Absolutely. We support dealers, channel partners, and OEM collaborations across India with volume pricing, dedicated account support, and logistics for bulk orders. Use Become a Distributor or the Dealer enquiry form to start the process.",
  },
  {
    question: "What warranties and after-sales support do you provide?",
    answer:
      "Commercial packs include manufacturer-backed warranty coverage and India-wide partner support. Procurement teams get direct coordination for replacements, technical guidance, and fleet rollout assistance through our regional energy engineering contacts.",
  },
  {
    question: "How do I get the full technical catalogue and datasheets?",
    answer:
      "Download the Master Specification Catalog from the Solutions page, or request it via Contact Us. It includes dimensions, electrical specs, and model naming across the full 51.2V and 64V ranges.",
  },
] as const

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const reduce = useReducedMotion()

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#7DC553] lg:py-6"
      >
        <span className="min-w-0 font-jakarta text-sm font-medium tracking-[0.02em] text-white sm:text-base lg:text-xl">
          {question}
        </span>
        <motion.span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-[#7DC553]"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: easeSmooth }}
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: easeSmooth }}
            className="overflow-hidden"
          >
            <p className="max-w-[920px] pb-5 font-inter text-sm leading-relaxed tracking-[0.02em] text-white/60 sm:text-base lg:pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-noify-bg px-6 pb-16 pt-4 lg:pt-6">
      <Reveal>
        <div className="mx-auto max-w-[1342px] rounded-lg bg-noify-surface px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="mb-10 flex flex-col items-center gap-3 text-center lg:mb-12">
            <span className="font-inter text-sm tracking-[0.08em] text-[#96C4AE]">
              Support
            </span>
            <h2 className="font-jakarta text-4xl font-semibold tracking-[0.04em] text-white sm:text-5xl">
              FAQ
            </h2>
            <p className="max-w-[560px] px-2 text-center font-inter text-sm tracking-[0.02em] text-white/55 sm:max-w-none sm:whitespace-nowrap sm:text-base">
              Quick answers on batteries, fleets, warranties, and becoming a Noify partner.
            </p>
          </div>

          <Stagger className="mx-auto max-w-[980px]">
            {faqs.map((faq, index) => (
              <StaggerItem key={faq.question}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </section>
  )
}
