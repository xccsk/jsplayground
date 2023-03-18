//Higher Order Functions

/*
higer order functions take a function as a parmeter or returns a function back 
*/

/*
Higher-order functions are a concept in functional programming where functions can take other functions as arguments, return functions as results, or both. In JavaScript, functions are first-class objects, meaning they can be assigned to variables, passed as arguments, or returned from other functions just like any other data type. This feature enables the use of higher-order functions, which lead to more abstract, reusable, and composable code.

Here are some examples of higher-order functions in JavaScript:
*/

//Using a function as an argument:

/*
One common example of a higher-order function is Array.prototype.map, which takes a function as an argument and applies it to each element in the array, returning a new array with the transformed elements.
*/
const numbers = [1, 2, 3, 4, 5];

function square(x) {
  return x * x;
}

const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Returning a function from another function:

/*A higher-order function can also return a function as a result. For example, you can create a function that generates customized greeting functions: */
function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = createGreeting("Hello");
const greetHi = createGreeting("Hi");

greetHello("John"); // Output: "Hello, John!"
greetHi("Jane"); // Output: "Hi, Jane!"

//Functions as both argument and return value:

/*
A higher-order function can also take a function as an argument and return a new function as a result. This is common in functional programming patterns like function composition or currying.
*/
function compose(fn1, fn2) {
  return function (x) {
    return fn1(fn2(x));
  };
}

function double(x) {
  return x * 2;
}

function increment(x) {
  return x + 1;
}

const doubleThenIncrement = compose(increment, double);

console.log(doubleThenIncrement(2)); // Output: 5 (double 2, then increment: (2 * 2) + 1 = 5)

/*
  Higher-order functions are a powerful programming concept that enables more expressive, reusable, and maintainable code. They're particularly useful in JavaScript for tasks like mapping, filtering, and reducing arrays, as well as composing and adapting functions to create more complex behaviors.
  */
