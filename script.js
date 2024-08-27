let humanScore = 0, computerScore = 0;

function getComputerChoice () {
  switch(parseInt(Math.random() * 2)) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

function getHumanChoice () {
  let humanChoice = '';
  do {
    humanChoice = prompt('Type rock, paper, or scissors').toLowerCase();

    if(humanChoice !== 'rock' 
      && humanChoice !== 'paper'
      && humanChoice !== 'scissors'
    ) {
      console.log('Invalid input!')
    }
    else return humanChoice;

  } while (humanChoice !== 'rock' 
    && humanChoice !== 'paper'
    && humanChoice !== 'scissors'
  )
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
  console.log(`you ${status}! human: ${humanChoice} - computer: ${computerChoice}`)
}

function playGame () {
  for(let i=0; i<5; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }
}
