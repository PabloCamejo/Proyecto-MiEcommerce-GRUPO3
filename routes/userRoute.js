const express = require('express');
const router = express.Router();

//IMPORTO LOS CONTROLADORES DE USER
const userController = require('../controllers/userController')

router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);

//!!!!!!!!!!!NO UTILIZAR EN SPRINT 2!!!!!!!!!!!!!!!!!!!
// router.post('/login', userController.postLogin);
// router.post('/register', userController.postRegister)

module.exports = router;
