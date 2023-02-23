const express = require("express");
const app = express();

const {
  fetchAllCategories,
  fetchAllReviews,
  fetchReviewById,
  fetchAllCommentsByReviewId,
} = require("./controllers/controllers");

const {
  customErrorHandler,
} = require("./controllers/errorHandlingControllers");

app.get("/api/reviews", fetchAllReviews);

app.get("/api/reviews/:review_id/comments", fetchAllCommentsByReviewId);

app.get("/api/reviews/:review_id", fetchReviewById);

app.get("/api/categories", fetchAllCategories);

app.use(customErrorHandler);

app.all("/*", (req, res, next) => {
  res.status(404).send("Not Found");
});

module.exports = app;
