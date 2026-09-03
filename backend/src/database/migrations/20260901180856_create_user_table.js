exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').notNullable().primary();
    table.string('name', 100);
    table.string('email', 100).notNullable();
    table.string('password', 100).notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
