require("dotenv/config");
const path = require("path");

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'dockeeper',
    user: process.env.USER_POSTGRES,
    password: process.env.PASSWORD_POSTGRES
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
  }
};
