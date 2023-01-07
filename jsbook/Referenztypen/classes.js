class item {
    constructor(name,price,author,isbn){
        this.name = name
        this.price = price
        this.author = author
        this.isbn = isbn
    }
}

// nun ist die classse item definiert und ich kann ein neues Object definierren

let item1 = new item (
    'Lenny in Australien',
    12.33,
    'Risemo',
    123442033344
)
 //nun wurde ein object erzuegt
console.log(item1.name)


