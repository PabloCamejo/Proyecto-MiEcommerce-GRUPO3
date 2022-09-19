

const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')


//NO UTILIZAR EN SPRINT 2


//IMPORTO LOS CONTROLADORES DE PRODUCT

router.get('/', productController.getIndex);
router.get('/products/:id', productController.getProductById);


// Mensaje de error si no se encuentra producto //




//!!!!!!!!!!!NO UTILIZAR EN SPRINT 2!!!!!!!!!!!!!!!!!!!
// router.post('/product', productController.postProduct);
// router.put('/product', productController.putProduct);
// router.delete('/product/:id', productController.deleteProduct);

module.exports = router;



