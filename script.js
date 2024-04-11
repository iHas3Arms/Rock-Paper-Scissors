let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoiceNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomChoiceNum];
    return computerChoice;
}

function playRound(computerSelection, playerSelection) {
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