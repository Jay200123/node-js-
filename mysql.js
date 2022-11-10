const mysql = require('mysql');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

con.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

// module.exports = con