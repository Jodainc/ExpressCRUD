var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser'); 
var app = express();
var connection = require('express-myconnection');
var mysql = require('mysql');
app.use(
    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306, //port mysql
        database: 'movies'
    }, 'request'));
var mysql = require('./models/movies')
var routes = require('./routes');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/contactt', routes.list);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
