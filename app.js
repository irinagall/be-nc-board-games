const express = require("express");
const app = express();
app.use(express.json());

const {
  fetchAllCategories,
  reviewsEndpoint,
  fetchReviewById,
  fetchAllCommentsByReviewId,
  insertNewCommentByReviewId,
  deleteCommentById,
  patchVotesCount,
  fetchAllUsers,
} = require("./controllers/controllers");

const {
  customErrorHandler,
} = require("./controllers/errorHandlingControllers");

app.get("/api/categories", fetchAllCategories);

app.get("/api/reviews", reviewsEndpoint);

app.get("/api/reviews/:review_id/comments", fetchAllCommentsByReviewId);

app.get("/api/reviews/:review_id", fetchReviewById);

app.post("/api/reviews/:review_id/comments", insertNewCommentByReviewId);

app.patch("/api/reviews/:review_id", patchVotesCount);

app.get("/api/users", fetchAllUsers);

app.delete("api/comments/:comment_id", deleteCommentById);

app.use(customErrorHandler);

app.all("/*", (req, res, next) => {
  res.status(404).send("Not Found");
});

module.exports = app;
