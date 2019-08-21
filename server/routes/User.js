const express = require('express');
const router = express.Router();
const User = require('../controllers').User
const Util = require('../helpers').Util
const Jwt  = require('../helpers').Jwt

// router.use(Jwt.verify)

router.get('/admin/find_all', User.adminFindAll);
router.get('/find_all', User.findAll);
router.get('/profile', User.findProfile);
router.get('/search', User.search);

router.post('/create', User.create);
router.put('/updateOne', User.updateOne);
router.put('/admin/update_many', User.updateMany);
router.delete('/delete', Util.isQueryNull, User.delete);

module.exports = router;
