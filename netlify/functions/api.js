import path from "path"
import dotenv from "dotenv"
import express from "express"
import serverless from "serverless-http"
import { LayoutDir } from "../../templates/Layout.js"
import { Navigation } from "../../templates/Navigation.js"
import { Footer } from "../../templates/Footer.js"

dotenv.config()

const __rootFolder = process.cwd() // This gets us the project root
const publicDir = path.join(__rootFolder, "public")
const pagesDir = path.join(publicDir, "pages")

const app = express()
app.use(express.json())

// Handle all routes since they're redirected to this function
app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(pagesDir, "home", "index.html"))
  } catch (error) {
    console.warn(error)
    return res.status(404).json({ message: "Page not found" })
  }
})

app.get("/new", (req, res) => {
  try {
    res.sendFile(path.join(pagesDir, "new", "index.html"))
  } catch (error) {
    console.warn(error)
    return res.status(404).json({ message: "Page not found" })
  }
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

export const handler = serverless(app)
