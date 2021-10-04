// Import
const Joi = require("joi");
const mongoose = require("mongoose");

// Schema for Genres

// FLAG!!! May need to remove 'new' -->> compiler should create new instance regardless according to web ???
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

// Model for Genres
const Genre = mongoose.model("Genre", genreSchema);

// Validate f(x)
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
