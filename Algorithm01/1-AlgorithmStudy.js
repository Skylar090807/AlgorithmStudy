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
  document.write(`<hr/>`)
}

rightInvertedTriangle()

//역정삼각형 별 찍기
const InvertedTriangle = () => {
  document.write(`<h3>역정삼각형 별 찍기</h3>`)
  document.write(`<pre>`)
  for (let i = 3; i >= 1; i--) {
    for (let j = i; j <= 2; j++) {
      document.write('🟣')
    }
    for (let k = i; k >= 1; k--) {
      document.write('⭐️')
    }
    for (let l = i; l >= 2; l--) {
      document.write('☆')
    }
    document.write('\n')
  }
  document.write(`</pre>`)
  document.write('<hr/>')
}

InvertedTriangle()

//다이아몬드 별 찍기
const diamondStar = () => {
  document.write(`<h3>다이아몬드 별 찍기</h3>`)
  document.write(`<pre>`)
  for (let i = 1; i <= 3; i++) {
    for (let j = 2; j >= i; j--) {
      document.write('🟣')
    }
    for (let k = 1; k <= i; k++) {
      document.write('⭐️')
    }
    for (let l = 1; l <= i - 1; l++) {
      document.write('☆')
    }
    document.write('\n')
  }
  for (let m = 1; m <= 2; m++) {
    for (let n = 1; n <= m; n++) {
      document.write('🟣')
    }
    for (let o = m; o <= 2; o++) {
      document.write('⭐️')
    }
    for (let p = m; p <= 1; p++) {
      document.write('☆')
    }

    document.write('\n')
  }
  document.write('</pre>')
  document.write('<hr/>')
}

diamondStar()

// 1. 길이가 10인 배열에 중복되지 않는 난수 10개를 발생시켜 대입한다.
// 2. 난수 10개 값을 출력한다.
// 3. 난수 10개를 오름차순 정렬하여 출력한다.
// 4. 난수 10개를 내림차순 정렬하여 출력한다.
// 참조: 난수 10개를 대입한 원본 배열 값은 변경하지 않는다.

const sortedArray = () => {
  document.write('<h3>배열의 정렬</h3>')

  // 1. 중복되지 않는 난수 10개 발생시켜 빈 배열 randomOriginArray에 push.
  const randomOriginArray = []
  for (let i = 1; i <= 10; i++) {
    const randomValue = Math.ceil(Math.random() * 100)
    if (!randomOriginArray.includes(randomValue)) {
      randomOriginArray.push(randomValue)
    }
  }

  // 2. 난수 10개 출력.
  document.write(`randomOriginArray :[${randomOriginArray}]<br/>`)
  console.log(`randomOriginArray :${randomOriginArray}`)

  // result에 randomOriginArray 복사 후 대입.
  const result = [...randomOriginArray]
  console.log(`정렬 전 result:${result}`)

  // 3. 난수 오름차순 정렬 후 출력.
  for (let i = 0; i < result.length; i++) {
    console.log(`바깥 for문 result[i]:${result[i]}`)
    for (let j = i; j < result.length; j++) {
      console.log(`안쪽 for문 result[j]:${result[j]}`)
      if (result[i] > result[j]) {
        // document.write(`비교 result[ i ] : ${result[i]}, result [ j ] : ${result[j]}<br/>`)
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }
  document.write(`randomOriginArray 오름차순(ascending): [${result}]<br/>`)
  console.log(`randomOriginArray 오름차순(ascending): ${result}`)

  // 4. 오름차순 정렬을 내림차순 정렬 후 출력.
  for (let i = 0; i < result.length; i++) {
    console.log(`바깥 for문 result[i]:${result[i]}`)
    for (let j = i; j < result.length; j++) {
      console.log(`안쪽 for문 result[j]:${result[j]}`)
      if (result[i] < result[j]) {
        // document.write(`비교 result[ i ] : ${result[i]}, result [ j ] : ${result[j]}<br/>`)
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }
  document.write(`randomOriginArray 내림차순(descending): [${result}]<br/>`)
  console.log(`randomOriginArray 내림차순(descending): ${result}`)
  document.write(`<hr/>`)
}

sortedArray()

// 진법변환 toString() method 통해서 하기.
// the conversion of decimal to binary, octal, hexadecimal
const conversionMethod = (num) => {
  let number = num
  console.log(`toString() method 10진법: ${number}`)

  let binary = number.toString(2)
  console.log(`toString(2) : ${binary}`)

  let octal = number.toString(8)
  console.log(`toString(8): ${octal}`)

  let hexadecimal = number.toString(16)
  console.log(`toString(16): ${hexadecimal}`)
}

conversionMethod(11)

// 1. 10진법에서 2진법으로 변환 후 출력.
// 2. 2진법에서 8진법으로 변환 후 출력.

const conversion = (num) => {
  document.write(`<h3>10진법 -> 2진법 -> 8진법 변환 후 출력</h3>`)
  // Array.reverse()
  conversionArray = []

  for (let i = 0; i < num; i++) {
    temp = num % 2
    conversionArray.push(temp)
  }
  console.log()
}

conversion(11)
// program to convert decimal to binary
function convertToBinary(x) {
  let bin = 0
  let rem,
    i = 1,
    step = 1
  while (x != 0) {
    rem = x % 2
    console.log(`Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x / 2)}`)
    x = parseInt(x / 2)
    bin = bin + rem * i
    i = i * 10
  }
  console.log(`Binary: ${bin}`)
}

// take input
let number = prompt('Enter a decimal number: ')

convertToBinary(number)
