const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNum = Math.ceil(Math.random() * 3);

  if (randomNum == 1) {
    computerChoice = 'rock';
  } else if (randomNum == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice == userChoice) {
    result = 'You are tie!';
  } else {
    if (computerChoice == 'rock') {
      if (userChoice == 'paper') {
        result = 'You won!';
      } else {
        result = 'You lost!';
      }
    } else if (computerChoice == 'paper') {
      if (userChoice == 'scissors') {
        result = 'You won!';
      } else {
        result = 'You lost!';
      }
    } else {
      if (userChoice == 'rock') {
        result = 'You won!';
      } else {
        result = 'You lost!';
      }
    }
  }
  resultDisplay.innerHTML = result;
}

const h1 = document.querySelector('h1');
gsap.fromTo(
  h1,
  {
    x: -75,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: 'Expo.easeOut',
    duration: 4,
  },
  0.2
);
