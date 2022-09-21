const getCartById = require('../services/cartServices')

const userController = {
    getLogin: async (req, res) => {
        let data = await getCartById(1);

        res.render('login', {items: data.length});
    },

    getRegister: async (req, res) => {
        let data = await getCartById(1);
        res.render('register', {items: data.length});
    },

    //NO UTILIZARLAS EN SPRINT 2
    // postLogin: (req, res) => {
    //     res.render('/')
    // },

    // postRegister: (req, res) => {
    //     res.render('/')
    // }
}

module.exports = userController;