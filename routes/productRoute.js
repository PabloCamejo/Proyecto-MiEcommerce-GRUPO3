

const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/', productController.getProducts);
router.get('/products/:id', productController.getProductById);

//NO UTILIZAR EN SPRINT 2
// router.post('/product', productController.postProduct);
// router.put('/product', productController.putProduct);
// router.delete('/product/:id', productController.deleteProduct);

module.exports = router;



