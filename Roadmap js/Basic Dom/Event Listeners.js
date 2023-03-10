//Eventlistners

/*frist of all you need to select a element that the event is done on
 */

const parent = document.getElementById("parent");

parent.addEventListener(); // the eventlistner takes 2-3 Paramters

//1 param is the event you listening to (keypess,mousedown,mouseover) etc.

//2 param is callback function that runs everytime the event is done (has a default param the event object)

parent.addEventListener("click", (event) => {
  console.log(event.target.value);
});

//but if i click on a element thats over my parent the event still gets triggert so thats why you probably need Event Bubbling and Capturing

//that means if your eventlistner emelent overlays a other eventlistners they all gonna get ecexuted that means from highest(div) to lowest(button) and thats called bubbling or eventbubbling

/*
But there is a scond face and thats called the capturing phase and that happens first, and that works in the reversed hrachie from bottom to top (document->Element)

and to prove that you can have the 3 argument a object where you can set in wich phase the eventlistner is executed
*/

parent.addEventListener(
  "click",
  (e) => {
    console.log(
      "this will be executed in the capute phase that means bevore other events, couse by default capute is false"
    );
  },
  {
    capture: true,
    once: true, // while runtime this event can only be called once
  }
);
