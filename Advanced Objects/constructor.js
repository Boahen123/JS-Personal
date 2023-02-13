
class Person {
  constructor(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw new Error('Age must be a positive number');
    // }
    this._age = value;
  }
}

const person = new Person();
person.age = 25;
console.log(person.age); // Outputs 25

