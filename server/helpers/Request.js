const Status = require('../enums').Status

module.exports = {
    errorHandler(res, status, msg) {
        if (status === Status.SERVER_ERROR) {
            res.status(status).send({ error: 'Internal server error : ' + msg })
        } else {
            res.status(status).send({ error: msg })
        }
    }
}