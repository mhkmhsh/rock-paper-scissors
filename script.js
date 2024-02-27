let nameDisplayed = prompt('please enter a username ( ex: rock master) ')

let userName = `${nameDisplayed}`

nameDisplay.innerHTML = `<h1>${userName}</h1>`

const rockBTN = document.getElementById("rock");
const paperBTN = document.getElementById("paper");
const scissorsBTN = document.getElementById("scissors");

let playerWins = 0;
let computerWins = 0;


options.getElementById.addEventListener("click", function()) {
  if( playerChoice === computerChoice) {
return " it's a tie!"
  }
  else if  ((userChoice === 'rockBTN' && computerChoice === 'scissorsBTN') ||
  (userChoice === 'paperBTN' && computerChoice === 'rockBTN') ||
  (userChoice === 'scissorsBTN' && computerChoice === 'paperBTN')){
    return " You Win !"
  }
else{
  return "Computer wins!";
}

  }
}