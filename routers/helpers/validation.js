const fs = require("fs");
const path = require("path");

function validate(id) {
  const userFolder = path.join(__dirname, "../../users/gabby/"); // replace gabby with username
  return [fs.existsSync(`${userFolder}${id}.json`), userFolder];
}

module.exports = validate;
