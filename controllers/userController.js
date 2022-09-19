

const userController = {

    getLogin: async (req, res) => {
        res.render('login');
    },

    getRegister: async (req, res) => {
        res.render('register');
    },
    
    
    
    
    //NO UTILIZARLAS EN SPRINT 2
    // postLogin: (req, res) => {
    //     res.render('/')
    // },

    // postRegister: (req, res) => {
    //     res.render('/')
    // }
}

module.exports = userController;