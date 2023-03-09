//Call Stack 

/*
Why does it matter:
-debuggig you code
-its a fundamental of JS

What is it:
its monitores and conttolls the flow of the functions. Its also has a spezific datastructure the LIFO(Last in diest out) that means the function that was appened lat will be excuted first and will be eleminated when its done
after that the next function will be executed
*/

//here is an exmple

function thirdFunction() {
    console.log('thirdFunction');
  }
  
  function secondFunction() {
    thirdFunction();
    console.log('secondFunction');
  }
  
  function firstFunction() {
    secondFunction();
    console.log('firstFunction');
  }
  
  firstFunction();
  
//the callstack
|   thirdFunction()
|   secondFunction()
|   firstFunction()
|___(global)


//explaination

/*
when the programm starts the only function thats called is fristfunctio. so that gets appended to the callstack but within fristfunction seondfunction is called, so its also appended to the callstack and again withhin the function thiredFunction is called so its also appended for the call stack. So its the highest on the callstack
that means the first function that complety finishes is "thirdfunction" and then ist removed then "secondfunction" and then "firstFunction"

*/

//callstack is there to see make shure there is no recursion


//