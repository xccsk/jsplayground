function nfl_players_output() {
  const nfl_teams = [
    ["Tom Brady", "Matt Damon", "Lenny Lindemann"],
    ["Richard Tuch", "Justin Fuchs", "Achraf Ait Bu"],
    ["Carlicito", "Badchchief", "Elianz"],
  ];

  for (let i = 0; i < nfl_teams.length; i++) {
    const nflteam = nfl_teams[i];

    for (let j = 0; j < nflteam.length; j++) {
      console.log(nflteam[j]);
    }
  }
} //dieser code gibt für jedes Arrey jewals jeden spieler aus

