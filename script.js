
// Keeping track of the global scores.
let myScore = 0;
let aiScore = 0;
let gameLimit = 5;


const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const answer = document.querySelector(".answer");
const playerScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".ai-score");
const limitOfGame = document.querySelector(".game-limit");
const playAgainBtn = document.querySelector(".play-again");


answer.textContent = "Please select one of the three items bellow to start the game.";

btnRock.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const btnRockText = btnRock.textContent;
  const btnRockTextFormatted = btnRockText.toLowerCase();
  let roundPlayed = playRound(btnRockTextFormatted, computerChoice);
  answer.textContent = `The player chooses ${computerChoice}! ${roundPlayed}`;

  // Getting an string occurence, that will decide if the player or pc score should be incremented or
  let occurenceOne = 'You';
  let resultOne = roundPlayed.includes(occurenceOne);

  let occurenceTwo = 'The';
  let resultTwo = roundPlayed.includes(occurenceTwo);

  if (resultOne) {
    myScore++ ;
  }
  else if (resultTwo) {
    aiScore++ ;
  }

  playerScore.textContent = `Player score : ${myScore}`;
  computerScore.textContent = `Computer score : ${aiScore}`;

  if (roundPlayed === 'Wrong input, try again' || roundPlayed === "It's a tie!") {
    // If it's a wrong input or it is a tie, the gameLimit remains unchanged.
  } else {
    gameLimit-- ;
  }
  limitOfGame.textContent = `Rounds left : ${gameLimit}`;

  // if/else conditionals check for END GAME.
if (myScore > aiScore && gameLimit == 0) {
  answer.textContent = "Congratulations, YOU WON!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";
  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);
    
  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });

}
else if (myScore < aiScore && gameLimit == 0) {
  answer.textContent = "I'm sorry, YOU LOST! The PC won!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);
  
  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
}
else if (myScore == aiScore && gameLimit == 0) {
  answer.textContent = "IT IS A TIE!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
};

  
});

btnPaper.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const btnPaperText = btnPaper.textContent;
  const btnPaperTextFormatted = btnPaperText.toLowerCase();
  let roundPlayed = playRound(btnPaperTextFormatted, computerChoice);
  answer.textContent = `The player chooses ${computerChoice}! ${roundPlayed}`;

  let occurenceOne = 'You';
  let resultOne = roundPlayed.includes(occurenceOne);

  let occurenceTwo = 'The';
  let resultTwo = roundPlayed.includes(occurenceTwo);

  if (resultOne) {
    myScore++ ;
  }
  else if (resultTwo) {
    aiScore++ ;
  }

  playerScore.textContent = `Player score : ${myScore}`;
  computerScore.textContent = `Computer score : ${aiScore}`;

  if (roundPlayed === 'Wrong input, try again' || roundPlayed === "It's a tie!") {
    // If it's a wrong input or it is a tie, the gameLimit remains unchanged.
  } else {
    gameLimit-- ;
  }
  limitOfGame.textContent = `Rounds left : ${gameLimit}`;

  // if/else conditionals check for END GAME.
if (myScore > aiScore && gameLimit == 0) {
  answer.textContent = "Congratulations, YOU WON!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
}
else if (myScore < aiScore && gameLimit == 0) {
  answer.textContent = "I'm sorry, YOU LOST! The PC won!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
}
else if (myScore == aiScore && gameLimit == 0) {
  answer.textContent = "IT IS A TIE!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
};
});

btnScissors.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const btnScissorsText = btnScissors.textContent;
  const btnScissorsTextFormatted = btnScissorsText.toLowerCase();
  let roundPlayed = playRound(btnScissorsTextFormatted, computerChoice);
  answer.textContent = `The player chooses ${computerChoice}! ${roundPlayed}`;

  let occurenceOne = 'You';
  let resultOne = roundPlayed.includes(occurenceOne);

  let occurenceTwo = 'The';
  let resultTwo = roundPlayed.includes(occurenceTwo);

  if (resultOne) {
    myScore++ ;
  }
  else if (resultTwo) {
    aiScore++ ;
  }

  playerScore.textContent = `Player score : ${myScore}`;
  computerScore.textContent = `Computer score : ${aiScore}`;

  if (roundPlayed === 'Wrong input, try again' || roundPlayed === "It's a tie!") {
    // If it's a wrong input or it is a tie, the gameLimit remains unchanged.
  } else {
    gameLimit-- ;
  }
  limitOfGame.textContent = `Rounds left : ${gameLimit}`;

  // if/else conditionals check for END GAME.
