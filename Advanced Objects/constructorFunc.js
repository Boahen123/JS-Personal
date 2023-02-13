/**
 * @brief constructor function
 * @param {string} name name of the monster
 * @param {number} age age of the monster
 * @param {string} energySource monster's source of enegry
 * @param {string} catchPhrase monster's catchPhrase
 */

function monsterFactory(name, age, energySource, catchPhrase) {
    this.name = name;
    this.age = age;
    this.energySource = energySource;
    this.scare = () => {
        console.log(catchPhrase);
    }; 
}

const zeus = new monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
console.log(zeus.name); 
console.log(zeus.age)
