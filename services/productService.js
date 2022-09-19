const url = 'http://localhost:5000/api/product'
const fetch = require('node-fetch')

const getProducts = () =>{
    return fetch(url)
}

const getProductById = (id) =>{
    return fetch(`http://localhost:5000/api/product/${id}`)
}
module.exports = {getProducts, getProductById};