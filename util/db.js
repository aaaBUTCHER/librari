const mysql = require('mysql2');

const options = {
    host: "localhost",
    user: "root",
    database: "libraria",
    password: "root"
}
const pool = mysql.createPool(options);


module.exports = pool.promise();


