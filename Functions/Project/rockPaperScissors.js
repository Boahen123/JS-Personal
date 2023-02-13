console.log('hi');

 /* Taking the user input and making it lowercase. */
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'bomb')
    return userInput;
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Please choose a valid option.');
  }
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You won!';
  }
  if (userChoice === computerChoice) 
  {
    return 'The game was a tie';
  }

  if (userChoice === 'rock') 
  {
    if (computerChoice === 'paper') 
    {
      return 'Computer won!';
    }
    else 
    {
      return 'You won!';
    }
  }

if (userChoice === 'paper') 
{
  if (computerChoice === 'rock') 
  {
    return 'You won!';
  }
  else 
  {
    return 'Computer won!';
  }
}

if (userChoice === 'scissors') 
{
  if (computerChoice === 'rock') 
  {
    return 'Computer won!';
  }
  else 
  {
    return 'You won!';
  }
}
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}.`);
  console.log(`Computer chose ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();