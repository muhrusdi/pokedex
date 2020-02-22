const path = require("path");
const { pathAlias } = require("./config");
const fetch = require("isomorphic-fetch");

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

exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
  const allPokemonJson = await allPokemon.json();
  // Create a page that lists all Pokémon.
  // createPage({
  //   path: `/`,
  //   component: require.resolve("./src/containers/home/index.tsx"),
  //   context: { allPokemon: allPokemonJson.results }
  // });
  // Create a page for each Pokémon.
  allPokemonJson.results.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve("./src/containers/detail/index.tsx"),
      context: { pokemon }
    });
  });
};
