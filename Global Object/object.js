// function speak ( line ) {
// console . log (" The " + this . type + " rabbit says '" +
// line + " '") ;
// }
// var whiteRabbit = { type : " white " , speak : speak };
// var fatRabbit = { type: " fat ", speak: speak };

// whiteRabbit . speak (" Oh my ears and whiskers , " +
//     " how late it ' s getting !");

// fatRabbit.speak("oh my days");

// // Using function methods to bind objects

// speak . apply ( fatRabbit , [" Burp !"]) ;
// // → The fat rabbit says ' Burp ! '
// speak . call ({ type : " old "} , " Oh my .") ;
// // → The old rabbit says ' Oh my . '

// var empty = {};
// console . log ( empty . toString ) ;
// // → function toString ()...{}
// console . log ( empty . toString () ) ;
// // → [ object Object ]

// console.log(Object.getPrototypeOf({}) == Object.prototype);

// var protoRabbit = {
// speak : function ( line ) {
//         console.log(" The " + this.type + " rabbit says '" +
//             line + " '");
// }
// };
// var killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = " killer ";
// killerRabbit.speak(" SKREEEE !");

// function Rabbit ( type ) {
//     this.type = type;
//     this.dance =  () => {
//         console.log(" The " + this.type + " rabbit dances a jig .");
//     };
// }
// var killerRabbit = new Rabbit (" killer ") ;
// var blackRabbit = new Rabbit (" black ") ;
// console.log(blackRabbit.type);

// Rabbit . prototype . speak = function ( line ) {
// console . log (" The " + this . type + " rabbit says '" +
// line + " '") ;
// };
// blackRabbit.speak(" Doom ...");

// blackRabbit.dance();

let obj = {};

Object.defineProperty(obj, "name", {
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj.name); // "John"

