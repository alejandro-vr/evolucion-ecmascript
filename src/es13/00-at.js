// Use method '.at()' for consult array position
const array = ['one', 'two', 'three', 'four', 'five', 'six'];

console.log("Normal con [i]");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log("Con 'at' e 'i'");
console.log(array.at(0));
console.log(array.at(1));
console.log(array.at(2));

console.log("Normal con '.length -i'");
console.log(array[array.length - 1]);
console.log(array[array.length - 2]);
console.log(array[array.length - 3]);

console.log("Con 'at' y '-i'");
console.log(array.at(-1));
console.log(array.at(-2));
console.log(array.at(-3));