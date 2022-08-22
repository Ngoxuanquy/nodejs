const express = require('express');
const router = express.Router();
const chitiet = require('../app/controuler/timkiem.js');

router.post('/timkiem', chitiet.index);


module.exports = router;