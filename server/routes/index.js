const express = require('express');
const router = express.Router();

router.use('/authentication', require('./Authentication'));
router.use('/club', require('./Club'));

module.exports = router;
