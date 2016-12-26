var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var mongoose = require('mongoose');
var serverConfig = require('./server-config')();
var morgan = require('morgan');

var app = express();

//Configure app
app.use(compression());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

//Logging
app.use(morgan('dev'));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var port = 9000;

//Connect to mongodb
mongoose.connect(serverConfig.dbUrl + "/" + serverConfig.dbName);

//Load the api modules
require('./api')(app);

app.get('*', function (req, res) {
    res.send("It works! :D");
});

app.listen(port, function () {
    console.log("Awesomeness is happening on port: ", port);
});
