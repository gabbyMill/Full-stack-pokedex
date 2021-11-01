const express = require("express");
const userRouter = require("./routers/userRouter.js");
const pokemonRouter = require("./routers/pokemonRouter.js");
const userHandler = require("./middleware/userHandler.js");
const errorHandler = require("./middleware/errorHandler.js");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/pokemon", userHandler, pokemonRouter);
app.use(errorHandler);

// start the server
app.listen(port, function () {
  console.log("app started on port " + port);
});
