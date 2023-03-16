/*
  ES6 Modules P1
  - check functions/ 
    
  (***) need to set type=module in package.json + when import: we need to have .js extension

*/

import {
  add as addNumbers,
  addAndMultiply,
  subtract,
} from './functions/index.js'

console.log(addNumbers(2, 3))
console.log(subtract(2, 3))
console.log(addAndMultiply(2, 3, 4))
