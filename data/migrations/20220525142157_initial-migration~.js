exports.up = function(knex) {
    return knex.schema
      .createTable('jokes', table => {
          table.increments('jokes_id')
          table.text('joke').notNullable()
          table.text('punchline').notNullable()
      })
  };
  

  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('jokes')
  };
  

