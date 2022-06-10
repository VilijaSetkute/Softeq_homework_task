// test 1
const changeStyle = document.querySelector('.changeStyle')
changeStyle.addEventListener('click', () => {
  const listStyle = document.querySelectorAll('.task1 > .container > p:nth-child(3)')[0]
  listStyle.style.backgroundColor = 'black'
  listStyle.style.color = 'red'
})

// test 2
const integerPrint = document.querySelector('.integerPrint')
integerPrint.addEventListener('click', () => {
  const integerArrLength = 99
  const parentInteger = document.querySelector('.parentStyle')
  for (let i = 1; i <= integerArrLength; i++) {
    const integerItem = document.createElement('div')
    integerItem.style.margin = '5px'
    integerItem.style.padding = '2px 7px'
    integerItem.style.border = '1px solid grey'
    integerItem.style.color = 'green'
    integerItem.style.fontWeight = 'bold'

    if (i % 3 === 0 && i % 7 === 0) {
      integerItem.style.color = 'red'
      integerItem.innerText = 'OpenSource'
    } else if (i % 3 === 0) {
      integerItem.style.color = 'green'
      integerItem.innerText = 'Open'
    } else if (i % 7 === 0) {
      integerItem.style.color = 'blue'
      integerItem.innerText = 'Source'
    } else {
      integerItem.style.color = 'black'
      integerItem.style.fontWeight = 'normal'
      integerItem.innerText = `${i}`
    }
    parentInteger.append(integerItem)
  }
})

// test 3
const findChildren = document.querySelector('.findChildren')
findChildren.addEventListener('click', () => {
  const childrenParent = document.querySelector('.printChildren')
  const children = document.querySelector('.task3 > .container').children
  for (let i = 0; i < children.length; i++) {
    const childItem = document.createElement('div')
    childItem.innerText = children[i].innerHTML
    childrenParent.append(childItem)
  }
})


// test 4
const sumIntegers = document.querySelector('.sumIntegers')
sumIntegers.addEventListener('click', () => {
  const stringArray = ['1', 'a', '25', '13.1']
  let output = 0
  const sumOutcome = document.querySelector('.sumResult')
  for (const stringItem of stringArray) {
    const item = Number(stringItem)
    if(Number.isInteger(item)) {
      output += item
    }
  }
  sumOutcome.innerText = output
})

// test 5
const fetchData = document.querySelector('.fetchData')
fetchData.addEventListener('click', () => {
  const inputId = document.querySelector('.task5 > div > input[type=number]')
  const objectParent = document.querySelector('.objectReceived')
  if (inputId.value >= 1 && inputId.value <=100) {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${inputId.value}`)
      .then(res => res.json())
      .then(data => {
        objectParent.style.color = 'black'
        objectParent.innerText = JSON.stringify(data[0], null, 2)
      })
  } else {
    objectParent.style.color = 'red'
    objectParent.innerText = 'Please provide a number in range 1 to 100'
  }
})

// test 6
const regexCheck = document.querySelector('.regexCheck')
regexCheck.addEventListener('click', () => {
  const regex = /Softeq.*#rules|#rules.*Softeq/g
  const regexText = document.querySelector('.regexText').innerText
  const regexNewText = document.querySelector('#regexNewText').value
  const regexResult = document.querySelector('.regexResult')
  return regexResult.innerText = regexNewText.length !== 0 ? regex.test(regexNewText) : regex.test(regexText)
})


// test 7
const generateAlphabet = document.querySelector('.generateAlphabet')
generateAlphabet.addEventListener('click', () => {
  const alphabetParent = document.querySelector('.alphabetArray')
  const alphabet = []
  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i)
    alphabet.push(letter)
  }
  alphabetParent.innerText = JSON.stringify(alphabet, null, 0)
})

// test 8
let numOfTriesLeft = 50
const secretNumber = Math.floor(Math.random()*1000000)+1
const numberTry = document.querySelector('.task8 > div > input[type=number]')
const play = document.querySelector('.startGame')

const triesLeft = document.querySelector('.triesLeft')
const triesResult = document.querySelector('.triesResult')
const gameOver = document.querySelector('.gameOver')

function verify(guess) {
  triesLeft.innerText = `You have left ${numOfTriesLeft} tries`
  if (guess > secretNumber) {
    triesResult.innerText = `Your result: 1`
    return 1
  } else if (guess < secretNumber) {
    triesResult.innerText = `Your result: -1`
    return -1
  } else {
    gameOver.innerText = `You won in ${50 - numOfTriesLeft} tries. Secret number was ${secretNumber}`
    gameOver.style.color = 'green'
    gameOver.style.fontWeight = 'bold'
    triesLeft.innerText = ''
    triesResult.innerText = `Your trie result: 0`
    return 0
  }
}

play.addEventListener('click', () => {
  numOfTriesLeft -= 1
  if (numOfTriesLeft > 0) {
    verify(numberTry.value)
  } else {
    gameOver.innerText = `Game over. Secret number was ${secretNumber}`
    gameOver.style.color = 'red'
    gameOver.style.fontWeight = 'bold'
    triesLeft.innerText = ''
    triesResult.innerText = ''
  }
} )
