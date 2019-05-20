const express = require('express');
const router = express.Router();
const User = require('../controllers').User

router.get('/find_all', User.findAll);
router.post('/create', User.create);
router.put('/updateOne', User.updateOne);

module.exports = router;
