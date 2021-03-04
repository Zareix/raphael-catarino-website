module.exports = {
  siteMetadata: {
    title: "Raphaël Catarino",
    description:
      "Raphaël Catarino's portfolio : apprenez en plus sur moi !",
    author: "Raphaël Catarino",
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-transformer-remark',
      options:{
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Raphaël Catarino's Website",
        short_name: "RaphaëlC",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}
