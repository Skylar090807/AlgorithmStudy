/*
  1-AlgorithmStudy.js 코드를 for문 <-> while문으로,
  if문 <-> switch문으로 바꾼다.
*/

// 1부터 100까지 숫자 짝수 홀수 구분하여 출력.
const evenOddNumber = () => {
  let i = 1
  while (i <= 100) {
    switch (i % 2 === 0) {
      case true:
        console.log(`짝수: ${i}`)
        break
      case false:
        console.log(`홀수: ${i}`)
        break
    }
    i++
  }
}

evenOddNumber()

// 구구단 2단부터 9단까지 순서대로 출력하기
const multiplicationTable = () => {
  document.write('<h3>구구단 2단부터 9단까지 순서대로 출력하기</h3><br/>')
  document.write('<pre>')
  let i = 1
  while (i < 9) {
    i++
    let j = 1
    while (j < 10) {
      document.write(`${i} x ${j} = ${i * j} \n`)
      j++
    }
    document.write('\n')
  }

  document.write('<pre/>')
  document.write('<hr/>')
}

multiplicationTable()

// while문 세 개로 2단부터 순서대로 출력하기
const multiplicationTable2 = () => {
  document.write('<h3>중첩 while문 세 개로 2단부터 9단까지 순서대로 출력하기<h3/>')
  document.write('<pre>')
  let i = 2
  while (i <= 2) {
    let j = 0
    while (j <= 7) {
      let k = 1
      while (k <= 9) {
        document.write(`${i + j} x ${k} = ${(i + j) * k}\n`)
        k++
      }
      j++
      document.write('\n')
    }
    i++
  }
  document.write('<pre/>')
  document.write('<hr/>')
}

multiplicationTable2()

// 구구단 2단부터 9단까지 세 단씩 출력하기
const threeMultiplicationTable = () => {
  document.write(`<h3>구구단 2단부터 9단까지 세 단씩 출력하기<h3/>`)
  document.write('<pre>')
  let i = 1
  while (i <= 3) {
    let j = 1
    while (j <= 9) {
      let k = i * 3 - 2
      while (k <= i * 3) {
        document.write(`${k} x ${j} = ${k * j}\t`)
        k++
      }
      j++
      document.write('\n')
    }
    i++
    document.write('\n')
  }
  document.write('<pre/>')
  document.write('<hr/>')
}

threeMultiplicationTable()

// 피보나치 수열
const FibonacciNumber = (n) => {
  document.write(`<h3>피보나치 수열</h3>`)
  document.write(`<pre>`)
  let preNumber = 0
  let nextNumber = 1
  let result = 0
  let i = 1
  while (i < n) {
    result = preNumber + nextNumber
    preNumber = nextNumber
    nextNumber = result
    document.write(`피보나치 수열: ${result}\n`)
    i++
  }
  document.write(`피보나치 수열 결과: ${result}`)
  document.write(`<pre/>`)
  document.write(`<hr/>`)
}
FibonacciNumber(7)

// 왼쪽 별 찍기
const leftStar = () => {
  document.write('<h3>왼쪽 별 찍기<h3/>')
  document.write('<pre>')
  let i = 0
  while (i < 3) {
    let j = 0
    while (j <= i) {
      document.write('⭐️')
      j++
    }
    i++
    document.write('\n')
  }
  document.write('<pre/>')
  document.write('<hr/>')
}

leftStar()

// 오른쪽 별 찍기
const rightStar = () => {
  document.write('<h3>오른쪽 별 찍기<h3/>')
  document.write('<pre>')
  let i = 0
  while (i < 3) {
    let j = 2
    let k = 0
    while (j > i) {
      document.write('🟣')
      j--
    }
    while (k <= i) {
      document.write('⭐️')
      k++
    }
    i++
    document.write('\n')
  }
  document.write('<pre/>')
  document.write('<hr/>')
}

rightStar()

