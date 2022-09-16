const express = require('express');
const path = require('path');
const PORT = 3032;
const app = express();
const data = require('./data/products.json')

const mainRoute = require('./routes/mainRoute')

app.use(express.static('public'))

app.set('views', './views/pages')
app.set('view engine', 'ejs');

app.use('/', mainRoute);


// app.get('/', (req, res) => {
//     res.render('index', {data: data})
// });

// app.get('/register', (req, res) => {
//     res.render('register')
// });

// app.get('/login', (req, res) => {
//     res.render('login')
// });

// app.get('/cart', (req, res) => {
//     res.render('cart', {data: data})
// });

// app.get('/products/:id', (req, res) => {
//     let id = Number(req.params.id);
//     res.render('product', {data: data, id: id})
// })

// app.post('/', (req, res) => {
//     res.render('index', {data: data, id: id})
// })


app.listen(PORT, () => {
    console.log('http://localhost:3032');
})