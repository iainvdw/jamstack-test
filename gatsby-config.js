const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'https://jamstack-test.iainvanderwiel.nl/',
  },
  plugins: [
    // 'gatsby-plugin-react-next', // React 16 upgrade
    'gatsby-plugin-preact', // Use Preact instead of React
    // {
    //   resolve: 'gatsby-plugin-sentry',
    //   options: {
    //     dsn: process.env.SENTRY_DSN,
    //     version: '3.24.0',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby POC',
        short_name: 'GatsbyPOC',
        start_url: '/',
        background_color: '#b4da55',
        theme_color: '#b4444d',
        display: 'minimal-ui',
        icon: 'static/images/icons/icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
};
