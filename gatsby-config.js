module.exports = {
  siteMetadata: {
    title: "Portfolio",
    titleTemplate: "Raphaël Catarino | %s",
    description:
      "Apprenez en plus sur mon parcours, mes projets et mes compétences !",
    url: "https://www.raphael-catarino.fr", // No trailing slash allowed!
    image: "/images/page-snap.png", // Path to your image you placed in the 'static' folder
    author: "Raphaël Catarino",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              tracedSVG: true,
              backgroundColor: "transparent",
            },
          },
        ],
      },
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
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
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "fr",
        useLangKeyLayout: false,
      },
    },
  ],
}
