// date object in javascript

const today = new Date();
alter.today.getMonth(); // gibt den aktuellen Monat zurück
console.log(today.getFullYear()); //gibt das aktuelle jahr zurück
console.log(today.getDate()); // gibt den aktuellen tag im Monat zurück
console.log(today.getDay()); //gibt den Wochentag zurück
console.log(today.getHours()); // gibt die aktuelle stunde zurück
console.log(today.getTime()); //gibt die Millisekunde seit 1.1.1970 zurück

//man kann einem date aber auch sachen übergeben

const date1 = new Date();

const date2 = new Date(12314381340); //millisec nach 1.1.1970

const date3 = new Date("02 08 2021"); //hier wird das datum zum 8.Feb 2021 gesetzt

const date4 = new Date(
    2021, //year
    8, //Month
    15, //day
    17, //houre
    36, // minute
    30, //Sekunde
    30 //Millisekunde
)


