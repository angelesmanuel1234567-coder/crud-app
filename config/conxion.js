const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'shinkansen.proxy.rlwy.net',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: 18280
});

module.exports = pool.promise();
