const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

router.post("/info", (req, res, next) => {
  try {
    const dirPath = path.join(__dirname, "../users");
    const dirContent = fs.readdirSync(dirPath);
    res.send({ username: dirContent[0] }); // like so ?
  } catch (error) {
    console.log("Error accessing user folder");
    next(error);
  }
});

module.exports = router;
