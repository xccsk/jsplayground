function tryjs() {
  testcreateelement();
  create_tabel(persons);
}

const persons = [
  {
    firstname: "lenny",
    lastname: "lindemann",
    gender: "male",
  },
  {
    firstname: "Luca",
    lastname: "Tuchti",
    gender: "male",
  },
  {
    firstname: "Jakob",
    lastname: "Gäbler",
    gender: "female",
  },
];

function create_tabel(persons) {
  const container = document.getElementById("create_tabel");
  const tabel = document.createElement("tabel");
  const thead = document.createElement("thead");
  thead.innerHTML =
    "<tr> <th> Vorname </th> <th> Nachname </th> <th> Position </th> </tr>";

  const tbody = document.createElement("tbody");

  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<td> ${person.firstname} </td> <td> ${person.lastname} </td> <td> ${person.gender} </td>`;
    tbody.appendChild(tr);
  }

  tabel.appendChild(thead);
  tabel.appendChild(tbody);
  container.appendChild(tabel);
}

function testcreateelement() {
  const container = document.getElementById("create_tabel");

  const btn = document.createElement("button");
  btn.innerHTML = "clickme";
  container.appendChild(btn);
}
