module.exports = {
  siteMetadata: {
    title: `NDB`,
    description: `NDB Technology new and improved website`,
    author: `petrit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
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
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: "src/assets/images/logo.svg",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/assets/images/logo.svg",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
