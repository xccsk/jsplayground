//Constructor functions

/*
Constructor functions are a way to create objects with a specific structure and behavior in JavaScript. They define a blueprint for creating multiple objects with similar properties and methods. A constructor function is essentially a regular function, but it's invoked using the new keyword, which creates a new object and binds this to that object within the function.

Here's how to create and use constructor functions in JavaScript:
*/

//Define a constructor function:Conventionally, the name of a constructor function starts with an uppercase letter to differentiate it from regular functions.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.getFullName = function () {
      return `${this.firstName} ${this.lastName}`;
    };
  }

/*
In this example, we define a Person constructor function that takes two arguments, firstName and lastName, and sets them as properties on the newly created object. The getFullName method is also added to the object.
*/

//Create new objects using the constructor function:

/*
To create new objects using the constructor function, use the new keyword followed by the constructor function name and pass the required arguments.
*/
const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Smith');

console.log(person1.getFullName()); // Output: 'John Doe'
console.log(person2.getFullName()); // Output: 'Jane Smith'

/*
In this example, we create two new Person objects, person1 and person2, using the new keyword and the Person constructor function. Each object has its own firstName, lastName, and getFullName properties and methods.

Note that constructor functions have some limitations and can lead to performance issues when creating many objects, as each object has its own copy of methods like getFullName. In modern JavaScript, classes (introduced in ECMAScript 2015 or ES6) are often used as a more convenient and efficient way to create objects with a specific structure and behavior. However, it's essential to understand that classes are syntactic sugar over constructor functions and prototypes.

In summary, constructor functions in JavaScript are a way to create objects with a specific structure and behavior by defining a blueprint for creating multiple objects with similar properties and methods. They are typically used with the new keyword to instantiate new objects.
*/