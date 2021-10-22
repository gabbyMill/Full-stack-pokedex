const express = require("express");
const userRouter = require("./routers/userRouter.js");
const pokemonRouter = require("./routers/pokemonRouter.js");
const app = express();
const port = 8080;

app.use(express.json());
app.use("/user", userRouter);
app.use("/pokemon", pokemonRouter);

// start the server
app.listen(port, function () {
  console.log("app started on port " + port);
});
