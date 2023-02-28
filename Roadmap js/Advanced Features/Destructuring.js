//destructerinc

// the concept of destructering is to get an object or an array and to make it into smaller elements

const alphabets = ["a", "b", "c", "d", "e", "f"];

//without destructering

const aFromAlphabets = alphabets[0];

//with destructering

const [a, b] = alphabets; //with that you get the first two items of the array
//here the postion of the value matters

console.log(a, b);

//you can also work with the rest and spread operator for the rest

const [q, z, ...rest] = alphabets;
//now you have pulled out the first 2 objects and then every other in the array via rest operator

//you can also destructure the return from the function when its an array or an objects

function sumAndMultiyply(a, b) {
  return [a + b, a * b];
}

const [sum, multi] = sumAndMultiyply(2, 3); //so you can have destrucured the return of a function

const [sum, mutli, divison = 4] = sumAndMultiyply(2, 3); //you can also set default values

// object destructering

const personTwo = {
  name: "Sally",
  age: 32,
  adress: {
    city: "Somewhere else",
    state: "Another one of them",
  },
};

//where we use curly braces for destructering
const { name, age } = personTwo; //here the values destrcterd from the object the name of the keys acually matter not the postion

//you also could overwrite that

const { name: firstName, age: alter } = personTwo;
//now you renamed the values and you have a new pointer

//also you can set default values

const { name: firstname, age = 20 } = personTwo;

//also you can destructure nasted objects

const {adress:{state}} = personTwo

//you can also destructere objects that are passed two the function

function userPrint({name,age}){ //now they only take these two keys of the objetc
    console.log(name) 
    console.log(age)
}


