const express = require('express');
const router = express.Router();

//IMPORTO LOS CONTROLADORES PARA CHECKOUT
const page404Controller = require('../controllers/page404Controller');

router.get('/recovery-password', page404Controller.recovery);

module.exports = router;