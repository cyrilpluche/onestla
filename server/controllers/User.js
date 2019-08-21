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

const getAuthorization = (tokenId, userId, friendship) => {
    let authorization = Authorization.READONLY
    // One id is null ? : lower authorization
    if (!Util.isStrNull(tokenId) && !Util.isStrNull(userId)) {
        // Ids are equals : logged user can update
        if (Util.equals(tokenId, userId)) authorization = Authorization.UPDATE
        else if (!Util.isNull(friendship)) {
            // Friendship is pending : is logged user sent or received the invitation ?
            if (Util.equals(friendship.state, FRIEND_STATE.PENDING)) {
                if (Util.equals(tokenId, friendship.idAsker)) authorization = Authorization.WAITING
                else if (Util.equals(tokenId, friendship.idReceiver)) authorization = Authorization.PENDING
            }
            // Friendship is done : hi my men
            else if (Util.equals(friendship.state, FRIEND_STATE.SUCCESS)) authorization = Authorization.FRIEND
        }
    }
    return authorization
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

    adminFindAll(req, res, next) {
        User.find(req.query)
            .select(["email", "firstname", "lastname", "status"])
            .then(users => res.send(users))
            .catch(err => {
                Request.errorHandler(res, Status.USER_ERROR, err.message)
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
        const tokenId = Jwt.getId(req.headers['authorization'])
        const userId = req.query._id

        let user = {authorization: Authorization.READONLY}
        let query = {_id: userId}

        if (!Util.isStrNull(userId)) {
            // Find the user
            User.find(query)
                .select("-password")
                .then(users => {

                    let or = [
                        {idAsker: tokenId, state: FRIEND_STATE.SUCCESS},
                        {idReceiver: tokenId, state: FRIEND_STATE.SUCCESS}
                    ]

                    Friend.where({$or: or}).countDocuments()
                        .then(count => {
                            user.friendsSum = count
                            // Create user
                            if (!Util.isNull(users[0])) {
                                user = Object.assign(user, users[0]._doc)
                                user.authorization = getAuthorization(tokenId, userId, null)

                                // Check friendship if needed
                                if (!Util.equals(user.authorization, Authorization.UPDATE)) {

                                    or = [
                                        {idAsker: tokenId, idReceiver: userId},
                                        {idAsker: userId, idReceiver: tokenId}
                                    ]

                                    // Get friendship
                                    Friend.find({$or: or})
                                        .then(friendship => {
                                            if (!Util.isObjectEmpty(friendship)) {
                                                user.authorization = getAuthorization(tokenId, userId, friendship[0])
                                            }
                                            res.send(user)
                                        })
                                } else {
                                    res.send(user)
                                }
                            } else {
                                res.send({})
                            }
                        })
                })
                .catch(err => {
                    Request.errorHandler(res, Status.SERVER_ERROR, err.message)
                })
        } else {
            Request.errorHandler(res, Status.USER_ERROR, 'property _id is missing from the query')
        }

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

    updateMany(req, res, next) {
        const users = req.body
        const result = []

        if (!Util.isEmpty(users)) {
            for (let user of users) {
                User.updateOne({_id: user._id}, user)
                    .then(isUpdate => {
                        result.push({id: user._id, success: true, error: null})
                    })
                    .catch(err => {
                        result.push({id: user._id, success: false, error: error.message})
                    })
                    .then(() => {
                        if (users.indexOf(user) === users.length - 1) res.send(result)
                    })
            }
        } else {
            Request.errorHandler(res, Status.USER_ERROR, "No users provided.")
        }

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