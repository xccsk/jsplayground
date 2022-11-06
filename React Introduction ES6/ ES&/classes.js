class Door{
    constructor(){
        this.name = 'Max' /* Variablen in Classen heißen properties*/
        this.lenght = '172max'
    }
    /*Functions in classes heißen Methoden */
    printname(){
        console.log(this.name)
    }
}

class Wooddoor extends Door{
    constructor(){
        this.woodkind = "Eiche"
    }
    printmaterial(){
        console.log(this.woodkind)
    }
}

const NewDoor = new Wooddoor();

NewDoor.printmaterial();
