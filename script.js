

function getComputerChoice(){
    let randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "Rock";
    } else if (randomNumber < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
            return `You lose! ${computerSelection} beats ${playerSelection}`; 
        }
 }

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));