//Comparing Let Var and Const 

/*
In JavaScript, var, let, and const are keywords used to declare variables. They have different scoping rules and behaviors, which I'll explain below:
*/

/*
var:
Scope: var is function-scoped, meaning the variable is accessible within the function it is declared in, or globally if declared outside any function.
Hoisting: Variables declared with var are hoisted to the top of their scope, which means they are initialized with the value undefined before the code is executed. This can lead to unexpected results if you try to access the variable before it's been assigned a value in the code.
Redeclaration: You can redeclare a variable using the var keyword within the same scope without causing an error.
*/

function example() {
    console.log(foo); // undefined (due to hoisting)
    var foo = 'Hello';
    console.log(foo); // 'Hello'
  }
  
  example();


/*
let:
Scope: let is block-scoped, meaning the variable is accessible only within the block (curly braces) it is declared in.
Hoisting: Variables declared with let are also hoisted, but they are not initialized until their actual declaration in the code. If you try to access a let variable before its declaration, you'll get a ReferenceError.
Redeclaration: Redeclaring a variable using the let keyword within the same scope will result in a SyntaxError.
*/
function example() {
    console.log(foo); // ReferenceError
    let foo = 'Hello';
    console.log(foo); // 'Hello'
  }
  
  example();

/*
const:
Scope: Like let, const is block-scoped.
Hoisting: const variables are also hoisted, but they are not initialized until their actual declaration in the code. Accessing a const variable before its declaration will result in a ReferenceError.
Immutability: const variables must be assigned a value when they are declared, and that value cannot be changed afterward. If you try to reassign a value to a const variable, you'll get a TypeError.
Redeclaration: Redeclaring a variable using the const keyword within the same scope will result in a SyntaxError.
*/
function example() {
    console.log(foo); // ReferenceError
    const foo = 'Hello';
    console.log(foo); // 'Hello'
  
    foo = 'World'; // TypeError (const variable cannot be reassigned)
  }
  
  example();
  
/*
In summary:

Use var if you need a function-scoped variable, but be aware of hoisting and potential issues.
Use let for block-scoped variables that can be reassigned.
Use const for block-scoped variables that should not be reassigned.
Since the introduction of let and const in ES6, it is recommended to use these keywords for better control over variable scope and assignment behavior. Use var only when you have a specific reason to do so.
*/