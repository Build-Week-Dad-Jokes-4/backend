exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();

    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
  })
  // .createTable("jokes", tbl => {
  //   tbl.increments();

  //   tbl.string("joke", 128).notNullable();

  //   tbl.string("punchline", 128).notNullable();

  //   tbl
  //   .integer("user_id")
  //   .unsigned()
  //   .notNullable()
  //   .references('id')
  //   .inTable('users')
  //   .onUpdate('CASCADE')
  //   .onDelete('CASCADE');
  // })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
  // return knex.schema.dropTableIfExists('jokes').dropTableIfExists('users');
};
