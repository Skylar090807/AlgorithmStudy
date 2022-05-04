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

// 구구단 1단부터 9단까지 세 개씩 화면에 출력하기
// <pre> tag로 감싸주어 \t, \n이 표현되게 한다.
const threeMultiplicationTable = () => {
  document.write(`<h3>구구단 2단부터 9단까지 세 개씩 화면에 출력하기</h3><br/>`)
  document.write('<pre>')
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 9; j++) {
      document.write(`\n`)
      // document.write(`두번째for문 ${j} \t`)
      for (let k = i * 3 - 2; k <= i * 3; k++) {
        // document.write(`세번째for문 ${k} \t`)
        document.write(`${k} x ${j} = ${k * j}\t`)
      }
    }
    document.write(`\n`)
    // document.write(`첫번째for문 ${i}`)
  }
  document.write('</pre>')
  document.write('<hr/>')
}
threeMultiplicationTable()

// 피보나치 수열
const FibonacciNumber = (n) => {
  let preNumber = 0
  let nextNumber = 1
  let result = 0
  for (let i = 1; i < n; i++) {
    result = preNumber + nextNumber
    preNumber = nextNumber
    nextNumber = result
    console.log(`피보나치 수열: ${result}`)
  }
  return console.log(`피보나치 수열 결과: ${result}`)
}

FibonacciNumber(7)

// 왼쪽 별 찍기
const leftStar = () => {
  document.write('<h3>왼쪽 별 찍기</h3>')
  for (let i = 0; i < 3; i++) {
    // document.write(`바깥 for문:${i}`)
    document.write('<br>')
    for (let j = 0; j <= i; j++) {
      // document.write(`안쪽 for문: ${j}`)
      document.write('⭐️')
    }
  }
  document.write('<hr/>')
}

leftStar()

// 오른쪽 별 찍기
const rightStar = () => {
  document.write('<h3>오른쪽 별 찍기</h3>')
  document.write('<pre>')

  for (let i = 0; i < 3; i++) {
    for (let j = 2; j > i; j--) {
      // document.write(`j: ${j}`)
      document.write('🟣')
    }
    for (let k = 0; k <= i; k++) {
      // document.write(`k: ${k}`)
      document.write('⭐️')
    }
    // document.write(`i: ${i}\n`)
    document.write('\n')
  }

  document.write('</pre>')
  document.write('<hr/>')
}

rightStar()

// 정삼각형 별찍기
const triangleStar = () => {
  document.write('<h3>정삼각형 별 찍기</h3>')
  document.write('<pre>')

  for (let i = 0; i < 3; i++) {
    for (let j = 2; j > i; j--) {
      // document.write('j')
      document.write(`🟣`)
      // document.write(' ')
    }
    for (let k = 0; k <= i; k++) {
      // document.write('k')
      document.write('⭐️')
    }
    for (let l = 0; l <= i - 1; l++) {
      // document.write('l')
      document.write('☆')
    }
    // document.write(`i\n`)
    document.write('\n')
  }

  document.write('</pre>')
  document.write('<hr/>')
}

triangleStar()

// 왼쪽 역삼각형 별찍기
const leftInvertedTriangle = () => {
  document.write(`<h3>왼쪽 역삼각형 별 찍기</h3>`)
  document.write('<pre>')
  for (let i = 3; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      // document.write(`j: ${j}`)
      document.write('⭐️')
    }
    // document.write(`i: ${i} \n`)
    document.write(`\n`)
  }
  document.write('</pre>')
  document.write('<hr/>')
}

leftInvertedTriangle()

// 오른쪽 역삼각형 별찍기
const rightInvertedTriangle = () => {
  document.write(`<h3>오른쪽 역삼각형 별 찍기</h3>`)
  document.write(`<pre>`)

  for (let i = 3; i >= 1; i--) {
    for (let j = 2; j >= i; j--) {
      // document.write('j')
      document.write(`🟣`)
    }
    for (let k = 0; k < i; k++) {
      document.write(`⭐️`)
    }
    // document.write(`i\n`)
    document.write(`\n`)
  }

  document.write(`</pre>`)
}

rightInvertedTriangle()
