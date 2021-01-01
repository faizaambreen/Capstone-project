const express = require('express');

const app = express();

app.get("/",(req,res)=>{
  const obj = {
    id:1,
    name:"Adeel Babar",
    age:21,
    qualification:"BSCS"
  };
  res.send(obj);
});

app.listen(5000,()=>{
  console.log("Server is started");
});
