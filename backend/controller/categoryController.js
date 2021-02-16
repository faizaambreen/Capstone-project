// Import Models
const Item = require("../models/Item");

const getItems = (req,res)=>{
  console.log(req.params.category);
  
  if(req.params.category!==":"){
    Item.find({category:req.params.category},(error,foundItems)=>{
      if(!error&&foundItems){
        res.send(foundItems);
      } else{
        res.send(error);
      }
    });
  } else{
    Item.find((error,foundItems)=>{
      if(!error&&foundItems){
        res.send(foundItems);
      } else{
        res.send(error);
      }
    });
  }
};

module.exports = getItems;
