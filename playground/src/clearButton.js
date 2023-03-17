const clearBtn = document.createElement('button')
clearBtn.innerHTML = 'Clear'

// (***)
clearBtn.classList.add('btn')

document.body.appendChild(clearBtn)

clearBtn.addEventListener('click', () => {
  console.log('Clicked!!!')
  alert('Clear Button was clicked!!!')
})
