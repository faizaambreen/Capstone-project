const express = require('express');

// Import Models
const Item = require("../models/Item");

const router = express.Router();

// Creates a new AD Post
router.post("/ad",(req,res)=>{
  console.log(req.body);
  const item = new Item({
    title:req.body.title,
    description:req.body.description,
    price:req.body.price,
    images:["img1","img2"],
    category:req.body.category,
    city:req.body.city,
    state:req.body.state
  });
  item.save((error)=>{
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send("Successfully added new item");
    }
  });
});

module.exports = router;
