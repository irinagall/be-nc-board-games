const db = require("../db/connection");

selectAllCategories = () => {
  return db.query("SELECT * FROM categories;").then(({ rows }) => {
    return rows;
  });
};

module.exports = { selectAllCategories };
