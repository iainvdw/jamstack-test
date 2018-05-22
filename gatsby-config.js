const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby POC',
        short_name: 'GatsbyPOC',
        start_url: '/',
        background_color: '#b4da55',
        theme_color: '#b4444d',
        display: 'minimal-ui',
        icon: 'static/images/icons/icon.png', // This path is relative to the root of the site.
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
  ],
};
