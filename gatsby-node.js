const path = require("path");
const { pathAlias } = require("./config");
const fetch = require("isomorphic-fetch");
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

const obj = {};
pathAlias.map(item => {
  obj[item.alias] = path.resolve(__dirname, `src/${item.path}`);
  return obj;
});

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: obj
    }
  });
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      pokemon {
        pokemons(first: 20) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  `);
  const pokemons = data.pokemon.pokemons;
  // you'll call `createPage` for each result
  pokemons.edges.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/detail/${node.name}`,
      // This component will wrap our MDX content
      component: require.resolve(`./src/containers/detail/index.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: Number(node.id), name: node.name }
    });
  });
};

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter
}) => {
  const { createNode } = actions;
  createResolvers({
    POKEMON_Pokemon: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `https://img.pokemondb.net/artwork/${source.name}.jpg`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          });
        }
      }
    },
    POKEMON_PokemonSpecies: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `https://img.pokemondb.net/artwork/${source.name}.jpg`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          });
        }
      }
    }
  });
};
