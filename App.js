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

//si nada hace match arriba viene a parar aca abajo
//el orden de esta route importa
//tiene que ir hasta abajo o si no perjudica todas las routes de arriba
app.get('*', (req, res) => {
    res.send('404. This page does not exist. <a href="/"> Go to home </a>')
})


//inicia el port
app.listen(3000, () => {
    console.log('server started on port 3000');
});
