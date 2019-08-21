const express = require('express');
const router = express.Router();
const Friend = require('../controllers').Friend
const Util = require('../helpers').Util
const Jwt = require('../helpers').Jwt

// router.use(Jwt.verify)

router.get('/find_all', Friend.findAll);
router.get('/find_pending', Friend.findPending);
router.get('/list', Friend.findList);
router.post('/create', Friend.create);
router.put('/updateOne', Friend.updateOne);
router.put('/accept', Friend.accept);
router.delete('/delete', Util.isQueryNull, Friend.delete);

module.exports = router;
