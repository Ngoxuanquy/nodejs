const express = require('express');
const router = express.Router();
const chitietControuller = require('../app/controuler/Chitietcontrouller');

router.get('/create', chitietControuller.create);
// router.get('/giohang', chitietControuller.giohang);

router.post('/stort', chitietControuller.stort);
router.post('/giohang', chitietControuller.giohang);
router.delete('/giohang/:id', chitietControuller.delete);
router.post('/Seclect',chitietControuller.Seclect );
router.get('/cart',chitietControuller.cart );

// router.get('/giohang/', chitietControuller.giohang);

router.get('/:slug', chitietControuller.index);


module.exports = router;