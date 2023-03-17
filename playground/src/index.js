/*
  CSS loaders P3
  - the problem appears when we create clearButton.css
    > now, both buttons become green
    > if we inspect, we will see the green style tag is right below > higher specificity

  > this is the time when we need to use css-module

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
