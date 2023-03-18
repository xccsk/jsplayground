//Default Parameters

/*
Default parameters in JavaScript are a feature that allows you to set default values for function parameters when they are not explicitly provided by the caller or when the caller passes undefined. Default parameters were introduced in ECMAScript 2015 (also known as ES6) and help make your functions more flexible and easier to use.

Here's how you can use default parameters in JavaScript:
*/

//Define a function with default parameters: When defining a function, you can assign default values to the parameters using the assignment operator (=).

function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
  }
//In this example, the name parameter has a default value of "Guest" and the greeting parameter has a default value of "Hello".

//Call the function with various arguments:
greet(); // Output: "Hello, Guest!"
greet("John"); // Output: "Hello, John!"
greet("Jane", "Hi"); // Output: "Hi, Jane!"
greet(undefined, "Welcome"); // Output: "Welcome, Guest!"


/*
When you call the function without providing a value for a parameter with a default value or explicitly passing undefined, the default value will be used.

Note that default parameter values can also be expressions or function calls, which are evaluated only if the default value is used:
 */
function randomNumber() {
    return Math.random();
  }
  
  function generateId(prefix = "id", randomNumberFn = randomNumber) {
    return `${prefix}-${randomNumberFn()}`;
  }
  
  console.log(generateId()); // Output: "id-0.123456789" (random number will vary)

/*
In this example, the randomNumberFn parameter has a default value of the randomNumber function, which is only called if no value is provided for the randomNumberFn parameter.

Default parameters are a powerful feature in JavaScript that make your functions more flexible and help you write cleaner, more maintainable code.
*/