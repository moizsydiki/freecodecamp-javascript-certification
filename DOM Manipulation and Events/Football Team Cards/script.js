const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const footballTeam = {
  team: "Portugal",
  year: 2026,
  headCoach: "Roberto Martínez",
  players: [
    {
      name: "Cristiano Ronaldo",
      position: "forward",
      isCaptain: true,
    },
    {
      name: "Gonçalo Ramos",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Gonçalo Ramos",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Diogo Dalot",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Diogo Costa",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "José Sá",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Rui Silva",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Nélson Semedo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Rúben Dias",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Tomás Araújo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diogo Dalot",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Bernardo Silva",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Diogo Dalot",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "João Neves",
      position: "midfielder",
      isCaptain: false,
    },
  ],
};

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const setPlayerCards = (arr = footballTeam.players) => {
  playerCards.innerHTML = arr
    .map(({ name, position, isCaptain }) => {
      return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `;
    })
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  const selectedValue = e.target.value;

  if (selectedValue === "all") {
    setPlayerCards();
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selectedValue,
    );
    setPlayerCards(filteredPlayers);
  }
});

setPlayerCards();
