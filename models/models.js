const db = require("../db/connection");

function selectAllCategories() {
  return db.query("SELECT * FROM categories;").then(({ rows }) => {
    return rows;
  });
}

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
      `SELECT 
      reviews.owner, 
      reviews.title, 
      reviews.review_body,
      reviews.review_id, 
      reviews.category, 
      reviews.review_img_url, 
      reviews.created_at, 
      reviews.votes, 
      reviews.designer, 
      (select COUNT(*) from comments where review_id=$1) AS comment_count 
      FROM reviews 
      WHERE reviews.review_id = $1
  `,
      [reviewId]
    )
    .then(({ rows }) => {
      rows.forEach(
        (review) => (review.comment_count = review.comment_count - 0)
      );
      return rows;
    })
    .then((convertedRows) => {
      return convertedRows[0];
    });
}

function selectAllCommentsByReviewId(reviewId) {
  return db
    .query(
      `SELECT comment_id, votes,created_at,author,body,review_id FROM comments WHERE review_id = $1 ORDER BY created_at;`,
      [reviewId]
    )
    .then(({ rows }) => {
      const comments = rows;
      return comments;
    });
}

function addNewComment(review_id, username, body) {
  return db
    .query(
      `INSERT INTO comments (body, review_id, author) VALUES ($1, $2, $3) RETURNING *`,
      [body, review_id, username]
    )
    .then(({ rows }) => {
      return rows[0];
    });
}

function updateVotesCount(reviewId, newVotesCount) {
  return db
    .query(
      `UPDATE reviews SET votes = votes + $2 WHERE review_id = $1 RETURNING *;`,
      [reviewId, newVotesCount]
    )
    .then(({ rows }) => {
      const updatedReview = rows[0];
      return updatedReview;
    });
}

function selectAllUsers() {
  return db
    .query("SELECT username, name, avatar_url FROM users ORDER BY name ASC;")
    .then(({ rows }) => {
      const allUsers = rows;
      return allUsers;
    });
}

function getFilteredReviews(category, orderByColumn, sortOrder) {
  const isCategoryValid = typeof category === "string";
  const defaultOrderByColumn = "created_at";
  const defaultOrder = "DESC";
  const actualOrder = sortOrder.toUpperCase() === "ASC" ? "ASC" : defaultOrder;
  const validColumns = [
    "review_id",
    "title",
    "category",
    "designer",
    "owner",
    "review_body",
    "review_img_url",
    "created_at",
    "votes",
  ];
  const isOrderByColumnValid = validColumns.includes(
    orderByColumn.toLowerCase()
  );

  const actualOrderByColumn = isOrderByColumnValid
    ? orderByColumn
    : defaultOrderByColumn;
  let whereCondition = isCategoryValid ? "WHERE category = $1" : "";
  const query = `SELECT * FROM reviews ${whereCondition} ORDER BY ${actualOrderByColumn} ${actualOrder}`;

  const restOfQuery = isCategoryValid ? [category] : [];
  return db.query(query, restOfQuery).then(({ rows }) => {
    const filteredReviews = rows;
    return filteredReviews;
  });
}

module.exports = {
  selectAllCategories,
  selectAllReviewsWithCommentCounts,
  selectReviewById,
  selectAllCommentsByReviewId,
  addNewComment,
  updateVotesCount,
  selectAllUsers,
  getFilteredReviews,
};
