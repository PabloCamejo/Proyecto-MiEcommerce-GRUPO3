// const datas = require('../data/products.json')
const { promiseImpl } = require('ejs')

const url = 'http://localhost:5000/api/product'
const {getNProducts, sortPopular, sortRate} = require('../services/indexServices')
const {getProducts, getProductById} = require('../services/productService')

const productController = {

    getIndex: (req, res) => {
        getProducts()
        .then(resp => resp.json())
        .then(d =>  res.render('index', {data: getNProducts(d, 4, sortRate), dataP: getNProducts(d, 8, sortPopular)}))
    },
    
    getProductById: (req, res) => {
        let id = Number(req.params.id);
        let index = id-1;
        getProducts()
        .then(response => response.json())
        // Ahora hago lo siguiente. Traigo los productos. Si el producto con el ID que quiero no existe
        // renderizo la pagina de error. Si existe, renderizo la pagina de productos, y le paso
        //los productos, el producto con el id que quiero, y el id mismo.
        .then(data =>  data[index] ? res.render('product', {card: data[index], data:data
        , id:id}) : res.render('../partials/productsError', {data}) )
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