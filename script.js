

function playRound(playerChoice) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  if (playerChoice === computerChoice) {
    return " it's a tie!"
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

var playerWins = 0;
var computerWins = 0;





function myFunction() {
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");
  message.innerHTML = " Welcome," + userInput.value + "!";
}
playGame();