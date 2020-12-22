const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json')


router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    const {title, director, year, rating} = req.body; //Del request body guardar el titulo, director, año, y rating
    if(title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {...req.body, id}; //Crea una nueva pelicula
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error'});
    };
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    _.each(movies, (movie, i) => {
        if(movie.id == id){    //Si el id de la pelicula que estoy recorriendo es igual al id que recibo desde delete, entonces: 
            movies.splice(i, 1) //Le paso el indice y la cantidad d peliculas a remover
        }
    });
    res.send(movies);
});

router.put('/:id', (req, res) => {
    const id = req.params.id;           //Defino el id del request para almacenarlo en la variable id
    const {title, director, year, rating} = req.body;
    if (title && director && year && rating ){
        _.each(movies, (movie, i) => {
            if(movie.id === id ) {
                movie.title = title;        //Actualizo cada dato siempre y cuando el id de la pelicula sea el mismo que el id del request
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else{
        res.status(500).json({error: "There was an error."});
    }
})

module.exports = router;