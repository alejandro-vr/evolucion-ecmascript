// Optional chining '?' when inner object maybe don't exist
// Object with objects (json)
const users = {
  oscar: {
    country: 'MX'
  },
  ana: {
    country: 'CO'
  }
}

console.log(users.oscar.country);
console.log(users.oscar.age);

// Use optional chaining '?' and don't use it
console.log(users.carlos?.country); //return undefined
console.log(users.carlos.country); //return error and break workflow