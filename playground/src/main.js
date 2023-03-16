/*
  CommonJS modules P3
  - create index.js
    > avoid import multiple lines in main.js

*/

// (***) alias
const { add: addNumbers, addAndMultiply, subtract } = require('./functions')

// (***) in case we have the same function in main.js > we can use alias
function add() {}

console.log(addNumbers(2, 3))
console.log(subtract(2, 3))
console.log(addAndMultiply(2, 3, 4)) // 20
