// Private methods in class with '#'
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get uAge() {
    return this.age;
  }
  set uAge(age) {
    this.age = age;
  }
  speak() {
    return `Hola`;
  }
  #speak2() {
    return `Esto es privado`;
  }
  greting() {
    return `${this.speak()} mi nombre es ${this.name}`;
  }
}
const andres = new User('Andres', 25);
console.log(andres.name);
console.log(andres.age);
console.log(andres.uAge = 20);
console.log(andres.uAge);

console.log(andres.speak());
console.log(andres.speak2()); // Return err because is private method