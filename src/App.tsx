import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ScrollToHash } from "./components/ScrollToHash"
import { WhatsAppFloat } from "./components/WhatsAppFloat"
import { AboutPage } from "./pages/AboutPage"
import { BecomeDistributorPage } from "./pages/BecomeDistributorPage"
import { HomePage } from "./pages/HomePage"
import { SolutionsPage } from "./pages/SolutionsPage"
import { pageFade } from "./motion/variants"

export function AppRoutes() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={reduce ? undefined : pageFade}
        initial={reduce ? false : "initial"}
        animate="animate"
        exit={reduce ? undefined : "exit"}
        style={{ willChange: "opacity, transform, filter" }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/become-a-distributor" element={<BecomeDistributorPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <>
      <ScrollToHash />
      <AppRoutes />
      <WhatsAppFloat />
    </>
  )
}

export default App
