const {
  selectAllCategories,
  selectAllReviewsWithCommentCounts,
} = require("../models/models");

function fetchAllCategories(req, res, next) {
  selectAllCategories()
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((error) => {
      next(error);
    });
}

function fetchAllReviews(req, res, next) {
  selectAllReviewsWithCommentCounts().then((reviewsWithCommentCounts) => {
    res.status(200).send(reviewsWithCommentCounts);
  });
}

function error500(error, req, res, next) {
  res.status(500).send({ message: "Sorry, server error!" });
}
module.exports = { fetchAllCategories, fetchAllReviews, error500 };
