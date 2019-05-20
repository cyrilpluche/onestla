const express = require('express');
const router = express.Router();
const Club = require('../controllers').Club

router.get('/find_all', Club.findAll);
router.post('/create', Club.create);

module.exports = router;
