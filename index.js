//  Action Video - Node.js API //

// Import
const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation");

// throw new Error("something failed during startup");

// Home
// app.get("/", (req, res) => {
//   res.send("Action Video");
// });

// Listener
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
