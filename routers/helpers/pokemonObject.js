var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

async function getPokemonFromApi(pokemonName) {
  try {
    return await P.getPokemonByName(pokemonName); // with Promise
  } catch (error) {
    console.log(`Pokemon Object Helper Folder Says:\n`);
    console.log("Error from catch: ");
    // next(error) // ?
    return error;
  }
}

async function returnPokemonObjFromBody(body) {
  // helper function
  const pokemon = await getPokemonFromApi(body); // .query or .params or something
  const { name, height, weight, types, abilities } = pokemon;
  const { front_default, back_default } = pokemon.sprites;
  return (pokemonObj = {
    name,
    height,
    weight,
    types,
    front_pic: front_default,
    back_pic: back_default,
    abilities,
  });
}

module.exports = returnPokemonObjFromBody;
