//Number Type in Javascript

/*
In JavaScript, the Number type is a primitive data type that represents both integers and floating-point numbers (decimals). JavaScript does not have separate data types for integers and floating-point numbers, so all numeric values are represented by the Number type.

Here's a brief explanation of the Number type in JavaScript:
*/

//1.reating a Number: You can create a Number variable by simply assigning a numeric value to a variable or by using the Number() constructor.

let num1 = 42;         // Integer
let num2 = 3.14;       // Floating-point number

// Using the Number() constructor
let num3 = Number(42);
let num4 = Number(3.14);

//2.Arithmetic operations: You can perform various arithmetic operations with Number type variables, such as addition, subtraction, multiplication, division, and modulo (remainder).

let a = 10;
let b = 5;

let sum = a + b;       // 15
let difference = a - b; // 5
let product = a * b;    // 50
let quotient = a / b;   // 2
let remainder = a % b;  // 0

//3.Special Number values: JavaScript has a few special Number values, such as Infinity, -Infinity, and NaN (Not a Number).

let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

//4.Number methods: JavaScript provides a set of built-in methods and properties for working with Number type variables.

let num = 3.14159;

// Converting a number to a string
let numAsString = num.toString(); // "3.14159"

// Rounding a number to a fixed number of decimal places
let roundedNum = num.toFixed(2); // 3.14

// Parsing a string into a number
let parsedNum = parseInt("42", 10); // 42
let parsedFloat = parseFloat("3.14"); // 3.14

// Checking if a value is an integer or a finite number
let isInteger = Number.isInteger(num); // false
let isFinite = Number.isFinite(num);   // true

/*
This is a basic overview of the Number type in JavaScript. There are many more methods and properties available in the Number object and Math object to work with numeric values
*/