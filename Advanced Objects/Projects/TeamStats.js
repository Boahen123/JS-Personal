const team = {
  _players: [ 
        {
    firstname: 'Lionel',
    lastname: 'Messi',
    age: 34
  },
        {
    firstname: 'Kylian',
    lastname: 'Mbappe',
    age: 24
   },
 {
    firstname: 'Neymar',
    lastname: 'Santos',
    age: 30
    } ],
    _games: [
      {
    opponent: '',
    teamPoints: 0,
    opponentPoints: 34
        },
             {
    opponent: '',
    teamPoints: 0,
    opponentPoints: 34
        },
                  {
    opponent: '',
    teamPoints: 0,
    opponentPoints: 34
  }
    ],
    get players() {
      return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstname, newLastName, newAge) {
        let newPlayer = { 
            firstname: newFirstname,
            lastname: newLastName,
            age: newAge
        }
        this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(newGame);
    }
}

console.log(team._players);
team.addPlayer('Bugs', 'Bunny', 28);
console.log(team._players);

console.log(team._games);
team.addGame('Titans', 100, 98);
console.log(team._games);