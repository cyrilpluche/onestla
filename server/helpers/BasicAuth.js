const basicAuth = require('express-basic-auth')
const User = require('../models').User
const Util = require('./Util')

const bcrypt = require('bcrypt');

module.exports = {
    decode(username, password, c) {
        User.find({email: username})
            .then(user => {
                if (!Util.isEmpty(user[0])) {
                    bcrypt.compare(password, user[0].password)
                        .then(success => c(null, success))
                        .catch(err => {
                            console.log(err)
                            c(null, false)
                        })
                } else {
                    c(null, false)
                }

                //return c(null, basicAuth.safeCompare(password, club[0].password))
            })
            .catch(err => {
                console.log(err)
                return c(null, false)
            })
    },

    getUnauthorizedResponse(req) {
        return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
    }
}