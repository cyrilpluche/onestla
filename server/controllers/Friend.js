const Friend = require('../models').Friend
const FRIEND_STATE = require('../enums').FRIEND_STATE
const RES_STATUS = require('../enums').RES_STATUS
const Jwt = require('../helpers').Jwt
const Request = require('../helpers').Request

module.exports = {
    create(req, res, next) {
        const token = Jwt.decode(req.headers['authorization'])
        req.body.idAsker = token._id
        req.body.state = FRIEND_STATE.PENDING
        Friend.find({idAsker: token._id, idReceiver: req.body.idReceiver})
            .then(friend => {
                if (friend.length === 0) {
                    Friend.create(req.body)
                        .then(friendship => res.send(friendship))
                        .catch(err => res.status(400).send({error: err.message}))
                } else {
                    Request.errorHandler(res, RES_STATUS.USER_ERROR, 'Friendship already exist.')
                }
            })
    },

    findAll(req, res, next) {
        Friend.find(req.query)
            .then(friendships => res.send(friendships))
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    updateOne(req, res, next) {
        Friend.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate))
            .catch(err => res.status(400).send({error: err.message}))
    }
}