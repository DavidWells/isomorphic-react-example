/** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = require('./components/ReactApp');

var mountNode = document.getElementById('react-main-mount');

React.render(<ReactApp />, mountNode);
