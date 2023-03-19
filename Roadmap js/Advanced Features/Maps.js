//Maps in JS

/*
Maps in JavaScript are a built-in collection data type introduced in ECMAScript 2015 (ES6). A Map is an ordered collection of key-value pairs, where keys and values can be of any data type (objects and primitive values). Unlike plain JavaScript objects, which only allow strings and symbols as keys, Maps allow you to use any data type as a key, including functions and objects.

Here are some of the key features and benefits of using Maps in JavaScript:


Any data type as a key: Maps allow you to use any data type as a key, which is not possible with plain JavaScript objects.

Preserved insertion order: Maps maintain the order of key-value pairs based on the order they were inserted, making it easy to iterate over them in a predictable manner.

Size property: Maps have a built-in size property that indicates the number of key-value pairs in the collection, making it easy to determine the Map's size.

Useful methods: Maps provide several built-in methods for easy manipulation of key-value pairs, such as set, get, has, delete, and clear.

Here's an example of how to create and use a Map in JavaScript:
*/
// Create a new Map
const myMap = new Map();

// Set key-value pairs
myMap.set("name", "John Doe");
myMap.set(42, "The Answer to Life, the Universe, and Everything");
myMap.set({ key: "objectKey" }, "Value for an object key");

// Get values by key
console.log(myMap.get("name")); // Output: 'John Doe'
console.log(myMap.get(42)); // Output: 'The Answer to Life, the Universe, and Everything'
console.log(myMap.get({ key: "objectKey" })); // Output: undefined (different object reference)

// Check if a key exists in the Map
console.log(myMap.has("name")); // Output: true

// Get the size of the Map
console.log(myMap.size); // Output: 3

// Delete a key-value pair
myMap.delete(42);
console.log(myMap.size); // Output: 2

// Clear the Map
myMap.clear();
console.log(myMap.size); // Output: 0

// Iterate over a Map
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

/*
In summary, Maps in JavaScript are a built-in collection data type that allows you to store and manage key-value pairs with various data types as keys. Maps provide useful methods and properties for easy manipulation and iteration, making them a powerful tool for handling collections of data in your applications.
*/
