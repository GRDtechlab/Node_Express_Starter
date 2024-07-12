import ERROR_CODES from "../constants.js";

const errorHandler = (err, req, res, next) => {
  console.log(res.statusCode, " s-code");
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case ERROR_CODES.VALIDATION:
      res.json({
        title: "Validation Failed",
        error: err.message,
        statckTrace: err.statck,
      });
      break;
  }
};

export default errorHandler;
