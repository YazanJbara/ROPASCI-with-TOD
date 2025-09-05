// ? global variables & DOM selections
let humanScore = 0;
let computerScore = 0;

const humanPoints = document.querySelector('.user-score');
const computerPoints = document.querySelector('.computer-score');

const playBtn = document.querySelector('.btn--play');
const resetBtn = document.querySelector('.btn--reset');

const gesture = document.getElementById('computer-gesture');

const overlay = document.getElementById('overlay');

const choices = document.querySelectorAll('#overlay .overlay-box .icons img ');
const choice = document.querySelector('.gesture');
const tieMessage = document.getElementById('tie-message');

function humanWon() {
  const existingMessages = document.querySelectorAll('.win-message');
  existingMessages.forEach(message => message.classList.add('hidden'));
   if (tieMessage) tieMessage.classList.add('hidden');
  const humanSide = document.getElementById('human');
  const winMessage = document.createElement('p');
  winMessage.className = 'win-message';
  winMessage.textContent = 'Human won';
  humanSide.appendChild(winMessage);
}

function computerWon() {
  const existingMessages = document.querySelectorAll('.win-message');
  existingMessages.forEach(message => message.classList.add('hidden'));
  if (tieMessage) tieMessage.classList.add('hidden');
  const computerSide = document.getElementById('computer');
  const winMessage = document.createElement('p');
  winMessage.className = 'win-message';
  winMessage.textContent = 'Computer won';
  computerSide.appendChild(winMessage);
}

function showTie() {
  const existingMessages = document.querySelectorAll('.win-message');
  existingMessages.forEach(message => message.classList.add('hidden'));
  if (tieMessage) {
    tieMessage.textContent = "It's a tie!";
    tieMessage.classList.remove('hidden');
  }
}

function playRound(humanChoice, computerChoice) {
  // Convert choices to lowercase for comparison
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    showTie();
    return 'tie';
  }

  if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    humanWon();
    humanScore++;
    humanPoints.textContent = humanScore;
    return 'human';
  } else {
    computerWon();
    computerScore++;
    computerPoints.textContent = computerScore;
    return 'computer';
  }
}

// ! convert img path to words
function getChoiceFromSrc(src) {
  if (src.includes('gesture--1')) return 'paper';
  if (src.includes('gesture--2')) return 'scissors';
  if (src.includes('gesture--3')) return 'rock';
}


playBtn.addEventListener('click', function () {
  overlay.style.display = 'block';
});

// ! event delegeation to handle various clicks
choices.forEach((el) => {
  el.addEventListener('click', function () {
    choice.src = el.src;

    //* computer random logic
    const randomGesture = Math.trunc(Math.random() * 3) + 1;
    gesture.src = `Assets/gesture--${randomGesture}.svg`;

    overlay.style.display = 'none';
    const humanChoice = getChoiceFromSrc(el.src);
    const computerChoice = getChoiceFromSrc(gesture.src);
    const result = playRound(humanChoice, computerChoice);
    console.log(
      `Human: ${humanChoice}, Computer: ${computerChoice}, Winner: ${result}`
    );
  });
});

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// * Resetting the game

resetBtn.addEventListener('click', function () {
  humanScore = 0;
  computerScore = 0;
  humanPoints.textContent = humanScore;
  computerPoints.textContent = computerScore;

  const existingMessages = document.querySelectorAll('.win-message');
  existingMessages.forEach(message => message.classList.add('hidden'));
  if (tieMessage) tieMessage.classList.add('hidden');
});
