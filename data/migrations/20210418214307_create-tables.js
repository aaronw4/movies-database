
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('movies', table => {
            table.increments();
            table.string('title');
            table.string('director');
            table.string('metascore');
        })
        .createTable('stars', table => {
            table.increments();
            table.string('star');
        })
        .createTable('movies-stars', table => {
            table.integer('moviesId')
                .unsigned()
                .notNullable()
                .references('movies.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.integer('starsId')
                .unsigned()
                .notNullable()
                .references('stars.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.primary(['moviesId', 'starsId'])
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('movies-stars')
        .dropTableIfExists('stars')
        .dropTableIfExists('movies')
  )
};
