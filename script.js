// Create an Array with the strings: rock, paper and scissors
const game = ["rock", "paper", "scissors"];
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const gameResults = document.querySelector("#gameResults");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playScore = 0;
let computerScore = 0;
let limit = 5;

function playGame(playerOption) {
  const computerOption = game[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerOption === computerOption) {
    result = "It's a Tie!";
  } else {
    switch (playerOption) {
      case "rock":
        result = computerOption === "scissors" ? "You Win!" : "You Lose";
        break;
      case "paper":
        result = computerOption === "rock" ? "You Win!" : "You Lose";
        break;
      case "scissors":
        result = computerOption === "paper" ? "You Win!" : "You Lose";
        break;
    }
  }
  playerChoice.textContent = `Player: ${playerOption}`;
  computerChoice.textContent = `Computer: ${computerOption}`;
  gameResults.textContent = result;
  gameResults.classList.remove("greenTex", "orangeText");

  switch (result) {
    case "You Win!":
      gameResults.classList.add("greenTex");
      playScore++;
      playerScoreDisplay.textContent = playScore;
      break;
    case "You Lose":
      gameResults.classList.add("orangeText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
  if (playScore === limit || computerScore === limit) {
    endGame();
  }
}

function endGame() {
  if (playScore === computerScore) {
    gameResults.textContent = "It's a Tie!";
  } else if (playScore > computerScore) {
    gameResults.textContent = "You win the game!";
  } else {
    gameResults.textContent = "computer win the game!";
  }
  playScore = 0;
  computerScore = 0;
}
