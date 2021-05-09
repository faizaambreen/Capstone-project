// Import Models
const User = require("../models/User");

const performSignup = async (req, res) => {
    const { email,name,password } = req.body;
    await User.create({email,name,password}, function (err, user) {
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

module.exports = performSignup;
