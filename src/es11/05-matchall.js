// Method matchAll for iterative matching inner strings
const regex = /\b(Apple)+\b()/g;
const fruits = 'Apple, Banana, Kiwi, Apple, Orange, Kiwi, etc.';
for(const match of fruits.matchAll(regex)) {
  console.log(match.index);
  console.log(match);
}