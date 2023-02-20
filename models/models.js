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
      return rows;
    });
}

module.exports = { selectAllReviewsWithCommentCounts };
