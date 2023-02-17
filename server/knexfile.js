const path = require("path");

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'dockeeper',
    user: 'postgres',
    password: 'cagada14'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
  }
};
