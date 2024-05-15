const mysql = require('mysql2');

const options = {
    host: "localhost",
    user: "root",
    database: "libraria",
    password: "libraria123"
}
const pool = mysql.createPool(options);


module.exports = pool.promise();


