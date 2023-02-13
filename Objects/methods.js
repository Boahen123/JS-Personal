const alienShip = {
    invade: function () { 
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};
  
// alternative way to declare methods in ES6

// const alienShip = {
//     invade () {
//       console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
//     }
//   };

// Invoking an object method
alienShip.invade()


// Functions that modify an objects methods
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  const greenEnergy = (obj) => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  const remotelyDisable = (obj) => {
    obj['disabled'] = true;
  }
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship);