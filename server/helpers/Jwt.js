var jwt = require('jsonwebtoken');
const util = require('./Util')

module.exports = {
    encode(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60 })
    },

    decode(payload) {
        return jwt.decode(payload, process.env.JWT_SECRET)
    },

    verify(req, res, next) {

        const token = req.headers['authorization']

        console.log(token)

        if (!token) res.status(401).send('Unauthorized')
        else {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err || !decoded) res.status(401).send({error: err.message})
                else {
                    next()
                }
            })
        }

    },

    getId(token) {
        const decoded = this.decode(token)
        let id = null
        if (!util.isNull(decoded) && !util.isNull(decoded._id)) id = decoded._id
        return id
    }

}