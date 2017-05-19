'use strict';

var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
        dbOptions = {
            host: 'localhost',
            user: 'root',
            password: '',
            port: 3306,
            database: 'movies'
    },
    Movies = myConnection(mysql, dbOptions, 'request');
        module.exports = Movies;

