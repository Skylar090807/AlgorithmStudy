'use strict'

// 진법 변환
// 10진수 -> 2진수 -> 8진수
const convert = (number) => {
  document.write(`<h3>진법 변환. 10진수 -> 2진수 -> 8진수</h3>`)
  let mod = Number
  let convertArray = []

  for (let i = 0; number > 0; i++) {
    mod = number % 2
    number = parseInt(number / 2)
    convertArray.push(mod)
  }

  convertArray.reverse()
  let strArray = convertArray.join('')
  document.write(`10진수에서 2진수로 변환 : ${strArray}<br/>`)

  let octalArray = [...strArray]

  for (let i = 0; octalArray.length % 3 !== 0; i++) {
    octalArray.unshift('0')
  }

  let result = ''
  for (let i = 0; octalArray.length !== 0; i++) {
    let sum = 0
    for (let count = 2; count !== -1; count--) {
      let temp = Number(octalArray.shift())
      sum += Math.pow(2, count) * temp
    }
    result += sum
  }
  document.write(`2진수에서 8진수로 변환 : ${result}`)
}

// 주석 처리는 vanila JavaScript

// const input = document.querySelector('#input')
const input = $('#input')

// input.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') {
//     let number = $('#input').val()
//     convert(number)
//   }
// })

$(document).ready(() => {
  input.on('keypress', (event) => {
    if (event.key === 'Enter') {
      let number = $('#input').val()
      convert(number)
    }
  })
})
