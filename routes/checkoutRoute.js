const express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/checkoutController');

router.get('/checkout', checkoutController.getCheckout);

module.exports = router;