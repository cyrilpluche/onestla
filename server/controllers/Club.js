const Club = require('../models').Club
const Status = require('../enums').RES_STATUS
module.exports = {
    create (req, res, next) {
        Club.create(req.body)
            .then(club => {
                res.send(club)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    findAll (req, res, next) {
        Club.find(req.query)
            .then(clubs => {
                res.send(clubs)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    adminFindAll(req, res, next) {
        Club.find(req.query)
            .select(["name", "description", "lat", "lng", "type"])
            .then(clubs => res.send(clubs))
            .catch(err => {
                Request.errorHandler(res, Status.USER_ERROR, err.message)
            })
    },

    findList (req, res, next) {
        Club.find(req.query)
            .select(["firstname", "lastname", "status"])
            .then(clubs => {
                res.send(clubs)
            })
            .catch(err => {
                res.status(400).send({ error: err.message })
            })
    },

    updateOne (req, res, next) {
        Club.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate) )
            .catch(err => res.status(400).send({ error: err.message }) )
    }
}