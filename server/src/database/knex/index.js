const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config);
connection.migrate.latest([config]);

module.exports = connection;