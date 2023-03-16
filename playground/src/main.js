/*
  CommonJS modules P1
  > pic: modules

  - create folder functions/add.js  + subtract.js
    > using module.exports
  - run: node main.js

*/

const add = require('./functions/add')
const subtract = require('./functions/subtract')

console.log(add(2, 3))
console.log(subtract(2, 3))
