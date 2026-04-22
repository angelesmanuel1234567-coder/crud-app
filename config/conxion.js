const mysql = require('mysql2');

const pool = mysql.createPool({
    uri: process.env.DATABASE_URL
});

module.exports = pool.promise();
