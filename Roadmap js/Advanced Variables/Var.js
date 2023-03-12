// Var keyword in JS

/*
In JavaScript, the var keyword is used to declare variables. When you use var to declare a variable, it becomes function-scoped, which means that it is only accessible within the function in which it is declared or within any nested functions.

For example, if you declare a variable x using var inside a function, it can only be accessed within that function:
*/
function myFunction() {
    var x = 10;
    console.log(x); // Output: 10
  }
  console.log(x); // Output: undefined
  
  /*
  If you try to access the variable x outside of the function, it will be undefined, because it only exists within the scope of the function.
  
  One important thing to note about var is that it has function-level scope, which means that even if you declare a variable inside a block statement (e.g., if, for, while, etc.), it will still be accessible within the entire function:
    */
  
  function myFunction() {
      if (true) {
        var x = 10;
      }
      console.log(x); // Output: 10
    }

/*
This can sometimes lead to unexpected behavior, because variables can be overwritten or re-declared within the same function:
*/

function myFunction() {
    var x = 10;
    if (true) {
      var x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }
  
  //To avoid this issue, it's generally recommended to use let and const instead of var in modern JavaScript, because they have block-level scope and are less prone to accidental overwriting or re-declaration.


  //WDS

  