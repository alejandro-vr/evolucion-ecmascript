// Spread operator used with Objects
const user = { username: 'Carlos', age: 34, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);