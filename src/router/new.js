const express = require('express');
const router = express.Router();
const newsControuller = require('../app/controuler/Newcontrouller');

// router.get('/giohang', newsControuller.giohang);
router.get('/:slug', newsControuller.show);
router.get('/', newsControuller.index);
// router.post('/', newsControuller.index);




module.exports = router;