
exports.up = function(knex) {
  return knex.schema
    .createTable('USERS', table => {
        table.increments('user_id')
        table.string('tag')
        table.string('name')
        table.string('email')
        table.string('hash')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('USERS')
};
