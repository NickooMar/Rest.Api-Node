const express = require('express');
const morgan = require('morgan');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


//MiddleWare
app.use(morgan('dev'));
app.use(express.json()); //Desde express usamos el metodo json que recibe formatos json y los entiende
app.use(express.urlencoded({extended: false})); //Le dice que lo que tiene que entender son datos que llegan desde el formulario, solo texto, inputs ,etc, sin imagenes


//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies')); //Hace que todas las url empiecen por '/api/movies'
app.use('/api/users', require('./routes/users'));


//Starting
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});