import { useLocation, useNavigate } from "react-router-dom"
import { routes } from "../config/navigation"

export function useContactScroll() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return () => {
    if (pathname === routes.home) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate(routes.home, { state: { scrollTo: "contact" } })
    }
  }
}
