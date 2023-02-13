// Codecademy’s annual race is just around the corner!
// This year, we have a lot of participants.You have been hired to write a
// program that will register runners for the race and give them instructions on race day.

let raceNumber = Math.floor(Math.random() * 1000);

earlyRegistration = false;

runnerAge = 16;

if (runnerAge > 18 && earlyRegistration) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegistration) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
}

else if (runnerAge > 18 && !earlyRegistration) {
  console.log(`You will race at 11:30 am. Your race number is ${raceNumber}.`);
}

else if (runnerAge < 18) {
    console.log('Youth registrants run at 12:30 pm.');
  }
  
  else {
    console.log('Go to the registration desk.')
  }