const express = require('express');
const router = express.Router()
const principalController = require('../controllers')



router.get('/', principalController.contact);

router.post('/', principalController.contactNodeMailer);

router.get('/success', )

module.exports = router;