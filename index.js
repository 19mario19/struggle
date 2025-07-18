import path from "path"
import dotenv from "dotenv"
import express from "express"
import { LayoutDir } from "./templates/Layout.js"
import { Navigation } from "./templates/Navigation.js"
import { Footer } from "./templates/Footer.js"
dotenv.config()

const PORT = 4000
const app = express()

app.use(express.json())

const __rootFolder = process.cwd() // This will be the project root when running from there
const publicDir = path.join(__rootFolder, "public")
const pagesDir = path.join(publicDir, "pages")
app.use(express.static(publicDir))

app.get("/", (req, res) => {
  res.sendFile(path.join(pagesDir, "home", "index.html"))
})
app.get("/new", (req, res) => {
  res.sendFile(path.join(pagesDir, "new", "index.html"))
})

// dynamic pages
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params

  const template = /*html*/ `
  <div class="container">
    <h3 id="title"></h3>
    <div data-id="${id}" class="buttons">
      <button id="win">WIN</button>
      <button id="lose">LOSE</button>
    </div>
    <div class="list"></div>
  </div>
  `

  const layout = LayoutDir(
    {
      content: { nav: Navigation(), body: template, footer: Footer() },
    },
    true,
    2,
  )

  try {
    return res.status(200).send(layout)
  } catch (error) {
    console.warn(error)
    return res.status(400).json({ message: "Error in creating dynamic page" })
  }
})

app.listen(PORT, () => {
  console.log(new Date().toLocaleTimeString())
  console.log(`Listening on port: ${PORT}`)
})
