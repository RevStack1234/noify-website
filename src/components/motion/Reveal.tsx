import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"
import type { ReactNode } from "react"
import {
  easeSmooth,
  fadeScale,
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "../../motion/variants"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
  once?: boolean
} & Omit<HTMLMotionProps<"div">, "children">

const viewportDefault = { once: true, amount: 0.18, margin: "0px 0px -8% 0px" }

function useMotionSafe() {
  return useReducedMotion()
}

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.18,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useMotionSafe()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function RevealScale({ children, className, delay = 0 }: RevealProps) {
  const reduce = useMotionSafe()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={fadeScale}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function RevealLeft({ children, className, delay = 0 }: RevealProps) {
  const reduce = useMotionSafe()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function RevealRight({ children, className, delay = 0 }: RevealProps) {
  const reduce = useMotionSafe()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useMotionSafe()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useMotionSafe()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function HeroReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useMotionSafe()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  )
}


