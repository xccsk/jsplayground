//Prototype chain

/*
The prototype chain is a fundamental concept in JavaScript that deals with object inheritance and property lookups. In JavaScript, objects can inherit properties and methods from other objects through their prototypes. This mechanism forms the basis of the prototype chain.

Each object in JavaScript has an internal property called [[Prototype]] (also accessible via the __proto__ property or Object.getPrototypeOf() method), which points to the object's prototype. The prototype is another object from which the current object inherits properties and methods.

When you try to access a property or method on an object, JavaScript first checks if the property exists on the object itself. If it doesn't, JavaScript looks up the prototype chain, checking each prototype object for the requested property. This process continues until either the property is found or the end of the prototype chain is reached (i.e., the prototype is null). If the property is still not found, JavaScript returns undefined.

Here's a simple example demonstrating the prototype chain:
 */

// Constructor function for a Person
function Person(name) {
  this.name = name;
}

// Add a method to the Person prototype
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

// Create a new instance of Person
const person1 = new Person("John Doe");
person1.sayName(); // Output: 'My name is John Doe'

console.log(person1.__proto__ === Person.prototype); // Output: true
console.log(Person.prototype.__proto__ === Object.prototype); // Output: true
console.log(Object.prototype.__proto__); // Output: null (end of the prototype chain)

/*
  In this example, we create a Person constructor function and add a sayName method to its prototype. When we create a new Person instance and call the sayName method, JavaScript looks up the prototype chain and finds the method on the Person.prototype object.

The prototype chain in this example can be described as follows:

person1 has Person.prototype as its prototype.
Person.prototype has Object.prototype as its prototype.
Object.prototype has null as its prototype, marking the end of the prototype chain.
In summary, the prototype chain is a core concept in JavaScript that deals with object inheritance and property lookups. Objects can inherit properties and methods from their prototypes, forming a chain of objects that JavaScript traverses when searching for a property. This mechanism allows for efficient sharing of properties and methods, promoting code reusability and a more organized codebase.
*/
