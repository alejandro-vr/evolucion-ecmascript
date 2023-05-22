// Check if null with nullish '??' and assign 1 if false or 5 if true
let anohtherNumber = 1;
let validate = anohtherNumber ?? 5; // Assign 1 cause notnull
console.log(validate);

anohtherNumber = null;
validate = anohtherNumber ?? 5; // Assign 5 cause null
console.log(validate);