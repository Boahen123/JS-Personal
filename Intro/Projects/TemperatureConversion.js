// The forecast today is 293 K(kelvin)
const kelvin = 0;

// Converting the kelvin temperature to Celsius
let celsius = kelvin - 273;

// Converting to fahrenheit
let fahrenheit = celsius*(9/5) + 32;

// Rounding the fahrenheit value
fahrenheit = Math.floor(fahrenheit);

// logging the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert celsius to the Newton scale
let newton = celsius * (33/100);
// rounding the newton value
newton = Math.floor(newton);

// logging the temperature on the newton's scale
console.log(`The temperature is ${newton} degrees newton.`);
