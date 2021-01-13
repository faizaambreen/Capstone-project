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

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

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

app.use("/auth/google",googleAuthRoute);

app.use("/post",postRoute);

app.use("/categories",categoryRoute);

app.get("/",(req,res)=>{
  const obj = {
    id:1,
    name:"Adeel Babar",
    age:21,
    qualification:"BSCS"
  };
  res.sendFile(__dirname + "/index.html");
});

app.get("/loggedIn",(req,res)=>{
  if(req.isAuthenticated()){
    res.sendFile(__dirname+"/logged.html");
  }
  else{
    res.sendFile(__dirname+"/index.html");
  }
});

app.listen(5000,()=>{
  console.log("Server is started");
});
