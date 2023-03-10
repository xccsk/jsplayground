// Diffrence between Arrow and normal function

/*
Diffrences

regular functions sind entweder benannt oder anonymus arrow sind immer anonymus

regular function with name is hoisted 

arrowfunction dosnt have own "this keyword"

arrow function is not abeld to acces the keyword arguments

synataxt diffrence 

arrow functions are more used in callback functions
*/

//CHAT GBT

/*
Syntax:
The traditional function declaration syntax uses the function keyword followed by the function name, the list of parameters enclosed in parentheses, and the function body enclosed in curly braces:

 */

function add(a, b) {
  return a + b;
}

/*On the other hand, the arrow function syntax uses the => operator to separate the parameter list from the function body, and does not require the function keyword or curly braces if the function body is a single expression: */
const add = (a, b) => a + b;

/*
this binding:
The this keyword behaves differently in arrow functions compared to traditional functions. In a traditional function, the value of this is determined by the way the function is called. In an arrow function, the value of this is determined by the context in which the function is defined. This makes arrow functions particularly useful when working with object methods or event handlers, where the context of this is often lost:
 */
const person = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Hello, my name is " + this.name);
  },
};

person.sayHello(); // logs "Hello, my name is John"
person.sayHelloArrow(); // logs "Hello, my name is undefined"

/*
  arguments object:
Arrow functions do not have their own arguments object, whereas traditional functions do. In an arrow function, you can access the arguments of the function using the rest parameter syntax:
   */
function sum() {
  const args = Array.from(arguments);
  return args.reduce((total, current) => total + current);
}

const total = sum(1, 2, 3); // returns 6
