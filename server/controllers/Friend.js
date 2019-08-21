const Friend = require('../models').Friend
const User = require('../models').User
const FRIEND_STATE = require('../enums').FRIEND_STATE
const RES_STATUS = require('../enums').RES_STATUS
const Jwt = require('../helpers').Jwt
const Util = require('../helpers').Util
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

    findPending(req, res, next) {
        const token = Jwt.decode(req.headers['authorization'])
        let query = {idReceiver: token._id, state: FRIEND_STATE.PENDING}
        Friend.find(query)
            .then(friendships => {
                let or = friendships.map(f => ({_id: f.idAsker}))
                let query2 = {$or: or}
                if (or.length !== 0) {
                    User.find(query2)
                        .select(["firstname", 'lastname', '_id'])
                        .then(users => {
                            res.send(users)
                        })
                } else {
                    res.send([])
                }


            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    findList(req, res, next) {
        const tokenId = Jwt.getId(req.headers['authorization'])

        let or =[
            {idReceiver: tokenId, state: FRIEND_STATE.SUCCESS},
            {idAsker: tokenId, state: FRIEND_STATE.SUCCESS}
        ]

        Friend.find({$or: or})
            .then(friendships => {
                or = friendships.map(f => {
                    let id = f.idAsker
                    if (Util.equals(id, tokenId)) id = f.idReceiver
                    return ({_id: id})
                })
                if (or.length !== 0) {
                    User.find({$or: or})
                        .select(["firstname", 'lastname', '_id'])
                        .then(users => {
                            res.send(users)
                        })
                } else {
                    res.send([])
                }


            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    },

    updateOne(req, res, next) {
        Friend.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate))
            .catch(err => res.status(400).send({error: err.message}))
    },

    accept(req, res, next) {
        const token = Jwt.decode(req.headers['authorization'])
        let query = {idAsker: req.query.idAsker, idReceiver: token._id}
        query.state = FRIEND_STATE.SUCCESS
        console.log(query)
        Friend.updateOne(query)
            .then(isUpdate => res.send(isUpdate))
            .catch(err => res.status(400).send({error: err.message}))
    },

    delete(req, res, next) {
        const token = Jwt.decode(req.headers['authorization'])
        let or = [
            {idAsker: token._id, idReceiver: req.query.idReceiver},
            {idAsker: req.query.idReceiver, idReceiver: token._id}
        ]
        Friend.deleteMany({$or: or})
            .then(isDelete => {
                res.send(isDelete)
            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    }
}