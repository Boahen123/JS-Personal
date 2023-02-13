// Using the var keyword
var myName = 'Arya';
console.log(myName);

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// Using the let keyword can also ensure that variables exist in a local scope
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito


let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// Variables with the constant keyword
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';