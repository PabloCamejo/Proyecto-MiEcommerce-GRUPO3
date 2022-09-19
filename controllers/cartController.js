const data = require('../data/products.json')

const cartController = {

    getCart: (req, res) => {
        res.render('cart', {data: data})
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

module.exports = cartController;