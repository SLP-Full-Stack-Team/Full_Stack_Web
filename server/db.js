// connect database
// pg = postgreSQL
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "slp2023",
    password: "sc_fs_wd",
    host: "localhost",
    port: 5432,
    database: "shelearns"
});

module.exports = pool;