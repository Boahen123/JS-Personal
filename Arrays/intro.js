// Working with arrays
const hobbies = ['Football', 'Basketball', 'History'];
console.log(hobbies);
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]);

// push() method of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('learn DSA', 'sweep');

console.log(chores);

// array methods
chores.join()
chores.unshift()

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

firstThing = groceryList.shift();
// console.log(groceryList); 

groceryList.unshift('popcorn');
// console.log(groceryList);

console.log(groceryList.slice(1,4));

console.log(groceryList.slice())

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);


// let obj = {num: 2};
// /**
//  * "addToThis" is a function that takes three arguments, "a", "b", and "c", and returns the sum of
//  * "this.num" and the three arguments.
//  * @param a - 1
//  * @param b - the value of this
//  * @param c - the context object
//  */
// let addToThis = function(a, b, c) {
//   return this.num + a + b + c;
// };

// // let bound = addToThis.bind(obj);
// // console.log(bound(1, 2, 3));  // 8

// let bound = addToThis.bind(obj);
// console.log(bound(1, 2, 3)); //8

// let obj = {num: 2};
// let addToThis = function() {
//   let sum = this.num;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// };
// console.log(addToThis.apply(obj, [1, 2, 3]));  // 8

let obj = {num:0};

let addToThis = function(...args) {
  let sum = this.num;
  args.forEach(function(arg) {
    sum += arg;
  });
  return sum;
};

const bound = addToThis.bind(obj);
console.log(bound(1, 2, 3)); // 6

let numbers = [1,2,3];
console.log(bound(...numbers)); // 6




