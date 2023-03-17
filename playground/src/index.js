/*
  CSS loaders P6
  - global style
    > index.css
    > clearButton.js
    > index.js

  (***) Learn More: https://github.com/css-modules/css-modules

*/

import _ from 'lodash'

import './index.css' // (***) need to import
import './clearButton'

const btn = document.querySelector('#btn')
btn.classList.add('btn') // (***)
console.log('abc')

btn.addEventListener('click', () => {
  const element = document.querySelector('#header')
  element.textContent = 'Code is updated!!!'

  const listItems = ['apple', 'orange', 'banana']
  const ul = document.querySelector('#shopping-list')

  _.forEach(listItems, (item) => {
    const newEl = document.createElement('li')
    newEl.textContent = item
    ul.append(newEl)
  })
})
