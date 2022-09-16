const express = require('express');
const router = express.Router();

const cartRoute = require('./cartRoute')
const checkoutRoute = require('./checkoutRoute')
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')


router.get('/', productRoute);
// router.get('/products', productRoute);

// router.get('/', cartRoute);
// router.get('/', checkoutRoute);
// router.get('/', userRoute);

module.exports = router;








