const express = require("express");

// Import Delete Controller
const deleteAd = require("../controller/deleteAdController");

const router = express.Router();

// Deletes the specific ad/item from the database
router.post("/",deleteAd);

module.exports = router;
