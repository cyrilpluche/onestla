const express = require('express');
const router = express.Router();
const Frequent = require('../controllers').Frequent
const Bcrypt = require('../helpers').Bcrypt
const Jwt = require('../helpers').Jwt

// router.use(Jwt.verify)

router.get('/find_all', Frequent.findAll);
router.post('/create', Frequent.create);
router.put('/updateOne', Frequent.updateOne);

module.exports = router;
