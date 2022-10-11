let playerWinNum = 0;
let computerWinNum = 0;
let drawScore = 0;
const playerWonRound = "You win this round!";
const computerWonRound = "You lost this round";
const computerWon = "COMPUTER WINS!";
const playerWon = "YOU WIN!";
const draw = "IT'S A DRAW";
const tieRound = "It's a tie this round";

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  if (num === 1) {
    return "rock";
  }
  if (num === 2) {
    return "paper";
  }
  if (num === 3) {
    return "scissors";
  }
}

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

function playerWin() {
  ++playerWinNum;
  playerScore.innerHTML = "Your Score is: " + playerWinNum;
}

function computerWin() {
  ++computerWinNum;
  computerScore.innerHTML = "Computer Score is: " + computerWinNum;
}

function tieWin() {
  drawScore++;
  tieText.innerHTML = "Tie Rounds: " + drawScore;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tieWin();
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerWin();
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWin();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWin();
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerWin();
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerWin();
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWin();
  }

  if (playerWinNum === 5) {
    alert("You won!");
    reset();
  }

  if (computerWinNum === 5) {
    alert("Sorry you lost");
    reset();
  }
}

function reset() {
  playerWinNum = 0;
  computerWinNum = 0;
  drawScore = 0;
  playerScore.innerHTML = "Your Score is: 0";
  computerScore.innerHTML = "The computer Score is : 0";
  tieText.innerHTML = "Tie Rounds: 0";
}
