const express = require('express');
const router = express.Router();
const giohangControuller = require('../app/controuler/Giohangcontrouller');

router.get('/giohang', giohangControuller.index);
// router.delete('/:id', giohangControuller.delete);




module.exports = router;