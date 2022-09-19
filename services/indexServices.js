function sortPopular(products){
    return products.sort((prev, post) => post.rating.count - prev.rating.count)
};

function getNProducts(products, n, call = (d) =>{return d}){
    return call(products).slice(0, n)
}

module.exports = {
    getNProducts,
    sortPopular
}
    ;