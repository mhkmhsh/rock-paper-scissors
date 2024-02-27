let nameDisplayed = prompt('please enter a username ( ex: rock master) ')

let userName = `${nameDisplayed}`

nameDisplay.innerHTML = `<h1>${userName}</h1>`

const rockBTN = document.getElementById("rock");
const paperBTN = document.getElementById("paper");
const scissorsBTN = document.getElementById("scissors");

let playerWins = 0;
let computerWins = 0;


function playRound(userChoice) {
  if (playerWins < 10 && computerWins < 10) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    resultParagraph.textContent = result;
    updateScore(result);
  }
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  


function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
 }