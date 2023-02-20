const express = require("express");
const app = express();
app.use(express.json());

const { fetchAllReviews } = require("./controllers/controllers");

app.get("/api/reviews", fetchAllReviews);

module.exports = app;
