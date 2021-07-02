const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Website built successfully!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const index = path.resolve(`src/templates/index.js`)

  const result = await graphql(`
    query {
      datoCmsSite {
        locales
      }
    }
  `)

  result.data.datoCmsSite.locales.forEach((locale) => {
    createPage({
      path: locale,
      component: index,
      context: {
        locale: locale,
      },
    })
  })

  createPage({
    path: "/",
    component: index,
    context: {
      locale: "fr",
    },
  })
}

// Handle multilingue 404 page
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
