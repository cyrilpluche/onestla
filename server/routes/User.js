const express = require('express');
const router = express.Router();
const User = require('../controllers').User
const Util = require('../helpers').Util
const Jwt  = require('../helpers').Jwt

// router.use(Jwt.verify)

router.get('/find_all', User.findAll);
router.get('/search', User.search);
router.post('/create', User.create);
router.put('/updateOne', User.updateOne);
router.delete('/delete', Util.isQueryNull, User.delete);

// router.use(Jwt.verify)
router.get('/logged', User.findToken);

module.exports = router;
