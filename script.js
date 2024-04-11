let choices = ["rock", "paper", "scissors"];
let amountOfRounds = 5;

function getComputerChoice() {
    let randomChoiceNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomChoiceNum];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

    const checkInList = (choice) => choice === userChoice;

    if (!choices.some(checkInList)) return getComputerChoice();
    return userChoice;
}

function getRoundResult(playerSelection, computerSelection) {
    let result = 0;
    if (computerSelection === playerSelection) {
        result = 1;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        result = 2;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = 0;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        result = 0;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        result = 2;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        result = 2;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        result = 0;
    }

    return result;
}

function playRound(playerSelection, computerSelection) {
    let result = getRoundResult(playerSelection, computerSelection);

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length);

    if (result === 0) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    } else if (result === 1) {
        console.log(`You drew! You both picked ${computerSelection}`);
        return 0;
    } else if (result === 2) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }

}

function playGame() {
    for (i=0;i<amountOfRounds;i++) {
        playRound(getUserChoice(), getComputerChoice());
    }
}

playGame();