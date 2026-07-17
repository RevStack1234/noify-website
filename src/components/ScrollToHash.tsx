import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null

    const scrollToId = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        return true
      }
      return false
    }

    if (state?.scrollTo) {
      if (!scrollToId(state.scrollTo)) {
        const t = setTimeout(() => scrollToId(state.scrollTo!), 500)
        return () => clearTimeout(t)
      }
      return
    }

    if (location.hash) {
      const id = location.hash.replace("#", "")
      if (!scrollToId(id)) {
        const t = setTimeout(() => scrollToId(id), 500)
        return () => clearTimeout(t)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash, location.state])

  return null
}
