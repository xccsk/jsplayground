//Sets in JS

/*
Sets in JavaScript are a built-in collection data type introduced in ECMAScript 2015 (ES6). A Set is an ordered collection of unique values, where each value can only occur once. Sets are useful when you want to store a collection of distinct values without duplicates, and they provide several built-in methods for easy manipulation.

Here are some key features and benefits of using Sets in JavaScript:

Unique values: Sets only store unique values, automatically removing duplicates when you add new values.
Any data type as a value: Sets allow you to store any data type, including primitive values and objects.
Preserved insertion order: Sets maintain the order of values based on the order they were inserted, making it easy to iterate over them in a predictable manner.
Size property: Sets have a built-in size property that indicates the number of values in the collection, making it easy to determine the Set's size.
Useful methods: Sets provide several built-in methods for easy manipulation of values, such as add, has, delete, and clear.
Here's an example of how to create and use a Set in JavaScript:
*/
// Create a new Set
const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate value, won't be added

console.log(mySet.size); // Output: 3

// Check if a value exists in the Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(4)); // Output: false

// Delete a value from the Set
mySet.delete(3);
console.log(mySet.size); // Output: 2

// Clear the Set
mySet.clear();
console.log(mySet.size); // Output: 0

// Iterate over a Set
for (const value of mySet) {
  console.log(value);
}

// Create a Set with initial values
const anotherSet = new Set([1, 2, 3, 4, 4, 5]);
console.log(anotherSet.size); // Output: 5 (duplicate value '4' is removed)

/*
In summary, Sets in JavaScript are a built-in collection data type that allows you to store and manage unique values without duplicates. Sets provide useful methods and properties for easy manipulation and iteration, making them a powerful tool for handling collections of distinct data in your applications.
*/