import { DBManager } from "../data/db.js"
import {
  quotes,
  getExperieceTitle,
  getPowerTitle,
  EXPERIENCE,
  POWERS,
} from "./quotes.js"

const name = "struggles-settings"

const LAYOUT = {
  DETAILED: "DETAILED",
  COMPACT: "COMPACT",
}

const THEME = {
  LIGHT: "LIGHT",
  DARK: "DARK",
}

let settings = {
  layout: LAYOUT.DETAILED,
  theme: THEME.DARK,
}

/**
 * Updates a specific setting and persists the changes to localStorage.
 *
 * @param {keyof typeof settings} key - The setting key to update (e.g., "layout", "theme", "edit").
 * @param {string | boolean} value - The new value for the specified setting.
 * @throws {Error} Throws an error if key or value is not provided.
 */
function getCurrentSettings() {
  return JSON.parse(localStorage.getItem(name))
}

function setSetting(key, value) {
  // if (!key || !value) throw new Error("Fill key and value!")

  settings[key] = value
  // console.log(settings[key])

  localStorage.setItem(name, JSON.stringify(settings))
  console.log("get after set => ", getCurrentSettings())
}

function setTheme(theme) {
  setSetting("theme", theme)
}

// get from local storage
let localSettings = JSON.parse(localStorage.getItem(name))
if (localSettings) {
  settings = { ...localSettings }
  if (settings.theme === THEME.LIGHT) document.body.classList.add("light-theme")
} else {
  // first init
  localStorage.setItem(name, JSON.stringify(settings))
}

// console.log(settings)

window.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM loaded!")

  const { pathname } = getCurrentURL()
  // // console.log(pathname)

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

  const db = DBManager([])

  // for all pages

  const controls = document.querySelector(".controls")

  const btnTheme = controls?.querySelector(".theme")
  getCurrentSettings().theme === THEME.LIGHT
    ? btnTheme.classList.add("active")
    : btnTheme.classList.remove("active")

  const removeAll = controls?.querySelector(".remove-all")

  removeAll.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
      localStorage.removeItem(name)
      db.removeAll()

      location.reload()
    } else {
      alert("You refused the action of removing all the data!")
    }
  })

  btnTheme.addEventListener("click", () => {
    console.log("theme clicked!")
    const { theme } = getCurrentSettings()

    if (theme === THEME.DARK) {
      setTheme(THEME.LIGHT)
      document.body.classList.add("light-theme")
      btnTheme.classList.add("active")
    } else if (theme === THEME.LIGHT) {
      document.body.classList.remove("light-theme")
      setTheme(THEME.DARK)
      btnTheme.classList.remove("active")
    } else {
      throw new Error("You can heve eigher light or dark theme!")
    }
  })

  // for individual page
  if (pathname.includes("post")) {
    const buttons = document.querySelector(".buttons")
    const id = buttons.dataset.id
    // // console.log(id)

    const title = document?.querySelector("#title")
    // // console.log(title)
    // // console.log(db.data)

    const currentPost = db.getById(id)
    createElements(currentPost.history)

    title.textContent = currentPost?.name ?? "no title"
    document.title = currentPost?.name ?? "no title"

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
    createParents(db.data, db) // keep first, as it is clearing the whole innerHTML
    const btnView = controls?.querySelector(".view")
    getCurrentSettings().layout === LAYOUT.DETAILED
      ? btnView.classList.add("active")
      : btnView.classList.remove("active")

    // get elements to hide
    const toHideArray = document.querySelectorAll(".wrapper")
    const elements = []
    toHideArray.forEach((el) => {
      elements.push(el)
    })

    btnView.addEventListener("click", () => {
      const toHideArray = document.querySelectorAll(".wrapper")
      // const elements = []

      // elements.push(el)

      const { layout } = getCurrentSettings()

      if (layout === LAYOUT.DETAILED) {
        // el.classList.toggle("active")

        setSetting("layout", LAYOUT.COMPACT)
        hideElements(toHideArray)
        btnView.classList.remove("active")

        // console.log("CURRENT: ", getCurrentSettings().layout)
      } else if (layout === LAYOUT.COMPACT) {
        setSetting("layout", LAYOUT.DETAILED)
        showElements(toHideArray)
        btnView.classList.add("active")
        // console.log("CURRENT: ", getCurrentSettings().layout)
      }

      // el.classList.toggle("active")
    })

    let edit = true
    const btnEdit = controls?.querySelector(".edit")

    btnEdit.addEventListener("click", () => {
      console.log("clicked edit: => ")
      const topArray = document.querySelectorAll(".top button")
      let buttons = []
      topArray.forEach((btn) => {
        buttons.push(btn)
      })

      if (edit) {
        showElements(buttons)
        edit = false
        setSetting("edit", false)
      } else if (!edit) {
        hideElements(buttons)
        edit = true
      }
    })
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
      // // console.log(newObject)

      if (newObject.name === "" || newObject.description === "") {
        // console.log("Please complete both inputs!")
        return
      }

      db.add(newObject)

      name.value = ""
      description.value = ""

      const origin = window.location.origin
      window.location.href = origin
    })

    // adding examples

    const container = document.querySelector("main.container")

    const section = document.createElement("section")
    section.classList.add("list")
    container.append(section)

    // const message = document.createElement("h4")
    // message.classList.add("message")
    // message.textContent = "Examples below."
    // section.append(message)

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

        window.scrollTo({ top: 0, behavior: "smooth" })
      })
    }
  }
})

