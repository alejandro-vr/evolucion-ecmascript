// NEW CLASS SYNTAX
// Declaration
class User {}
// Instatiation
const newUser = new User();

// Constructor
class User {
  // constructor
  constructor() {
    console.log('Nuevo usuario');
  }
}
const luis = new User();

// Methods
class User {
  // method
  greting() {
    return 'Hello';
  }
}
const oscar = new User();
console.log(oscar.greting());

// This (patern element continer)
class User {
  // constructor
  constructor(name) {
    // this (this User)
    this.name = name;
  }
  // method
  speak() {
    return `Hola`;
  }
  greting() {
    return `${this.speak()} mi nombre es ${this.name}`;
  }
}
const beto = new User('Beto');
console.log(beto.greting());

// Setters and Getters
class User {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Getters & Setters
  get uAge() {
    return this.age;
  }
  set uAge(age) {
    this.age = age;
  }
  // methods
  speak() {
    return `Hola`;
  }
  greting() {
    return `${this.speak()} mi nombre es ${this.name}`;
  }
}
const andres = new User('Andres', 25);
console.log(andres.uAge);
console.log(andres.uAge = 20);