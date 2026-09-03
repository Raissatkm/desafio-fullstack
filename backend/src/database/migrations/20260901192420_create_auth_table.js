exports.up = function (knex) {
  return knex.schema.createTable('auth', function (table) {
    table.increments('id').notNullable().primary()
    table.string('email', 255).notNullable()
    table.string('token', 255).notNullable()
    table.datetime('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('auth')
}