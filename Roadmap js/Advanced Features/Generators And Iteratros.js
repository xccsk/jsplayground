//Generators and iterators

/*
In JavaScript, iterators and generators are concepts that facilitate the process of working with sequences of values, often used in the context of iteration.
*/

//Iterators:

/*
An iterator is an object that implements the iterator protocol. The iterator protocol requires the object to have a next method, which, when called, returns an object with two properties: value and done. The value property contains the next value in the sequence, and the done property is a boolean indicating whether the iteration is complete.

Here's a simple example of a custom iterator for a range of numbers:
*/
function createRangeIterator(start, end) {
    let current = start;
  
    return {
      next() {
        if (current <= end) {
          const value = current;
          current += 1;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
  
  const rangeIterator = createRangeIterator(1, 5);
  
  console.log(rangeIterator.next()); // Output: { value: 1, done: false }
  console.log(rangeIterator.next()); // Output: { value: 2, done: false }
  // ... and so on

//Generators:

/*
Generators are a special kind of function in JavaScript that simplifies the creation of iterators. They are defined using the function* keyword, and they can be paused and resumed during execution using the yield keyword.

Here's the same range example as above, but implemented using a generator function:
*/
function* createRangeGenerator(start, end) {
    let current = start;
    while (current <= end) {
      yield current;
      current += 1;
    }
  }
  
  const rangeGenerator = createRangeGenerator(1, 5);
  
  console.log(rangeGenerator.next()); // Output: { value: 1, done: false }
  console.log(rangeGenerator.next()); // Output: { value: 2, done: false }
  // ... and so on

/*
Generators make it easier to create custom iterators by handling the iterator protocol internally. When a generator function is called, it returns a generator object that conforms to the iterator protocol.

Iterating through a generator can be done using a for...of loop, which automatically calls the next method until the done property is true:
*/
for (const value of createRangeGenerator(1, 5)) {
    console.log(value); // Output: 1, 2, 3, 4, 5
  }

/*
In summary, iterators and generators are concepts in JavaScript that help you work with sequences of values. Iterators are objects that implement the iterator protocol, providing a next method that returns values and a completion status. Generators are special functions that simplify creating iterators, allowing you to define sequences using function* and yield.
*/