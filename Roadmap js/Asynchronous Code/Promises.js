//Promises

// like a relife promise its resolved (gehalten) or rejected(nicht gehalten)

let promise = new Promise((resolve, reject) => {
  // a promise gets one argument a function with 2 parameters

  // now the promise will be defined, in and you can return the resolve or the reject by the conditions you want

  let a = 1 + 1;
  if (a == 2) {
    resolve("Sucess"); // this also could return any kind of object
  } else {
    reject("Failed");
  }
});

promise.then((messgae) => {
  console.log(messgae);
});
//then code only runs when the promise resolves and the argument that is passed, is that whats passed to the resolve snipped in the promise

promise.catch((error) => {
  console.log(error);
});
//catch runs when the code is rejected or the promise threws an error

/*Promises are used when there is something in the backround that takes a while and you want to go further with the data from that server */

function isJohannesHavingaPromise(makeYourSelfBetter) {
  return new Promise((resolve, reject) => {
    if (makeYourSelfBetter) {
      resolve({
        partens: "We are Proud",
        money: "Hey you get Money",
      });
    } else {
      reject({
          parents:"you own your dad a shit ton of money",
          money:"you dont deserve Me"
      });
    }
  });
}

//when you have a lot of promises in a row you can use Promise.all so your not wating for any to go to the next

Promise.all([ //this array needes all Promises
    isJohannesHavingaPromise,
]).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
