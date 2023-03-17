/*
  Automated Reloading Dev Server P1
  - because we use Live Server, it makes the hot reloading for us > but if we open the index.html without live server, every time we make a change, we need to refresh to see the change

  > npm install --save-dev webpack-dev-server

  - webpack.config.js
  - package.json
    > "dev": "webpack serve --mode development --open",

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
