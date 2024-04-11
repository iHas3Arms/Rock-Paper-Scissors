let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoiceNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomChoiceNum];
    return computerChoice;
}