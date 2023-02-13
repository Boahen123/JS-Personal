// An object literal with two key-value pairs
let slowership = {
    'Fuel Type': 'diesel',
    color: 'silver'
};
  
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};
  
let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';

let isActive = spaceship1[propName];
  
console.log(isActive);

// Updating an object
let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  

spaceship2.color = 'glorious gold';

spaceship2.numEngines = 6;

delete spaceship2['Secret Mission'];

console.log(spaceship2);