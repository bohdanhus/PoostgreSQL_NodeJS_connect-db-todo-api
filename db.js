const Pool = require('pg').Pool
const pool = new Pool({
    user: 'todolist_app',
    password: 'intern',
    host: 'localhost',
    port: 5432,
    database: 'employee',
})

module.exports = pool;