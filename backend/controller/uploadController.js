// Import Models
const Item = require("../models/Item");

// Import cloudinary
const cloudinary = require("../utils/cloudinary");

const uploadAd = async (req, res) => {

  let status = (req.files.length > 0);
  console.log(status);
  
  let imagesArray = [];

  // uploading all files to the cloudinary client_uploads folder
  for (const file of req.files) {
    try {
      if (status) {
        const result = await cloudinary.uploader.upload(file.path, {
          upload_preset: "client_uploads"
        });
        imagesArray.push({
          public_id: result.public_id,
          secure_url: result.secure_url
        });
      }
    } catch (error) {
      console.log(error);
      status = false;
    }
  }

  // storing the object into the item collection of database
  try {
    if (status) {
      // making item object to be stored in database
      const item = await new Item({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        priceType: req.body.priceType,
        images: imagesArray,
        category: req.body.category,
        city: req.body.city,
        state: req.body.state,
        ownerID: req.body.ownerID,
        ownerName: req.body.ownerName,
        phone: "+92-" + req.body.phone,
        createdAt: new Date().toLocaleDateString(undefined, {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      });
      const result = await item.save();
      res.send({
        status:200,
        item:result,
      });
    } else {
      res.send({status:400});
    }
  } catch (error) {
    console.log(error);
    res.send({status:400});
  }
};

module.exports = uploadAd;
