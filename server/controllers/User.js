const User = require('../models').User
const Util = require('../helpers').Util
const Bcrypt = require('../helpers').Bcrypt
const Request = require('../helpers').Request
const Status = require('../enums').Status
const bcrypt = require('bcrypt');

module.exports = {
    create(req, res, next) {
        User.create(req.body)
            .then(createdUser => {
                res.send(createdUser)
            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    findAll(req, res, next) {
        User.find(req.query)
            .then(clubs => {
                res.send(clubs)
            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    updateOne(req, res, next) {
        User.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate))
            .catch(err => res.status(400).send({error: err.message}))
    },

    delete(req, res, next) {
        User.deleteMany(req.query)
            .then(isDelete => {
                res.send(isDelete)
            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    // MIDDLEWARE CHECKING

    checkSignup(req, res, next) {
        if (req.body.password !== req.body.passwordConfirmation) {
            Request.errorHandler(res, Status.USER_ERROR, 'Password confirmation is not equal')
        } else if (!Util.isPassword(req.body.password)) {
            Request.errorHandler(res, Status.USER_ERROR, 'Password must be at least 8 characters')
        } else {
            bcrypt.hash(req.body.password, Bcrypt.saltRounds)
                .then(hash => {
                    req.body.password = hash
                    req.body.status = 0
                    next()
                })
                .catch(err => {
                    Request.errorHandler(res, Status.SERVER_ERROR, 'checkSignup')
                })
        }
    }

}