const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/api", require("./routes/placeRoutes"));
app.use("/api", require("./routes/contactRoutes"));

module.exports = app;