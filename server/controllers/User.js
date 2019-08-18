const User = require('../models').User
const Friend = require('../models').Friend
const Util = require('../helpers').Util
const Bcrypt = require('../helpers').Bcrypt
const Request = require('../helpers').Request
const Jwt = require('../helpers').Jwt
const Status = require('../enums').RES_STATUS
const bcrypt = require('bcrypt');
const Authorization = require('../enums').PROFILE_AUTHORIZATION
const UserStatus = require('../enums').USER_STATUS
const FRIEND_STATE = require('../enums').FRIEND_STATE

// helpers

const getAuthorization = (user1, user2, state) => {
    if (!user1 || !user2) return Authorization.READONLY
    else if (user1.toString() === user2.toString()) return Authorization.UPDATE
    else if (parseInt(state) === FRIEND_STATE.PENDING) return Authorization.PENDING
    else if (parseInt(state) === FRIEND_STATE.SUCCESS) return Authorization.FRIEND
    else return Authorization.READONLY
}

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

    findProfile(req, res, next) {
        const token = Jwt.decode(req.headers['authorization'])
        User.find(req.query)
            .select("-password")
            .then(users => {
                let authorization = Authorization.READONLY
                let user = Object.assign({authorization: authorization}, users[0]._doc)

                if (token !== undefined && token !== null) {
                    user.authorization = getAuthorization(token._id, users[0]._id, null)

                    if (authorization !== Authorization.UPDATE) {
                        Friend.find({idAsker: token._id, idReceiver: users[0]._id})
                            .then(friend => {
                                if (friend[0] !== undefined && friend[0] !== null) {
                                    user.authorization = getAuthorization(token._id, users[0]._id, friend[0].state)
                                    console.log(getAuthorization(token._id, users[0]._id, friend[0].state))
                                    console.log(user.authorization)
                                }
                                res.send(user)
                            })
                    } else {
                        res.send(user)
                    }

                } else {
                    res.send(user)
                }
            })
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
        const token = Jwt.decode(req.headers['Authorization'])
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
                                req.body.status = UserStatus.CREATED
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