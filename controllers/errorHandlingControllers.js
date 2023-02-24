function customErrorHandler(err, req, res, next) {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else if (err.code === "22P02" || err.code === "23502") {
    res.status(400).send({ msg: err.message || "Bad Request" });
  } else if (err.code === "23503") {
    res.status(404).send({ message: "Not found" });
  } else console.error(err);
  res.status(500).send({ msg: "Internal Server Error" });
}

module.exports = { customErrorHandler };
