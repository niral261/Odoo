const jwt = require("jsonwebtoken");
require("dotenv").config();

exports = {};

exports.getToken = async (email, user) => {
    // Assume this code is complete
    // const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign(
        {identifier: user._id}, 
        "thisKeyIsSupposedToBeSecret");
        // jwtSecret);
    return token;
};

module.exports = exports;