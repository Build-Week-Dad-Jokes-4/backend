
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username', 128)
            .notNullable()
            .unique();
            users.string('password', 128).notNullable();
    })  

    .createTable('jokes', tbl => {
      tbl.increments();

      tbl.string('joke', 128).notNullable();

      tbl.string('punchline', 128).notNullable();

      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes').dropTableIfExists('users');

};
