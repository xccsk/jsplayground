//String Tamplate Literals

const me = {
  first: "james",
  last: "Quick",
  age: 30,
  address: "4 Privat Drive",
};

//without string tamplate literals

console.log(
  me.first + " " + me.last + "is" + me.age + "and lives at " + me.address
);

//with sting tamplate literals

console.log(`${me.first} ${me.last} is ${me.age} and lives at ${me.address} `);

/*
it basilcly allows you to inject normal js into a Sting
*/

//Chat GPT

/*
String template literals, also known as template strings, are a feature of modern JavaScript that allow you to embed expressions and variables directly into a string, using backticks (`) instead of single or double quotes.

Template literals offer several advantages over traditional strings. First, they allow you to easily include variables and expressions in a string without the need for concatenation or escaping. You can simply wrap the expression or variable in ${} and it will be evaluated and included in the resulting string.
*/

//example

const name = "John";
const age = 30;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message); // "My name is John and I am 30 years old."

/*
n this example, the name and age variables are included in the string using ${}. When the string is evaluated, the expressions within the ${} are replaced with their corresponding values.

Template literals can also be used for multiline strings, making it easier to write strings that span multiple lines without needing to use concatenation or newline characters. Here is an example: */

const message = `This is a
multiline
string`;

console.log(message);
// "This is a
// multiline
// string"

/*
Template literals also support tagged templates, which allow you to define a function that processes the string and the expressions within it. This can be useful for things like localization or formatting. Here is an example:
*/

function formatCurrency(strings, ...values) {
  const formattedValues = values.map((value) => `$${value.toFixed(2)}`);
  return strings.reduce((result, string, i) => {
    return `${result}${string}${formattedValues[i] || ""}`;
  }, "");
}

const price = 19.99;
const quantity = 3;

const message = formatCurrency`The total cost of ${quantity} items is ${
  price * quantity
}`;

console.log(message); // "The total cost of 3 items is $59.97"

/*
In this example, the formatCurrency function is used as a tag for the template literal. The strings parameter contains an array of the string segments, and the values parameter contains an array of the evaluated expressions. The formatCurrency function then processes these segments and expressions to create a formatted string.
*/
