const express = require('express');
const router = express.Router();
const sliteControuller = require('../app/controuler/Siltecontrouller');

router.get('/search', sliteControuller.search);
router.get('/', sliteControuller.index);



module.exports = router;