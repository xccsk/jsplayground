// Document Object Model

//whenwver you write document you acces the dom Model

document; //now you can do everything with the dom model you want to

/*
In JavaScript, the document object represents the web page that is currently loaded in the browser window. It provides a way to manipulate the content of the web page, including adding, modifying, and deleting HTML elements, changing the styles of elements, and responding to user events.

Here are some common tasks that can be accomplished using the document object in JavaScript:
*/

/*
Accessing elements:
The document object provides several methods for accessing elements in the web page, including getElementById, getElementsByClassName, getElementsByTagName, and querySelector. These methods return references to DOM (Document Object Model) nodes, which can be manipulated using various properties and methods.
For example, to change the text of a paragraph element with the ID "myParagraph":
*/
const paragraph = document.getElementById("myParagraph");
paragraph.textContent = "New text";

/*
Modifying elements:
The document object provides several methods for modifying elements in the web page, including createElement, appendChild, removeChild, setAttribute, and classList. These methods can be used to create new elements, add or remove elements from the DOM, and change the attributes and styles of elements. 

For example, to create a new button element and add it to the page:
*/
const button = document.createElement("button");
button.textContent = "Click me";
button.setAttribute("id", "myButton");
document.body.appendChild(button);

/*
Responding to events:
The document object provides several methods for handling events, including addEventListener and removeEventListener. These methods can be used to listen for user events, such as clicks and key presses, and respond to them with custom code.
For example, to listen for a click event on a button element and perform some action:
 */
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Button clicked");
});
/*
In summary, the document object in JavaScript is a powerful tool for manipulating the content of web pages and responding to user events. By understanding its methods and properties, you can create dynamic and interactive web applications that engage users and provide a rich user experience.
 */
