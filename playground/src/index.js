/*
  Multiple Entry Bundle P2
  - create webpack.config.js



  
  (***) normally, when we work with react > single page app > just have 1 entry > we don't need to do this > this just works with javascript projects


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
