// Try catch now don't need 'error' param
// Antes
try {
  hello();
} catch(error) {
  console.log(error);
}

// Opcional ahora
try {
  anotherFunction();
} catch {
  console.log('Esto es un error');
}

// Ideal
try {
  hello();
} catch(error) {
  console.log('Esto es un error');
  console.log(error);
}
