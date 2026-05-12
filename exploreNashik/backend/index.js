// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const app = require("./app");
// dotenv.config();
// const express = require("express");
// //load env vars
// const dns = require("dns");

// dns.setServers(["8.8.8.8", "8.8.4.4"]);
// //connect to database
// connectDB();

// // start  server 
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// }); 


const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

const app = require("./app");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});