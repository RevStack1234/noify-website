import type { Transition, Variants } from "motion/react"

export const easeSmooth: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const easeSoftOut: [number, number, number, number] = [0.4, 0, 0.2, 1]

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.6,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeSmooth },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeSmooth },
  },
}

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.97, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easeSmooth },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeSmooth },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeSmooth },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const pageFade: Variants = {
  initial: { opacity: 0, y: 8, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeSmooth },
  },
  exit: {
    opacity: 0,
    y: -4,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: easeSoftOut },
  },
}
