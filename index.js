const express = require("express");
const userRouter = require("./routers/userRouter.js");
const pokemonRouter = require("./routers/pokemonRouter.js");
const errorHandler = require("./middleware/errorHandler.js");
const app = express();
const port = 8080;

// npm install cors
// var cors = require('cors')
// app.use(cors());

// app.use((req, res, next) => { // chrome only work with this headers !
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(express.json());
app.use("/user", userRouter);
app.use("/pokemon", pokemonRouter);
app.use(errorHandler);

// start the server
app.listen(port, function () {
  console.log("app started on port " + port);
});
