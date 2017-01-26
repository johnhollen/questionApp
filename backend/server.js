const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');
const morgan = require('morgan');
const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Add headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = process.env.PORT || 9000;

mongoose.Promise = global.Promise;
mongoose.connect(`${serverConfig.dbUrl}/${serverConfig.dbName}`);

require('./api')(app);

app.get('*', (req, res) => {
    res.send("QuestionApp backend.");
});

app.listen(port, () => {
    console.log("Awesomeness is happening on port: ", port);
});
