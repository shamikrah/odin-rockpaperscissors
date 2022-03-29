let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let playerScore = 0;
let computerScore = 0.

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return rock;
    }
    else if (choice == 1) {
        return paper;
    }
    else {
        return scissors;
    }
}

function playerPlay() {
    return prompt("Type rock, paper, or scissors:");
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatPlayerSelection(playerSelection);
    if (playerSelection == computerSelection) {
        return "Tie!";
    }
    else if (playerSelection == rock && computerSelection == scissors) {
        playerScore++;
        return "You win! Rock beats paper!"
    }
    else if (playerSelection == rock && computerSelection == paper) {
        computerScore++;
        return "You lost! Paper beats rock!"
    }
    else if (playerSelection == scissors && computerSelection == paper) {
        playerScore++;
        return "You win! Scissors beats paper!"
        
    }
    else if (playerSelection == scissors && computerSelection == rock) {
        computerScore++;
        return "You lose! Rock beats scissors!"
        
    }
    else if (playerSelection == paper && computerSelection == scissors) {
        computerScore++;
        return "You lose! Scissors beats paper!"
        
    }
    else if (playerSelection == paper && computerSelection == rock) {
        playerScore++;
        return "You win! Paper beats rock!"
        
    }
    else {
        return "What the heck did you do my g"
    }
}

function formatPlayerSelection(playerSelection) {
    return playerSelection.toLowerCase();
}
function showResults(i) {
    console.log(`Current score for round ${i+1}: Player - ${playerScore} Computer - ${computerScore}`);
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
        showResults(i);
    }
    if (playerScore > computerScore) {
        console.log("Player is victorious!");
    } else if (computerScore > playerScore) {
        console.log("Computer is victorious!");
    } else {
        console.log("It's a draw!");
    }
}

game();