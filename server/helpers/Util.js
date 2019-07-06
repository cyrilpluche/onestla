const Request = require('./Request')
const Status = require('../enums').Status

module.exports = {

    isQueryNull(req, res , next) {
        if (req.query === undefined || req.query === null || Object.values(req.query).length === 0) {
            Request.errorHandler(res, Status.USER_ERROR, 'Query params are empty')
        } else {
            next()
        }
    },

    isNull(object) {
        return object === undefined || object === null
    },

    isEmpty(array) {
        return array === undefined || array === null || array.length === 0
    },

    isStrNull(object) {
        return object === undefined || object === null || object === ''
    },

    /**
     * not null && length > 7
     */
    isPassword(password) {
        let success = !this.isStrNull(password)

        if (success) {
            success = password.length > 7
        }

        return success
    }
}