
exports.seed = function(knex) {
  return knex('movies-stars').insert([
    {moviesId: 0, starsId: 0},
    {moviesId: 0, starsId: 1},
    {moviesId: 0, starsId: 2},
    {moviesId: 1, starsId: 3},
    {moviesId: 1, starsId: 4},
    {moviesId: 1, starsId: 5},
    {moviesId: 2, starsId: 6},
    {moviesId: 2, starsId: 7},
    {moviesId: 2, starsId: 8},
    {moviesId: 3, starsId: 9},
    {moviesId: 3, starsId: 10},
    {moviesId: 3, starsId: 11},
    {moviesId: 4, starsId: 12},
    {moviesId: 4, starsId: 13},
    {moviesId: 4, starsId: 14},
    {moviesId: 5, starsId: 15},
    {moviesId: 5, starsId: 16},
    {moviesId: 5, starsId: 17}
  ]);
};
