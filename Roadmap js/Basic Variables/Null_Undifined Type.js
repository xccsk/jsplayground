// null and undifined

/*
Similarities: null and unfinied both mean there is no value

null: null will not popup in the programm for an error or something this only returns when its set by a programmer. null return when there is no value but it exists

undifinded: undifind is the default state of everything if let a and console.log(a) then you get undifined becouse there is nothing in it and its basicly not clear if there is gonna be a defined value or not so if its existing or not 
*/

let a;

console.log(a); //undifined

//Chat GPT 4

/*
null and undefined are both special values in JavaScript that indicate the absence of a value. While they are similar in that they both represent "nothing" or "empty," there are some key differences between them:
*/

/*
undefined:
undefined is the default value assigned to a variable that has been declared but not initialized. In other words, it represents a variable that exists but has not been given a value yet.
If you try to access an object property or an array element that does not exist, JavaScript returns undefined.
Functions that do not have an explicit return statement return undefined by default.
*/

let myVar; // Declared but not initialized
console.log(myVar); // undefined

let obj = { a: 1 };
console.log(obj.b); // undefined (property 'b' does not exist)

function myFunc() {
  // No return statement
}
console.log(myFunc()); // undefined

/*
null:
null is an intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property should be empty.
You must explicitly assign null to a variable or property, as it is not assigned by default like undefined.
*/

/*
In summary, the main differences between null and undefined are:

undefined is the default value for uninitialized variables, non-existent properties, and functions without a return value.
null is an intentional assignment to indicate the absence of a value and must be explicitly set by the programmer.
While they represent similar concepts, they are not the same value. You can verify this by checking their equality:
*/
console.log(null == undefined); // true (loose equality, type coercion)
console.log(null === undefined); // false (strict equality, no type coercion)
