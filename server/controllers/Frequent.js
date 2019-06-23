const Frequent = require('../models').Frequent

module.exports = {
    create (req, res, next) {
        Frequent.create(req.body)
            .then(frequentation => res.send(frequentation))
            .catch(err => res.status(400).send({ error: err.message }))
    },

    findAll (req, res, next) {
        Frequent.find(req.query)
            .then(frequentations => res.send(frequentations))
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    updateOne (req, res, next) {
        Frequent.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate) )
            .catch(err => res.status(400).send({ error: err.message }) )
    }
}