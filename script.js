// global variables
const options = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;


// generate computer choice randomly

function getComputerChoice() {
  const randomOption = options[Math.floor(Math.random() * options.length)];
  // console.log(randomOption);
  return randomOption;
}

// taking user input

function getPlayerChoice () {
  let validatedinput = false;
  while (validatedinput==false) {
    const choice = prompt("enter rock || paper || scissors")
    if (choice == null) {
      continue;
    }
    const inputInLowerCase = choice.toLowerCase()
    if (options.includes(inputInLowerCase)) {
      validatedinput = true
      return inputInLowerCase;
    }
  }

}


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

function playGame () {
  for (let i=0 ; i<5 ; i++) {
    const humanSelection = getPlayerChoice();

    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
  }

}

playGame ()