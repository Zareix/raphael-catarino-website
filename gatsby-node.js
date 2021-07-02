const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Website built !`)
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
