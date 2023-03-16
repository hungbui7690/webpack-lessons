/*
  Basic HTML Javascript Setup P3
  - add ul in html

*/

function buttonClick() {
  const element = document.querySelector('#header')
  element.textContent = 'Code is updated!!!'

  // (***)
  const listItems = ['apple', 'orange', 'banana']
  const ul = document.querySelector('#shopping-list')

  _.forEach(listItems, (item) => {
    const newEl = document.createElement('li')
    newEl.textContent = item
    ul.append(newEl)
  })
}
