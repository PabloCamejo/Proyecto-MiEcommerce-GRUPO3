const data = require('../data/products.json')
const {getNProducts} = require('../services/indexServices');
const {getCartById} = require('../services/cartServices')

/* const userId = localStorage.getItem('id');   */


const cartController = {

    getCart: async (req, res) => {
        
        let data = await getCartById(req.params.id);
        console.log(req.params.id)
        res.render('cart', {cart: getNProducts(data), items: data.length})
    },

    /*     addProduct: async(req, res) => {
        let data = await getCartById(0);
        res.render('')

    } */

  /*   deleteProduct: async (req, res) => {
        let productToDelete = await deleteProduct(userId, productId);
        res.render('cart', {cart: getNProducts(data), items: data.length})        

    } */


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