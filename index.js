////////////////
//  index.js  //
////////////////

// Import
const mongoose = require("mongoose");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const express = require("express");
const app = express();

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

// Home
app.get("/", (req, res) => {
  res.send("Action Video");
});

// Listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
