class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name's ${this.name}!`;
  }
}

module.exports = { Person, };