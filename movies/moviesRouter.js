const express = require('express');

const movies = require('./moviesModel');

const router = express.Router();

router.get("/", (req, res) => {
    movies.getMovies()
        .then(movies => {
            res.status(200).json(movies);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get movies'
            })
            console.log(err)
        })
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    
    movies.getMovieId(id)
        .then(movie => {
            res.status(200).json(movie)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get movie.'
            })
            console.log(err);
        })
  });

  
router.put("/:id", (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    
    movies.editMovie(changes, id)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Could not update movie.'
            })
        })
  });

module.exports = router