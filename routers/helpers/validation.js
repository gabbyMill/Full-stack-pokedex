const fs = require("fs");
const path = require("path");
const username = fs.readdirSync(path.join(__dirname, "../../users"))[0];

function validate(id) {
  const userFolder = path.join(__dirname, `../../users/${username}/`); // replace gabby with username
  return [fs.existsSync(`${userFolder}${id}.json`), userFolder];
}

module.exports = validate;
