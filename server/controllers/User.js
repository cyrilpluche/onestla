const User = require('../models').User
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    create (req, res, next) {
        User.create(req.body)
            .then(createdUser => {
                res.send(createdUser)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    findAll (req, res, next) {
        User.find(req.query)
            .then(clubs => {
                res.send(clubs)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    updateOne (req, res, next) {
        User.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate) )
            .catch(err => res.status(400).send({ error: err.message }) )
    },

    delete (req, res, next) {
        User.remove(req.body)
            .then(isDelete => {
                res.send(isDelete)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },
}