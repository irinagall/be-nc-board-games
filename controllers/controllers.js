const {
  selectAllCategories,
  selectAllReviewsWithCommentCounts,
  selectReviewById,
  selectAllCommentsByReviewId,
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

function fetchReviewById(req, res, next) {
  selectReviewById(req.params.review_id)
    .then((review) => {
      if (!review) {
        res.status(404).send({ message: "No such review" });
        return;
      }
      res.status(200).send({ review });
    })
    .catch((error) => {
      next(error);
    });
}

function fetchAllCommentsByReviewId(req, res, next) {
  selectAllCommentsByReviewId(req.params.review_id)
    .then((comments) => {
      res.status(200).send({ comments: comments });
    })
    .catch((error) => {
      next(error);
    });
}

module.exports = {
  fetchAllCategories,
  fetchAllReviews,
  fetchReviewById,
  fetchAllCommentsByReviewId,
};
