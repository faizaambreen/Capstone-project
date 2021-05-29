// Import Models
const Item = require("../models/Item");

const getItems = (req,res)=>{
    
  Item.find((error,foundItems)=>{
      if(!error&&foundItems){
        res.send({
          status:200,
          items:foundItems
        });
      } else{
        res.send({
          status:400
        });
      }
    }).sort({_id: -1});
};

module.exports = getItems;
