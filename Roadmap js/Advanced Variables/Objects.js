/* Objects in javascriipt */

/*
In JavaScript, an object is a collection of properties, where each property is a key-value pair. An object can contain any number of properties, and the values can be of any type, including other objects.

Here is an example of an object:
*/
let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

/*
n this example, person is an object with three properties: name, age, and address. The address property is itself an object with four properties: street, city, state, and zip.
*/

/*
To access a property of an object, you can use either dot notation or bracket notation. For example, to access the name property of the person object, you can use either of the following:
*/
console.log(person.name); // Output: "John"
console.log(person["name"]); // Output: "John"

//You can also add new properties to an object by assigning a value to a new key:

person.email = "john@example.com";
console.log(person.email); // Output: "john@example.com"

//You can also delete a property from an object using the delete keyword:

delete person.email;
console.log(person.email); // Output: undefined

/*
In JavaScript, functions can also be properties of an object, and are called methods. Here is an example of an object with a method:
*/

let calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(2, 3)); // Output: 5

/*
  In this example, calculator is an object with a add method that takes two parameters and returns their sum.

Objects are a fundamental part of JavaScript, and are used extensively in JavaScript programming, including in libraries and frameworks.
  */
