
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('USERS').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('USERS').insert([
        { tag: "ataman", 
          name: 'Andrei',
          email: 'test@test.com',
          hash: 'isahash'
        },
      ]);
    });
};
