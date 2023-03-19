//Object setters and getters

/*
In JavaScript, setters and getters are special methods used to define or modify the behavior of an object when accessing or setting a specific property. Setters and getters allow you to add extra logic or validation when getting or setting a property's value, providing a way to encapsulate an object's state and promote better code organization.
*/

//Setters:

/*
A setter is a method that sets the value of a specific property. It is defined using the set keyword followed by the name of the property and a parameter representing the value to be set. When the property is set, the setter method is automatically called, and the provided value is passed as an argument.

Here's an example of a setter:
*/

const person = {
  _age: 0,

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
    } else {
      this._age = value;
    }
  },
};

person.age = 25; // Sets _age to 25
person.age = -5; // Displays 'Age cannot be negative' and doesn't change _age

/*
  In this example, we define a setter for the age property. When the age property is set, the setter checks if the provided value is negative. If it is, an error message is displayed, and the _age property remains unchanged.
  */

//Getters:

/*
A getter is a method that gets the value of a specific property. It is defined using the get keyword followed by the name of the property. When the property is accessed, the getter method is automatically called, and the returned value is used.

Here's an example of a getter:
*/
const person = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName); // Output: 'John Doe'

/*
  In this example, we define a getter for the fullName property. When the fullName property is accessed, the getter method concatenates the firstName and lastName properties and returns the result.

Setters and getters can be used together to create a more controlled way of accessing and modifying an object's properties, allowing you to add custom logic, validation, or side effects when getting or setting property values. This helps promote encapsulation and better organization of your code.
  */
