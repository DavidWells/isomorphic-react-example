var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = React.renderToString(ReactApp({}));
		//console.log(myAppHtml); // Output html rendered by react
	    res.render('index.ejs', {reactOutput: reactHtml});
	});

};