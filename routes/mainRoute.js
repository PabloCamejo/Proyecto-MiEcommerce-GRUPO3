const express = require('express');
const router = express.Router();

//REQUIERO LAS RUTAS CORRESPONDIENTES A CADA ENTIDAD
const cartRoute = require('./cartRoute');
const checkoutRoute = require('./checkoutRoute');
const userRoute = require('./userRoute');
const productRoute = require('./productRoute');
const page404Route = require('./page404Route');


// router.get('/products', productRoute);

// router.get('/', cartRoute);
// router.get('/', checkoutRoute);
// router.get('/', userRoute);
//REDIRIGE LA RUTA CORRESPONDIENTE
router.use('/', productRoute);
router.use('/', cartRoute);
router.use('/', checkoutRoute);
router.use('/', userRoute);
router.use('/', page404Route);

module.exports = router;








