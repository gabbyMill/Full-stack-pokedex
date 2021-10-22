const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
const returnPokemonObjFromBody = require("./helpers/pokemonObject.js");
const validateAndGetDirLocation = require("./helpers/validation.js"); // index 0 is boolean, index 1 is dirLocation

// In reality every path here is prefixed by /pokemon
router.get("/get/:id", async (req, res) => {
  // console.log(req.params);

  const { id } = req.params;
  if (!+id) {
    throw new Error(`${id} is not a number`); // this is not yet handled
  } // ? Yea ?
  const pokemon = await returnPokemonObjFromBody(id); // not pokemonObject.js ?
  res.send(pokemon);
  // res.end(); ?
});

// In reality every path here is prefixed by /pokemon
router.get("/query", async (req, res) => {
  const pokemon = await returnPokemonObjFromBody(req.body.query);
  res.send(pokemon);
  res.end(); // needed ?
});

router.put("/catch/:id", async (req, res, next) => {
  // async ?
  // next ?
  const { id } = req.params; // replace gabby with username
  // should use try catch here ?
  if (validateAndGetDirLocation(id)[0]) {
    console.log(`file exists`);
    // instruction: generate an error with 403 error code
    res.status(403).send(`Pokemon already caught`); // should this be thrown ?
    next(); // next ? or res.end() ?
  } else {
    // should use try catch here ?
    const pokeObj = await returnPokemonObjFromBody(id);
    try {
      fs.writeFileSync(
        `${validateAndGetDirLocation(id)[1]}${id}.json`,
        JSON.stringify(pokeObj)
      );
      res.send(`Pokemon ${id} successfully caught`);
    } catch (error) {
      res.send(`Error creating pokemon ${id} file`);
      next(error);
    }
    // res.end(); // ?
    // next(error); ?
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
    // currently files are sorted by default way of js
    // change gabby to username
    let content = ""; // ugly way to pass the data ain't it ?
    const dirPath = path.join(__dirname, "../users/gabby/");
    fs.readdirSync(dirPath).forEach(file => {
      content += fs.readFileSync(dirPath + file, "utf-8");
    });
    res.send(content);
    // res.send("string");
  } catch (error) {
    console.log("Error in reading users/gabby folder");
    next(error);
  }
  // res.end(); // no need for this ?
});

module.exports = router;
