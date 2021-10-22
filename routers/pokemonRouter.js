const fs = require("fs");
const express = require("express");
const router = express.Router();
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

// In reality every path here is prefixed by /pokemon
router.get("/get/:id", async (req, res) => {
  // const id = req.params.id.toLowerCase(); // check if num instead
  const { id } = req.params.id;
  // if (!+id) throw new Error("Not a number"); // ? Yea ?
  const pokemon = await getPokemonFromApi(id);
  res.send(pokemon.name);
  // res.end();
});

// In reality every path here is prefixed by /pokemon
router.get("/query", async (req, res) => {
  const b = req.body;
  const pokemon = await getPokemonFromApi(b.query);
  const { name, height, weight, types, abilities } = pokemon;
  const { front_default, back_default } = pokemon.sprites;
  res.send({
    name,
    height,
    weight,
    types,
    front_pic: front_default,
    back_pic: back_default,
    abilities,
  });
  res.end();
});

router.put("/catch/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const parsedCaughtPokemon = JSON.parse(
    fs.readFileSync(`users/gabby/${"123"}.json`, "utf8")
  );
  const stringCaughtPokemon = fs.readFileSync(
    `users/gabby/${"123"}.json`,
    "utf8"
  );
  // replace 123 with id
  // const caughtObj = JSON.parse(caughtPokemonString);
  console.log(stringCaughtPokemon, parsedCaughtPokemon);
  res.send(id);
});

async function getPokemonFromApi(pokemonName) {
  try {
    const pokemon = await P.getPokemonByName(pokemonName); // with Promise
    // const jsoned = pokemon.json();
    // console.log(jsoned);
    return pokemon;
  } catch (error) {
    console.log("Error from catch: ");
    return error;
  }
}

// const pokemonRouter = () => {
//   console.log("pokemonRouter");
// };

module.exports = router;
