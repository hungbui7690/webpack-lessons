/*
  SCSS Loaders
  - rename both css files to scss
    > after build, every works fine 
    
  - clearButton.scss: use scss features > variables
    > build == err

  > we need to install:
    + instructor: npm i --save-dev scss-loader sass > not work 
    + we need to install one more package: 
      > npm install sass-loader

  > then config 
  
  (***) https://regexr.com/
  - /.css/g === index.css === index.scss
  - /\.(css)/g === index.css !== index.scss
  > pic


  > in the config > we define the rules for css and scss > work on both: if we change the name from index.scss to css > it will work normally

  (***) the problem with this setup is that when we inspect, we don't see the style of scss in the <head>

*/

import _ from 'lodash'

import './index.scss'
import './clearButton'

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
