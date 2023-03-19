//Symbols

/*
Symbols are a unique and immutable primitive data type introduced in ECMAScript 2015 (ES6). They are mainly used as identifiers for object properties, providing a way to create non-enumerable and non-clashing property keys that don't interfere with other properties in the object.
*/
/*
Symbols can be created using the Symbol() function. When called, this function returns a new unique symbol value. You can optionally provide a description as an argument, but this description is only used for debugging purposes and does not affect the uniqueness of the symbol.

Here's an example of creating a symbol:
*/
const symbol1 = Symbol();
const symbol2 = Symbol("my description");
const symbol3 = Symbol("my description");

console.log(typeof symbol1); // Output: 'symbol'
console.log(symbol2 === symbol3); // Output: false

/*
In this example, we create three symbols. symbol2 and symbol3 have the same description, but they are still distinct and unique symbol values.

One of the main use cases for symbols is to create non-enumerable, non-clashing property keys for objects. This can be useful to prevent accidental modifications or conflicts with other code that may use the same object.

Here's an example of using symbols as property keys:
*/
const mySymbol = Symbol("mySymbol");
const myObject = {
  [mySymbol]: "Symbol value",
  regularKey: "Regular value",
};

console.log(myObject[mySymbol]); // Output: 'Symbol value'
console.log(myObject.regularKey); // Output: 'Regular value'

for (const key in myObject) {
  console.log(key); // Output: 'regularKey' (the symbol key is not enumerated)
}

console.log(JSON.stringify(myObject)); // Output: '{"regularKey":"Regular value"}' (the symbol key is not included)

/*
In this example, we create an object with two properties: one using a symbol key and another using a regular string key. When iterating over the object with a for...in loop or converting the object to JSON using JSON.stringify(), the symbol property is not included, making it non-enumerable.

Symbols also have a global registry called the "Symbol Registry", which can be accessed using the Symbol.for() and Symbol.keyFor() methods. This allows you to create and retrieve symbols that are shared across different parts of your application.

In summary, symbols in JavaScript are a unique and immutable primitive data type used primarily as identifiers for object properties. They provide a way to create non-enumerable and non-clashing property keys, which can help prevent accidental modifications and conflicts in your code.
*/
