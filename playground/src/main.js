/*
  ES6 Modules P2
  - if we don't want to add type=module + need to have extension when import > use webpack config 
    > bts, in react, webpack does this for us, so we don't have to have the extension .js

  (***)
  - if we don't want to run: npm run build 
    > we can use: npx webpack --config webpack.config.js --mode development
  - then we can run: node dist/bundle.js

*/

import {
  add as addNumbers, // alias in es6
  addAndMultiply,
  subtract,
} from './functions/index.js'

console.log(addNumbers(2, 3))
console.log(subtract(2, 3))
console.log(addAndMultiply(2, 3, 4))
