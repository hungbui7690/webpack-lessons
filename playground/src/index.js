/*
  CSS loaders P2
  - create clearButton.js
  - import
  - add button css to both buttons


*/

import _ from 'lodash'
import './index.css'
import './clearButton' // (***)

const btn = document.querySelector('#btn')

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
