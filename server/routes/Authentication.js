const express = require('express');
const router = express.Router();
const basicAuth = require('express-basic-auth')

const Authentication = require('../controllers').Authentication
const BasicAuthHelper = require('../helpers').BasicAuth
const Jwt = require('../helpers').Jwt

const User = require('../controllers').User

router.get('/login', basicAuth({ authorizer: BasicAuthHelper.decode, authorizeAsync: true, unauthorizedResponse: BasicAuthHelper.getUnauthorizedResponse }), Authentication.login);
router.get('/logout', Authentication.logout);
router.get('/logged', Jwt.verify, Authentication.logged);

router.post('/signup', User.checkSignup, User.create);

module.exports = router;
