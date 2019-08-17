const User = require('../models').User
const Util = require('../helpers').Util
const Bcrypt = require('../helpers').Bcrypt
const Request = require('../helpers').Request
const Jwt = require('../helpers').Jwt
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
            .select("-password")
            .then(users => res.send(users))
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    search(req, res, next) {
        if (!Util.isStrNull(req.query.search)) {
            let params = req.query.search.split(' ')
            let conditions = []
            let query = {}

            if (params.length === 2) {
                conditions = [
                    {
                        $and: [
                            {firstname: {'$regex': '^' + params[0], '$options': 'i'}},
                            {lastname: {'$regex': '^' + params[1], '$options': 'i'}}
                        ]
                    },
                    {
                        $and: [
                            {lastname: {'$regex': '^' + params[0], '$options': 'i'}},
                            {firstname: {'$regex': '^' + params[1], '$options': 'i'}}
                        ]
                    }
                ]
            } else {
                conditions = [
                    {firstname: {'$regex': '^' + params[0], '$options': 'i'}},
                    {lastname: {'$regex': '^' + params[0], '$options': 'i'}}
                ]
            }

            query = {$or: conditions}

            User.find(query)
                .select("-password")
                .then(users => {
                    console.log(users)
                    res.send(users)
                })
                .catch(err => {
                    Request.errorHandler(res, Status.SERVER_ERROR, 'search')
                })

        } else {
            Request.errorHandler(res, Status.USER_ERROR, 'Search field is empty')
        }
    },

    findToken(req, res, next) {
        const token = Jwt.decode(req.headers['authorization'])
        const query = {_id: token._id}
        User.find(query)
            .select("-password")
            .then(users => res.send(users))
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
        let query = {email: req.body.email}

        User.find(query)
            .then(users => {
                if (Util.isEmpty(users)) {
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
                } else {
                    Request.errorHandler(res, Status.USER_ERROR, 'Email is already taken')
                }
            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })


    }

}