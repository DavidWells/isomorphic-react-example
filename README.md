# Isomorphic JavaScript with React & Node

## What is Isomorphic JavaScript ?

Shared JavaScript that runs on both the client & server.

## What does it solve?
JavaScript driven MVCs (angular, ember, backbone, etc.) render on DOM load, this can be really really slowwwww and can make for a bad user experience. They also aren't indexable by search engines (without paying $$ for a third party service like https://prerender.io/).

When you render JS on the server side you can solve these problems and more!

Isomorphic Javascript Benefits:
* Better overall user experience
* Search engine indexable
* Easier code maintenance
* Free progressive enhancements

## Install Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone git@github.com:HelloClicky/helloClicky.git`
2. Install packages: `npm install`
3. Launch: `node server.js`
4. Visit in your browser at: `http://localhost:4444`
5. To see serverside rendering, comment out main.js from the /views/index.ejs file. This will show what is rendered purely from the server side.

## Other Isomorphic Tutorials

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

## New to React? Check out these tutorials
* [ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/)
* [Flux For Stupid People](http://blog.andrewray.me/flux-for-stupid-people/)

