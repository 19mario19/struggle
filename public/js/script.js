import { DBManager } from "../data/db.js"
import { quotes, getExperieceTitle, getPowerTitle } from "./quotes.js"

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded!")

  const { pathname } = getCurrentURL()
  // console.log(pathname)

  let objects = [
    {
      id: 1,
      name: "Playing Video Games Excessively",
      description: "Spending too much time gaming instead of being productive",
      history: [],
    },
    {
      id: 2,
      name: "Watching Erotic Movies",
      description: "Consuming adult content and its impact on focus or mood",
      history: [],
    },
    {
      id: 3,
      name: "Negative Thoughts",
      description: "Recurring pessimistic or harmful thoughts",
      history: [],
    },
    {
      id: 4,
      name: "Mindless Social Media Scrolling",
      description: "Losing time and attention to endless feeds",
      history: [],
    },
    {
      id: 5,
      name: "Junk Food Binges",
      description: "Overeating unhealthy snacks or fast food",
      history: [],
    },
    {
      id: 6,
      name: "Skipping Exercise",
      description: "Avoiding physical activity despite intentions",
      history: [],
    },
    {
      id: 7,
      name: "Procrastinating Important Tasks",
      description: "Delaying work or responsibilities for distractions",
      history: [],
    },
    {
      id: 8,
      name: "Arguing Online",
      description: "Engaging in unproductive or heated internet debates",
      history: [],
    },
    {
      id: 9,
      name: "Impulse Shopping",
      description: "Buying things online or in stores without real need",
      history: [],
    },
    {
      id: 10,
      name: "Staying Up Too Late",
      description: "Sacrificing sleep for entertainment or distractions",
      history: [],
    },
  ]

  const db = DBManager(objects)
  // db.removeAll()

  // for individual page
  if (pathname.includes("post")) {
    const buttons = document.querySelector(".buttons")
    const id = buttons.dataset.id
    // console.log(id)

    const title = document?.querySelector("#title")
    // console.log(title)
    // console.log(db.data)

    const currentPost = db.getById(id)
    createElements(currentPost.history)

    title.textContent = currentPost?.name ?? "no title"

    const addWin = buttons?.querySelector("#win")
    const addLose = buttons?.querySelector("#lose")
    // init
    addWin.textContent = db.getCountWins(id)
    addLose.textContent = db.getCountLoses(id)

    addWin.addEventListener("click", () => {
      db.addWin(id)
      createElements(db.getHistoryById(id))
      // displayHistory(db.getById(id).history)
      addWin.textContent = db.getCountWins(id)
    })
    addLose.addEventListener("click", () => {
      db.addLose(id)
      // displayHistory(db.getHistoryById(id))
      createElements(db.getHistoryById(id))

      addLose.textContent = db.getCountLoses(id)
    })
  }
  // home page
  if (pathname === "/") {
    // if (pathname.includes("home")) {
    // console.log(db.data)
    createParents(db.data, db)
  }

  // new post
  if (pathname.includes("new")) {
    const form = document.querySelector("#create")

    const name = form?.querySelector("#name")
    const description = form?.querySelector("#description")

    form?.addEventListener("submit", (e) => {
      e.preventDefault()

      let newObject = {
        name: name.value.trim(),
        description: description.value.trim(),
      }
      // console.log(newObject)

      if (newObject.name === "" || newObject.description === "") {
        console.log("Please complete both inputs!")
        return
      }

      db.add(newObject)

      name.value = ""
      description.value = ""

      const origin = window.location.origin
      window.location.href = origin
    })

    // adding examples

    const container = document.querySelector(".container")
    const section = document.createElement("section")
    section.classList.add("list")
    container.append(section)

    const message = document.createElement("h4")
    message.classList.add("message")
    message.textContent = "Examples below."
    section.append(message)

    const ul = document.createElement("ul")
    section.append(ul)
    ul.innerHTML = ""
    for (let item of objects) {
      let li = document.createElement("li")
      let title = document.createElement("h4")
      title.textContent = item.name
      let des = document.createElement("p")
      des.textContent = item.description
      li.append(title, des)
      ul.append(li)

      li.addEventListener("click", () => {
        name.value = item.name
        description.value = item.description
      })
    }
  }
})

