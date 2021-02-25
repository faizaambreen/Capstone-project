const express = require("express");

// Import Category Controller
const getItems = require("../controller/categoryController");

const router = express.Router();

// Fetches all items or specific category items from the database and returns
router.get("/",getItems);

module.exports = router;
