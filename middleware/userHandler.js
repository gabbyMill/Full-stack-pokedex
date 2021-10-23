const fs = require("fs");
const path = require("path");

function userHandler(req, res, next) {
  console.log("user handler");
  if (!req.headers.username) {
    next({ status: 401, message: "Missing username header" });
  }

  const userFolder = path.join(__dirname, "../users/");
  if (!fs.readdirSync(userFolder)[0].includes(req.headers.username)) {
    fs.mkdirSync(`${userFolder}/${req.headers.username}`); // {recursive: true} not needed ?
  }
  next();
}

module.exports = userHandler;
