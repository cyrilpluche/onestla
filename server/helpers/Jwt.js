var jwt = require('jsonwebtoken');
const User = require('../models').User

module.exports = {
    encode(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
    }
}