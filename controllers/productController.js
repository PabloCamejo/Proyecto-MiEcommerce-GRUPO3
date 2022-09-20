
const { getProducts, getProductById } = require('../services/productService')
const { promiseImpl } = require('ejs')
const url = 'http://localhost:5000/api/product'
const {getNProducts, sortPopular, sortRate} = require('../services/indexServices')


const productController = {
    getIndex: async (req, res) => {
        let data = await getProducts()
        res.render('index', {dataRate: getNProducts(data, 4, sortRate), dataPopulars: getNProducts(data, 8, sortPopular)})
        
    },

    getProductById: async (req, res) => {
        let id = Number(req.params.id);

        let [ product, products ] = await Promise.all([
            getProductById(id),
            getProducts()
        ])

        if(product.error){
            res.render('productsError', { data: products } )
        }else{
            let relatedProducts = products.filter(p => p.category == product.category)
            res.render('product', { product, relatedProducts })
        }
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