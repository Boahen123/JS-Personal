function monsterFactory(name, age, energySource, catchPhrase) {
    this.name = name;
    this.age = age;
    this.energySource = energySource;
    this.scare = () => {
        console.log(catchPhrase);
    }; 
}

const zeus = new monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');