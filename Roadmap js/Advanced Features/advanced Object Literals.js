//advanced Object Literals

/*
Advanced object literals, also known as enhanced object literals, are an ECMAScript 2015 (ES6) feature that introduces a more concise syntax for creating objects. This improved syntax allows you to simplify your code and make it more readable. Some of the key enhancements include:

Property value shorthand:
When the property name and the variable name holding the value are the same, you can use the shorthand syntax. Instead of writing { propertyName: propertyName }, you can simply write { propertyName }.
*/

const x = 1;
const y = 2;

const point = {
  x,
  y,
};

console.log(point); // Output: { x: 1, y: 2 }

//Method definition shorthand:

/*
You can use a shorthand syntax for defining methods within an object literal. Instead of writing methodName: function() { ... }, you can write methodName() { ... }.
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(person.getFullName()); // Output: 'John Doe'

//Computed property names:You can use expressions in square brackets [] as property names, which get evaluated at runtime.

const propertyName = 'name';

const obj = {
  [propertyName]: 'John Doe',
};

console.log(obj.name); // Output: 'John Doe'

//Object spread:Though not part of the original ES6 enhanced object literals, the object spread syntax (introduced in ES2018) allows you to spread the properties of one or more objects into a new object. This makes it easy to create new objects by merging or cloning existing ones.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

//These advanced object literal features simplify object creation and manipulation in JavaScript, making your code more concise, expressive, and easier to read.