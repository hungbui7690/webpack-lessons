/*
  What are plugins
  - pic
    + html webpack plugin: inject all dep directly into html file > we don't have to manually add script tag 
    + environment plugin: dev/production env > help setup env var 
    + html minimizer plugin: make the file smaller for production 
    + mini css extract plugin: last chapter, we have to import index.css into index.js > not good for caching since every time we call that file, we need to extract that css file 
      > this plugin will help to fix it > helps to create bundle.css

//////////////////////////////////////////////

  Using HTML Webpack plugin P1
  - the concept is similar to loaders > we need to install from npm
    > npm install --save-dev html-webpack-plugin 
  - config
  - check dist > create html file without markup
    > fix in next lecture


*/

import _ from 'lodash'
import newArrivalData from './newArrival.json'

function renderItems(itemArr) {
  const cakeContainerEl = document.getElementById('cakesContainer')
  cakeContainerEl.innerHTML = ``
  _.forEach(itemArr, (item) => {
    let cakeEl = document.createElement('div')
    cakeEl.classList.add('cakes-container')
    cakeEl.innerHTML = `
    <img src="./assets/${item.imgName}" />
    <strong>${item.title}</strong>
    <span>${item.price}</span>
    `
    cakeContainerEl.appendChild(cakeEl)
  })
}

document
  .getElementById('categorySelect')
  .addEventListener('change', function (e) {
    const selected = e.target.value
    if (selected === 'all') {
      renderItems(newArrivalData)
    } else {
      let filteredData = _.filter(newArrivalData, function (item) {
        return item.category === selected
      })
      renderItems(filteredData)
    }
  })

renderItems(newArrivalData)
