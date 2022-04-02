const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let playerScore = 0;
let computerScore = 0;
let gameEnd = false;

const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', playerPlay));

const winner = document.querySelector('.winner');
const score = document.querySelector('.score');

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
    game();
    computerSelection = computerPlay();
    if (!(gameEnd)) {
        if (this.classList == rock) {
            console.log(rock);
            playRound(rock, computerSelection)
        }
        else if (this.classList == paper) {
            console.log(paper);
            playRound(paper, computerSelection);
        }
        else if (this.classList == scissors) {
            console.log(scissors);
            playRound(rock, computerSelection);
        }
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winner.textContent = "Tie!";
    }
    else if (playerSelection == rock && computerSelection == scissors) {
        playerScore++;
        winner.textContent = "You win! Rock beats paper!"
    }
    else if (playerSelection == rock && computerSelection == paper) {
        computerScore++;
        winner.textContent = "You lost! Paper beats rock!";
    }
    else if (playerSelection == scissors && computerSelection == paper) {
        playerScore++;
        winner.textContent = "You win! Scissors beats paper!";      
    }
    else if (playerSelection == scissors && computerSelection == rock) {
        computerScore++;
        winner.textContent = "You lose! Rock beats scissors!";   
    }
    else if (playerSelection == paper && computerSelection == scissors) {
        computerScore++;
        winner.textContent = "You lose! Scissors beats paper!";       
    }
    else if (playerSelection == paper && computerSelection == rock) {
        playerScore++;
        winner.textContent = "You win! Paper beats rock!";
    }
}

function showScore() {
    score.textContent = `Current score: Player - ${playerScore} Computer - ${computerScore}`;
}

function showWinner() {
    if (playerScore > computerScore) {
        winner.textContent = "Player is victorious!";
    } else {
        winner.textContent = "Computer is victorious!";
    }
    gameEnd = true;
}

function game() {
    showScore();
    if ((playerScore == 5) || (computerScore == 5)) {
        showWinner();
    }
}