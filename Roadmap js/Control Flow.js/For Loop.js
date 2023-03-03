// every loop for js 

/*The normal for loop on a array */

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/*For in loop for objects to iterate through object keys */
const object = {a: 1, b: 2, c: 3};

for (const key in object) {
  console.log(key, object[key]);
}

/* For of loops for arrys (used to iterare threw values of objects) */

const array = [1, 2, 3, 4, 5];

for (const value of array) {
  console.log(value);
}

/*ForEach loop in arrays */

const array = [1, 2, 3, 4, 5];

array.forEach(function(value) {
  console.log(value);
});

