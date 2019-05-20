const express = require('express');
const router = express.Router();
const basicAuth = require('express-basic-auth')

const Authentication = require('../controllers').Authentication
const BasicAuthHelper = require('../helpers').BasicAuth

router.get('/login', basicAuth({ authorizer: BasicAuthHelper.decode, authorizeAsync: true, unauthorizedResponse: BasicAuthHelper.getUnauthorizedResponse }), Authentication.login);
router.get('/logout', Authentication.logout);
router.get('/logged', Authentication.logged);

module.exports = router;
