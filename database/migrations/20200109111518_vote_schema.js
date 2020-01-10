exports.up = function(knex) {
  return knex.schema.createTable('vote', tbl => {
    tbl.increments();

    tbl.integer('like')
    .default(1);

    tbl.integer('dislike')
    .default(-1);

    // tbl.boolean('like')
    // .defaultTo(false);

    // tbl.boolean('dislike')
    // .defaultTo(false);

    tbl.integer('joke_id')
        .unsigned()
        .references('id')
        .inTable('jokes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    tbl.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  });
};

exports.down = function(knex) {};
