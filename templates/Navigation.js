import { routes } from "../routes/routes.js"

function Navigation() {
  const elements = routes
    ?.map((el) => {
      return /*html*/ `
    <li><a href="${el.path}">${el.name}</a></li>
  
    `
    })
    .join("")

  return /*html*/ `
<nav class="main-header">
    <ul class="parents">
    ${elements}
    </ul>
</nav>`
}

export { Navigation }
