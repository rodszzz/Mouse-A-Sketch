const container = document.querySelector('.container')
// const button = document.querySelector('.button')

// let x = prompt('Input number between 1 and 100, please')
// console.log(x)
const x = 16
container.style.setProperty('--numColumns', x)

for (let i = 0; i < x * x; i++) {
  let square = document.createElement('div')
  square.className = 'square'
  // square.innerText = `${i}`
  container.appendChild(square)
  square.addEventListener('mouseenter', function (e) {
    e.target.style.background = '#e3e6eb'
    e.target.style.color = '#e3e6eb'
  })
}

document.getElementById('button').onclick = function () {
  // this removes all the squares from before to create new ones
  let squareRemove = container.firstElementChild
  while (squareRemove) {
    squareRemove.remove()
    squareRemove = container.firstElementChild
  }

  let x = prompt('Input number between 1 and 100, please')
  // console.log(x)

  container.style.setProperty('--numColumns', x)
  // container.style.setProperty('--numRows', x)

  for (let i = 0; i < x * x; i++) {
    let square = document.createElement('div')
    square.className = 'square'
    // square.innerText = `${i}`
    container.appendChild(square)
    square.addEventListener('mouseenter', function (e) {
      e.target.style.background = '#e3e6eb'
      e.target.style.color = '#e3e6eb'
    })
  }
}

// console.log(x)

// create 16x16 grid layout
// 256 is 16x16 just so you know

// to make "choosable"
// button input get a number
// multiply number by self
// just put result on for loop
// reuse loop changing values

// for (let i = 1; i < 257; i++) {
//   let square = document.createElement('div')
//   square.className = 'square'
//   // square.innerText = `${i}`
//   container.appendChild(square)
//   square.addEventListener('mouseenter', function (e) {
//     e.target.style.background = '#e3e6eb'
//     e.target.style.color = '#e3e6eb'
//   })
// }
