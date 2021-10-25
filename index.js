////////////////
//  index.js  //
////////////////

// Import
require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");
const error = require("./middleware/error");
const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const app = express();

process.on("uncaughtException", (ex) => {
  console.log("ENCOUNTERED UNCAUGHT EXCEPTION");
  winston.error(ex.message, ex);
  process.exit(1);
});

// winston.handleExceptions(
//   new winston.transports.File({ filename: "uncaughtExceptions.log" })
// );

process.on("unhandledRejection", (ex) => {
  console.log("ENCOUNTERED UNHANDLED REJECTION");
  winston.error(ex.message, ex);
  process.exit(1);
});

winston.add(new winston.transports.File({ filename: "logfile.log" }));
winston.add(
  new winston.transports.MongoDB({
    db: "mongodb://localhost/actionvideo",
    collections: "errorlogs",
    level: "info",
  })
);

// debug testing
// throw new Error("something failed during startup");
// const p = Promise.reject(new Error("Unhandled Promise = Epic FAIL!"));
// p.then(() => console.log("done"));

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}
// Connect to Mongo DB
mongoose
  .connect("mongodb://localhost/actionvideo")
  .then(() => console.log("Connected to Mongo ActionVideo DB..."))
  .catch((err) => console.log("Could not connect to Mongo ActionVideo DB!!!"));

// Middleware
app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.use(error);

// Home
app.get("/", (req, res) => {
  res.send("Action Video");
});

// Listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
