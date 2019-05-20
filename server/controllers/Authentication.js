const Club = require('../models').Club
const User = require('../models').User
const Jwt = require('../helpers').Jwt

module.exports = {
    login (req, res, next) {
        User.find({ email: req.auth.user })
            .then(user => {
                const u = user[0]
                delete u.password
                const token = Jwt.encode(u)
                console.log(token)
                res.send(token)
            })
            .catch(err => res.status(400).send({ error: err.message }))
    },

    logout (req, res, next) {
        Club.find(req.query)
            .then(clubs => {
                res.send(clubs)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    logged (req, res, next) {
        Club.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate) )
            .catch(err => res.status(400).send({ error: err.message }) )
    }
}