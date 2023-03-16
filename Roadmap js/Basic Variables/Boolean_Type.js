//Boolean Type

/*
A Boolean is a primitive data type in JavaScript that represents a binary value, either true or false. Booleans are commonly used in programming for representing the outcome of comparisons, as well as for controlling the flow of code execution based on certain conditions.

Here's a brief explanation of Booleans in JavaScript:

Creating a Boolean: You can create a Boolean variable by using the true or false keyword, or by using the Boolean() constructor.
*/

let bool1 = true;
let bool2 = false;

// Using the Boolean() constructor
let bool3 = Boolean(true);
let bool4 = Boolean(false);

/*Comparisons: You can use comparison operators to compare values, and these comparisons will return a Boolean value. */

let a = 5;
let b = 10;

let isEqual = a === b; // false
let isGreater = a > b; // false
let isLess = a < b; // true

/*
Conditional statements: You can use Booleans in conditional statements like if, else if, and else.
*/
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
/*
Logical operators: Booleans can be combined using logical operators such as && (AND), || (OR), and ! (NOT).
*/

let isAdult = age >= 18;
let hasLicense = true;

if (isAdult && hasLicense) {
  console.log("You can drive legally.");
} else {
  console.log("You cannot drive legally.");
}

/*
Remember that in JavaScript, some values can be considered "truthy" or "falsy" when used in a Boolean context. These values are automatically converted to true or false when used in a conditional statement. Some common falsy values are null, undefined, 0, NaN, and "" (empty string). All other values are considered truthy.
*/
