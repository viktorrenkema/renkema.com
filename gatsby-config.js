module.exports = {
  siteMetadata: {
    title: `Portfolio of Viktor Renkema`,
    author: {
      name: `Viktor Renkema`,
      summary: `Psychology graduate moving into web development.`,
    },
    description: `Psychology graduate moving into web development.`,
    image: `https://i.ibb.co/CVqpHwz/groningen-7c27d7ef5c8875bad11adbda35810d08.jpg`,
    siteUrl: `https://renkema.com`,
    social: {
      twitter: `vrenkema`,
    },
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
        icon: `src/images/site-icon.png`,
        // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-171615751-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
  ],
}
