require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

// Import Routes
const googleAuthRoute = require("./routes/googleAuthentication");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const getUserAds = require("./routes/getUserAds");
const deleteAd = require("./routes/deleteAd");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.json({limit:"50mb"}));

// setting and configuring the session modules
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);

app.use("/auth/google", googleAuthRoute);

app.use("/post", postRoute);

app.use("/categories", categoryRoute);

app.use("/userAds", getUserAds);

app.use("/deleteAd", deleteAd);

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/loggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("<h1>Logged In</h1>");
  }
  else {
    res.send("<h1>Home</h1>");
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is started");
});