function createParents(array, db) {
  const list = document.querySelector(".list")
  list.innerHTML = ""

  const ul = document.createElement("ul")
  list.append(ul)
  for (let item of array) {
    const li = document.createElement("li")

    const top = document.createElement("div")
    top.classList.add("top")
    li.append(top)

    const anchor = document.createElement("a")
    anchor.href = `/posts/${item.id}`

    const title = document.createElement("h2")
    title.textContent = item.name

    const description = document.createElement("p")
    description.textContent = item.description

    // anchor.append(title)
    anchor.append(title)

    const deleteElement = document.createElement("button")
    deleteElement.textContent = "delete"

    deleteElement.addEventListener("click", () => {
      // remove from local storage

      if (!confirm("Are you sure about that?")) return

      db.removeById(item.id)

      // remove from view
      li.style.display = "none"
    })

    top.append(anchor, deleteElement)

    const mid = document.createElement("div")
    mid.classList.add("mid")
    li.append(mid)

    mid.append(description)

    const bottom = document.createElement("div")
    bottom.classList.add("bottom")
    li.append(bottom)

    const winrate = document.createElement("h3")
    winrate.classList.add("winrate")
    winrate.textContent = db.getWinrate(item.id)

    // count
    const winCount = document.createElement("h3")
    winCount.classList.add("winCount")
    winCount.textContent = db.getCountWins(item.id)

    const loseCount = document.createElement("h3")
    loseCount.classList.add("loseCount")
    loseCount.textContent = db.getCountLoses(item.id)

    bottom.append(winrate, winCount, loseCount)

    // bottom.append(deleteElement)

    // quote
    const quote = document.createElement("p")
    quote.classList.add("quote")

    const experiece = db.getExperience(item.id)

    const cleanExperiece = experiece - (experiece % 10)

    const itemRank = Number(db.getWinrate(item.id).split("%")[0])
    const cleanRank = itemRank - (itemRank % 10)

    const itemQuotesArray = quotes[cleanRank][cleanExperiece] || []
    // console.log(itemQuotesArray)
    const len = itemQuotesArray?.length ?? 0

    const random = Math.floor(Math.random() * len)

    // console.log(itemQuotesArray[random])

    console.log(item.id)
    console.log("experience: ", getExperieceTitle(cleanExperiece))
    console.log("power :", getPowerTitle(cleanRank))
    console.log("\n")

    quote.textContent = itemQuotesArray[random]

    li.append(quote)

    ul.append(li)
  }
  // console.log(array.length)
}

function createElements(array) {
  const list = document.querySelector(".list")
  list.innerHTML = ""

  const ul = document.createElement("ul")
  ul.classList.add("individual")
  list.append(ul)

  ul.innerHTML = ""
  for (let item of array) {
    const li = document.createElement("li")

    const state = document.createElement("p")
    state.classList.add("state")
    state.textContent = item.state

    const createdAt = document.createElement("span")
    createdAt.classList.add("created-at")

    const date = document.createElement("p")
    date.classList.add("date")
    date.textContent = item.createdAt.date

    const time = document.createElement("p")
    time.classList.add("time")
    time.textContent = item.createdAt.time

    createdAt.append(time, date)

    li.append(state, createdAt)

    if (item.state === "win") li.classList.add("win")
    if (item.state === "lose") li.classList.add("lose")
    ul.append(li)
  }
  // console.log(array.length)
}
function displayHistory(array) {
  for (let item of array) {
    console.log("Item: ", item.createdAt)
  }
  // console.log(array.length)
}
function getCurrentURL() {
  for (let item in window.location) {
    // console.log(item, window.location[item])
  }
  return { url: window.location.href, pathname: window.location.pathname }
}
