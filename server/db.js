// connect database
// pg = postgreSQL
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "CCC",
    host: "localhost",
    port: 5432,
    database: "shelearns"
});

module.exports = pool;