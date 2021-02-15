const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Import Models
const User = require("../models/User");

const router = express.Router();
let phone;

//below 3 lines using to serialize and deserialize the session
passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// setting the passport for the google authentication
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/logged"
},
  function (accessToken, refreshToken, profile, cb) {
    // console.log(profile);
    // console.log(profile._json.name);
    // console.log(profile._json.email);
    User.findOrCreate({ googleId: profile.id }, {
      username: profile.id,
      name: profile._json.name,
      email: profile._json.email,
      phone: phone
    }, function (err, user) {
      return cb(err, user);
    });
  }
));

// route for the google login button
router.post("/",
  function (req, res) {
    phone = req.body.phone;
    console.log(req.body);

    res.redirect("/auth/google/login");
  }
);

router.get("/login", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/logged",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    //    console.log(req.body);
    res.send({ status: 200 });
  }
);

module.exports = router;
