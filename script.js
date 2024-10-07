function getRandom() {
    return (Math.random() * 10);
}

function getComputerChoice() {
    var x = getRandom();
    if (x < 3.333)
    {
        print = "rock"
    }
    else if (x < 6.666)
    {
        print = "paper"
    }
    else {
        print = "scissors"
    }
     return print;

    }
    function getHumanChoice() {
        let wybor;
        const validChoices = ["rock", "paper", "scissors"];
        
        do {
            wybor = window.prompt("Twój wybór (rock, paper, scissors):").toLowerCase();
        } while (!validChoices.includes(wybor));
        
        return wybor;
    }
    
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    

    if (humanChoice === computerChoice) {
        console.log(`Remis! Obaj wybraliście ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`Wygrałeś! ${humanChoice} pokonuje ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`Przegrałeś! ${computerChoice} pokonuje ${humanChoice}.`);
    }
    
    console.log(`Wynik: Człowiek ${humanScore} - Komputer ${computerScore}`);
}



 for (let i = 1; i <= 5; i++) {
    console.log(`Runda ${i}:`);
    const humanSelection = getHumanChoice();  
    const computerSelection = getComputerChoice();  
    playRound(humanSelection, computerSelection); 
}

console.log(`Wynik końcowy: Człowiek ${humanScore} - Komputer ${computerScore}`);
if (humanScore > computerScore) {
    console.log("Gratulacje, wygrałeś grę!");
} else if (computerScore > humanScore) {
    console.log("Niestety, przegrałeś grę!");
} else {
    console.log("Remis!");
}

    

