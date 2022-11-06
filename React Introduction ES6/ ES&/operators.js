/* Operators Spread und Rest  */

/*Spread = Used to split up array or opject props */
/*Spread uses ... to be activated */

/*Rest merge a list of functions arguments into array/ sprich die kwrgs werden zusammengefasst */

let oldarrey = [1,2,3,4,5,5]

let newArrayes = [...oldarrey, 8] /*ads 4 to the List */

console.log(newArrayes)

const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age: 28
}

/*add age to new opject */

/*Rest  */

const filter = (...args) => {
    return args.filter(el = el ===1)
}

console.log(filter(1,2,3));  /*Man kann ein Arrey in die Funktion passen und es wird automatiusch drüber iteriet */