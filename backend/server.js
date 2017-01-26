const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');
const serverConfig = require('./server-config')();
const morgan = require('morgan');
const app = express();

//Configure app
app.use(compression());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

//Logging
app.use(morgan('dev'));

// Add headers
app.use((req, res, next) => {
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

const port = process.env.PORT || 9000;

//Connect to mongodb
mongoose.connect(`${serverConfig.dbUrl}/${serverConfig.dbName}`);

//Load the api modules
require('./api')(app);

app.get('*', (req, res) => {
    res.send("It works! :D");
});

app.listen(port, () => {
    console.log("Awesomeness is happening on port: ", port);
});
