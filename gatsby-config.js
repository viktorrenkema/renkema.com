module.exports = {
  siteMetadata: {
    title: `Viktor Renkema`,
    author: `@vrenkema`,
    image: "images/fav.png",
    twitterUsername: "@vrenkema",
  },
  plugins: [
    // Google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171615751-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     // path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `viktor-renkema-portfolio`,
        short_name: `viktor-renkema-portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`,
        // This path is relative to the root of the site.
      },
    },
  ],
}
