const express = require("express");
const app = express();

const {
  fetchAllCategories,
  error500,
  fetchAllReviews,
  fetchReviewById,
} = require("./controllers/controllers");

app.get("/api/reviews", fetchAllReviews);

app.get("/api/reviews/:review_id", fetchReviewById);

app.get("/api/categories", fetchAllCategories);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use(error500);

module.exports = app;
