const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema= new mongoose.Schema({
  email:String,
  googleId:String,
  // providing username only to remove db error
  username:String,
  name:String,
  itemId:String,
  phone:String
});

// applying the passportLocalMongoose for the session and cookies
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("user",userSchema);
