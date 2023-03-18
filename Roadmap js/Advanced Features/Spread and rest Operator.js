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

//Rest operator 

/*
The rest operator (...) in JavaScript is similar in syntax to the spread operator but serves a different purpose. While the spread operator is used to expand elements of an iterable, the rest operator is used to collect multiple elements into a single array. The rest operator is often used in function parameters to collect a varying number of arguments into an array.
*/

//Collecting function arguments into an array:

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/*In this example, the ...numbers parameter collects all the arguments passed to the sum function into a single array called numbers.*/

//Destructuring arrays:

const [first, second, ...remaining] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(remaining); // Output: [3, 4, 5]

/*
In this example, the rest operator is used to collect the remaining elements of the array into a new array called remaining.
*/

//Destructuring objects:

const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4, e: 5 };

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: { c: 3, d: 4, e: 5 }

/*
In this example, the rest operator is used to collect the remaining properties of the object into a new object called rest.

Keep in mind that the rest operator should always be used as the last element in a parameter list, destructuring array, or destructuring object. Otherwise, you'll get a syntax error.

The rest operator is a powerful and flexible feature in JavaScript that allows you to work with an arbitrary number of elements or properties in a concise and efficient way.
*/