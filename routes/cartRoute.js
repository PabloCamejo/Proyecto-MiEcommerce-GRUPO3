const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController')

router.get('/cart', cartController.getCart)
// router.get('/cart/:id', cartController.getCartById);

//NO UTILIZAR EN SPRINT 2
// router.post('/cart', cartController.postCart);
// router.put('/cart', cartController.putCart);
// router.delete('/cart/:id', cartController.deleteCart);

module.exports = router;

