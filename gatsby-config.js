module.exports = {
  siteMetadata: {
    title: "Pokedex - muhrusdi.me",
    description: "All the Pokémon data you'll ever need in one place",
    author: "@muhrusdiid"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "POKEMON",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "pokemon",
        // Url to query from
        url: "https://graphql-pokemon.now.sh"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-antd",
    {
      resolve: "gatsby-plugin-import",
      options: {
        libraryName: "antd",
        style: true
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        modifyVars: {},
        javascriptEnabled: true
      }
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter",
        short_name: "starter",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#333",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
