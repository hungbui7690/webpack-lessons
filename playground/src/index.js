/*
  Fixing our button click
  - check bundle.js > we can see from those first lines that webpack create the IIFE (Immediately Invoked Function Expression)
    > it creates it own IIFE function to prevent duplication name
    > IIFE function has its own scope > html code cannot access directly 
      > we cannot call the function directly from HTML > so, we have to select from the javascript


  (***) remember to build every time we change the code
*/

import _ from 'lodash'

// (***)
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
