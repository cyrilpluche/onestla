const express = require('express');
const router = express.Router();
const Club = require('../controllers').Club

router.get('/find_all', Club.findAll);
router.get('/admin/find_all', Club.adminFindAll);

router.get('/list', Club.findList);
router.post('/create', Club.create);
router.put('/updateOne', Club.updateOne);

module.exports = router;
