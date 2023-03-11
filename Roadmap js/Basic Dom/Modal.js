//What is a Modal

/*
In JavaScript, a modal is a type of dialog box that is displayed on top of the current web page to temporarily interrupt the user's workflow and prompt them for a response. Modals are often used to display important messages or to gather input from the user in a more visually prominent way than a standard form or alert box.

Modals typically contain some kind of message or question for the user, as well as one or more buttons that allow them to respond. The modal is designed to be visually distinct from the rest of the page, typically by using an overlay that darkens the background and focuses the user's attention on the modal itself.

*/

//To create a modal in JavaScript, you can use a combination of HTML, CSS, and JavaScript code. Here is a basic example:

<!-- HTML code for the modal -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>This is a modal!</p>
  </div>
</div>

<!-- CSS code to style the modal -->
<style>
  .modal {
    display: none; /* Hide the modal by default */
    position: fixed; /* Position it in the center of the screen */
    z-index: 1; /* Make sure it appears on top of other elements */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scrolling if needed */
    background-color: rgba(0,0,0,0.4); /* Add a dark overlay */
  }

  .modal-content {
    background-color: #fefefe; /* White background */
    margin: 15% auto; /* Center it vertically and horizontally */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Adjust width as needed */
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>

<!-- JavaScript code to display the modal -->
<script>
  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>


/*In this example, the HTML code defines a basic structure for the modal, while the CSS code styles it to make it visually distinct from the rest of the page. The JavaScript code is used to display and hide the modal when the user interacts with the page. When the user clicks the button with an ID of "myBtn", the modal is displayed, and when they click the "x" button or anywhere outside the modal, it is hidden again.

Overall, modals are a useful tool for displaying important messages and gathering user input in a visually prominent way. By using HTML, CSS, and JavaScript code, you can create modals that are customized to your */