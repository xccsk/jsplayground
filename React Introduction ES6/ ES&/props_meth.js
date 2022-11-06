class Door {
  name = "Max"; /* remove constructor*/
  lenght = "172max";

  /*Functions in classes heißen Methoden */
  printname = () => {
    console.log(this.name);
  };
}

class Wooddoor extends Door {
  constructor() {
    this.woodkind = "Eiche";
  }
  printmaterial =() => { /*Use arrowfunction for method */
    console.log(this.woodkind);
  }
}

const NewDoor = new Wooddoor();

NewDoor.printmaterial();
