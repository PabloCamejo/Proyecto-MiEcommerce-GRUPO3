const { getProductById } = require('./productService');
const baseUrl = "http://localhost:5000/api/cart";
const fetch = require('node-fetch');

const getNCart = async (id) => {
    const resCart = await fetch(`${baseUrl}/${id}`);
    const dataCart = await resCart.json()
    return  dataCart.error ? 0 : dataCart.length
}

const getCartById = async (id) => {
    const resCart = await fetch(`${baseUrl}/${id}`);
    const dataCart = await resCart.json();
    if (dataCart.error) return []
    const productsCard = []
    for(let item of dataCart) {
        const product = await getProductById(item.id);
        product.quantity = item.quantity
        productsCard.push(product)
    }

    return productsCard ;
}


module.exports = getCartById
