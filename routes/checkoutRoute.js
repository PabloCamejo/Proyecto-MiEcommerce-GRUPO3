const express = require('express');
const router = express.Router();

//IMPORTO LOS CONTROLADORES PARA CHECKOUT
const checkoutController = require('../controllers/checkoutController');

router.get('/checkout', checkoutController.getCheckout);

module.exports = router;