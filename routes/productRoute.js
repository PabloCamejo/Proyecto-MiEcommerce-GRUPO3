const express = require('express');
const router = express.Router();

//IMPORTO LOS CONTROLADORES DE PRODUCT
const productController = require('../controllers/productController')

router.get('/', productController.getIndex);
router.get('/products/:id', productController.getProductById);

//!!!!!!!!!!!NO UTILIZAR EN SPRINT 2!!!!!!!!!!!!!!!!!!!
// router.post('/product', productController.postProduct);
// router.put('/product', productController.putProduct);
// router.delete('/product/:id', productController.deleteProduct);

module.exports = router;



