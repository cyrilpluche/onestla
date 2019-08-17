var jwt = require('jsonwebtoken');
const User = require('../models').User

module.exports = {
    encode(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
    },

    decode(payload) {
        return jwt.decode(payload, process.env.JWT_SECRET)
    },

    verify(req, res, next) {

        const token = req.headers['authorization']

        if (!token) res.status(401).send('Unauthorized')
        else {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err || !decoded) res.status(401).send({error: err.message})
                else {
                    next()
                }
            })
        }

    }

}