// Promieses in JS are like promises in RL

/*you can stay to your promise (resolved) and you can reject your promise (rejected) */

let p = new Promise((resolve,reject) =>{
    let a = 1+1
    if(a == 2){
        resolve('Sucess')
    } else{
        reject('Failed')
    }
}).then((message) =>{  //then bei resolve
    console.log('This is the then' +  message)
}).catch((message)=>{
    console.log('This is the catch (reject)' + message)
})  // catch bei reject 




/*  der then operator kommt zum einsatz wenn der promis resolved wurde, der message Parameter liegt da weil nur einwas in resolve übergeben wird*/