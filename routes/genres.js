// Import
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
//const Joi = require("joi");

// // Schema for Genres
// const genreSchema = new mongoose.Schema({
//   //stuff
//   name: {
//     type: String,
//     required: true,
//     minlength: 5,
//     maxlength: 50,
//   },
// });

// Model for Genres + Schema ^
const Genre = new mongoose.model(
  "Genre",
  new mongoose.Schema({
    //stuff
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

// GET genres
router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

// POST genre
router.post("/", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();

  res.send(genre);
});

// PUT genre
router.put("/:id", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
    }
  );

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
});

// DELETE genre
router.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

// GET genre
router.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

// Validate f(x)
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

module.exports = router;
