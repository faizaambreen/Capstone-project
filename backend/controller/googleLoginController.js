const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

// Import Models
const User = require("../models/User");

// let phone;

//below 3 lines using to serialize and deserialize the session
// passport.use(User.createStrategy());

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// setting the passport for the google authentication
// passport.use(new GoogleStrategy({
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackURL: "http://localhost:3001/auth/google/logged"
// },
//   function (accessToken, refreshToken, profile, cb) {
//     // console.log(profile);
//     // console.log(profile._json.name);
//     // console.log(profile._json.email);
// User.findOrCreate({ googleId: profile.id }, {
//   username: profile.id,
//   name: profile._json.name,
//   email: profile._json.email,
//   phone: phone
// }, function (err, user) {
//   return cb(err, user);
// });
//   }
// ));

const googleLogin = async (req, res) => {
    const { tokenId } = req.body;
    const response = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID
    });
    const { email, name, email_verified } = response.payload;
    if (email_verified) {
        await User.findOrCreate({ email: email }, {
            username: email,
            name: name,
        }, function (err, user) {
            if (user) {
                res.send({
                    id:user._id,
                    name:user.name,
                    email:user.email
                });
            } else {
                res.send(null);
            }
        });
    }
};

module.exports = googleLogin;
