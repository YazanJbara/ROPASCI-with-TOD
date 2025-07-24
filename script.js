// global variables & DOM selections
const options = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;


const humanPoints = document.querySelector('.user-score');
const computerPoints = document.querySelector('.computer-score');

const playBtn = document.querySelector('.btn--play');
const resetBtn = document.querySelector('.btn--reset');

const gesture = document.getElementById('computer-gesture');

const overlay = document.getElementById('overlay')


// computer random logic
playBtn.addEventListener('click', function () {
  overlay.style.display = 'block';
 const randomGesture = Math.trunc(Math.random() * 3) + 1;
  gesture.src = `Assets/gesture--${randomGesture}.svg`;
  
});

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// overlay 


// generate computer choice randomly

function getComputerChoice() {
  const randomOption = options[Math.floor(Math.random() * options.length)];
  // console.log(randomOption);
  return randomOption;
}

// taking user input

// function getPlayerChoice () {
//   let validatedinput = false;
//   while (validatedinput==false) {
//     const choice = prompt("enter rock || paper || scissors")
//     if (choice == null) {
//       continue;
//     }
//     const inputInLowerCase = choice.toLowerCase()
//     if (options.includes(inputInLowerCase)) {
//       validatedinput = true
//       return inputInLowerCase;
//     }
//   }

// }

// function to check who won

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'scissors' && computerChoice == 'paper') ||
    (humanChoice == 'paper' && computerChoice == 'rock')
  ) {
    return `Player won cz he choosed ${humanChoice} vs computer choosed ${computerChoice} `;
  } else if (humanChoice == computerChoice) {
    return 'Tie';
  } else {
    return `computer won cz he choosed ${computerChoice} vs human choosed ${humanChoice} `;
  }
}

// the entire game

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getPlayerChoice();

    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
  }
}

playGame();
