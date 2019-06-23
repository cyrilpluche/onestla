const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    crypt(req, res, next) {
        bcrypt.hash(req.body.password, saltRounds)
            .then(hash => {
                req.body.password = hash
                next()
            })
            .catch(err => {
                console.log(err)
                res.status(500).send({error: err.message})
            })
    }
}