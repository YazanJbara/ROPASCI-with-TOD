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

function playRound(humanChoice, computerChoice) {
  // Convert choices to lowercase for comparison
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    return 'tie';
  }

  if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    humanScore++;
    humanPoints.textContent = humanScore;
    return 'human';
  } else {
    computerScore++;
    computerPoints.textContent = computerScore;
    return 'computer';
  }
}

// ! convert img path into words
function getChoiceFromSrc(src) {
  if (src.includes('gesture--1')) return 'paper';
  if (src.includes('gesture--2')) return 'scissors';
  if (src.includes('gesture--3')) return 'rock';
}

// ! Computer random logic
playBtn.addEventListener('click', function () {
  overlay.style.display = 'block';
  const randomGesture = Math.trunc(Math.random() * 3) + 1;
  gesture.src = `Assets/gesture--${randomGesture}.svg`;
});

// ! event delegeation to handle various clicks
choices.forEach((el) => {
  el.addEventListener('click', function () {
    choice.src = el.src;
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
