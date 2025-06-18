/**
 * Generates an HTML layout template as a string.
 *
 * @function
 * @param {Object} params - The parameters for the layout.
 * @param {string} params.title - The title of the HTML document.
 * @param {string} params.description - The meta description for the HTML document.
 * @param {Object} params.content - The content sections for the layout.
 * @param {string} [params.content.nav] - The navigation HTML content.
 * @param {string} [params.content.body] - The main body HTML content.
 * @param {string} [params.content.footer] - The footer HTML content.
 * @param {boolean} [script=false] - Whether to include the script tag for JavaScript.
 * @returns {string} The generated HTML layout as a string.
 */
function LayoutDir(
  { title, description, content: { nav, body, footer } },
  script = false,
) {
  return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${
      description
        ? `<meta name="description" content="${description}">`
        : ""
    }
    ${
      script
        ? '<script src="/js/script.js" defer></script>'
        : ""
    }
</head>
<body>
    ${nav ?? ""}
    ${body ?? ""}
    ${footer ?? ""}
</body>
</html>`
}

export { LayoutDir }
