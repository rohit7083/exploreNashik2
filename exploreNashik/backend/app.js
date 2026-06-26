const express = require("express");
const cors = require("cors");

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

const allowedOrigins = [
  "http://localhost:5173",
  "https://explore-nashik2.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json());

// routes
app.use("/api", require("./routes/placeRoutes"));
app.use("/api", require("./routes/contactRoutes"));


// 404 handler (optional but useful)
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// global error handler — MUST be last, MUST have 4 args (err, req, res, next)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});
module.exports = app;