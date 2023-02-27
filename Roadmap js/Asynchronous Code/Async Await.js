// Async Await 

/*you need to know promisses for this */

async function doWork(){ 
    //you need to tell the function that its asyncronos, the rest is the same in the catch block of the function basicly is there for the reject part of a normal promise
    try{
        const response = await test('lenni')
    }
    catch{

    }
}

/*also while your awating something the rest of the file will run !!not the function the reader will tap out and then is gonna execute the other stuff of your file */