const Friend = require('../models').Friend

module.exports = {
    create (req, res, next) {
        Friend.create(req.body)
            .then(friendship => res.send(friendship))
            .catch(err => res.status(400).send({ error: err.message }))
    },

    findAll (req, res, next) {
        Friend.find(req.query)
            .then(friendships => res.send(friendships))
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    updateOne (req, res, next) {
        Friend.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate) )
            .catch(err => res.status(400).send({ error: err.message }) )
    }
}