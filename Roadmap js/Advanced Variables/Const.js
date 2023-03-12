// const in Javascript

/*
In JavaScript, const is a keyword used to declare a variable that can't be reassigned after its initial value is set. It is short for "constant".
*/

//For example, if you declare a variable using const like this:

const pi = 3.14;

//The value of pi cannot be changed to something else later on in your code. Any attempt to do so will result in an error. For instance:

pi = 3.14159; // This will throw an error

/*
Note that const does not make the value of the variable immutable. If you assign an object or an array to a const, the contents of the object or array can still be modified. However, the variable itself cannot be reassigned to a different object or array.
*/

const myArray = [1, 2, 3];
myArray.push(4); // This is allowed
myArray = [5, 6, 7]; // This will throw an error

/*
const is useful when you want to make sure that a variable cannot be accidentally reassigned in your code. It can also improve the performance of your code, as the JavaScript engine can optimize const variables more aggressively than regular variables.
*/
