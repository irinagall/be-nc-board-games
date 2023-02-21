const express = require("express");
const app = express();
app.use(express.json());

const { fetchAllCategories, error500 } = require("./controllers/controllers");

app.get("/api/categories", fetchAllCategories);

app.use(error500);

module.exports = app;
