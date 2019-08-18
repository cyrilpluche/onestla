const Status = require('./StatusCode');
const User = require('./User');
const Authorization = require('./Authorization');

const RES_STATUS = {
    USER_ERROR: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,

    SERVER_ERROR: 500
}

const PROFILE_AUTHORIZATION = {
    READONLY: 0,
    UPDATE: 1,
    PENDING: 2,
    FRIEND: 3
}

const USER_STATUS = {
    DISABLED: 0,
    CREATED: 1,
    VERIFIED: 2,
    ADMIN: 3,
}

const FRIEND_STATE = {
    BLOCKED: 0,
    PENDING: 1,
    SUCCESS: 2
}

module.exports = {
    PROFILE_AUTHORIZATION,
    RES_STATUS,
    USER_STATUS,
    FRIEND_STATE
};