const db = require("../db/connection");

function selectAllReviewsWithCommentCounts() {
  return db
    .query(
      `SELECT 
  reviews.owner, 
  reviews.title, 
  reviews.review_id, 
  reviews.category, 
  reviews.review_img_url, 
  reviews.created_at, 
  reviews.votes, 
  reviews.designer, 
  COUNT(comment_id) AS comment_count 
  FROM reviews 
  LEFT JOIN comments ON comments.review_id=reviews.review_id 
  GROUP BY reviews.review_id
  ORDER BY reviews.created_at DESC ;
  `
    )
    .then(({ rows }) => {
      rows.forEach(
        (review) => (review.comment_count = review.comment_count - 0)
      );
      return rows;
    })
    .then((convertedRows) => {
      return convertedRows;
    });
}

function selectReviewById(reviewId) {
  return db
    .query(
      `SELECT review_id,
      title,
      review_body,
      designer,
      review_img_url,
      votes,
      category,
      owner,
      created_at
      FROM reviews WHERE review_id = $1;`,
      [reviewId]
    )
    .then(({ rows }) => {
      return rows[0];
    });
}

function selectAllCommentsByReviewId(reviewId) {
  return db
    .query(
      `SELECT comment_id, votes,created_at,author,body,review_id FROM comments WHERE review_id = $1 ORDER BY created_at;`,
      [reviewId]
    )
    .then(({ rows }) => {
      return rows;
    });
}

function selectAllCategories() {
  return db.query("SELECT * FROM categories;").then(({ rows }) => {
    return rows;
  });
}

module.exports = {
  selectAllCategories,
  selectAllReviewsWithCommentCounts,
  selectReviewById,
  selectAllCommentsByReviewId,
};
