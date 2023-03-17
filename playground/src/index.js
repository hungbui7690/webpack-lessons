/*
  Loading images in JS P3
  - we can add something in config



*/

import _ from 'lodash'
import './index.scss'
import './clearButton'
import webpackLogo from './assets/logo.png'

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
