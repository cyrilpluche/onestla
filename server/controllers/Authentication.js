const Club = require('../models').Club
const User = require('../models').User
const Jwt = require('../helpers').Jwt

const bcrypt = require('bcrypt');

module.exports = {
    login(req, res, next) {
        User.find({email: req.auth.user})
            .then(user => {
                const u = user[0]
                bcrypt.compare(req.auth.password, u.password)
                    .then(success => {
                        if (success) {
                            const payload = {
                                _id: user[0]._id
                            }
                            const token = Jwt.encode(payload)
                            res.send({token: token})
                        }
                        else res.status(401).send('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(401).send('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
                    })
            });
    },


    logout(req, res, next) {
        Club.find(req.query)
            .then(clubs => {
                res.send(clubs)
            })
            .catch(err => {
                res.status(400).send({error: err.message})
            })
    }
    ,

    logged(req, res, next) {
        Club.updateOne(req.query, req.body)
            .then(isUpdate => res.send(isUpdate))
            .catch(err => res.status(400).send({error: err.message}))
    }
}