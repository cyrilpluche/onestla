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

    clone(object) {
        return JSON.parse(JSON.stringify(object))
    },

    isNull(object) {
        return object === undefined || object === null
    },

    isObjectEmpty(object) {
        return object === undefined || object === null || object === {}
    },

    isEmpty(array) {
        return array === undefined || array === null || array.length === 0
    },

    isStrNull(object) {
        return object === undefined || object === null || object === ''
    },

    equals(o1, o2) {
        return !this.isStrNull(o1) && !this.isStrNull(o2) && o1.toString() === o2.toString()
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