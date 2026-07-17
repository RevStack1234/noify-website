import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"
import { Stagger, StaggerItem } from "../motion/Reveal"

const stats = [
  { value: 5000, suffix: "+", label: "Batteries Manufactured" },
  { value: 30, suffix: "+", label: "Business Clients" },
  { value: 50, suffix: "+", label: "Dealers" },
  { value: 10, suffix: "+", label: "OEM Partners" },
] as const

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function AboutStats() {
  return (
    <section className="bg-noify-nav px-4 py-10 sm:px-6 sm:py-12 lg:px-[65px] lg:py-[70px]">
      <Stagger className="mx-auto grid max-w-[1315px] grid-cols-2 gap-8 sm:gap-10 lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-6">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="bg-gradient-to-br from-[#429101] to-[#68b400] bg-clip-text font-jakarta text-3xl font-bold tracking-[0.07em] text-transparent sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-center font-inter text-sm font-medium tracking-[0.04em] text-white sm:text-lg lg:whitespace-nowrap lg:text-2xl">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
