const winston = require("winston");
const mongoose = require("mongoose");

// Connect to Mongo DB
module.exports = function () {
  mongoose
    .connect("mongodb://localhost/actionvideo")
    .then(() => winston.info("Connected to Mongo ActionVideo DB..."));
};
