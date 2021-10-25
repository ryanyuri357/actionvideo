const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  // Error Handling
  // process.on("uncaughtException", (ex) => {
  //   console.log("ENCOUNTERED UNCAUGHT EXCEPTION");
  //   winston.error(ex.message, ex);
  //   process.exit(1);
  // });

  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    console.log("ENCOUNTERED UNHANDLED REJECTION");
    // winston.error(ex.message, ex);
    // process.exit(1);
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/actionvideo",
      collections: "errorlogs",
      level: "info",
    })
  );
};

// debug lines
// throw new Error("something failed during startup");
// const p = Promise.reject(new Error("Unhandled Promise = Epic FAIL!"));
// p.then(() => console.log("done"));
