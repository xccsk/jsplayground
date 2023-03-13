//Event delegation

/*its a way you can add a event listener once for mutiple elements with support for adding extra children later on so even when im click on a element that appears  */

<html>
  <ul id="myList">
    <li>Apple</li>
    <li>Banana</li>
    <li>Tomato</li>
  </ul>
</html>;

const mylist = document.getElementById("myList");

mylist.addEventListener("click", onClick(e));

function onClick(e) {
  const target = e.target;
  if (target == "li") {
    target.style.backroundcolor = "red";
  } else {
    return;
  }
}

//Chat GBT

/*

Event delegation is a technique in JavaScript that involves attaching event listeners to a parent element instead of individual child elements. This technique allows you to handle events on multiple child elements with a single event listener on their parent element.

The basic idea behind event delegation is that when an event occurs on a child element, the event "bubbles" up through the parent element and any other ancestor elements until it reaches the document object. During this process, each ancestor element has a chance to handle the event before it reaches the document object.

By attaching an event listener to a parent element and using event delegation, you can take advantage of this bubbling behavior to handle events that occur on child elements. When an event occurs on a child element, the event bubbles up to the parent element, which can then check the event target to determine which child element the event originated from and handle the event accordingly.

This technique is particularly useful in situations where you have a large number of child elements that all require the same event handling code. Instead of attaching an event listener to each individual child element, you can attach a single event listener to their parent element and handle events on all child elements with a single function.

Event delegation is also useful in situations where child elements are dynamically added or removed from the parent element. With event delegation, you don't need to worry about attaching or detaching event listeners to each individual child element as they are added or removed. Instead, you can simply attach the event listener to the parent element once, and it will handle events on all child elements, whether they are present when the listener is attached or added later.
 */
