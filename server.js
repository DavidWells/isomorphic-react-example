// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
path = require('path');

var app = express();
// Make sure to include the JSX transpiler
require("node-jsx").install();

var port = 4444;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating

// Set up Routes for the application
require('./app/routes/coreRoutes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

app.listen(port);

console.log('Server is Up and Running at Port : ' + port);