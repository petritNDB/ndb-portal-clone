module.exports = {
  siteMetadata: {
    title: `NDB`,
    description: `NDB Technology new and improved website`,
    author: `petrit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    // "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/assets/images/logo.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel`,
        path: `${__dirname}/src/markdown-pages/carousel`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
// query MyQuery {
//   allFile(
//     filter: {extension: {regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/"}}
//   ) {
//     totalCount
//     edges {
//       node {
//         relativePath
//         childrenImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// }
