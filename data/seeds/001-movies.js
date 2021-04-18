
exports.seed = function(knex) {
  return knex('movies').insert([
    {
      id: 0,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      metascore: "100"
    },
    {
      id: 1,
      title: "Star Wars",
      director: "George Lucas",
      metascore: "92"
    },
    {
      id: 2,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      metascore: "92"
    },
    {
      id: 3,
      title: "Terminator 2: Judgement Day",
      director: "James Cameron",
      metascore: "94"
    },
    {
      id: 4,
      title: "Dumb and Dumber",
      director: "The Farely Brothers",
      metascore: "76"
    },
    {
      id: 5,
      title: "Tombstone",
      director: "George P. Cosmatos",
      metascore: "89"
    }
  ]);
};
