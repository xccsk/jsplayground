//DOM Traversal

/*
What is it for:
DOM Traversal is the process of navigating through the Document Object Model (DOM) tree to find and manipulate specific HTML elements or nodes. The DOM represents the HTML document as a tree-like structure, where each element is a node in the tree and can have child nodes and parent nodes.
*/

//There are several methods in JavaScript that allow you to traverse the DOM tree and access its nodes, including:

/*
parentNode and childNodes:
The parentNode property returns the parent node of an element, while the childNodes property returns a list of all child nodes of an element, including text nodes, element nodes, and attribute nodes.
*/

const list = document.getElementById("myList");
const parent = list.parentNode;
const children = list.childNodes;

/*
querySelector and querySelectorAll:
The querySelector method returns the first element that matches a specified CSS selector, while the querySelectorAll method returns a list of all elements that match a specified CSS selector.
*/

const item = document.querySelector(".item");
const items = document.querySelectorAll(".item");

/*
nextSibling and previousSibling:
The nextSibling property returns the next sibling node of an element, while the previousSibling property returns the previous sibling node of an element.
*/ 

const item = document.getElementById("myItem");
const nextItem = item.nextSibling;
const prevItem = item.previousSibling;

/*
nextElementSibling and previousElementSibling:
The nextElementSibling property returns the next sibling element of an element, while the previousElementSibling property returns the previous sibling element of an element.
 */

const item = document.getElementById("myItem");
const nextItem = item.nextElementSibling;
const prevItem = item.previousElementSibling;

// just examples


//WEB DEV

