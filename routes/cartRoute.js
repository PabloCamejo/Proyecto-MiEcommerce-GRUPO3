const express = require('express');
const router = express.Router();
//IMPORTO LOS CONTROLADORES DE CART
const cartController = require('../controllers/cartController')

router.get('/cart', cartController.getCart)
//UTILIZARLA PARA ESTE SPRINT
// router.get('/cart/:id', cartController.getCartById);

//!!!!!!!!!!!NO UTILIZAR EN SPRINT 2!!!!!!!!!!!!!!!!!!!
// router.post('/cart', cartController.postCart);
// router.put('/cart', cartController.putCart);
// router.delete('/cart/:id', cartController.deleteCart);

module.exports = router;

