module.exports = function (err, req, res, next) {
  // log error
  res.status(500).send("Internal Server Error.");
};
