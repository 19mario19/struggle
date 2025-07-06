// function DBManager(init, name) {
function DBManager(init) {
  let name = "testing"

  let data = [...init]

  const store = {
    get data() {
      const ls = JSON.parse(localStorage.getItem(name))
      return ls
    },
    set data(newData) {
      localStorage.setItem(name, JSON.stringify(newData))
    },
  }

  if (!store.data) store.data = data

  //   init
  data = store.data

  return {
    get data() {
      if (!store.data) {
        console.log("nothing in localstorage")

        data = []
      }
      data = store.data

      return data
    },
    set data(newData) {
      data = [...newData]

      // to local storage
      store.data = data
    },
    getById: (id) => {
      data = store.data

      console.log(id)

      let element = data.find((el) => el.id === id)

      if(!element) throw new Error(`Could not find the element with id: ${id}`)
      return element

      // for (let item in data) {
      //   let el = data[item]
      //   // console.log(el.id == id)

      //   if (el.id === id) {
      //     return el
      //   }
      // }

      // console.log(typeof [...array])

      // return array?.find((el) => el.id === id)
    },
    getHistoryById: (id) => {
      data = store.data

      for (let item in data) {
        let el = data[item]
        // console.log(el.id == id)

        if (el.id == id) {
          return el.history
        }
      }
    },
    add: (el) => {
      data = store.data

      data = [{ ...el, id: crypto.randomUUID(), history: [] }, ...data]

      // to local storage
      store.data = data
    },
    removeById: (id) => {
      data = store.data

      // console.log(typeof data)

      let indexOfElement = null
      const element = data.find((el, index) => {
        if (el.id === id) indexOfElement = index
        return el.id === id
      })
      if (!element) throw new Error("Could not find the element")

      data.splice(indexOfElement, 1)
      // console.log(removedElement)
      // console.log(
      //   `Element with id: ${id} and title: ${removedElement.name} has been removed!`,
      // )

      store.data = data
    },
    removeAll: () => {
      data = []

      // to local storage
      // store.data = data
      localStorage.removeItem(name)
    },
    addWin(id) {
      let object = {
        state: "win",
        createdAt: {
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        },
      }

      data = data.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            history: [object, ...el.history],
          }
        }
        return el
      })
      store.data = data
    },
    addLose(id) {
      let object = {
        state: "lose",
        createdAt: {
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        },
      }

      data = data.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            history: [object, ...el.history],
          }
        }
        return el
      })

      // to local storage
      store.data = data
    },
    getWinrate(id) {
      let winrate = null
      const element = data?.find((el) => el.id === id)

      if (!element) throw new Error("Could not find the element with id: ", id)

      // console.log(element)

      if (!element.history.length <= 0) {
        const wins = element?.history?.filter((el) => el.state === "win").length
        const len = element?.history.length

        winrate = ((wins * 100) / len).toFixed(2) + " %"
      } else {
        winrate = 0 + " %"
      }

      return winrate
    },
    getCountWins: (id) => {
      const element = data?.find((el) => el.id === id)

      const wins = element.history.filter((item) => item.state === "win")

      // console.log(wins)
      return wins.length
    },
    getCountLoses: (id) => {
      const element = data?.find((el) => el.id === id)

      const wins = element.history.filter((item) => item.state === "lose")

      // console.log(wins)
      return wins.length
    },
    getExperience: (id) => {
      const element = data?.find((el) => el.id === id)

      return element.history.length
    },
  }
}

export { DBManager }
