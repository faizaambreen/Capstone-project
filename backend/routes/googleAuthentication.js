const express = require('express');


// Import Models
// const User = require("../models/User");

// Import controller
const performLogin = require("../controller/loginController");

const router = express.Router();

// route for the google login button
router.post("/", performLogin);

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
