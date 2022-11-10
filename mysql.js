const express = require('express')
const Joi = require('joi')
const mysql = require('mysql')
const cors = require('cors')
const { connect } = require('./routes/item')

require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

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

module.exports = con


