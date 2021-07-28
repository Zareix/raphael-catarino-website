require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Raphaël Catarino's Website",
        short_name: "Raphaël C.",
        description:
          "Apprenez en plus sur mon parcours, mes projets et mes compétences !",
        start_url: "/",
        theme_color: "#6b37bf",
        background_color: "#F9FAFB",
        display: "browser",
        icon: "src/images/svg/favicon.svg",
        lang: `fr`,
        localize: [
          {
            start_url: `/fr/`,
            lang: `fr`,
            name: `Raphaël Catarino - Portfolio`,
            short_name: `Raphaël C.`,
            description:
              "Apprenez en plus sur mon parcours, mes projets et mes compétences !",
          },
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Raphaël Catarino's Website`,
            short_name: `Raphaël C.`,
            description: "Learn more about me, my skills and projects !",
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: process.env.DATOCMS_API_TOKEN,
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    "gatsby-plugin-netlify",
  ],
}
