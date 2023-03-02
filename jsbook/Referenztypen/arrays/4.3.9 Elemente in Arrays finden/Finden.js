// um elemente zu finden gibt es 3 Methoden (indexOF(),lastIndexOf und Find())

//IndexOf() gibt den index im array zurück für den wert den man übergibt (der als erstes gefunden wird)

const array = [-20,1,34,5,3,256,3,234,2525,4,26,6,78,8,5]

console.log(array.indexOf(1)) // Ausgabe 1
console.log(array.indexOf(34)) // Ausagbe : 2
console.log(array.indexOf(13647643)) // Ausgabe -1 (da dieser wert im array nicht exsistiert)
console.log(array.indexOf(5)) // Ausgabe 3 weil das die erste 5 in dem array ist 

// man kann auch einen 2 Parameter an die Methode übergeben der definiert ab welchem index erst gesuch wird

//lastIndexOf macht genau das gleiche bis auf das es die suche von hinten startet

// find und FindIndex

//an diese beiden methoden wird eine funktion übergeben die anhand des eines kriterium entweder das element, oder den index zurückgibt

array.find(item =>{
    item !== 0
    // findet alle items die nicht gleich null sind
    console.log(item)
})

array.findIndex(item =>{
    item.includes(5)
    console.log(item)
    //gibt den index von jedem element das ne 5 beinhalted 
})