/*
  Fonts loaders P1
  - google fonts > download font > put under assets folder
  - index.css
  - index.js
    > err

*/

import _ from 'lodash'
import './index.css'
import './clearButton'
import webpackLogo from './assets/logo.png'

// (***)
import './assets/fonts/Redressed-Regular.ttf'

const logo = document.querySelector('#logo')
logo.src = webpackLogo

const btn = document.querySelector('#btn')
btn.classList.add('btn')
console.log('abc')

btn.addEventListener('click', () => {
  const element = document.querySelector('#header')
  element.textContent = 'Code is updated!!!'

  // (***)
  element.classList.add(['font'])

  const listItems = ['apple', 'orange', 'banana']
  const ul = document.querySelector('#shopping-list')

  _.forEach(listItems, (item) => {
    const newEl = document.createElement('li')
    newEl.textContent = item
    ul.append(newEl)
  })
})
