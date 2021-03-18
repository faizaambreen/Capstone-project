// Import Cloudinary
const cloudinary = require("../utils/cloudinary");

// Import Models
const Item = require("../models/Item");

const deleteAd = (req, res) => {
    const { id } = req.body;

    Item.findByIdAndDelete({ _id:id }, (error, foundItem) => {
        if (!error && foundItem) {
            foundItem.images.forEach(image => {
                cloudinary.uploader.destroy(image.public_id,function (error,result) {
                    console.log(error,result);
                  });
            });
            res.send({
                status:200
            });
        } else {
            res.send({
                status:400
            });
        }
    });

};

module.exports = deleteAd;
