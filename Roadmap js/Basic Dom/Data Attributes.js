//Data Attribute

/*Mit dem data attribute kann man html elementen gewisse data eigenschaften anhängen über welche man später mit JS oder CSS zugreift */

/*man kann dem html element eine beliebige data info geben, das signalisiert man mit dem wort data */

<button id="myButton" data-color="blue">
  Click me
</button>;

/*das was nach dem data also indicator kommt ist das keyword über das später zugegeriffen wird mit JS */

var myButton = document.getElementById("myButton");
var buttonColor = myButton.dataset.color;
myButton.dataset.color = "red"; //change the current value
myButton.dataset.horny = "yes"; //acces the dataset object and just name a new object

//so kann man auf das data attribute zugreifen in JS

/*Wann nutzt man das Data Attribute:

das data-Attribut kann sehr nützlich sein, um Daten zu speichern, die später von JavaScript-Code verarbeitet werden müssen. Es kann verwendet werden, um Informationen wie Einstellungen, IDs, Farben, Preise oder andere benutzerdefinierte Daten an Elemente im HTML-Markup anzuhängen.
*/

//CSS and Data attributes

/*you can acces the data attribute via attr() function */

<style>
    #myButton{
        color: attr(data-color)
    }
    // attrubte selector (if)
    #div[data-color="red"]{
        color: red
    }
</style>

