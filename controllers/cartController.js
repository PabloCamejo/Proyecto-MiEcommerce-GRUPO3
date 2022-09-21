const data = require('../data/products.json')
const {getProducts} = require('../services/productService');
const {getNProducts} = require('../services/indexServices');
const getCartById = require('../services/cartServices')


const cartController = {

    getCart: async (req, res) => {

        let data = await getCartById(1);
        res.render('cart', {cart: getNProducts(data), items: data.length})
    },

    //NO UTILIZARLAS EN SPRINT 2
    // getCartById: (req, res) => {
    //     res.render('/')
    // },
    // postCart: (req, res) => {
    //     res.render('/')
    // },
    // putCart: (req, res) => {
    //     res.render('/')
    // },
    // deleteCart: (req, res) => {
    //     res.render('/')
    // }
}

module.exports = {cartController};