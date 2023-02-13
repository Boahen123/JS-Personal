// Using for loops

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}
  
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}
  
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i=0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
} 

// Exploring nested loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

// Exploring nested loops
let bobsFollowers = ['kofi', 'ama', 'efua', 'esi'];

let tinasFollowers = ['kofi', 'jane', 'esi'];
let mutualFollowers = [];

for (let i=0; i < bobsFollowers.length; i++) {
  for (let j=0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}