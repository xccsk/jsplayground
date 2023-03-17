//Node Modules

/*
Every file in a node is called a module
*/
/*
Node modules in JavaScript refer to reusable pieces of code that can be imported and used in your Node.js applications. Node.js is a runtime environment that allows you to run JavaScript code on the server-side, outside the context of a web browser.

Node modules can be thought of as building blocks for your application, providing functionality that you don't have to write from scratch. These modules can either be built-in (core modules) provided by Node.js or external modules available through the npm (Node Package Manager) registry.
*/

//Here's a brief explanation of the two types of Node modules:

/*
Core modules: These are built-in modules that come with Node.js by default. They provide essential functionality for tasks like file handling, HTTP server creation, and more. Some common core modules include 'fs' (file system), 'http' (HTTP server), and 'path' (manipulating file paths).
To use a core module, you can simply require it in your code like this:
*/
const fs = require('fs');

/*
External modules: These are third-party modules created by the community and published on the npm registry. You can install and use external modules to extend the functionality of your application, such as handling user authentication, parsing data, or working with databases.
To use an external module, you first need to install it using npm:
*/
npm install <module_name>

//Then, you can require it in your code:
const express = require('express');

/*
Creating your own custom modules is also possible in Node.js. You can write your own code in a separate JavaScript file, export the functions or objects you want to expose, and then import them into your main application using the 'require' function.

Here's an example:

File: custom_module.js
*/
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  module.exports = {
    greet,
  };

  //File: app.js
  const customModule = require('./custom_module');

console.log(customModule.greet('John')); // Output: Hello, John!

/*By using Node modules, you can create modular, maintainable, and scalable applications, taking advantage of the vast ecosystem of libraries available in the Node.js community. */
