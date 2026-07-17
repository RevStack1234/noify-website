import { build } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { renderToString } from "react-dom/server"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"

const routes = [
  { path: "/", file: "index.html" },
  { path: "/solutions", file: "solutions/index.html" },
  { path: "/about", file: "about/index.html" },
  { path: "/become-a-distributor", file: "become-a-distributor/index.html" },
]

async function main() {
  // 1. Client build (produces assets + dist/index.html template)
  await build({
    plugins: [react(), tailwindcss()],
    base: "/",
    build: { outDir: "dist", emptyOutDir: true },
  })

  // 2. SSR build of the entry-server
  await build({
    plugins: [react(), tailwindcss()],
    build: {
      ssr: true,
      outDir: "dist-ssr",
      rollupOptions: { input: "src/entry-server.tsx" },
      minify: false,
      emptyOutDir: true,
    },
  })

  const template = readFileSync("dist/index.html", "utf-8")

  // Load the SSR bundle
  const { render } = await import(
    new URL("../dist-ssr/entry-server.js", import.meta.url).href
  ).catch(async () => {
    const mod = await import("../src/entry-server.tsx")
    return { render: mod.render }
  })

  for (const route of routes) {
    const helmetContext = {}
    const appHtml = renderToString(render(route.path, helmetContext))
    const { helmet } = helmetContext
    const headTags = helmet ? helmet.toString() : ""
    const finalHtml = template
      .replace("</head>", `${headTags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outPath = `dist/${route.file}`
    mkdirSync(outPath.split("/").slice(0, -1).join("/"), { recursive: true })
    writeFileSync(outPath, finalHtml)
    console.log(`Prerendered: ${route.path} -> ${outPath}`)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
