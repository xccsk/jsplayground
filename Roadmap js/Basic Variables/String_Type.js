//String type in Javascript 

/*
n JavaScript, the String type is a primitive data type used to represent sequences of characters, like words or sentences. Strings can be created using single quotes (' '), double quotes (" "), or backticks ( ), also known as template literals. Here's a brief explanation of the String type in JavaScript:
*/

//1.Creating a String: You can create a String variable by assigning a sequence of characters enclosed in quotes or by using the String() constructor.

let str1 = 'Hello';
let str2 = "World";

// Using the String() constructor
let str3 = String('Hello World');

//2.Template literals: You can create multi-line strings or interpolate expressions using template literals (backticks).

let name = 'John';
let age = 30;

let multiLineString = `Hello,
World!`;

let interpolatedString = `My name is ${name} and I am ${age} years old.`;

//3.String properties and methods: JavaScript provides a set of built-in properties and methods for working with String type variables.

let str = 'Hello, World!';

// Length of a string
let length = str.length; // 13

// Accessing individual characters
let char = str.charAt(0); // 'H'
let charCodeAt = str.charCodeAt(0); // 72

// String concatenation
let str1 = 'Hello, ';
let str2 = 'World!';
let concatenatedString = str1.concat(str2); // 'Hello, World!'

// Searching for a substring
let indexOf = str.indexOf('World'); // 7
let lastIndexOf = str.lastIndexOf('o'); // 8

// Extracting a substring
let substring = str.substring(0, 5); // 'Hello'
let slice = str.slice(0, 5); // 'Hello'

// Replacing a substring
let replacedString = str.replace('World', 'Universe'); // 'Hello, Universe!'

// Splitting a string
let splitString = str.split(', '); // ['Hello', 'World!']

// Converting a string to uppercase or lowercase
let uppercasedString = str.toUpperCase(); // 'HELLO, WORLD!'
let lowercasedString = str.toLowerCase(); // 'hello, world!'

/*
This is an overview of the String type in JavaScript, including some common methods and properties for working with strings. There are many more methods available in the String object for more advanced string manipulation.
*/
