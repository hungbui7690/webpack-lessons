/*
  Loading images in JS P2
  - setup config
  - when finish, check dist folder > we can see that image is there with diff name 

*/

import _ from 'lodash'
import './index.scss'
import './clearButton'

// (***)
import webpackLogo from './assets/logo.png'

// (***) we can also add style (check index.scss)
const logo = document.querySelector('#logo')
logo.src = webpackLogo

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
