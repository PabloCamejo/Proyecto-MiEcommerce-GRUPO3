const {getNCart}= require('../services/cartServices')
const getUsers= require('../services/userServices')

const userController = {
    getLogin: async (req, res) => {
        let data = await getNCart(1);
        let users = await getUsers();
        
        res.render('login', {items: data, users: users});
    },

    getRegister: async (req, res) => {
        let data = await getNCart(1);
        res.render('register', {items: data});
    },


    postLogin: (req, res) => {
        res.render('/')
    },

    // postRegister: (req, res) => {
    //     res.render('/')
    // }
}

module.exports = userController;