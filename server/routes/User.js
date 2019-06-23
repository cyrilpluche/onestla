const express = require('express');
const router = express.Router();
const User = require('../controllers').User
const Bcrypt = require('../helpers').Bcrypt
const Jwt = require('../helpers').Jwt

router.post('/signin', Bcrypt.crypt, User.create);

// router.use(Jwt.verify)

router.get('/find_all', User.findAll);
router.post('/create', User.create);
router.put('/updateOne', User.updateOne);
router.delete('/delete', User.delete);

module.exports = router;
