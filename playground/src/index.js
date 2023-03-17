/*
  Loading images in JS P1
  - there are some loaders that we need to install for webpack to know how it works 
  - but there are some built in loaders as well


  Steps: 
  - create img tag in html file
  - go to index.js and import 
    > err
    > fix in next lecture

*/

import _ from 'lodash'
import './index.scss'
import './clearButton'

// (***)
import logo from './assets/logo.png'
const logo = document.querySelector('#logo')
logo.src = logo

const btn = document.querySelector('#btn')
btn.classList.add('btn')
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
