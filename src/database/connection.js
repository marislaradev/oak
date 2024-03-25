const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "020790",
    database: "products",
  },
});

module.exports = knex;
