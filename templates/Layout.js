function LayoutDir(
  { title, description, content: { nav, body, footer } },
  script = false,
  pathDepth = 1,
) {
  const dots = ".".repeat(pathDepth)

  const stylePath = dots + "/global.css"

  return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${stylePath}" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <title>${title}</title>
    ${description ? `<meta name="description" content="${description}">` : ""}
    ${script ? '<script src="/js/script.js" defer type="module"></script>' : ""}
</head>
<body>
    ${nav ?? ""}
    ${body ?? ""}
    ${footer ?? ""}
</body>
</html>`
}

export { LayoutDir }
