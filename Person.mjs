class Person {
  constructor(name,age) {
      this._age = age;
      this._name = name;
  }
  get age() {
    return this._age;
  }
  get name() {
    return this._name;
  }
  set age(value) {
    // if (value < 0) {
    //   throw new Error('Age must be a positive number');
    // }
    this._age = value;
  }
}

export default Person;