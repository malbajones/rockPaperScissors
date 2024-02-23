// Create an Array with the strings: rock, paper and scissors
const game = ["rock", "paper", "scissors"];
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const playerSelection = document.querySelectorA("button");

//Initialize variables for points counter:
//a = user, b = computer, and i = while loop counter.

let a = 0;
let b = 0;

//Function to randomly select computer's choice
const getComputerChoice = () => {
  randomChoice = game[Math.floor(Math.random() * game.length)];
  return randomChoice;
};

//Function to play the game with two parameters: user's choice and
//computer's choice
const playGame = (playerSelection, computerSelection) => {
  //Check for a tie
  if (playerSelection === computerSelection) {
    console.log("Tie");
    a++;
    b++;
  } else if (
    //Check for user wins
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("User is the Winner");
    a++;
  } else {
    // Computer wins
    console.log("Computer is the winner");
    b++;
  }
  player.textContent = "User points: " + a;
  computer.textContent = " Computer points: " + b;
  console.log("User points: " + a + " Computer points: " + b);
};

// Function to play the game when a button is clicked
function play(playerChoice) {
  const computer = getComputerChoice(); // Get computer's choice
  playGame(playerChoice, computer); // Play the game with the player's choice and computer's choice
}
