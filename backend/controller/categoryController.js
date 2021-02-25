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
    });

  // console.log(req.params.category);
  
  // if(req.params.category!==":"){
  //   Item.find({category:req.params.category},(error,foundItems)=>{
  //     if(!error&&foundItems){
  //       res.send(foundItems);
  //     } else{
  //       res.send(error);
  //     }
  //   });
  // } else{
  //   Item.find((error,foundItems)=>{
  //     if(!error&&foundItems){
  //       res.send(foundItems);
  //     } else{
  //       res.send(error);
  //     }
  //   });
  // }

};

module.exports = getItems;