if (myScore > aiScore && gameLimit == 0) {
  answer.textContent = "Congratulations, YOU WON!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
}
else if (myScore < aiScore && gameLimit == 0) {
  answer.textContent = "I'm sorry, YOU LOST! The PC won!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
}
else if (myScore == aiScore && gameLimit == 0) {
  answer.textContent = "IT IS A TIE!";

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again";

  playAgainBtn.textContent = "Play another game?";
  document.querySelector(".mama").appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', function() {
    playAgainBtn.remove();
    answer.textContent = "";
    
    myScore = 0;
    aiScore = 0;
    gameLimit = 5;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    playerScore.textContent = `Player score : ${myScore}`;
    computerScore.textContent = `Computer score : ${aiScore}`;
    limitOfGame.textContent = `Rounds left : ${gameLimit}`;

    answer.textContent = "Please select one of the three items bellow to start the game.";

  });
};
});




// a function to return a random string result from the AI player .
function getComputerChoice() {
  const aiPlayerArray = ['Rock', 'Paper', 'Scissors'];
  const aiCalc = Math.floor(Math.random() * aiPlayerArray.length);

  const aiAnswer = aiPlayerArray[aiCalc];
  const aiAnswerToLowerCase = aiAnswer.toLowerCase();
  return aiAnswerToLowerCase;
}

// a function to perform all the conditional logic and return a result to be displayed in an alert() or a console.log() function.
function playRound(playerOne, aiPLayer) {
  let result;

  if (playerOne === aiPLayer) {
    result = "It's a tie!";
  } 

  else if (playerOne === 'rock' && aiPLayer === 'scissors') {
    result = "You win! Rock beats scissors.";
  }
  else if (playerOne === 'rock' && aiPLayer === 'paper') {
    result = 'The AI player wins. Paper beats rock.';
  }
  else if (playerOne === 'paper' && aiPLayer === 'rock') {
    result = 'You win! Paper beats rock.';
  }
  
  else if (playerOne === 'paper' && aiPLayer === 'scissors') {
    result = 'The AI player wins. Scissors beats paper.';
  }
  else if (playerOne === 'scissors' && aiPLayer === 'rock') {
    result = 'The AI player wins. Rock beats scissors.';
  }
  else if (playerOne === 'scissors' && aiPLayer === 'paper') {
    result = 'You win! Scissors beats paper.';
  }

  else {
    result = 'Wrong input, try again.';
  }
 
  return result;
}



//main function game (This code was written when the game was only played in the console. I used it as a refference when I was building it with the HTML elements. It's not affecting the code above since it's inside of an unused function.)
function game() {
  
  const myAnswer = prompt('Enter: "Rock", "Paper", or "Scissors".');
  const myAnswerFormatted = myAnswer.toLowerCase();

  let aRound = playRound(myAnswerFormatted, getComputerChoice());
  console.log(aRound);

  // making some variables to hold occurence of words so I can compare them later
  let occurenceOne = 'You';
  let resultOne = aRound.includes(occurenceOne);

  let occurenceTwo = 'The';
  let resultTwo = aRound.includes(occurenceTwo);

  // I am checking if those occurence variables are true, and increment global 'myScore' or 'aiScore'.
  if (resultOne == true) {
    myScore++ ;
  }
  else if (resultTwo == true) {
    aiScore++ ;
  }
  
  console.log(`Your score: ${myScore}\nComputer score: ${aiScore}`);
  

  // checking to see if i need to decrement or increment the global 'gameLimit' variable.
  if (aRound == 'Wrong input, try again') {
    // If it's a wrong input, the gameLimit remains unchanged.
  } else {
    gameLimit-- ;
  }

  console.log(`${gameLimit} rounds left!`);


  // if/else conditionals check for END GAME.
  if (myScore > aiScore && gameLimit == 0) {
    console.log('YOU WON!');
  }
  else if (myScore < aiScore && gameLimit == 0) {
    console.log('THE PC WON!');
  }
  else if (myScore == aiScore && gameLimit == 0) {
    console.log('It is a tie!');
  }

}





