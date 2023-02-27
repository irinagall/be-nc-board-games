const {
  selectAllCategories,
  selectAllReviewsWithCommentCounts,
  selectReviewById,
  selectAllCommentsByReviewId,
  addNewComment,
  updateVotesCount,
  selectAllUsers,
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
  selectAllReviewsWithCommentCounts()
    .then((reviewsWithCommentCounts) => {
      res.status(200).send(reviewsWithCommentCounts);
    })
    .catch((error) => {
      next(error);
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
  const reviewId = req.params.review_id;
  if (isNaN(reviewId)) {
    res.status(400).send();
    return;
  }
  selectAllCommentsByReviewId(reviewId)
    .then((comments) => {
      res.status(200).send({ comments: comments });
    })
    .catch((error) => {
      next(error);
    });
}

function insertNewCommentByReviewId(req, res, next) {
  const { review_id } = req.params;
  const { username } = req.body;
  const commentText = req.body.body;
  if (commentText === "") {
    res.status(400).send();
    return;
  }
  addNewComment(review_id, username, commentText)
    .then((comment) => {
      //console.log(comment);
      res.status(201).send({ comment });
    })
    .catch((error) => {
      next(error);
    });
}

function patchVotesCount(req, res, next) {
  const { review_id } = req.params;
  const { inc_votes } = req.body;

  if (isNaN(inc_votes - 0) || isNaN(parseInt(review_id, 10))) {
    res.status(400).send();
    return;
  }

  updateVotesCount(review_id, inc_votes).then((updatedReview) => {
    if (!updatedReview) {
      res.status(404).send();
      return;
    }
    const patchResponseBody = { review: updatedReview };
    res.status(200).send(patchResponseBody);
  });
}

function fetchAllUsers(req, res, next) {
  selectAllUsers()
    .then((allUsers) => {
      res.status(200).send({ users: allUsers });
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
  insertNewCommentByReviewId,
  patchVotesCount,
  fetchAllUsers,
};
