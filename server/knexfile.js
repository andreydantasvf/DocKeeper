require("dotenv/config");
const path = require("path");

module.exports = {
  client: 'postgresql',
  connection: process.env.POSTGRES_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
  }
};
