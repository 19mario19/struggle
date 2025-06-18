import path from "path"
import { routes } from "./routes/routes.js"
import { LayoutDir } from "./templates/Layout.js"
import { Navigation } from "./templates/Navigation.js"
import { Footer } from "./templates/Footer.js"

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public", "pages")

// console.log(routes)

const layout = LayoutDir(
  { title: "test", content: { nav: Navigation(), footer: Footer() } },
  true,
)

console.log(layout)
