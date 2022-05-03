// 1부터 100까지 숫자 중 짝수만 출력.
const evenNumber = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`짝수: ${i}`)
    }
  }
}
evenNumber()

// 2부터 100까지 숫자 중 홀수만 출력.
const oddNumber = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
      console.log(`홀수: ${i}`)
    }
  }
}

oddNumber()

// 구구단 2단부터 순서대로 출력하기
const multiplicationTable = () => {
  document.write('<h3>구구단 2단부터 9단까지 순서대로 출력하기</h3><br/>')
  for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`)
    document.write(`<h4>${i}단</h4>`)

    for (let j = 1; j <= 9; j++) {
      console.log(`
        ${i} x ${j} = ${i * j}
      `)
      document.write(`
      ${i} x ${j} = ${i * j}<br/><br/>
      `)
    }
  }
  document.write('<hr/>')
}

// multiplicationTable()

// 구구단 2단부터 9단까지 세 개씩 화면에 출력하기
const threeMultiplicationTable = () => {
  document.write(`<h4>구구단 2단부터 9단까지 세 개씩 화면에 출력하기</h4><br/>`)
  for (let i = 1; i <= 9; i++) {
    for (let j = 2; j <= 9; j++) {
      document.write(j + 'x' + i + '=' + '\t')
    }
  }
}

threeMultiplicationTable()
