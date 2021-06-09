const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema= new mongoose.Schema({
  email:String,
  username:String,
  name:String,
  password:String
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("user",userSchema);
