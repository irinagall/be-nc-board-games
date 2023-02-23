function customErrorHandler(err, req, res, next) {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else if (err.code === "22P02") {
    res.status(400).send({ msg: err.message || "Bad Request" });
  } else {
    console.error(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}

module.exports = { customErrorHandler };
