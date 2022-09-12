const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();
app.use(express.static('public'))


app.set('views', './views/pages')
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/cart', (req, res) => {
    res.render('cart')
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