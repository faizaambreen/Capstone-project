const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  priceType: String,
  images: [{
    public_id: String,
    secure_url: String
  }],
  category: String,
  city: String,
  state: String,
  ownerID: String,
  ownerName: String,
  phone: String,
  createdAt: String
});

module.exports = mongoose.model("item", itemSchema);
