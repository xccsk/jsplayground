// scoping 

/* the 4 diffrent types of scoping in Javascript:

global
module
function
bock 
*/

//varibales are only accessable inside that scope

/*
global scope. its defined without a function and it can be used in every file thats loaded afer it 
*/

/*
modules that are sepret files that only export a certain variable and you can only import and use the ones you export
*/


/*
Blockscope and function scope

basilly every time you have {} your creating a block scope and you can use varibales that are defind in there only in there for example in if or in function
*/

/*
function scoping

when you use the keyword var to define a varibale, you can use this in the hole function no matter how deep block nesting there is but onlay with var. let and const are blocked level scoped

*/

const a = 1

const test = ()=>{
    const b = 2 // var B is only in that function couse its scoped to that function
    console.log("Here",a,b)
}

test()
console.log(a,b)