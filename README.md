### What is Isomorphic/Universal JavaScript ?

There is a push to change the word [Isomorphic to Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9). Whatever floats your boat!

See full post on [ReactJS News](http://reactjsnews.com/isomorphic-javascript-with-react-node/)

Shared JavaScript that runs on both the client & server.

#### What's the point?
JavaScript driven MVCs (angular, ember, backbone, etc.) render on DOM load, this can be really slowwwww & can make for a bad user experience.

Another major problem is that they aren't indexable by search engines (without paying $$ for a third party service like https://prerender.io/). If your app is serving any kind of data that people might be searching for, **this is a bad thing**.

When you render JavaScript on the server side you can solve these problems and be super cool while doing so!

####  Isomorphic Javascript Benefits:
* Better overall user experience
* Search engine indexable
* Easier code maintenance
* Free progressive enhancements

I've built a live example of isomorphic JS for you to check out here: https://github.com/DavidWells/isomorphic-react-example

The demo uses the [griddle react](http://dynamictyped.github.io/Griddle/) component to show how you can have apps with large data sets indexed by search engines and thus easier to find by potential users in search engines.

### Tutorial & Video!

https://www.youtube.com/watch?v=8wfY4TGtMUo

In /server.js install the jsx transpiler:
```js
// Make sure to include the JSX transpiler
require("node-jsx").install();
```

Then change components to Node friendly syntax where you module.exports the component if it's in a seperate file

Also make sure to `React.createFactory` your component for it to be rendered server side
```js
/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 100;

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log(fakeData);

      },

      render: function () {

        return (
          <div id="table-area">

             <Griddle results={fakeData} columnMetadata={columnMeta} resultsPerPage={resultsPerPage} tableClassName="table"/>

          </div>
        )
      }

  });

/* Module.exports instead of normal dom mounting */
module.exports.ReactApp = ReactApp;
/* Normal mounting happens inside of /main.js and is bundled with browserify */
```

Now the magic happens with routes using `React.renderToString` inside /app/routes/coreRoutes.js:
```js
var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

module.exports = function(app) {

	app.get('/', function(req, res){
    	// React.renderToString takes your component
        // and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
        // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('index.ejs', {reactOutput: reactHtml});
	});

};
```

The `reactOutput` variable is then passed into the template:
```html
<!doctype html>
<html>
  <head>
    <title>React Isomorphic Server Side Rendering Example</title>
    <link href='/styles.css' rel="stylesheet">
  </head>
  <body>
	<h1 id="main-title">React Isomorphic Server Side Rendering Example</h1>
    <!-- reactOutput is the server compiled React Dom Nodes -->
    <!-- comment out reactOutput to see empty non indexable source in browser -->
    <div id="react-main-mount">
      <%- reactOutput %>
    </div>

	<!-- comment out main.js to ONLY see server side rendering -->
	<script src="/main.js"></script>


  </body>
</html>

```
### Notes:

Because the files are .js and not .jsx, the `React.createFactory` has to be used when including components. See why here: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261

### Demo Install Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `git@github.com:DavidWells/isomorphic-react-example.git`
2. Install packages: `npm install`
3. Launch: `node server.js`
4. Visit in your browser at: `http://localhost:4444`
5. To see serverside rendering, comment out main.js from the /views/index.ejs file. This will show what is rendered purely from the server side.

Build changes with `gulp`

### Other Isomorphic Tutorials & Resources

##### Server-Client with React
* [Server/Client With React, Part 1: Getting Started](http://eflorenzano.com/blog/2014/04/09/react-part-1-getting-started/)
* [Server/Client With React, Part 2: The Build System](http://eflorenzano.com/blog/2014/04/10/react-part-2-build-system/)
* [Server/Client With React, Part 3: Frontend Server](http://eflorenzano.com/blog/2014/04/11/react-part-3-frontend-server/)

##### Server Side rendering
* [Server Side Rendering for ReactJS](http://yanns.github.io/blog/2014/03/15/server-side-rendering-for-javascript-reactjs-framework/)
* [React Server Rendering](https://github.com/mhart/react-server-example)
* [JDK8 + Facebook React: Rendering single page apps on the server](http://augustl.com/blog/2014/jdk8_react_rendering_on_server/)
* [Server-side React with PHP – part 1](http://www.phpied.com/server-side-react-with-php/)
* [Server-side React with PHP – part 2](http://www.phpied.com/server-side-react-with-php-part-2/)
* [Server-rendered React components in Rails](http://bensmithett.com/server-rendered-react-components-in-rails/)

### New to React? Check out these tutorials
* [ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/)
* [Flux For Stupid People](http://blog.andrewray.me/flux-for-stupid-people/)
