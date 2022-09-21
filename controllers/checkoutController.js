const getCartById = require('../services/cartServices')


const checkoutController = {
    getCheckout: async (req, res) => {
        let data = await getCartById(1);
        res.render('checkout', {items: data.length});
    }
}

module.exports = checkoutController;