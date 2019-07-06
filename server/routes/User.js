const express = require('express');
const router = express.Router();
const User = require('../controllers').User
const Util = require('../helpers').Util

// router.use(Jwt.verify)

router.get('/find_all', User.findAll);
router.post('/create', User.create);
router.put('/updateOne', User.updateOne);
router.delete('/delete', Util.isQueryNull, User.delete);

module.exports = router;
