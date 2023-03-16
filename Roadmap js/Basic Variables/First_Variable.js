/*
In JavaScript, variables are used to store values that can be used and manipulated throughout your code. Variables can store different types of data, such as numbers, strings, objects, arrays, and more. Here's an overview of JavaScript variables:

Declaration: To declare a variable in JavaScript, you can use the var, let, or const keywords, followed by the variable name. Each keyword has different scoping rules and assignment behaviors, with let and const being the preferred choices in modern JavaScript development.
*/

var myVar; // Declares a variable named 'myVar' (not recommended in modern JavaScript)
let myLet; // Declares a block-scoped variable named 'myLet'
const myConst; // Declares a block-scoped, constant variable named 'myConst' (requires initial value)

/*
Assignment: After declaring a variable, you can assign a value to it using the assignment operator (=). For const variables, you must assign a value at the time of declaration.
*/

var myVar = 'Hello, var!'; // Declares and assigns a value to 'myVar'
let myLet = 42; // Declares and assigns a value to 'myLet'
const myConst = { key: 'value' }; // Declares and assigns a value to 'myConst'

/*
Data Types: JavaScript variables can store different data types, including:
String: A sequence of characters (e.g., 'hello', "world").
Number: Numeric values, including integers and floating-point numbers (e.g., 42, 3.14).
Boolean: Logical values, either true or false.
Object: A collection of key-value pairs (e.g., { name: 'John', age: 30 }).
Array: An ordered collection of elements (e.g., [1, 2, 3]).
Function: A reusable block of code that can be executed with specific input parameters (e.g., function add(a, b) { return a + b; }).
null: An intentional absence of any object value.
undefined: A value representing an uninitialized variable or a non-existent object property.
Usage: You can use variables to store and manipulate data, pass values between functions, and build complex data structures.
*/
let a = 10;
let b = 20;
let sum = a + b; // Adds the values of 'a' and 'b', stores the result in 'sum'

function greet(name) {
  return `Hello, ${name}!`;
}

let greeting = greet('John'); // Calls the 'greet' function and stores the result in 'greeting'

/*
In summary, JavaScript variables are used to store and manipulate data in your code. You can declare variables using the var, let, or const keywords, assign values to them, and use them to perform operations or pass data between functions. Understanding how to work with variables is fundamental to programming in JavaScript.
*/