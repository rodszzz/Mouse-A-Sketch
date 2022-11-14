const container = document.querySelector('.container')

// create 16x16 grid layout
// 256 is 16x16 just so you know

// to make "choosable"
// button input get a number
// multiply number by self
// just put result on for loop
// reuse loop changing values
for (let i = 1; i < 257; i++) {
  let square = document.createElement('div')
  square.className = 'square'
  // square.innerText = `${i}`
  container.appendChild(square)
  square.addEventListener('mouseenter', function (e) {
    e.target.style.background = '#e3e6eb'
    e.target.style.color = '#e3e6eb'
  })
}
