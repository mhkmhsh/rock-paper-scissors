let nameDisplayed = prompt('please enter a username ( ex: rock master) ')

let userName = `${nameDisplayed}`

nameDisplay.innerHTML = `<h1>${userName}</h1>`

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };

  

  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { 
        return userInput;
    } else {
      console.log('Error!');
    }
  }