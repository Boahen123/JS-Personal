// Using the destructured assignment

const robot = {
model: '1E78V2',
energyLevel: 100,
functionality: {
    beep: () => {
    console.log('Beep Boop');
    },
    fireLaser() {
    console.log('Pew Pew');
    },
    Goodbye: function () {
        console.log('Goodbye');
    }    
}
};

// const { functionality } = robot;
// functionality.beep();
// robot.functionality.beep(); 
// functionality.fireLaser();

// let { energyLevel } = robot;
// console.log(energyLevel);

// robot.Goodbye