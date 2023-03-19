//Call in JS

/*
The call method in JavaScript is a built-in method of the Function prototype that allows you to invoke a function with a specified this value and individual arguments. It's particularly useful when you want to call a function and explicitly set the value of this for that function invocation.

Here's how to use the call method:
*/

//Define an object with a method that relies on the value of this:
const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//Use the call method to invoke the getFullName function with a specified this value:
const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith",
};

const fullName = person.getFullName.call(anotherPerson);

console.log(fullName); // Output: 'Jane Smith'

/*
  In this example, we use the call method to invoke the getFullName function from the person object, but with the this value set to anotherPerson. This allows the function to access firstName and lastName properties from the anotherPerson object instead of the person object.

You can also pass additional arguments to the function using call. For example:
  */

function greet(greeting) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
}

const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Jane", lastName: "Smith" };

greet.call(person1, "Hello"); // Output: 'Hello, John Doe!'
greet.call(person2, "Hi"); // Output: 'Hi, Jane Smith!'

/*
  In this example, we use the call method to invoke the greet function with different this values (person1 and person2) and pass a greeting as an additional argument.

The call method is a powerful and flexible tool in JavaScript for controlling the value of this and passing arguments when invoking functions, helping you create more adaptable and maintainable code.
  */

//APPLY

/*
The apply method allows you to invoke a function with a specified this value and an array (or an array-like object) of arguments. It is particularly useful when you want to call a function and explicitly set the value of this for that function invocation and pass an array of arguments.

Here's how to use the apply method:
*/

//Define a function that relies on the value of this and takes multiple arguments:
function introduce(greeting, punctuation) {
  console.log(
    `${greeting}, my name is ${this.firstName} ${this.lastName}${punctuation}`
  );
}

//Use the apply method to invoke the introduce function with a specified this value and an array of arguments:

const person = {
  firstName: "John",
  lastName: "Doe",
};

const args = ["Hello", "!"];

introduce.apply(person, args); // Output: 'Hello, my name is John Doe!'

//In this example, we use the apply method to invoke the introduce function with the this value set to the person object and pass the arguments from the args array.

/*
The main difference between call and apply is how arguments are passed:

call method: Passes arguments individually (e.g., func.call(thisValue, arg1, arg2, arg3)).
apply method: Passes arguments as an array or an array-like object (e.g., func.apply(thisValue, [arg1, arg2, arg3])).
The apply method is a powerful tool in JavaScript for controlling the value of this and passing arguments as an array when invoking functions, helping you create more adaptable and maintainable code.
*/
