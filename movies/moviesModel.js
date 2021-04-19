const db = require('../data/dbConfig');

function getMovies() {
    return db('movies')
};

function getMovieId(movie_id) {
    return db('movies').where({id: movie_id})
}

function editMovie(movie, movie_id) {
    return db('movies').where({id: movie_id}).update(movie);
}

module.exports = {
    getMovies,
    getMovieId,
    editMovie
}
