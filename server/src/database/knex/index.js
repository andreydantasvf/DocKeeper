const config = require("../../../knexfile");
const knex = require("knex");

knex.migrate.latest([config]);
const connection = knex(config);

module.exports = connection;