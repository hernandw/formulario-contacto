const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/');
const path = require('path');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


//Static
app.use(express.static(path.join(__dirname, "public")));

//Configuración de Plantilla
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//Ruta del Servidor
app.use('/', routes);



//Levantamiento del Servidor
app.listen(PORT, (req, res)=>{
    console.log(`Servidor Activo on port: ${PORT}`);
})

module.exports = app;