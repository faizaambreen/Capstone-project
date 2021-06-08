const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema= new mongoose.Schema({
  email:String,
  // providing username only to remove db error
  username:String,
  name:String,
  password:String
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("user",userSchema);
