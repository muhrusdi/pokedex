const path = require("path");
const { pathAlias } = require("./config");
const fetch = require("isomorphic-fetch");
const {
  createFilePath,
  createRemoteFileNode
} = require(`gatsby-source-filesystem`);

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

// exports.onCreatePage = async ({ page, actions, graphql }) => {
//   const { createPage, deletePage } = actions;
//   const oldPage = Object.assign({}, page);
//   if (page.path === "/") {
//     // const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
//     // const allPokemonJson = await allPokemon.json();
//     // Replace new page with old page
//     const { data } = await graphql(`
//       query {
//         pokemon {
//           pokemons(first: 20) {
//             id
//             name
//             types
//             number
//             image
//           }
//         }
//       }
//     `);
//     deletePage(oldPage);
//     console.log("0000", data);
//     createPage({
//       ...page,
//       context: { pokemons: data.pokemon }
//     });
//   }
// };

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // `getPokemonData` is a function that fetches our data
  // const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
  // const allPokemonJson = await allPokemon.json();
  // Create a page that lists all Pokémon.
  // createPage({
  //   path: `/`,
  //   component: require.resolve("./src/containers/home/index.tsx"),
  //   context: { allPokemon: allPokemonJson.results }
  // });
  // Create a page for each Pokémon.
  // allPokemonJson.results.forEach(pokemon => {
  //   createPage({
  //     path: `/pokemon/${pokemon.name}/`,
  //     component: require.resolve("./src/containers/detail/index.tsx"),
  //     context: { pokemon }
  //   });
  // });
  // const { data } = await graphql(`
  //   query {
  //     pokemon {
  //       pokemons(first: 20) {
  //         id
  //         name
  //         types
  //         number
  //         image
  //       }
  //     }
  //   }
  // `);
  // console.log("00000", data);
  // createPage({
  //   path: "/",
  //   component: require.resolve(`./src/containers/home/index.tsx`),
  //   context: { pokemons: data }
  // });
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
          console.log("---", source.name, source);
          return createRemoteFileNode({
            url: `https://img.pokemondb.net/artwork/${source.name.toLowerCase()}.jpg`,
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
