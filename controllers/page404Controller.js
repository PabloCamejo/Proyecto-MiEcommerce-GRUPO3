const getCartById = require('../services/cartServices')


const page404Controller = {
    getMessage: async (req, res) => {
        let data = await getCartById(1);
        
        res.render('page404', {items: data.length});
    }
}

module.exports = page404Controller;