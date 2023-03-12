// Not a Number

/*
NaN stands for "Not a Number" in JavaScript. It is a special value that represents an invalid number.
*/

//NaN is returned when a mathematical operation that expects a number is performed, but the input value is not a valid number. For example: (In this case, the string "apple" is not a valid number, so the division operation results in NaN.)

const result = 10 / "apple";
console.log(result); // Outputs NaN

/*
It's important to note that NaN is a special value of the Number data type in JavaScript, and it is not equal to any other value, including itself. This means that the following comparisons will all return false:
*/

console.log(NaN == NaN); // Outputs false
console.log(NaN === NaN); // Outputs false
console.log(Object.is(NaN, NaN)); // Outputs true

/*
You can check if a value is NaN using the built-in isNaN() function. However, it's important to note that isNaN() has some quirks, as it will try to convert the input to a number before checking if it's NaN. This means that it can give unexpected results if the input is not a number or a string that can be converted to a number. To avoid these quirks, you can use the Number.isNaN() method introduced in ES6, which only returns true if the input is strictly equal to NaN.
*/

console.log(isNaN("apple")); // Outputs true
console.log(isNaN("10")); // Outputs false
console.log(Number.isNaN("apple")); // Outputs false

