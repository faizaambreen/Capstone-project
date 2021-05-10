// Import Models
const User = require("../models/User");

const signinController = async (req, res) => {    
    const { email,password } = req.body;
    await User.findOne({ email,password }, function (err, user) {
        if (user) {
            res.send({
                id:user._id,
                name:user.name,
                email:user.email
            });
        } else {
            res.send(null);
        }
    });
};

module.exports = signinController;
