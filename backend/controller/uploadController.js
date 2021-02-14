// Import Models
const Item = require("../models/Item");

// Import cloudinary
const cloudinary = require("../utils/cloudinary");
let imagesArray = [];

const uploadAd = async (req, res) => {
  for (const file of req.files) {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        upload_preset: "client_uploads"
      });
      imagesArray.push({
        public_id: result.public_id,
        secure_url: result.secure_url
      });
    } catch (error) {
      console.log(error);
    }
  }

  const item = await new Item({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    images: imagesArray,
    category: req.body.category,
    city: req.body.city,
    state: req.body.state
  });
  try {
    const result = await item.save();
    if (result) {
      res.send({ status: 200 });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 400 });
  }
};

module.exports = uploadAd;
