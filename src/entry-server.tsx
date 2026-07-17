import { createElement } from "react"
import { StaticRouter } from "react-router"
import { HelmetProvider } from "react-helmet-async"
import { App } from "./App"

export function render(url: string, helmetContext: Record<string, unknown>) {
  return createElement(
    HelmetProvider,
    { context: helmetContext },
    createElement(
      StaticRouter,
      { location: url },
      createElement(App),
    ),
  )
}
