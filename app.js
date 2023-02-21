const express = require("express");
const app = express();

const { fetchAllReviews } = require("./controllers/controllers");

app.get("/api/reviews", fetchAllReviews);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

module.exports = app;
