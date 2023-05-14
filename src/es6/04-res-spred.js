// Arrays destructuring "let [a, b] = fruits;"
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

// Object destructuring "let { username, age } = user;"
let user = { username: 'Oscar', age: 34 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);

// spread operator "...person"
let person = { name: 'Maria', age: 21 };
let country = 'CO';

let data = { id: 1, ...person, country};
console.log(data);