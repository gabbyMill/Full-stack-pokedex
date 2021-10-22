const express = require("express");
const router = express.Router();
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

// router.get("/pokemon/get:id", (req, res) => {
//   const pokemonId = req.id;
//   console.log(pokemonId);
// });

// router.get("/pokemon/query", (req, res) => {
//   res.send("User Router");
//   res.end();
// });

module.exports = router;
