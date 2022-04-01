const express = require('express');
const router = express.Router()
const principalController = require('../controllers')



router.get('/contact', principalController.contact);

router.post('/contact', principalController.contactNodeMailer);

router.get('/success', )

module.exports = router;