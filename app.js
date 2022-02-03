//game played between user and computer will generate result
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//returns a random integer from 0 to 2
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
  userChoice = rock, paper, scissors
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  computerChoice = rock, paper, scissors
  computerChoiceDisplay.innerHTML = computerChoice
}))

//if statements explain choice of selection
function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3) // or you can use possibleChoice.length
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  console.log ("computerChoice", computerChoice)
}

computerChoiceDisplay.innerHTML = computerChoice

function playGame(userChoice, computerChoice) {
if (computerChoice === userChoice){
  result = 'its a draw'
  console.log ("computerChoice", computerChoice, result)
}
if (computerChoice === 'rock' && userChoice === "paper"){
  result = 'you win!'
  console.log ("computerChoice", computerChoice, result)
}
if (computerChoice === 'rock' && userChoice === "scissors"){
  result = 'you lost!'
  console.log ("computerChoice", computerChoice, result)
}
if (computerChoice === 'paper' && userChoice === "scissors"){
  result = 'you win!'
  console.log ("computerChoice", computerChoice, result)
}
if (computerChoice === 'paper' && userChoice === "rock"){
  result = 'you lose!'
  console.log ("computerChoice", computerChoice, result)
}
if (computerChoice === 'scissors' && userChoice === "rock"){
  result = 'you win'
  console.log ("computerChoice", computerChoice, result)
}
if (computerChoice === 'scissors' && userChoice === "paper"){
  result = 'you lose'
  console.log ("computerChoice", computerChoice, result)
}
resultDisplay.innerHTML = result
  }

playGame(userChoice, computerChoice)