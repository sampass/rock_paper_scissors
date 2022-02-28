function randomNum(min = 1, max = 4) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + 1;
    return rand;
}

function computerPlay() {
    let comp = " ";
    if (randomNum() == 1) {
        comp = "rock";
    }
    else if (randomNum() == 2) {
        comp = "scissors";
    }
    else {
        comp = "paper";
    }
    return comp;
}

let playerScore = 0;
let computerScore = 0;
function singleRound(playerSelection , computerSelection) {
    playerSelection = prompt('Rock, Paper, Scissors?');
    computerSelection = computerPlay();
    let result = " ";
  
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        result = "You have tied!";
        return result;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        result = "Rock beats scissors. You have won!";
        playerScore += 1;
        return result;
        return playerScore;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        result = "Rock beats scissors. You have lost!";
        computerScore += 1;
        return result;
        return computerScore;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        result = "Paper beats rock. You have won!";
        playerScore += 1;
        return result;
        return playerScore;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        result = "Paper beats rock. You have lost!";
        computerScore += 1;
        return result;
        return computerScore;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        result = "Scissors beats paper. You have won!";
        playerScore += 1;
        return result;
        return playerScore;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        result = "Scissors beats paper. You have lost!";
        conmputerScore += 1;
        return result;
        return computerScore;
    }
    else {
        result = "You have not entered an appropriate choice.";
        return result;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(singleRound());
        console.log("The score is " + playerScore + "-" + computerScore);
    }
}