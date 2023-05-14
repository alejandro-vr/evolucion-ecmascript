// Enhaced object literals
// Antes
function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country
  };
}
console.log(newUser('Luis', 30, 'PE'));

//Ahora
function newUser(user, age, country) {
  return {
    user,
    age,
    country
  };
}
console.log(newUser('Clara', 29, 'CH'));