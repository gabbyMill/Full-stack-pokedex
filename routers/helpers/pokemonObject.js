var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

async function getPokemonFromApi(pokemonName) {
  return await P.getPokemonByName(pokemonName); // with Promise
  // catch (error) {
  //   console.log(`Pokemon Object Helper Folder Says:`);
  //   console.log("Error from catch: ");
  //   // next(error) // ?
  //   // return error;
  // }
}

async function returnPokemonObjFromBody(body) {
  // helper function
  const pokemon = await getPokemonFromApi(body); // .query or .params or something
  const { name, height, weight, types, abilities, id } = pokemon;
  const { front_default, back_default } = pokemon.sprites;
  return (pokemonObj = {
    id
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
