//IMPORTO EL ARCHIVO PRINCIPAL QUE CONTIENE EL RUTEO 
const mainRoute = require('./routes/mainRoute')

const express = require('express');
const path = require('path');
const PORT = 3040;

const app = express();

app.use(express.static('public'))
app.set('views', './views/pages')
app.set('view engine', 'ejs');

//ACA SE DIRIGE AL ARCHIVO CON TODAS LAS RUTAS
app.use('/', mainRoute);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
