// Spread operator 

/*
The spread operator (...) in JavaScript is a convenient syntax introduced in ECMAScript 2015 (ES6) for expanding elements of an iterable (e.g., arrays, strings, or objects) into individual elements or properties. The spread operator can be used in various scenarios, such as copying or merging arrays, merging objects, or passing elements of an array as function arguments.

Here are some common use cases for the spread operator:
*/

//Copying an array:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]
console.log(originalArray === copiedArray); // Output: false (they are different instances)

//Merging arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//Expanding a string into an array of characters:
const str = "Hello";
const chars = [...str];

console.log(chars); // Output: ["H", "e", "l", "l", "o"]

//Passing elements of an array as function arguments:
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const result = sum(...numbers);
  
  console.log(result); // Output: 6

//Merging objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

/*
Note that when merging objects, if there are properties with the same name, the value from the last spread object will overwrite the previous ones.

The spread operator is a powerful and versatile feature in JavaScript that simplifies working with iterables and helps you write cleaner, more concise code.
*/