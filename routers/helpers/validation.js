const fs = require("fs");
const path = require("path");

function validate(username,id) {
  const userFolder = path.join(__dirname, `../../users/${username}/`); // replace gabby with username
  return [fs.existsSync(`${userFolder}${id}.json`), userFolder];
}

module.exports = validate;
