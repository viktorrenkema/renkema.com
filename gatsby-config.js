module.exports = {
  siteMetadata: {
    title: `Viktor Renkema`,
    description: `Hey, my name is Viktor. I’m a Psychology graduate that moved into the space of web design and development.`,
    author: `@vrenkema`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `viktor-renkema-site`,
        short_name: `renkema-site`,
        start_url: `/`,
        background_color: `#ff6661`,
        theme_color: `#ff6661`,
        display: `minimal-ui`,
        icon: `src/images/v-colored.png`,
        // This path is relative to the root of the site.
      },
    },
  ],
}
