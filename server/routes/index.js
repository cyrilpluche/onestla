const express = require('express');
const router = express.Router();

router.use('/authentication', require('./Authentication'));
router.use('/club', require('./Club'));
router.use('/user', require('./User'));

module.exports = router;
