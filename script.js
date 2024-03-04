function myFunction() {
  let userInput = document.querySelector("#userInput")
  let message = document.querySelector("#message")
  message.innerHTML ="Welcome to the game, " + userInput.value +"!"


}


let userScore = 0;
let compScore = 0;
let roundsPlayed = 0; // Initialize roundsPlayed

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to display a random winning reaction
function displayRandomWinReaction() {
  const randomWinReaction = winReactions[Math.floor(Math.random() * winReactions.length)];
  document.getElementById('winReactions').innerText = randomWinReaction;
}

// Function to display a random losing reaction
function displayRandomLoseReaction() {
  const randomLoseReaction = loseReactions[Math.floor(Math.random() * loseReactions.length)];
  document.getElementById('loseReactions').innerText = randomLoseReaction;
}

// Function to handle a round of the game
function playRound(userChoice) {
  if (roundsPlayed < 5) {
      // Display user's choice image
      document.getElementById('userHolder').src = "image/" + userChoice + ".jpg";

      // Get computer's choice
      const computerChoice = getComputerChoice();

      // Display computer's choice image
      document.getElementById("compHolder").src = "image/" + computerChoice + ".jpg";

      // Compare choices and display result
      if (userChoice === computerChoice) {
          document.getElementById("result").innerText = "It's a tie!";
      } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                 (userChoice === 'paper' && computerChoice === 'rock') ||
                 (userChoice === 'scissors' && computerChoice === 'paper')) {
          document.getElementById("result").innerText = "You Win!";
          userScore++; // add user's score
          displayRandomWinReaction(); // Display a random win reaction
      } else {
          document.getElementById("result").innerText = "Comp wins!";
          compScore++; // add computer's score
          displayRandomLoseReaction(); 

      // Update scores on the scoreboard
      document.getElementById("playerWins").innerText = userScore;
      document.getElementById("computerWins").innerText = compScore;

      roundsPlayed++; // add roundsPlayed after each round
  }
}
}


// reset button 
function resetPage() {
  location.reload(); // Reloads the current page
}




// Reactions for winning
const winReactions = [
  "Great job! You're a Winner!!!",
  "Congratulations! You're a Scissor!",
  "You're a ROCK ! Keep it up!",
  "Paper is yours! Well done!",
  "Amazing win! Keep the streak going!"
];

// Reactions for losing
const loseReactions = [
  "You suck so bad!",
  "Don't worry, you'll never win!",
  "It happens to the dumbest of us. Keep trying!",
  "Keep your head down! There's never another chance!",
  "Learn from this and never come back!"
];


/* let userScore = 0
let compScore = 0
let totalRounds = 5
let gamesPlayed = 0









function playRound(playerChoice) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  if (playerChoice === computerChoice) {
    return " it's a tie!"
  }
  if(computerChoice === "rock") {
document.getElementById("getComputerChoice").scr = "image/rock.jpg";
  }
  if(computerChoice === "paper") {
    document.getElementById("getComputerChoice").scr = "image/paper.jpg";
  }
  if(computerChoice === "scissors") {
    document.getElementById("getComputerChoice").scr = "image/scissors.jpg";
  }

  else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    return " You Win !"
  }
  else {
    return "Computer wins!";
  }

}
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      image = "image/rock.jpg";
      return 'rock';
    case 1:
      image = "image/paper.jpg"
      return 'paper';
    case 2:
      image = "image/scissors.jpg"
      return 'scissors';
  }
}







function myFunction() {
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");
  message.innerHTML = " Welcome," + userInput.value + "!";
}
playGame()
*/