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
 <div class="nav-wrap container">
    <ul class="parents">
    ${elements}
    </ul>
    <div class="controls">
        <button class="theme">
          <img src="/public/media/icons/theme.svg" alt="theme toggle icon" />
        </button>
        <button class="remove-all">
          <img src="/public/media/icons/remove-all.svg" alt="remove all posts icon" />
        </button>
      </div>
  </div>
</nav>`
}

export { Navigation }
