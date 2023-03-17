//Factory Functions

/*
Factory function is a function in JS that create objects and returns them
Factory functions are there to create a lot of objects that have things in common 
 */

const factoryfunction = (name) => {
  return {
    talk() {
      console.log(`Hi i'am ${name}`);
    },
  };
};

const me = factoryfunction('JOHANNES')

//Chat GPT 4

/*
Factory functions are a design pattern in JavaScript used to create and return new objects. They provide a way to create objects without the need for the new keyword or constructor functions. Factory functions are especially useful when you need to create multiple instances of similar objects with shared properties or methods.

Here's a simple explanation of how to create and use factory functions in JavaScript:

Define a factory function: This is just a regular JavaScript function that creates an object, sets its properties and methods, and then returns the object.
*/
function createPerson(firstName, lastName, age) {
    return {
      firstName: firstName,
      lastName: lastName,
      age: age,
      greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
      },
    };
  }

  //Use the factory function to create objects: You can now call the factory function to create new objects with the desired properties.
  const person1 = createPerson("John", "Doe", 30);
const person2 = createPerson("Jane", "Smith", 28);

//Access object properties and methods: After creating the objects, you can access their properties and methods just like any other JavaScript object.

console.log(person1.firstName); // Output: "John"
console.log(person2.lastName); // Output: "Smith"

person1.greet(); // Output: "Hello, my name is John Doe and I am 30 years old."
person2.greet(); // Output: "Hello, my name is Jane Smith and I am 28 years old."

//Factory functions are a flexible and straightforward way to create objects in JavaScript. They can help you organize your code and make it more reusable and maintainable.