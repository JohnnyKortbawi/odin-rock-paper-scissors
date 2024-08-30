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
        case 'rock': status = 'draw'; break;
        case 'paper': status = 'lose'; break;
        case 'scissors': status = 'win'; break;
        default: break;
      }
      break;
    case 'paper':
      switch (computerChoice) {
        case 'rock': status = 'win'; break;
        case 'paper': status = 'draw'; break;
        case 'scissors': status = 'lose'; break;
        default: break;
      }
      break;
    case 'scissors':
      switch (computerChoice) {
        case 'rock': status = 'lose'; break;
        case 'paper': status = 'win'; break;
        case 'scissors': status = 'draw'; break;
        default: break;
      }
      break;
    default: break;
  }
  outcome.textContent = `You ${status}! Human: ${humanChoice} - Computer: ${computerChoice}`;
  updateScore(status);
}

function updateScore(status) {
  if(status == 'win') {
    userScoreBoard.textContent = `You: ${++humanScore}`;
  }
  else if (status == 'lose') {
    computerScoreBoard.textContent = `Computer: ${++computerScore}`;
  }
}
