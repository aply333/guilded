const bcrypt = require('bcryptjs');
const ataman = bcrypt.hashSync('isHash', 12)

exports.seed = function(knex) {
  return knex('USERS').truncate()
    .then(function () {
      return knex('USERS').insert([
        { tag: "ataman", 
          name: 'Andrei',
          email: 'test@test.com',
          hash: ataman
        },
      ]);
    });
};
