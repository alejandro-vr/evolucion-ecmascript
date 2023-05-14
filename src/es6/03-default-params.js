// DEFAULT PARAMS
// Antes
function newUser(name, age, country) {
  var name = name || "Alejandro";
  var age = age || 34;
  var country = country || "CO!";
  console.log(name, age, country);
}
newUser();
newUser('David', 15, 'MX!');
// Ahora
function newAdmin(name='Oscar', age=18, country='AR') {
  console.log(name, age, country);
}
newAdmin();
newAdmin('Ana', 28, 'PE!');
