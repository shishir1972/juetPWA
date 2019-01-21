require('dotenv').config();
const mysql = require('mysql')

const con = mysql.createConnection({
    host:process.env.DB_HOST_SQL,
    user:process.env.DB_USER_SQL,
    password:process.env.DB_PASSWORD_SQL,
    database:process.env.DB_DATABASE_SQL,
    port:process.env.DB_PORT_SQL
});

module.exports = con;