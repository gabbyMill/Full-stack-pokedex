const pokemonRouter = require("./routes/pokemonRouter");
const userRouter = require("./routes/userRouter");
const { userHandler } = require("./middleware/userHandler");
const { errorHandler } = require("./middleware/errorHandler");

const cors = require("cors");
const express = require("express");
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/pokemon", userHandler, pokemonRouter);
app.use("/user", userRouter);

app.use(errorHandler);

app.use("/", express.static(path.resolve("./dist"))); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
