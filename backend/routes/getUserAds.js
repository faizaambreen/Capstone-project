const express = require("express");

// Import Category Controller
const getUserAds = require("../controller/getUserAdsController");

const router = express.Router();

// Fetches all items or specific category items from the database and returns
router.post("/",getUserAds);

module.exports = router;
