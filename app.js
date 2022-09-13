const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();
const data = require('./data/products.json')

app.use(express.static('public'))


app.set('views', './views/pages')
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {data: data})
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/cart', (req, res) => {
    res.render('cart', {data: data})
});

app.get('/products', (req, res) => {
    res.render('product')
})

app.post('/login', (req, res) => {
    res.render('login')
})


app.listen(PORT, () => {
    console.log('http://localhost:3030');
})