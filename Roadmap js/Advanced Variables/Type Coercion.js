// Type Coercion

/*
that menas for example as if checks with a varibale that needs to covert in wich type you should convert the var

types get covrted without us explicied telling in wich type
*/

/*
Type coercion in JavaScript is the automatic conversion of one data type to another data type, either implicitly or explicitly. This can happen when you perform operations or comparisons between values of different data types.

There are two types of type coercion in JavaScript: explicit and implicit.

Explicit type coercion, also known as type casting, is when you explicitly convert a value from one data type to another using built-in functions or operators, such as parseInt() or Number(). For example:
*/

const str = "10";
const num = parseInt(str);

console.log(num); // 10

/*
In this example, the parseInt() function is used to explicitly convert the string value "10" to a number.

Implicit type coercion, on the other hand, is when JavaScript automatically converts a value from one data type to another without you explicitly telling it to do so. This can happen when you perform operations or comparisons between values of different data types. For example:
*/

const num = 10;
const str = "hello";

const result = num + str;

console.log(result); // "10hello"

/*
n this example, the number value 10 is implicitly coerced into a string value, so the result of the addition operation is the concatenated string "10hello".

Implicit type coercion can sometimes lead to unexpected results or bugs in your code if you're not careful, so it's important to be aware of how JavaScript handles data types and type coercion. One way to avoid this is to use the strict equality operator (===), which checks for both value and data type equality, instead of the loose equality operator (==), which performs type coercion before making the comparison. */
