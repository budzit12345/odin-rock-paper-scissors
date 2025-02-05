function getRandom() {
    return (Math.random() * 10);
}

function getComputerChoice() {
    let x = getRandom();
    if (x < 3.333) {
        return "rock";
    } else if (x < 6.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

const buttonPaper = document.createElement("button");
const buttonRock = document.createElement("button");
const buttonScissors = document.createElement("button");
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonRock);
document.body.appendChild(buttonScissors);
buttonPaper.textContent = "PAPIER";
buttonRock.textContent = "KAMIEN";
buttonScissors.textContent = "NOZYCE";

let humanScore = 0;
let computerScore = 0;
let gameOver = false;  // Zmienna do zatrzymania gry po osiągnięciu 5 punktów przez jednego z graczy

// Dodajemy div do wyświetlania wyników
const allScore = document.createElement("div");
document.body.appendChild(allScore);

const textScore = document.createElement("p");
allScore.appendChild(textScore);
textScore.textContent = `WYNIK KOMPUTERA: ${computerScore}  ::  WYNIK GRACZA: ${humanScore}`;

function playRound(humanChoice) {
    if (gameOver) return;  // Jeżeli gra się skończyła, nie pozwól na dalsze kliknięcia

    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        textScore.textContent = `Remis! Obaj wybraliście ${humanChoice}. Wynik: Człowiek ${humanScore} - Komputer ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        textScore.textContent = `Wygrałeś! ${humanChoice} pokonuje ${computerChoice}. Wynik: Człowiek ${humanScore} - Komputer ${computerScore}`;
    } else {
        computerScore++;
        textScore.textContent = `Przegrałeś! ${computerChoice} pokonuje ${humanChoice}. Wynik: Człowiek ${humanScore} - Komputer ${computerScore}`;
    }

    // Sprawdzenie, czy ktoś osiągnął 5 punktów
    if (humanScore === 5) {
        textScore.textContent = `Gratulacje! Wygrałeś grę! Wynik końcowy: Człowiek ${humanScore} - Komputer ${computerScore}`;
        gameOver = true;  // Zatrzymujemy grę
    } else if (computerScore === 5) {
        textScore.textContent = `Niestety, przegrałeś! Komputer wygrał grę. Wynik końcowy: Człowiek ${humanScore} - Komputer ${computerScore}`;
        gameOver = true;  // Zatrzymujemy grę
    }
}

buttonPaper.addEventListener("click", function() {
    playRound("paper");
});
buttonRock.addEventListener("click", function() {
    playRound("rock");
});
buttonScissors.addEventListener("click", function() {
    playRound("scissors");
});
