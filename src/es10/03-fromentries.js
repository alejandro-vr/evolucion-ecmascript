// Method 'fromEntries()' for parse arrays to objects
const array = [["name", "Oscar"], ["Age", 34]];
const entries = new Map(array);
console.log(array);
console.log(entries);
console.log(Object.fromEntries(entries));