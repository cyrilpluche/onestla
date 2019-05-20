const basicAuth = require('express-basic-auth')
const User = require('../models').User

module.exports = {
    decode(username, password, c) {
        User.find({email: username})
            .then(user => {
                return c(null, basicAuth.safeCompare(password, user[0].password))
            })
            .catch(err => {
                return c(null, false)
            })
    },

    getUnauthorizedResponse(req) {
        return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
    }
}