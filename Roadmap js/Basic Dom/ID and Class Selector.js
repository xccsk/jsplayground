//ID and Class Selectors

/*
To select an HTML element by its ID in JavaScript, you can use the getElementById() method. The syntax for this method is:
*/
document.getElementById("myId");

/*
Where myId is the value of the HTML element's ID attribute. For example, if you have an HTML element like this:
*/
<div id="myDiv">Some content here</div>;
//You can select this element using the following JavaScript code:

let myDiv = document.getElementById("myDiv");

/*
In this example, the myDiv variable will reference the HTML element with the myDiv ID attribute.

To select HTML elements by their class in JavaScript, you can use the getElementsByClassName() method. The syntax for this method is:
*/
document.getElementsByClassName('myClass');

/*
Where myClass is the value of the HTML element's class attribute. For example, if you have multiple HTML elements with the class myClass, you can select all of them using the following JavaScript code:
*/
let myElements = document.getElementsByClassName('myClass');

/*
n this example, the myElements variable will reference an array-like object containing all HTML elements with the myClass class attribute.

Once you have selected an HTML element or a collection of elements using ID or class selectors, you can manipulate them dynamically using JavaScript code. For example, you can change their content, styles, attributes, or even add or remove them from the web page using methods like innerHTML, style, setAttribute(), appendChild(), removeChild(), and many others.

Here's an example of using an ID selector to change the text content of an HTML element dynamically:
*/
<div id="myDiv">Old content here</div>

<script>
  let myDiv = document.getElementById('myDiv');
  myDiv.innerHTML = 'New content here';
</script>

/*
In this example, the JavaScript code selects the myDiv element using its ID, and then changes its content dynamically by setting its innerHTML property to a new value. */