function createParents(array, db) {
  const list = document.querySelector(".list")
  list.innerHTML = ""

  // creating the elements
  const ul = document.createElement("ul")
  list.append(ul)
  for (let item of array) {
    const li = document.createElement("li")

    const top = document.createElement("div")
    top.classList.add("top")
    li.append(top)

    const anchor = document.createElement("a")
    anchor.href = `/posts/${item.id}`

    const title = document.createElement("h4")
    title.textContent = item.name

    const description = document.createElement("p")
    description.textContent = item.description

    // anchor.append(title)
    anchor.append(title)

    const deleteElement = document.createElement("button")
    deleteElement.classList.add("delete")
    deleteElement.style.display = "none"

    const dImg = document.createElement("img")
    dImg.src = "/media/delete.svg"
    deleteElement.append(dImg)
    // deleteElement.textContent = "remove."

    deleteElement.addEventListener("click", () => {
      // remove from local storage

      if (!confirm("Are you sure about that?")) return

      db.removeById(item.id)

      // remove from view
      li.style.display = "none"
    })

    top.append(anchor)
    top.append(deleteElement)

    const mid = document.createElement("div")
    mid.classList.add("mid")

    li.append(mid)

    mid.append(description)

    const bottom = document.createElement("div")
    bottom.classList.add("bottom")

    li.append(bottom)

    // const winrate = document.createElement("p")
    // winrate.classList.add("winrate")
    let winrate = db.getWinrate(item.id)
    // // console.log(winrate)
    // count
    const winCount = document.createElement("h3")
    winCount.classList.add("winCount")
    winCount.classList.add(winrate)
    winCount.style.flex = winrate === 0 ? 1 : winrate
    winCount.textContent = db.getCountWins(item.id)

    const loseCount = document.createElement("h3")
    loseCount.classList.add("loseCount")
    loseCount.style.flex = winrate === 0 ? 1 : 100 - winrate
    loseCount.textContent = db.getCountLoses(item.id)

    bottom.append(winCount, loseCount)
    // bottom.append(winCount, winrate, loseCount)

    // bottom.append(deleteElement)
    const experiece = db.getExperience(item.id)
    const itemRank = Number(db.getWinrate(item.id))

    // ranking
    const wrapper = document.createElement("section")

    if (getCurrentSettings().layout === LAYOUT.DETAILED) {
      wrapper.classList.add("active")
    }

    wrapper.classList.add("wrapper")

    // power - winrate
    const powerWrap = document.createElement("div")
    wrapper.append(powerWrap)
    powerWrap.classList.add("wrap", "power")

    const powerTop = document.createElement("div")
    powerTop.classList.add("top")
    powerWrap.append(powerTop)

    const powerTitle = document.createElement("p")
    powerTitle.textContent = "Power / winrate"

    const powerRank = document.createElement("p")
    powerRank.textContent = getPowerTitle(itemRank)

    powerTop.append(powerTitle, powerRank)

    const powerBot = document.createElement("div")
    powerBot.classList.add("bot")
    powerWrap.append(powerBot)

    const stars = (winrate - (winrate % 10)) / 10

    for (let i = 0; i < Object.values(POWERS).length; i++) {
      const powerImg = document.createElement("img")
      if (i <= stars) {
        powerImg.src = "/media/star-filled.svg"
      } else {
        powerImg.src = "/media/star.svg"
      }
      powerBot.append(powerImg)
    }

    // experience - tries

    const expWrap = document.createElement("div")
    wrapper.append(expWrap)
    expWrap.classList.add("wrap", "exp")

    const expTop = document.createElement("div")
    expTop.classList.add("top")
    expWrap.append(expTop)

    const expTitle = document.createElement("p")
    expTitle.textContent = "Experience / tries"

    const expRank = document.createElement("p")
    expRank.textContent = getExperieceTitle(experiece)

    expTop.append(expTitle, expRank)

    const expBot = document.createElement("div")
    expBot.classList.add("bot")
    expWrap.append(expBot)

    const expArray = Object.keys(EXPERIENCE)

    // // console.log(expArray.indexOf(getExperieceTitle(experiece)))

    const stars2 = expArray.indexOf(getExperieceTitle(experiece))

    for (let i = 0; i < expArray.length; i++) {
      const expImg = document.createElement("img")
      if (i <= stars2) {
        expImg.src = "/media/energy-filled.svg"
      } else {
        expImg.src = "/media/energy.svg"
      }
      expBot.append(expImg)
    }

    li.append(wrapper)

    // quote
    const quote = document.createElement("p")
    quote.classList.add("quote")

    const itemQuotesArray =
      quotes[POWERS[getPowerTitle(itemRank)]][
        EXPERIENCE[getExperieceTitle(experiece)]
      ] || []
    // // console.log(itemQuotesArray)
    const len = itemQuotesArray?.length ?? 0

    const random = Math.floor(Math.random() * len)

    // // console.log(itemQuotesArray[random])

    quote.textContent = itemQuotesArray[random]

    li.append(quote)

    ul.append(li)
  }

  // // console.log(array.length)
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
  // // console.log(array.length)
}
function getCurrentURL() {
  return { url: window.location.href, pathname: window.location.pathname }
}
function hideElement(element) {
  element.style.display = "none"
}
function hideElements(array) {
  for (let item of array) hideElement(item)
}
function showElement(element) {
  element.style.display = "flex"
}
function showElements(array) {
  for (let item of array) showElement(item)
}
