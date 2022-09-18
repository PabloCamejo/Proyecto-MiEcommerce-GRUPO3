//IMPORTO EL ARCHIVO PRINCIPAL QUE CONTIENE EL RUTEO 
const mainRoute = require('./routes/mainRoute')

const express = require('express');
const path = require('path');
const PORT = 3032;


const app = express();



app.use(express.static('public'))
app.set('views', './views/pages')
app.set('view engine', 'ejs');
//ACA SE DIRIGE AL ARCHIVO CON TODAS LAS RUTAS

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


// app.use((req,res,next) =>{
//     res.status(404).send('Error')
// })
app.listen(PORT, () => {
    console.log('http://localhost:3032');
})