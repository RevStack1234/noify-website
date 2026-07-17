import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null

    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      return
    }

    if (location.hash) {
      const id = location.hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash, location.state])

  return null
}
