//this in javascript

/*
its not a block that matters the main question is inside out outside a function
*/

//when you just call this 

//this in global

console.log(this) // you get back the window (browser) object becouse its called by that and thats allways when its outside a function 

//this inside functions

/*
if you have a object that calls the fuinction then the object that calls the function is the "this" the is to roule whats on the left of the function is allways the this 
*/

function talk(){
    return `Ì am ${this.name}`
}

const me = {
    name:"lanni",
    getthis:talk
}
me.getthis() // retuns the me object

//when using bind

/*you can call any function using bind, but you need to passs a object thats refrenced as this, then you get returned a new function */

talk.bind(me) // then you have a function you can call that would refere to the me

const meTalk = talk.bind(me) //when called its "i am Lanni"
//or call it on the fly

talk.bind(me)(param)

//to call the function imidiatly you can use the call() method on the function an pass the context

talk.call(me) // I am lenny 

//with params

talk.call(me,param,param2)

//with apply

talk.apply(me,[param1,param2])

//calling this in construtorfunction