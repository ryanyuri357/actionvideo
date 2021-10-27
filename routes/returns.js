const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const validate = require("../middleware/validate");
const { Rental } = require("../models/rental");
const { Movie } = require("../models/movie");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

// POST Return
router.post("/", [auth, validate(validateReturn)], auth, async (req, res) => {
  const rental = await Rental.lookup(req.body.customerId, req.body.movieId);
  // const { error } = validateReturn(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // if (!req.body.customerId)
  //   return res.status(400).send("customerId not provided");
  // if (!req.body.movieId) return res.status(400).send("movieId not provided");

  if (!rental) return res.status(404).send("Rental not found");

  if (rental.dateReturned)
    return res.status(400).send("Return already processed");

  rental.return();
  await rental.save();

  await Movie.update(
    { _id: rental.movie._id },
    {
      $inc: { numberInStock: 1 },
    }
  );

  return res.send(rental);
});

function validateReturn(req) {
  const schema = {
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
