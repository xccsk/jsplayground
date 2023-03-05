// a Map is a array that contains more arrays in the second array you have key value pairs

const numberOFAlbums = new Map([
  ["kyuss", 4][("Tool", 6)][("Queens of the Stone Age", 6)],
]);

//usall functions

numberOFAlbums.set("leny", 7); // fügt neues element hinzu
numberOFAlbums.get("leny"); // gibt den value 7 zurück
numberOFAlbums.delete("leny"); // löscht den eintrag lenny
numberOFAlbums.clear() //löschen aller einträge

