
function getComputerChoice() {
    // return random choice between
    // rock paper scissor
    let computerChoice;
    // generate a random number between 1 and 3 inclusive
    let randomNum = Math.floor(Math.random() * 3) + 1;
    // if randomNum = 1, rock, else if 2, paper, else scissor
    if(randomNum == 1) {
        computerChoice = "rock";
    } else if (randomNum == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// write a function that plays a single round of rps
// takes two params, playerSelection / computerSelection
// returns a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    let results;
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
            if(computerSelection == "rock") results = "Tie!";
            if(computerSelection == "paper") results = "You Lost! Paper beats Rock!";
            if(computerSelection == "scissors") results = "You Win! Rock beats Scissors!";
            break;
        case "paper":
            if(computerSelection == "rock") results = "You Win! Paper beats Rock!";
            if(computerSelection == "paper") results = "Tie!";
            if(computerSelection == "scissors") results = "You Lost! Scissors beats Paper!";
            break;
        case "scissors":
            if(computerSelection == "rock") results = "You Lost! Rock beats Scissors!";
            if(computerSelection == "paper") results = "You Win! Scissors beats Paper!";
            if(computerSelection == "scissors") results = "Tie!";
            break;
        default:
            results = "please choose rock paper or scissors.";
    }

    return results;
}

// create helper function to get player selection
function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

// create helper function to determine who won to keep track of multi game score.
function playerWon(roundResults) {
    switch(true) {
        case roundResults.includes("You Win!"):
            return true;
            break;
        case roundResults.includes("You Lost!"):
            return false;
            break;
        default:
            return "Tie";
    }
}

function checkRounds(rounds) {
    if (rounds === 5) {
        finalResults = `Final Score:
        Your score: ${playerScore}
        Computer Score: ${computerScore}
        `
        return false;
    }
    return true;
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const div = document.querySelector(".result-div");
const results = document.createElement("div");
div.appendChild(results);

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let rounds = 0;
let finalResults;

rockButton.addEventListener('click', () => {
    game("rock")
});

paperButton.addEventListener('click', () => {
    game("paper");
});

scissorsButton.addEventListener('click', () => {
    game("scissors");
});

function game(playerChoice) {
    if (checkRounds(rounds)) {
        let roundResult = playRound(playerChoice, getComputerChoice());
        results.textContent = roundResult;
        if(playerWon(roundResult)) {
            playerScore++;
        } else if (!playerWon(roundResult)) {
            computerScore++;
        }
        rounds++;
        console.log(rounds);
    } else {
        results.textContent = finalResults;
    }
}
