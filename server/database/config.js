const Pool = require("pg").Pool;

const pool = new Pool({
    database:"reachme",
    user: "postgres",
    password:"123456789",
    host:"localhost",
    port:5432
})

module.exports = pool;

