//Closures 

/*What is a closure:
that you can use varibales defined external of a function in a function. that means that every scope has accses to outside of its scope variables 
*/

function lenn(outerscope){
    return function richrad(){
        console.log(outerscope) //this is defined outside of the usall scope
    }
}