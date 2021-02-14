const express = require("express");

// Import Upload Controller
const uploadAd = require("../controller/uploadController");

const upload = require("../utils/multer");

const router = express.Router();

// Creates a new AD Post
router.post("/ad",upload.array("images",12),uploadAd);

module.exports = router;
