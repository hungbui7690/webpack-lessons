/*
  CSS loaders P4
  - config
    > after config > lost all styles > inspect: we will see the class name has changed

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
