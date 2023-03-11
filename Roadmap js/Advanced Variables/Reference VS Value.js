// Reference vs Value

/*
every object,array or map and everything thats not a primative datatype is a reference. Every reference points to adress in memory an has not the value itself.

That means if you have 2 arrays that point to the same momory and  you modify one of them your automaticly changing the otherone
*/

let a = 10;
let b = "Hi";
let c = [1, 2, 3, 4, 5, 6];
let d = c;

d.push(9);

console.log(c); //[1,2,3,4,5,6,9] couse its the same memory

/*
that means weherever you initalize a new Object you point to a new addres but if you just refrence at on u will modefiy the object behind that adress in Memory
*/

//CHAT GPT

/*
In JavaScript, variables can be divided into two main categories: those that hold primitive values and those that hold objects or arrays, which are referred to as reference values. The main difference between the two is in how they are stored and accessed in memory.
*/

/*
Primitive values include:

numbers
strings
booleans
null
undefined

When a variable holds a primitive value, the variable stores the actual value. For example:
*/

let a = 10;
let b = "hello";

/*In this case, a holds the value 10 and b holds the value "hello". When you assign a new value to a variable that holds a primitive value, a new copy of the value is created in memory. */

/*
Reference values, on the other hand, are objects or arrays that are stored in memory, and the variable that holds them stores a reference to their location in memory. For example:
*/
let c = { name: "John", age: 30 };
let d = c;

/*
In this case, c holds a reference to an object with the properties name: "John" and age: 30, and d holds a reference to the same object. This means that any changes made to the object through either c or d will affect the same object.

When passing primitive values to functions, a copy of the value is created and passed to the function. Any changes made to the value within the function do not affect the original value. However, when passing reference values to functions, the reference to the original value is passed, which means that changes made to the value within the function affect the original value.

In conclusion, the main difference between primitive and reference values in JavaScript is that primitive values are stored directly in variables, while reference values are stored in memory and variables holding them store a reference to their location in memory. This difference can have important implications when working with variables in JavaScript.
*/
