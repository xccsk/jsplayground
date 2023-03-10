//passing functions as Arguments

let birthYears = [2003,2001,2002,2004,2005,2006]

function getResults(array, func) {
  let result = [];
  array.forEach((element) => {
    let value = func(element);
    result.push(value);
  });

  return result;
}

function calculateage(yearbornIn){
    const date = new Date
    const year = date.getFullYear()
    return year - yearbornIn
}

let ages = getResults(birthYears,calculateage)
console.log(ages)

/*Why do we do this:
The code is more redale and is more easyer to understand
*/

/*Hinweiß
when passing a function as an Arguemtn rember that you should nor write the name with () write it witout so that it just points to the function and not executes it emdiatly
*/