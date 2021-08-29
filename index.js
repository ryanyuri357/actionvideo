////////////////
//  index.js  //
////////////////

// Import
const Joi = require("joi");
const genres = require("./routes/genres");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use("/api/genres", genres);

// Home
app.get("/", (req, res) => {
  res.send("Action Video");
});

// Listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
