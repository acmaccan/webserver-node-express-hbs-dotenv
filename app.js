// MVC - App Node + Express + Handlebars + dotenv (para configurar el environment con el port)
// Para desplegar mi app necesito el port con .env + "start": "node app.js" en package
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// Call HBS for express & register partials
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para servir contenido estático
app.use(express.static('public'));

// Routing para renderizar las vistas dinámicas con Handlebars
app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Andrea Maccan',
        titulo: 'Curso Node de cero a experto'
    });
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Andrea Maccan',
        titulo: 'Curso Node de cero a experto'
    });
})

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Andrea Maccan',
        titulo: 'Curso Node de cero a experto'
    });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});