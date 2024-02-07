// Create an Array with the strings: rock, paper and scissors
const game = ["rock", "paper", "scissors"];

//Initialize variables for points counter:
//a = user, b = computer, and i = while loop counter.

let i = 0;
let a = 0;
let b = 0;

//Loop to play a five-round game
while (i < 5) {
  //User input obtained using prompt()
  let playerOne = prompt("Please choose one: rock, paper or scissors");
  //Function to randomly select computer's choice
  const getComputerChoice = () => {
    randomChoice = game[Math.floor(Math.random() * game.length)];
    return randomChoice;
  };
  //Variables to store the values of playerOne and computer's choice
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  const playerSelection = playerOne.toLowerCase();
  console.log(playerSelection);
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
    console.log("user points: " + a + "computer points: " + b);
  };
  // Increment the loop counter
  i++;
  //Play the game and store the result
  let gameResult = playGame(computerSelection, playerSelection);
  console.log(gameResult);
}
