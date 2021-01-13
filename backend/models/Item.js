const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title:String,
  description:String,
  price:Number,
  images:[{
    type:String
  }],
  category:String,
  city:String,
  state:String
});

module.exports = mongoose.model("item",itemSchema);
