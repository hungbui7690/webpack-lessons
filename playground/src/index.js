/*
  Adding webpack configuration
  > npm init -y
  > npm install --save-dev webpack webpack-cli
  > npm install lodash

  - create webpack.config.js + setup
  - config build command in package.json
  - npm run build
    > create folder dist/bundle.js
  - point javascript file to bundle.js in html file

  (***)
  => now, in network tab > instead of loading index.js + lodash > it just loads bundle.js
  => but the button click does not work > next lesson


  (***)
  > "build": "webpack --config webpack.config.js"
    > using config file === webpack.config.js
  > "build": "webpack --config webpack.config.js --mode development"
    > code will be easy to read 
*/

// (***) remove import lodash from html file
import _ from 'lodash'

function buttonClick() {
  const element = document.querySelector('#header')
  element.textContent = 'Code is updated!!!'

  const listItems = ['apple', 'orange', 'banana']
  const ul = document.querySelector('#shopping-list')

  _.forEach(listItems, (item) => {
    const newEl = document.createElement('li')
    newEl.textContent = item
    ul.append(newEl)
  })
}
