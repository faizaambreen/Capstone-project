const express = require('express');


// Import Models
// const User = require("../models/User");

// Import controller
const googleLogin = require("../controller/googleLoginController");

const router = express.Router();

// route for the google login button
router.post("/google", googleLogin);

// router.get("/login", passport.authenticate("google", { scope: ["profile", "email"] }));

// router.get("/logged",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     //    console.log(req.body);
//     res.send({ status: 200 });
//   }
// );

module.exports = router;
