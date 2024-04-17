let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");
let allButtons = [buttonRock, buttonPaper, buttonScissors];

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("cpu-score");
let gameOver = false;

let output = document.getElementById("output");

let choices = ["rock", "paper", "scissors"];
let amountOfRounds = 5;

buttonRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

buttonPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

buttonScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    let randomChoiceNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomChoiceNum];
    return computerChoice;
}

// function getUserChoice() {
//     let userChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

//     const checkInList = (choice) => choice === userChoice;

//     if (!choices.some(checkInList)) return getComputerChoice();
//     return userChoice;
// }

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

    if (gameOver) {
        computerScore.textContent = "0";
        playerScore.textContent = "0";
        output.style.transform = "scale(1)";
        gameOver = false;
    }

    if (result === 0) {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        output.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        checkGameOver();
        // console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    } else if (result === 1) {
        output.textContent = `You drew! You both picked ${computerSelection}`;
        // console.log(`You drew! You both picked ${computerSelection}`);
        return playRound(getUserChoice(), getComputerChoice());
    } else if (result === 2) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        output.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        checkGameOver();
        // console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }

}

function checkGameOver() {
    if (parseInt(playerScore.textContent) < 5 && parseInt(computerScore.textContent) < 5) return;
    let winner = 5;
    output.style.transform = "scale(1.25)";
    if (winner === parseInt(playerScore.textContent)) {
        output.textContent = `You win! You got 5 wins!`;
        alert(`You win! You got 5 wins!`);
    } else {
        output.textContent = `You lose! The CPU got 5 wins before you!`;
        alert(`You lose! The CPU got 5 wins before you!`);
    }
    gameOver = true;
}

// function playGame() {
//     console.log("============================================\n============================================")
//     let score = 0;
//     for (i=0;i<amountOfRounds;i++) {
//         score += playRound(getUserChoice(), getComputerChoice());
//         console.log(score);
//     }
//     console.log(`You got a score of ${score} out of ${amountOfRounds}`);
//     askToPlayAgain();
// }

// function askToPlayAgain() {
//     console.log("Would you like to play again?");
//     let userInput = prompt("Would you like to play again? Choose yes or no: ").toLowerCase();
//     if (userInput === "yes") {
//         playGame();
//     } else if (userInput === "no") {
//         console.log("See you next time.");
//         console.log("============================================\n============================================");
//     } else {
//         console.log("Please type either 'yes' or 'no' to the following question.");
//         askToPlayAgain();
//     }
// }

// playGame();