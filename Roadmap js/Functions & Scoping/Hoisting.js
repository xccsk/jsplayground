// Hoisting

/*Hoisting takes some of the code and moves it on the top of the file for us 

that only works for normal functions with a function keyword and not for arrow-functions

varibales like const and let are not hoisted

but var variables are hoisted but not with the value its just getting initalized and then its gonna be undefined until its defined in the line 
*/

//function example

const submit = ()=>{
    return 14
}

console.log(submit)
console.log(addition)

function addition(){
    return 14+11
}

//in this code wont be an error, cause its gonne hoist the funcionn addtion up if submit and addtion where turned there would be an error


//var example

console.log(a)

var a = 12

//here the console.log() will be undifined 