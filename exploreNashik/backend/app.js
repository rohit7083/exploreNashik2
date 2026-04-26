// app.js
const express = require("express");
const app = express();

app.use(express.json());

// routes
app.use("/api", require("./routes/placeRoutes"));

module.exports = app;