import path from "path"
import { LayoutDir } from "./templates/Layout.js"
import { Navigation } from "./templates/Navigation.js"
import { Footer } from "./templates/Footer.js"




const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public", "pages")

routes = [
  {
    name: "All fights",
    path: "/",
  },
  {
    name: "Record new fight",
    path: "/new",
  },
]

const layout = LayoutDir(
  { title: "test", content: { nav: Navigation(), footer: Footer() } },
  true,
)

console.log(layout)
