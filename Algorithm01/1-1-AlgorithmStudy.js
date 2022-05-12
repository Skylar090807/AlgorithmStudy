// 1부터 100까지 숫자 중 짝수만 출력.
const evenNumber = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`짝수: ${i}`)
    }
  }
}
evenNumber()

// for문만 사용해서 짝수 출력
const evenNumber2 = () => {
  for (let i = 0; i <= 100; i += 2) {
    console.log(`evenNumber2 짝수: ${i}`)
  }
}

evenNumber2()

// 1부터 100까지 숫자 중 홀수만 출력.
const oddNumber = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
      console.log(`홀수: ${i}`)
    }
  }
}

oddNumber()

// for문만 사용해서 홀수 출력
const oddNumber2 = () => {
  for (let i = 1; i <= 100; i += 2) {
    console.log(`oddNumber2 홀수: ${i}`)
  }
}

oddNumber2()

// 구구단 2단부터 순서대로 출력하기
const multiplicationTable = () => {
  document.write('<h3>구구단 2단부터 9단까지 순서대로 출력하기</h3><br/>')
  for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`)
    document.write(`<h4>${i}단</h4>`)

    for (let j = 1; j <= 9; j++) {
      const sum = i * j
      console.log(`
        ${i} x ${j} = ${sum}
      `)
      document.write(`
      ${i} x ${j} = ${sum}<br/><br/>
      `)
    }
  }
  document.write('<hr/>')
}

multiplicationTable()

const threeMultiplicationTable2 = () => {
  document.write(`<h3>for문 세 개로 구구단 2단부터 9단까지 세 개씩 화면에 출력하기</h3><br/>`)
  document.write('<pre>')
  for (let i = 2; i <= 2; i++) {
    // document.write(`\n`)
    for (let j = 0; j <= 7; j++) {
      document.write(`\n`)
      for (let k = 1; k <= 9; k++) {
        document.write(`${i + j} x ${k} = ${(i + j) * k}\n`)
      }
    }
  }
  document.write('</pre>')
  document.write('<hr/>')
}
threeMultiplicationTable2()

// 구구단 1단부터 9단까지 세 개씩 화면에 출력하기
// <pre> tag로 감싸주어 \t, \n이 표현되게 한다.
const threeMultiplicationTable = () => {
  document.write(`<h3>구구단 2단부터 9단까지 세 개씩 화면에 출력하기</h3><br/>`)
  document.write('<pre>')
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 9; j++) {
      document.write(`\n`)
      // document.write(`두번째for문 ${j} \t`)
      // document.write(`i = ${i}\t`)

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
  const start = new Date().getTime()
  let preNumber = 0
  let nextNumber = 1
  let result = 0
  for (let i = 1; i < n; i++) {
    result = preNumber + nextNumber
    preNumber = nextNumber
    nextNumber = result
    console.log(`피보나치 수열: ${result}`)
  }
  const end = new Date().getTime()
  console.log(end - start)
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

// for문 if문 사용하여 다이아몬드 별 찍기
const diamondStar2 = (size) => {
  document.write(`<h3>for문 if문 사용하여 다이아몬드 별 찍기<h3/>`)
  document.write(`<pre>`)
  let col = size * 2 - 1

  for (let i = 1; i <= size; i++) {
    let print = ''
    document.write(`\n`)
    for (let j = 1; j <= col; j++) {
      // 1 <= j <= 5
      if (j >= size + 1 - i && j <= size - 1 + i) {
        print += '⭐️'
        document.write(`⭐️`)
      } else {
        print += ' '
        document.write(`🟣`)
      }
    }
    console.log(print)
  }
  for (let i = size - 1; i >= 1; i--) {
    let print = ''
    document.write('\n')
    for (let j = 1; j <= col; j++) {
      if (j >= size + 1 - i && j <= size - 1 + i) {
        print += '⭐️'
        document.write('⭐️')
      } else {
        print += ' '
        document.write('🟣')
      }
    }
    console.log(print)
  }
  document.write(`<pre/>`)
  document.write(`<hr/>`)
}

diamondStar2(3)

// 배열 정렬

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
const convertMethod = (num) => {
  let number = num
  console.log(`toString() method 10진법: ${number}`)

  let binary = number.toString(2)
  console.log(`toString(2) : ${binary}`)

  let octal = number.toString(8)
  console.log(`toString(8): ${octal}`)

  let hexadecimal = number.toString(16)
  console.log(`toString(16): ${hexadecimal}`)
}

convertMethod(88)

// 1. 10진법에서 2진법으로 변환 후 출력.
// 2. 2진법에서 8진법으로 변환 후 출력.

const convert = (number) => {
  document.write('<h4>진법 변환: 10진수 -> 2진수 -> 8진수</h4>')
  let mod = Number
  let convertArray = []

  // 1. 10진법에서 2진법으로 변환 후 출력.
  while (number > 0) {
    mod = number % 2
    number = parseInt(number / 2)
    convertArray.push(mod)
  }
  convertArray.reverse()
  strArray = convertArray.join('')
  document.write(`10진수에서 2진수로 변환: ${strArray}<br/>`)
  console.log(`10진수에서 2진수로 변환: ${strArray}`)
  console.log('strArray : ', strArray)
  console.log(`convertArray: ${convertArray}`)

  // 2. 2진법에서 8진법으로 변환 후 출력.
  let octalArray = [...strArray]

  // octalArray.length를 3개씩 나누었을 때 딱 떨어지지 않으면(0이 아니면),
  // 딱 떨어질 때까지 octalArray.unshift('0') 반복한다.
  while (octalArray.length % 3 !== 0) {
    octalArray.unshift('0')
  }
  console.log('octalArray에 unshift 0 :', octalArray)

  // octalArray.length가 0일 때까지(0이 아니면) 아래를 반복한다.
  // count는 Math.pow()에서 사용할 지수다.

  // 지수가 -1일 때까지(-1이 아니면) while 중첩문을 반복한다.
  // octalArray.shift()하여 Number로 형 변환 후 temp에 대입한다. (arr.shift해주면 앞쪽부터 하나씩 제거된 요소를 반환.)
  // Math.pow(거듭제곱 함수)를 사용한다.
  // 초기 count는 2이므로 base숫자 2에 지수인 count2를 거듭제곱하면 2^2(4)이며,
  // Math.pow(2,count) * temp해준 뒤 count를 하나씩 감소하므로 2^1(2), 2^0(1) 꼴이 된다.
  // 감소된 count -1이 되는 순간 중첩 while문을 빠져 나와 result에 문자열로 형변환 하여 더하기 할당 해준다.
  // 중첩 while문을 빠져나오면 다시 octalArray.length가 octalArray.shift()로 모두 제거되어 길이가 0이 될 때까지 중첩 while문을 돈다.
  let result = ''
  while (octalArray.length !== 0) {
    let count = 2
    let sum = 0
    while (count !== -1) {
      let temp = Number(octalArray.shift())
      sum += Math.pow(2, count) * temp
      count--
      console.log('sum:', sum)
    }
    // result += `${sum}`
    result += sum
  }
  console.log('2진수에서 8진수로 변환: ', result)
  document.write(`2진수에서 8진수로 변환: ${result}`)
  console.log(`octalArray는 모두 shift되었다: ${octalArray}`)
}

// prompt에서 받아 온 number를 함수 convert 함수 인자로 전달
// let number = prompt('10진수 하나 입력: ')

convert(88)
