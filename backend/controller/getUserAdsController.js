// Import Models
const Item = require("../models/Item");

const getUserAds = (req, res) => {
    const { userId } = req.body;

    Item.find({ ownerID: userId }, (error, foundItems) => {
        if (!error && foundItems) {
            res.send({
                items: foundItems
            });
        } else {
            res.send({
                items: null
            });
        }
    });

};

module.exports = getUserAds;
