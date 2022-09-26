const {getNCart} = require('../services/cartServices')


const checkoutController = {
    getCheckout: async (req, res) => {
        let data = await getNCart(1);
        res.render('checkout', {items: data});
    }
}

module.exports = checkoutController;