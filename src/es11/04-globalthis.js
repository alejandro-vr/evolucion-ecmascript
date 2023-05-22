// Universal global Object with 'globalThis'
console.log(window); // Return error, window exist in browser
console.log(global); // Return object, global exist in node.js
console.log(self); // Return error, self exist in webworker

// Solution 'globalThis'
console.log(globalThis); // Always return object according context