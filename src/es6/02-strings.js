// TEMPLATE LITERALS (usando comillas `francesas`)
// Antes
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);
// Ahora
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// MULTILINE
// Antes
let lorem = 'esto es un string \n ' + 'esto es otro string';
console.log(lorem);
//Ahora
let lorem2 = `esto es un string
esto es otro string`;
console.log(lorem2);