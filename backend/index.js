require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

// Import Routes
const loginAndSignupRoute = require("./routes/userLogin&Signup");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const getUserAds = require("./routes/getUserAds");
const deleteAd = require("./routes/deleteAd");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// setting and configuring the session modules
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => {
    console.log("Server is started");
  }))
  .catch((error) => console.log(error.message));

mongoose.set("useCreateIndex", true);

app.use("/login", loginAndSignupRoute);

app.use("/post", postRoute);

app.use("/categories", categoryRoute);

app.use("/userAds", getUserAds);

app.use("/deleteAd", deleteAd);

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
