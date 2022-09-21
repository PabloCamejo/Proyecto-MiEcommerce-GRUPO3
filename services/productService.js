const fetch = require('node-fetch');
const baseUrl = "http://localhost:5000/api/product";

const getProducts = async () => {
    const resProducts = await fetch(baseUrl);
    const dataProducts = await resProducts.json();
    return  dataProducts;
}
const getProductById = async (id) => {
    const resProducts = await fetch(`${baseUrl}/${id}`);
    const dataProduct = await resProducts.json();
    return dataProduct ;
}



module.exports = {getProducts, getProductById};