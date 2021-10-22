function errorHandler(err, req, res, next) {
  console.log("in error handler");
  // console.log(req._headerSent);
  // console.log(req._httpMessage.ServerResponse._headerSent);
  // console.log(req._httpMessage);
  // console.log(req);
  // console.log(req.parse._httpServer);
  if (!req.res._headerSent) {
    return res.status(401).json(`Missing username header`);
  }
  if (err.message === "already caught") {
    return res.status(403).json("already caught"); // 403 for catch/release
  }
  // not found pokemons:
  return res.status(err.response.status).send(err.message); // is return the right command here ?
}

module.exports = errorHandler;
