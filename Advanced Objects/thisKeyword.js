// In the example below, the calling object is goat and by using 'this' we’re accessing 
// the goat object itself, and then the dietType property of goat by using property dot notation.

const goat = {
    dietType: 'herbivore',
    makeSound: () => {
      console.log('baaa');
    },
    diet () {
      console.log(this.dietType);
    },
    makingSound() {
        this.makeSound()
    }
  };
   
goat.diet(); 
goat.makingSound();

const robot = {
    'model': '1E78V2',
    'energyLevel': '100',
     provideInfo() {
      return `I am ${this.model} and current energy level is ${this.energyLevel}.`;
    }
};
  
console.log(robot.provideInfo())

// let name_person = prompt("What is your name: ");
// console.log(`Hello ${name_person}`)