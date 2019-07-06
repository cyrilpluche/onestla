const bcrypt = require('bcrypt');
const Util = require('./Util');
const saltRounds = 10;

module.exports = {

    saltRounds,

    crypt(req, res, next) {
        if (!Util.isStrNull(req.body.bcrypt.payload)) {
            bcrypt.hash(req.body.bcrypt.payload, saltRounds)
                .then(hash => {
                    req.body.bcrypt.hash = hash
                    next()
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).send({error: err.message})
                })
        } else {
            res.status(500).send({error: 'payload is null'})
        }

    }
}