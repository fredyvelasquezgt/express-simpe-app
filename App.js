const express = require('express');
const app = express(); //almaceno los metodos de express en App

//cuando hago get a HOME me responde el send
app.get('/', (req, res) => {
    res.send('<a href="/contact"> Contact us </a> <br> <a href="/about"> About us </a>');
});

//ruta for contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact us page</h1>')
})


//ruta para about page
app.get('/about', (req, res) => {
    res.send('<h1>About us page</h1>')
})

//inicia el port
app.listen(3000, () => {
    console.log('server started on port 3000');
});