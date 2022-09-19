// const data = require('../data/products.json')
const { getProducts, getProductById } = require('../services/productService')

const productController = {

    getIndex: async (req, res) => {
        let products = await getProducts();
        let bestRateProducts = products.slice(0).sort((a,b) => b.rating.rate - a.rating.rate)
        let bestCountProducts = products.slice(0).sort((a,b) =>  b.rating.count - a.rating.count)
        res.render('index', { bestRateProducts, bestCountProducts});
    },

    getProductById: async (req, res) => {
        let id = Number(req.params.id);

        let [ product, products ] = await Promise.all([
            getProductById(id),
            getProducts()
        ])

        if(product.error){
            //Aca renderizaria la pagina que crea Santi, con solo 4 productos de muestra.
            res.render('productsError', { data: products } )
        }else{
            //Aca con un filter selecciono los productos relacionados al producto 
            //al cual el usuario dio click.
            let relatedProducts = products.filter(p => p.category == product.category)
            res.render('product', { product, relatedProducts })
        }

        // res.render('product', {data: product, relatedProducts})
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