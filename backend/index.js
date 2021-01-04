require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// setting and configuring the session modules
app.use(session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/rentallDB",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.set("useCreateIndex",true);

const userSchema= new mongoose.Schema({
  email:String,
  googleId:String,
  username:String,
  itemId:String,
  phone:String
});

// applying the passportLocalMongoose for the session and cookies
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("user",userSchema);

//below 3 lines using to serialize and deserialize the session
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// setting the passport for the google authentication
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/logged"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    console.log(profile._json.name);
    console.log(profile._json.email);
    User.findOrCreate({username:profile._json.name, googleId: profile.id },{email:profile._json.email}, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/",(req,res)=>{
  const obj = {
    id:1,
    name:"Adeel Babar",
    age:21,
    qualification:"BSCS"
  };
  res.sendFile(__dirname + "/index.html");
});

// route for the google login button
app.get("/auth/google",
  passport.authenticate("google",{scope: ["profile","email"]})
);

app.get("/auth/google/logged",
  passport.authenticate("google", { failureRedirect: "/" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/loggedIn");
  }
);

app.get("/loggedIn",(req,res)=>{
  res.sendFile(__dirname+"/logged.html");
});

app.listen(5000,()=>{
  console.log("Server is started");
});
