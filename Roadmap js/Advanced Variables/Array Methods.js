//the most common methods in arrays

const array = [1, 2, 3, 4, "d", "g", "l", "M"];

//push(): Fügt ein oder mehrere Elemente am Ende des Arrays hinzu.

array.push(1); //[1,2,3,4,"d","g","l","M",1]

const fruits = ["apple", "banana", "orange"];
const length = fruits.push("grape", "kiwi");

console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']
console.log(length); // Output: 5

//pop(): Entfernt das letzte Element aus dem Array.

array.pop(); //[1,2,3,4,"d","g","l"]

//shift(): Entfernt das erste Element aus dem Array.

array.shift(); //[2,3,4,"d","g","l","M"]

const fruits = ["apple", "banana", "orange"];
const firstFruit = fruits.shift();

console.log(fruits); // Output: ['banana', 'orange']
console.log(firstFruit); // Output: 'apple'

//unshift(): Fügt ein oder mehrere Elemente am Anfang des Arrays hinzu.

array.unshift(); //fast das selbe wie push

const fruits = ["apple", "banana", "orange"];
const length = fruits.unshift("kiwi", "grape");

console.log(fruits); // Output: ['kiwi', 'grape', 'apple', 'banana', 'orange']
console.log(length); // Output: 5

//slice(): Erstellt eine Kopie eines Teils des Arrays.

array.slice(); // anhand der parameter gibst du an start anzahl und endpunkt

const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: ['banana', 'orange', 'kiwi']

//splice(): Fügt oder entfernt Elemente an oder von einer bestimmten Position im Array.

array.splice(); //entfernt elemente an bestimmten positionen

const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
const removedFruits = fruits.splice(2, 2, "lemon", "peach");

console.log(fruits); // Output: ['apple', 'banana', 'lemon', 'peach', 'grape']
console.log(removedFruits); // Output: ['orange', 'kiwi']

//concat(): Kombiniert zwei oder mehr Arrays.

array.concat();

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "kiwi", "grape"];
const allFruits = fruits1.concat(fruits2);

console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'kiwi', 'grape']

//join(): Erstellt eine Zeichenkette durch Zusammenfügen aller Elemente in einem Array.
array.join(", ");

const fruits = ["apple", "banana", "orange"];
const joinedFruits = fruits.join(", ");

console.log(joinedFruits); // Output: 'apple, banana, orange'

//reverse(): Kehrt die Reihenfolge der Elemente im Array um.

const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
fruits.reverse();

console.log(fruits); // Output: ['grape', 'kiwi', 'orange', 'banana', 'apple']

//sort(): Sortiert die Elemente des Arrays in aufsteigender oder absteigender Reihenfolge.

const fruits = ["banana", "orange", "kiwi", "apple", "grape"];
fruits.sort();

console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi', 'orange']

//indexOf(): Gibt die Position des ersten Vorkommens eines Elements im Array zurück.

const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
const index = fruits.indexOf("orange");

console.log(index); // Output: 2

//lastIndexOf(): Gibt die Position des letzten Vorkommens eines Elements im Array zurück.

const fruits = ["apple", "banana", "orange", "kiwi", "orange", "grape"];
const index = fruits.lastIndexOf("orange");

console.log(index); // Output: 4

//forEach(): Ruft eine Funktion für jedes Element im Array auf.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// Output:
// 1
// 2
// 3
// 4
// 5

//map(): Erstellt ein neues Array, indem eine Funktion auf jedes Element des Arrays angewendet wird.

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//filter(): Erstellt ein neues Array mit allen Elementen, die eine bestimmte Bedingung erfüllen.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

//reduce(): Reduziert die Elemente des Arrays auf einen einzelnen Wert, indem eine Funktion auf jedes Element angewendet wird.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (acc, number) {
  return acc + number;
}, 0);

console.log(sum); // Output: 15

//every(): Überprüft, ob alle Elemente im Array eine bestimmte Bedingung erfüllen.

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(function (number) {
  return number > 0;
});

console.log(allPositive); // Output: true

//some(): Überprüft, ob mindestens ein Element im Array eine bestimmte Bedingung erfüllt.

const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function (number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // Output: true

//find(): Gibt das erste Element im Array zurück, das eine bestimmte Bedingung erfüllt.

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find(function (number) {
  return number % 2 === 0;
});

console.log(evenNumber); // Output: 2

//findIndex(): Gibt die Position des ersten Elements im Array zurück, das eine bestimmte Bedingung erfüllt.

const numbers = [1, 2, 3, 4, 5];

const evenIndex = numbers.findIndex(function (number) {
  return number % 2 === 0;
});

console.log(evenIndex); // Output: 1
