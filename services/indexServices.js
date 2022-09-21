function sortPopular(products){
    return products.sort((prev, post) => post.rating.count - prev.rating.count)
};

function sortRate(products){
    return products.sort((prev, post) => post.rating.rate - prev.rating.rate)
};

function getNProducts(products, n, call = (d) =>{return d}){
    return call(products).slice(0, n)
}

module.exports = {
    getNProducts,
    sortPopular,
    sortRate
};