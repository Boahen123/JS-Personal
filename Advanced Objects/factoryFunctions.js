/**
 * 
 * @param {string} name name of the monster
 * @param {number} age age of the monster
 * @param {string} energySource monster's source of enegry
 * @param {string} catchPhrase monster's catchPhrase
 */
// A class or a factory Function
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
      name: name,
      age: age,
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      }
    }
};
  
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare();

// property-value shorthand
// const monsterFactory = (name, age, energySource, catchPhrase) => {
//     return {
//       name,
//       age,
//       energySource,
//       scare() {
//         console.log(catchPhrase);
//       }
//     }
// };

