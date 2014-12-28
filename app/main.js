    /** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = React.createFactory(require('./components/ReactApp').ReactApp);

var mountNode = document.getElementById("react-main-mount");

React.renderComponent(new ReactApp({}), mountNode);
