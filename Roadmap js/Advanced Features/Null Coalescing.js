//Null Coalescing

/*
The nullish coalescing operator (??) is a logical operator in JavaScript that returns the right-hand operand when the left-hand operand is either null or undefined. If the left-hand operand is neither null nor undefined, it returns the left-hand operand. This operator is useful for providing default values or fallbacks when dealing with potentially null or undefined values.
*/

//Here's the syntax for the nullish coalescing operator:
const result = a ?? b;

/*
In this example, result will be assigned the value of a if a is not null or undefined. If a is null or undefined, result will be assigned the value of b.

Here's a more practical example:
*/
const userSettings = {
    fontSize: null,
  };
  
  const defaultSettings = {
    fontSize: 16,
  };
  
  const fontSize = userSettings.fontSize ?? defaultSettings.fontSize;
  
  console.log(fontSize); // Output: 16

/*
In this example, we use the nullish coalescing operator to set the fontSize variable to the user's preferred font size if it's available (userSettings.fontSize) and fall back to the default font size if the user's preferred font size is null or undefined (defaultSettings.fontSize).

It's important to note that the nullish coalescing operator is different from the logical OR operator (||). The logical OR operator returns the right-hand operand if the left-hand operand is falsy, which includes values like null, undefined, false, 0, NaN, and empty strings (''). The nullish coalescing operator only checks for null and undefined, making it a better choice when dealing with values that might be legitimately falsy.

The nullish coalescing operator (??) is a helpful addition to JavaScript that allows for more precise handling of null and undefined values, making it easier to provide default values or fallbacks in your code.
*/