// its a way to obtimize a logical expressions and to express the expression without to fully expression

/*

there are two logical operators for short Circuit evaluation && and || 
when the left side of the && turns false the entire expression turnes false 
The same when it comes to the "or" || when the left side is true the entire expression is true 
*/

let x = 5;
let y = 10;
if (x > 0 && y > 0) {
  console.log("Both x and y are positive");
}

// you also can define variables with this 

let a = null;
let b = 10;
let c = a || b;
console.log(c);

/*when the expression on one site is null or falsy the other value is defined  */

