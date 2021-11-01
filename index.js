const express = require("express");
const userRouter = require("./routers/userRouter.js");
const pokemonRouter = require("./routers/pokemonRouter.js");
const userHandler = require("./middleware/userHandler.js");
const errorHandler = require("./middleware/errorHandler.js");
const app = express();

var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/pokemon", userHandler, pokemonRouter);
app.use(errorHandler);

app.use("", express.static(path.resolve("./dist"))); // serve main path as static dir
app.get("", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
  console.log("gabby", env.PORT);
});
