const { selectAllCategories } = require("../models/models");

function fetchAllCategories(req, res, next) {
  selectAllCategories().then((categories) => {
    res.status(200).send(categories);
  });
}

module.exports = { fetchAllCategories };
