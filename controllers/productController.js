const data1 = require('../data/products.json')
const fetch = require('node-fetch')
const { promiseImpl } = require('ejs')
const url = 'http://localhost:5000/api/product'
const {getNProducts, sortPopular} = require('../services/indexServices')

const productController = {

    getProducts: (req, res) => {
        res.render('index', {data: data})
    },

    // getIndex: (req, res) => {
    //     res.render('index', {data: data})
    // },
    getIndex: (req, res) => {
        fetch(url)
        .then(response => response.json())
        .then(d =>  res.render('index', {data: getNProducts(d, 4), dataP: getNProducts(d, 8, sortPopular)}))
        // .then(data => console.log(data))
        
        // res.render('index', {data: data})
    },

    getProductById: (req, res) => {
        let id = Number(req.params.id);

        fetch(`http://localhost:5000/api/product/${id}`)
        .then(response => response.json())
        .then(data => data.error ? res.render('../partials/productsError') : res.render('product', {card: data, data:data1
            , id:id}))
        
        
        // .catch( err => res.send('alo'))
        // res.render('product', {data: data, id: id})
    },
    // res.render('product', {data: data, id:id}


    // getProductById: (req, res) => {
    //     let id = Number(req.params.id);
    //     res.render('product', {data: data, id: id})
    // },

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