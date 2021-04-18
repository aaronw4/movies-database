
exports.seed = function(knex) {
  return knex('stars').insert([
    {id: 0, star: 'Marlon Brando'},
    {id: 1, star: 'Al Pacino'},
    {id: 2, star: 'Robert Duvall'},
    {id: 3, star: 'Mark Hamill'},
    {id: 4, star: 'Harrison Ford'},
    {id: 5, star: 'Carrie Fisher'},
    {id: 6, star: 'Elijah Wood'},
    {id: 7, star: 'Ian McKellen'},
    {id: 8, star: 'Orlando Bloom'},
    {id: 9, star: 'Arnold Schwarzenegger'},
    {id: 10, star: 'Edward Furlong'},
    {id: 11, star: 'Linda Hamilton'},
    {id: 12, star: 'Jim Carrey'},
    {id: 13, star: 'Jeff Daniels'},
    {id: 14, star: 'Lauren Holly'},
    {id: 15, star: 'Kurt Russell'},
    {id: 16, star: 'Bill Paxton'},
    {id: 17, star: 'Sam Elliot'}
  ]);
};
