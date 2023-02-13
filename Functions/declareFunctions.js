
// function declarations
function getReminder() {
    console.log('Water the plants.');
  }
  
function greetInSpanish() {
    console.log('Buenas tardes.');
}

// calling the function
getReminder();

// function declaration with parameters
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
  
sayThanks('Cole');

/**
 * 
 * @param {String} name name of a person
 */
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

/**
 * A list of groceries 
 * @param {*} item1 
 * @param {*} item2 
 * @param {*} item3 
 */
function makeShoppingList(item1='milk', item2='bread', item3='eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
  
/**
 * 
 * @param {number} rows 
 * @param {number} columns 
 * @returns monitor number
 */
function monitorCount(rows, columns) {
    let monitorNumber = rows * columns;
    return monitorNumber;
  }
  
  // number of monitors
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

// Making use of helper functions
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5,4);
console.log(totalCost);