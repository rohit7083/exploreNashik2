const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/contactController");

router.post("/about", createContact);

module.exports = router;