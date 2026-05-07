const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = require("./app");
//load env vars
const dns = require("dns");

dotenv.config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);
//connect to database
connectDB();

// start  server 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 