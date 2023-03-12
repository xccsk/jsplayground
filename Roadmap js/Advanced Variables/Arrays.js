//arrays

/*
In JavaScript, an array is a data structure that can hold an ordered list of values of any type. The values are stored in consecutive indices starting from 0, and can be accessed or modified using their index position within the array.
*/

//Here is an example of an array:(In this example, myArray is an array that contains the values 1, 2, 3, 4, and 5, in that order.)

let myArray = [1, 2, 3, 4, 5];

/*
To access a value in an array, you can use square brackets with the index position of the value you want to access. For example, to access the third value in myArray, you would use:
*/
console.log(myArray[2]); // Output: 3

//To modify a value in an array, you can use the same syntax as accessing a value:

myArray[2] = 6;
console.log(myArray); // Output: [1, 2, 6, 4, 5]

//You can also add values to an array using the push method:
myArray.pop();
console.log(myArray); // Output: [1, 2, 6, 4, 5]

//And you can remove values from an array using the pop method:

myArray.pop();
console.log(myArray); // Output: [1, 2, 6, 4, 5]

//Arrays can also contain values of different types, including other arrays and objects:

let mixedArray = [1, "two", [3, 4], { five: 5 }];
/*n this example, mixedArray is an array that contains the values 1 (a number), "two" (a string), [3, 4] (an array), and {five: 5} (an object).

Arrays are a fundamental part of JavaScript, and are used extensively in JavaScript programming, including in libraries and frameworks. */
