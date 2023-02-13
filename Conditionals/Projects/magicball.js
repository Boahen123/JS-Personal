// Magic Fortune making use of switch statement


let userName = 'Papa Kofi';

userName? console.log(`Hello ${userName}!`) : console.log(`Hello!`);

let userQuestion = 'Who am I?';
console.log(`${userName} asked ${userQuestion}`);

// Generate integer numbers from 0 to 7
let randomNumber = Math.floor(Math.random()* 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
  eightBall = 'You are one of a kind.';
  break;
    case 1:
  eightBall = 'You are friendly.';
  break;
    case 2:
  eightBall = 'You are good.';
  break;
    case 3:
  eightBall = 'You are wise.';
  break;
    case 4:
  eightBall = 'You are an achiever.';
  break;
    case 5:
  eightBall = 'You are a leader.';
  break;
    case 6:
  eightBall = 'You are gentle.';
  break;
    case 7:
  eightBall = 'You are smart.';
  break;
  default:
  eightBall = "This never executes.";
  break;
}

console.log(eightBall);