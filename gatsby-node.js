const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Website built successfully!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const indexTemplate = path.resolve(`src/templates/index.js`)
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const blogIndexTemplate = path.resolve(`src/templates/blog-index.js`)

  const siteData = await graphql(`
    query {
      datoCmsSite {
        locales
      }
    }
  `)

  // Create index page for each locale and the default
  siteData.data.datoCmsSite.locales.forEach((locale) => {
    createPage({
      path: locale,
      component: indexTemplate,
      context: {
        locale: locale,
      },
    })
  })
  createPage({
    path: "/",
    component: indexTemplate,
    context: {
      locale: "fr",
    },
  })

  const blogPosts = await graphql(`
    query BlogPosts {
      allDatoCmsBlogPost {
        edges {
          node {
            id
            slug
            locale
          }
        }
      }
    }
  `)

  // Create blog posts page for each locale
  siteData.data.datoCmsSite.locales.forEach(async (locale) => {
    blogPosts.data.allDatoCmsBlogPost.edges
      .filter(({ node: post }) => post.locale === locale)
      .forEach(({ node: post }) => {
        if (locale === "fr")
          createPage({
            path: "blog/" + post.slug,
            component: blogPostTemplate,
            context: {
              id: post.id,
              locale: locale,
            },
          })

        createPage({
          path: locale + "/blog/" + post.slug,
          component: blogPostTemplate,
          context: {
            id: post.id,
            locale: locale,
          },
        })
      })

    if (locale === "fr")
      createPage({
        path: "blog",
        component: blogIndexTemplate,
        context: {
          locale: locale,
        },
      })
    createPage({
      path: locale + "/blog/",
      component: blogIndexTemplate,
      context: {
        locale: locale,
      },
    })
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
