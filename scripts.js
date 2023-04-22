
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
            if(computerSelection == "rock") results = "tie";
            if(computerSelection == "paper") results = "You Lost!";
            if(computerSelection == "scissors") results = "You Win!";
            break;
        case "paper":
            if(computerSelection == "rock") results = "You Win!";
            if(computerSelection == "paper") results = "tie";
            if(computerSelection == "scissors") results = "You Lost!";
            break;
        case "scissors":
            if(computerSelection == "rock") results = "You Lost!";
            if(computerSelection == "paper") results = "You Win!";
            if(computerSelection == "scissors") results = "tie";
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

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;

    for(let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let results = playRound(playerChoice, computerChoice);
        console.log(results);


        let playerWonVar = playerWon(results);
        if(playerWonVar && playerWonVar != "Tie") {
            playerWinCount++;
        } else if(!playerWonVar) {
            computerWinCount++;
        }
    }

    console.log(`Final Scores:
    Players Points: ${playerWinCount}
    Computers Points: ${computerWinCount}`);
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

game();