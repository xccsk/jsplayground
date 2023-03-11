//queryselector

/*
n JavaScript, the query selector is a method that is used to select and manipulate HTML elements from within the DOM (Document Object Model). It allows you to select elements based on their CSS selector, which makes it a powerful tool for manipulating the content of a web page.
*/

/*
There are two main methods for selecting elements with query selectors in JavaScript:
*/

//1.querySelector(): This method returns the first element that matches a specified CSS selector.For example, to select the first paragraph element on a page, you can use the following code:

const firstParagraph = document.querySelector("p");

//2.querySelectorAll(): This method returns a NodeList of all elements that match a specified CSS selector.For example, to select all paragraph elements on a page, you can use the following code:

const allParagraphs = document.querySelectorAll("p");

/*
In addition to selecting elements based on their tag name, you can also use query selectors to select elements based on their class or ID. Here are some examples:
*/

// Select an element with a class of "example"
const exampleElement = document.querySelector(".example");

// Select all elements with a class of "example"
const allExampleElements = document.querySelectorAll(".example");

// Select an element with an ID of "example"
const exampleElement = document.querySelector("#example");

/*
You can also use more complex CSS selectors to select elements based on their attributes, their position in the DOM, and more.

Once you have selected an element using a query selector, you can manipulate it using JavaScript. For example, you can change its text content, its HTML markup, its style properties, and more. Here are some examples:
*/

// Change the text content of an element
const exampleElement = document.querySelector(".example");
exampleElement.textContent = "New text content";

// Change the HTML markup of an element
const exampleElement = document.querySelector(".example");
exampleElement.innerHTML = "<strong>New markup</strong>";

// Change the style properties of an element
const exampleElement = document.querySelector(".example");
exampleElement.style.backgroundColor = "red";

/*
Overall, query selectors are an important tool for manipulating the content of a web page using JavaScript. They allow you to select and modify elements with precision, which can help you create more dynamic and interactive web applications. */
