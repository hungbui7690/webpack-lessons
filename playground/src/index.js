/*
  CSS loaders P5
  - import style 
    > then use in clearButton.js and index.js

*/

import _ from 'lodash'

// (***)
import style from './index.css'
import './clearButton'

const btn = document.querySelector('#btn')
btn.classList.add([style.btn]) // (***)

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
