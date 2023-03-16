/*
  CommonJS modules P2
  - export multiple functions in a file > add.js
    > to export multiple things > use named export
  

*/

const subtract = require('./functions/subtract')

// (***)
const { add, addAndMultiply } = require('./functions/add')

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(addAndMultiply(2, 3, 4)) // 20
