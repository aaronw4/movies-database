
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('movies', table => {
            table.increments();
            table.string('title');
            table.string('director');
            table.string('metascore');
            table.specificType('stars', 'TEXT[]');
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('movies')
  )
};
