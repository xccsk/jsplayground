const array = ["lenny", "wasn", "los"];

console.log(array[0])

//element am ende eines arrys hinzufügen per push 

array.push('1. Ableitung') //fügt zum schluss hinzu
array.unshift('wasn los') // fügt am angang ein 
array.slice( //fügt an beliebiger stelle ein 
    2, //gibt an an welcher stelle das element eingefügt wird
    0, //vieviele elemente gelöscht werden
    'Graage' //wo es eingefügt wird
)

array.pop() // enfernt letztes Element
array.shift() // entfernt das erste Element
array.splice(1,2) // entfernt das 2 und 3 Element 

console.log(array)
