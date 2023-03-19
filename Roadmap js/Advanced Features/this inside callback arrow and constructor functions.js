//this inside constructor functions

/*
if you call a function with a new keyword it creates a this obj and retruns the this objct. the function create a binding btween the new object thats calling the constrture and the 
*/

//example

function Person(n) {
  this.name = n;
  this.talk = function () {
    console.log(this);
  };
}

const me = new Person("Sina"); //me is the this object

//this in callback functions

function Person2(n) {
  talk.name = n;
  this.talk = function () {
    console.log(this);
  };

  setTimeout(function () {
    //in this where are not in the "this" of the constructor function
    console.log(this);
  }.bind(this), 100); //here you can bind the this
}

const me2 = new Person("Johannes");

//after 100 ms the this in the callback is the window obj


//this in arrow functions

function Person2(n) {
    talk.name = n;
    this.talk = function () {
      console.log(this);
    };
  
    setTimeout(() => {
        //with arrow functions this is the same as in the constructore
      console.log(this);
    }, 100); 
  }