// 정삼각형 별 찍기
const triangleStar = () => {
  document.write('<h3>정삼각형 별 찍기</h3>')
  document.write('<pre>')
  let i = 0
  while (i < 3) {
    let j = 2
    let k = 0
    let l = 0
    while (j > i) {
      document.write('🟣')
      j--
    }
    while (k <= i) {
      document.write('⭐️')
      k++
    }
    while (l <= i - 1) {
      document.write('☆')
      l++
    }
    i++
    document.write('\n')
  }
  document.write('<pre/>')
  document.write('<hr/>')
}

triangleStar()

// 왼쪽 역삼각형 별 찍기
const leftInvertedTriangle = () => {
  document.write(`<h3>왼쪽 역삼각형 별 찍기</h3>`)
  document.write(`<pre>`)
  let i = 3
  while (i >= 1) {
    let j = 0
    while (j < i) {
      document.write('⭐️')
      j++
    }
    i--
    document.write('\n')
  }
  document.write(`<pre/>`)
  document.write(`<hr/>`)
}

leftInvertedTriangle()

// 오른쪽 역삼각형 별 찍기
const rightInvertedTriangle = () => {
  document.write(`<h3>오른쪽 역삼각형 별 찍기</h3>`)
  document.write(`<pre>`)
  let i = 3
  while (i >= 1) {
    let j = 2
    let k = 0
    while (j >= i) {
      document.write('🟣')
      j--
    }
    while (k < i) {
      document.write('⭐️')
      k++
    }
    i--
    document.write('\n')
  }
  document.write(`<pre/>`)
  document.write(`<hr/>`)
}

rightInvertedTriangle()

// 역정삼각형 별 찍기
const InvertedTriangle = () => {
  document.write(`<h3>역정삼각형 별 찍기</h3>`)
  document.write(`<pre>`)
  let i = 3
  while (i >= 1) {
    let j = i
    let k = i
    let l = i
    while (j <= 2) {
      document.write('🟣')
      j++
    }
    while (k >= 1) {
      document.write('⭐️')
      k--
    }
    while (l >= 2) {
      document.write('☆')
      l--
    }
    i--
    document.write('\n')
  }
  document.write(`<pre/>`)
  document.write(`<hr/>`)
}

InvertedTriangle()

// 다이아몬드 별 찍기
const diamondStar = () => {
  document.write(`<h3>다이아몬드 별 찍기<h3/>`)
  document.write(`<pre>`)
  let i = 1
  while (i <= 3) {
    let j = 2
    let k = 1
    let l = 1
    while (j >= i) {
      document.write('🟣')
      j--
    }
    while (k <= i) {
      document.write('⭐️')
      k++
    }
    while (l <= i - 1) {
      document.write('☆')
      l++
    }
    i++
    document.write('\n')
  }
  let m = 1
  while (m <= 2) {
    let n = 1
    let o = m
    let p = m
    while (n <= m) {
      document.write('🟣')
      n++
    }
    while (o <= 2) {
      document.write('⭐️')
      o++
    }
    while (p <= 1) {
      document.write('☆')
      p++
    }
    m++
    document.write('\n')
  }
  document.write(`<pre/>`)
  document.write(`<hr/>`)
}

diamondStar()

// 배열 정렬
const sortedArray = () => {
  document.write(`<h3>배열의 정렬<h3/>`)

  const randomOriginArray = []
  let i = 1
  while (i <= 10) {
    const randomValue = Math.ceil(Math.random() * 100)
    !randomOriginArray.includes(randomValue) ? randomOriginArray.push(randomValue) : ''
    i++
  }

  document.write(`중복되지 않는 난수 10개: [${randomOriginArray}]\n`)

  const result = [...randomOriginArray]

  let j = 0
  while (j < result.length) {
    let k = j
    while (k < result.length) {
      switch (result[j] > result[k]) {
        case true:
          let temp = result[j]
          result[j] = result[k]
          result[k] = temp
          break
      }
      k++
    }
    j++
  }
  document.write(`난수 오름차순(ascending) 정렬: [${result}]\n`)
}

sortedArray()
