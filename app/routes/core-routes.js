var React = require('react'),
		ReactDOMServer = require('react-dom/server'),
		ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app) {

	app.get('/', function(req, res){
		// React.renderToString takes your component
    // and generates the markup
		var reactHtml = ReactDOMServer.renderToString(ReactApp({}));
    // Output html rendered by react
		// console.log(myAppHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

};
