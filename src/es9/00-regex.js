// Regex as one of many uses for regular expresions
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.log(matchers);
console.table(matchers);