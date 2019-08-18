const RES_STATUS = require('../enums').RES_STATUS

module.exports = {
    errorHandler(res, status, msg) {
        if (status === RES_STATUS.SERVER_ERROR) {
            res.status(status).send({ error: 'Internal server error : ' + msg })
        } else {
            res.status(status).send({ error: msg })
        }
    }
}