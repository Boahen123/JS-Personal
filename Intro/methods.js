/* Making use of methods */
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
const str = '    Remove whitespace   ';
console.log(str.trim());
// the method does not modify the actual string
console.log(str);

// Using the Math object for mathematical computations

console.log(Math.floor(Math.random()*100)); // Prints a random number between 0 and 1
console.log(Math.ceil(43.8));

console.log(Number.isInteger(2017));