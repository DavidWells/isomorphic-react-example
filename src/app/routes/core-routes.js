var React = require('react/addons'),
ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app) {

	app.get('/default', function(req, res){

		res.render('default.html', {});

	});

	app.get('/', function(req, res){
		// React.renderToString takes your component
    // and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
		// console.log(myAppHtml);
    	res.render('index.html', {reactOutput: reactHtml});
	});

};
