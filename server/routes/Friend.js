const express = require('express');
const router = express.Router();
const Friend = require('../controllers').Friend
const Bcrypt = require('../helpers').Bcrypt
const Jwt = require('../helpers').Jwt

// router.use(Jwt.verify)

router.get('/find_all', Friend.findAll);
router.post('/create', Friend.create);
router.put('/updateOne', Friend.updateOne);

module.exports = router;
