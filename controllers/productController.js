const data = require('../data/products.json')

const productController = {

    getIndex: (req, res) => {
        res.render('index', {data: data})
    },

    getProductById: (req, res) => {
        let id = Number(req.params.id);
        res.render('product', {data: data, id: id})
    },

    //NO UTILIZARLAS EN SPRINT 2
    // postProduct: (req, res) => {
    //     res.render('/')
    // },

    // putProduct: (req, res) => {
    //     res.render('/')
    // },

    // deleteProduct: (req, res) => {
    //     res.render('/')
    // }
}

module.exports = productController;