// IF anweisungen

if (condition) {
  //führt den Code aus
}

// if else condition

if (condtion1) {
  //wenn condtion 1 true ist wird der code ausgeführt
} else {
  //in jedem andern fall wird diese Condtion ausgeführt
}

//if-else/if-else condtion

if (condtion1) {
  //wenn contion 1 True ist
} else if (condtion2) {
  //wenn condtion 2 true ist wird ausgefüht
} else {
  //wird in jedem andern fall ausgefüjhrt
}

// auswahl operator

let is18 = age >= 18 ? True : false;

// switch case anweisungen, damit man darauf eingenkann wenn ein Parameter einen bestimmte eigenschaft hat

switch (parameter) {
  case param1:
  //anweisung
  case param2:
    //anweisung
    break;
}

//wenn parameter und param1 übereinstimmen wird das programm damit weitergeführt, mann nimmt immer einen Break operator

for (i = 1; i <= 10; i++) {
  console.log(i);
}

const options = ["Wahlla ein macher", "EYWA war gut", "Lenny wasn los"];

for(i=0; i< options.length(); i++){
    
    const optionElement = document.createElement('option')

    const optionText = document.createTextNode(options[i])

    optionElement.appendChild(optionText)

    //hier noch auswählen an welches Element dann das ganze dann drangehangen wird im HTML Code

}

