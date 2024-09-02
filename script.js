const btnsHumanChoice = document.querySelector('#btns-human-choice');
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const outcome = document.querySelector('#outcome');
const userScoreBoard = document.querySelector('#user-score');
const computerScoreBoard = document.querySelector('#computer-score');


let humanChoice = btnsHumanChoice.addEventListener('click', handleBtnClick); 

let humanScore = 0, computerScore = 0;

function getComputerChoice () {
  switch(parseInt(Math.random() * 3)) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

function handleBtnClick(event) {
  const target = event.target.tagName === 'IMG' ? event.target.parentElement : event.target;

  if (target.classList.contains('user-choice')) {
    let humanSelection = getHumanChoice(target.id);
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

function getHumanChoice (targetID) {
  let humanChoice = '';

  switch(targetID) {
    case 'btn-rock':
      humanChoice = 'rock';
      break;
    
    case 'btn-paper':
      humanChoice = 'paper';
      break;

    case 'btn-scissors':
      humanChoice = 'scissors';
      break;
  }

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let status = '';
  switch (humanChoice) {
    case 'rock':
      switch (computerChoice) {
        case 'rock': status = 'Draw'; break;
        case 'paper': status = 'Loss'; break;
        case 'scissors': status = 'Win'; break;
        default: break;
      }
      break;
    case 'paper':
      switch (computerChoice) {
        case 'rock': status = 'Win'; break;
        case 'paper': status = 'Draw'; break;
        case 'scissors': status = 'Loss'; break;
        default: break;
      }
      break;
    case 'scissors':
      switch (computerChoice) {
        case 'rock': status = 'Loss'; break;
        case 'paper': status = 'Win'; break;
        case 'scissors': status = 'Draw'; break;
        default: break;
      }
      break;
    default: break;
  }
  outcome.textContent = `${status} | Human: ${humanChoice} - Computer: ${computerChoice}`;
  updateScore(status);
}

function resetScore(score, message) {
  if(score == 5) {
    outcome.textContent = message;
    userScoreBoard.textContent = 'Human: 0';
    computerScoreBoard.textContent = 'Computer: 0';
    humanScore = 0;
    computerScore = 0;
  }
}

function updateScore(status) {
  if(status == 'Win') {
    userScoreBoard.textContent = `You: ${++humanScore}`;
    resetScore(humanScore, 'You win!!! Click rock, paper, or scissors and start again...');
  }
  else if (status == 'Loss') {
    computerScoreBoard.textContent = `Computer: ${++computerScore}`;
    resetScore(computerScore, 'Computer wins!!! Click rock, paper, or scissors and start again...')
  }
}
