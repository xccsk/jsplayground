// Arrow functions

//1. converting normal funktions in to JS funktions

function sum(a, b) {
  return a + b;
}

function isPositive(number) {
  return number >= 0;
}

function randomNumber() {
  return Math.random;
}

document.addEventListener("click", function () {
  console.log("Click");
});

//arrows

const sum2 = (a, b) => {
  return a + b;
};

const isPositive2 = number => {
  return number >= 0;
};

const randomNumber2 = () => Math.random

document.addEventListener("click", ()=>{console.log()})


//2. Diffrence between this in Arrow and normal functions

/*when using "this" ina normal function it looks on the scope from where the function is call.

When using arrow functions it looks up the "this" keyword from where its defined (global scope)
*/