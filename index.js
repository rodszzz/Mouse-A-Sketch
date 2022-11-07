const container = document.querySelector('.container')

for (let i = 1; i < 257; i++) {
  let square = document.createElement('div')
  square.className = 'square'
  square.innerText = `${i}`
  container.appendChild(square)
  square.addEventListener('mouseenter', function (e) {
    e.target.style.background = '#e3e6eb'
    e.target.style.color = '#e3e6eb'
  })
}
