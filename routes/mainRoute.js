const express = require('express');
const router = express.Router();
//REQUIERO LAS RUTAS CORRESPONDIENTES A CADA ENTIDAD
const cartRoute = require('./cartRoute')
const checkoutRoute = require('./checkoutRoute')
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')

//REDIRIGE LA RUTA CORRESPONDIENTE
router.use('/', productRoute);
router.use('/', cartRoute);
router.use('/', checkoutRoute);
router.use('/', userRoute);

module.exports = router;








