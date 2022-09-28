const {getNCart} = require('../services/cartServices')


const page404Controller = {
    getMessage: async (req, res) => {
        let data = await getNCart(1);
        res.render('page404', {items: data, recPage: false});
    },
    recovery: async (req, res) => {
        let data = await getNCart(1);
        res.render('page404', {items: data, recPage: true});
    }
}

module.exports = page404Controller;