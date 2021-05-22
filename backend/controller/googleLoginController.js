const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

// Import Models
const User = require("../models/User");

const googleLogin = async (req, res) => {
    const { tokenId } = req.body;
    const response = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID
    });
    const { email, name, email_verified } = response.payload;
    if (email_verified) {
        await User.findOrCreate({ email: email }, {
            username: email,
            name: name,
        }, function (err, user) {
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
    }
};

module.exports = googleLogin;
