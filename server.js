// *******************************************************
// SERVER VARIABLES
// *******************************************************
var express = require('express'),
nunjucks = require('nunjucks'),
path = require('path'),
app = express(),
port = 3000,
bodyParser = require('body-parser');

// *******************************************************
// NODE-JSX TRANSPILER
// *******************************************************
// This include the node-jsx transpiler to turn your react
// components into javascript code
require('node-jsx').install();

// *******************************************************
// STATIC DIRECTORY SETUP
// *******************************************************
app.use(express.static(path.join(__dirname, 'public')));

// *******************************************************
// NUNJUCKS TEMPLATING SETUP
// *******************************************************
// NOTE: using autoescape = false stops the react html
// elements from being escaped as strings instead of html elements
nunjucks.configure('./views', {
    autoescape: false,
    express: app
});

// *******************************************************
// APP ROUTING
// *******************************************************
require('./app/routes/core-routes.js')(app);

// *******************************************************
// ERROR HANDLING
// *******************************************************
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

// *******************************************************
// SERVER LISTENING AND STARTUP
// *******************************************************
// app.listen(port);
// console.log('Server is Up and Running at Port : ' + port);

module.exports = app;
