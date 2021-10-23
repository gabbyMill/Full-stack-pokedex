function errorHandler(err, req, res, next) {
  console.log("in error handler");
  // check for headers ? do it in middleware
  if (!err.status) {
    return res.status(500).json(err.message);
  }
  return res.status(err.status).json(err.message);
}

module.exports = errorHandler;

// console.log(req._headerSent);
// console.log(req._httpMessage.ServerResponse._headerSent);
// console.log(req._httpMessage);
// console.log(req);
// console.log(req.parse._httpServer);
// res.json(err);
// res.json(err);
// console.log(err.config.headers); // ._pendingData

// if (!req.res._headerSent) {
//   // && !err.config.headers.hasOwnProperty("Accept")
//   console.log("headers");
//   return res.status(401).json(`Missing username header`);
// }
// if (err.config.method === "get") {
//   console.log(err.config);
//   console.log("get"); // not found pokemon
//   return res.status(404).json(err.message);
// }
// if (err.message === "already caught") {
//   console.log(1);
//   return res.status(403).json("already caught"); // 403 for catch/release
// }
// // not found pokemons:
// console.log(2);
// return res.status(err.response.status).send(err.message); // is return the right command here ?
