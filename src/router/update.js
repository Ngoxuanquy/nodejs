const express = require('express');
const router = express.Router();
const updateControuller = require('../app/controuler/Updatecontrouller');

router.get('/update/:id/edit', updateControuller.edit);
router.put('/update/:id', updateControuller.update_fake);
router.get('/update', updateControuller.update);



module.exports = router;