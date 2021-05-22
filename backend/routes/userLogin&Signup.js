const express = require('express');

// Import controller
const googleLogin = require("../controller/googleLoginController");
const signinController = require("../controller/signinController");
const signupController = require("../controller/signupController");

const router = express.Router();

// route for the google login button
router.post("/google", googleLogin);

// routes for local sign in and sign up
router.post("/",signinController);
router.post("/createAccount",signupController);

module.exports = router;
