let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
const playerWonRound = "You win this round!";
const computerWonRound = "You lost this round";
const computerWon = "COMPUTER WINS!";
const playerWon = "YOU WIN!";
const draw = "IT'S A DRAW"
const tieRound = "It's a tie!";

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return tieRound;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerWonRound;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerWonRound;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return playerWonRound;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return computerWonRound;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return computerWonRound;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return playerWonRound;
  }
}


function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose your weapon: ").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("computer choice: " + computerSelection);
    console.log("player choice: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    if (playRound(playerSelection, computerSelection) === playerWonRound) {
      playerScore++;
    }
    if (playRound(playerSelection, computerSelection) === computerWonRound) {
      computerScore++;
    }
    if (playRound(playerSelection, computerSelection) === tieRound) {
      drawScore++;
    }

    console.log("player score: " + playerScore);
    console.log("computer score :" + computerScore);
    console.log("draws :" + drawScore);
  }
  if (computerScore === playerScore) {
    console.log(draw);
  }
  else if (computerScore > playerScore) {
    console.log(computerWon);
  }
  else if (playerScore > computerScore) {
    console.log(playerWon);
  }
  
}

game();
