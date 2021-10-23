const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const axios = require('axios');
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
const returnPokemonObjFromBody = require("./helpers/pokemonObject.js");
const validateAndGetDirLocation = require("./helpers/validation.js"); // index 0 is boolean, index 1 is dirLocation
const username = fs.readdirSync(path.join(__dirname, "../users"))[0];

router.get('/getDetailed/:id', async (req,res,next) => {
  const {id} = req.params;

  try {
    const pokemonData = await returnPokemonObjFromBody(id);

    const abilitiesRes = await Promise.allSettled(pokemonData.abilities.map(async ({ability: {url, name}}) => {
      const axiosRes = await axios.get(url);
      const pokemonList = axiosRes.data.pokemon.map(({pokemon}) => pokemon.name);
      return {
        name: name,
        list: pokemonList
      }
    }));
    pokemonData.abilities = abilitiesRes.filter(({status}) => status === 'fulfilled').map(({value}) => value);

    const typesRes = await Promise.allSettled(pokemonData.types.map(async ({type:{name, url}}) => {
      const axiosRes = await axios.get(url);
      const pokemonList = axiosRes.data.pokemon.map(({pokemon}) => pokemon.name);
      return {
        name: name,
        list: pokemonList
      }
    }));
    pokemonData.types = typesRes.filter(({status}) => status === 'fulfilled').map(({value}) => value);

    res.send(pokemonData);
  } catch (err) {
    if (err.isAxiosError) next({ status: 404, message: "Pokemon not found" });
    else next(err);
  }

});


// In reality every path here is prefixed by /pokemon
router.get("/get/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const pokemon = await returnPokemonObjFromBody(id); // not pokemonObject.js ?
    res.send(pokemon);
    if (!+id) {
      console.log(`${id} is not a number`); // this is not yet handled
    }
  } catch (error) {
    if (error.isAxiosError) {
      next({ status: 404, message: `Pokemont not found` });
    }
    next(error);
  }
  // res.end(); ?
});

// In reality every path here is prefixed by /pokemon
router.get("/query", async (req, res, next) => {
  try {
    const pokemon = await returnPokemonObjFromBody(req.body.query);
    res.send(pokemon);
    res.end(); // needed ?
  } catch (error) {
    if (error.isAxiosError) {
      next({ status: 404, message: `Pokemont not found` });
    }
    console.log("Problem extracting pokemon from query");
    next(error);
  }
});

router.put("/catch/:id", async (req, res, next) => {
  // async ?
  // next ?
  const { id } = req.params;
  try {
    if (validateAndGetDirLocation(id)[0]) {
      // instruction: generate an error with 403 error code
      next({ status: 403, message: `already caught` }); // this ok way ?
    } else {
      const pokeObj = await returnPokemonObjFromBody(id);
      try {
        fs.writeFileSync(
          `${validateAndGetDirLocation(id)[1]}${id}.json`,
          JSON.stringify(pokeObj)
        );
        res.send(`Pokemon ${id} successfully caught`);
      } catch (error) {
        console.log(`Error creating pokemon ${id} file`);
        // res.send(`Error creating pokemon ${id} file`);
        next(error);
      }
      // res.end(); // ?
    }
  } catch (error) {
    console.log("what will cause this error ?");
    next(error);
  }
});

router.delete("/release/:id", async (req, res, next) => {
  const { id } = req.params;
  if (validateAndGetDirLocation(id)[0]) {
    // try catch before unlinkSync ? why shouldn't it work ?
    try {
      fs.unlinkSync(`${validateAndGetDirLocation(id)[1]}${id}.json`);
      res.send(`Pokemon ${id} deleted successfully`); // res.json or res.send ?
      next(); // next or res.end ?
    } catch (error) {
      console.log("Error occurred in releasing");
      next(error);
    }
  } else {
    res.status(403).send(`Pokemon hasn't been caught yet`);
  }
});

// later please change the places that use longFunctionNameWithArrayReturn to just use __dirname
router.get("", (req, res, next) => {
  try {
    let content = ""; // ugly way to pass the data ain't it ?
    const dirPath = path.join(__dirname, `../users/${username}/`);
    fs.readdirSync(dirPath).forEach(file => {
      content += fs.readFileSync(dirPath + file, "utf-8");
    });
    res.send(content);
    // res.send("string");
  } catch (error) {
    console.log(`Error in reading users/${username} folder`);
    next(error);
  }
  // res.end(); // no need for this ?
});

module.exports = router;
