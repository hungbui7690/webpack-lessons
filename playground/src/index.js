/*
  Intro
  - js
  - css
  - images
  - fonts

  What
  > pic

/////////////////////////////////

  CSS loaders P1
  - create index.css 
  - use in index.js (not import in html file)

    > now if we build > error
      > fix in config file


  (***) loaders are not built in with webpack > need to install 
  > npm i --save-dev css-loader style-loader
  > style-loader: take the code that is processed by css-loader than load into html 

  > after done, inspect html > style tag

*/

import './index.css'
import _ from 'lodash'

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
