const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
  });
  
  const numbers = [1, 2, 3, 4, 5];
  
  const squareNumbers = numbers.map(number => {
    return number * number;
  });
  
  console.log(squareNumbers);
  
  const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
  
  const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
  });
  
console.log(onlyNumbers);
  
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];


// Using the map() iter method

const secretMessage = animals.map(element => {return element[0];});


// Making use of offindIndex
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(element => { return element / 100; });

// Making use of the filter() function 
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => { return word.length > 7; });

// Using the reduce method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue)=> { console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;}, 10);

console.log(newSum);

// Using several iterator methods
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce
((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

