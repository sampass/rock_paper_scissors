function randomNum(min = 1, max = 4) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + 1;
    return rand;
}

function computerPlay(x) {
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

console.log(computerPlay());

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
        result = "Rock beats scissors. You have won!"
        return result;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        result = "Rock beats scissors. You have lost!"
        return result;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        result = "Paper beats rock. You have won!"
        return result;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        result = "Paper beats rock. You have lost!"
        return result;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        result = "Scissors beats paper. You have won!"
        return result;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        result = "Scissors beats paper. You have lost!"
        return result;
    }
}
console.log(singleRound());