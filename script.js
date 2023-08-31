
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


answer.textContent = "Please select one of the three items bellow to start the game.";

btnRock.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const btnRockText = btnRock.textContent;
  const btnRockTextFormatted = btnRockText.toLowerCase();
  let roundPlayed = playRound(btnRockTextFormatted, computerChoice);
  answer.textContent = `The player chooses ${computerChoice}! ${roundPlayed}`;

  // Updating the player score and the PC score.
  updateScores(roundPlayed);

  // Updating how many rounds are left.
  updateRoundsLeft(roundPlayed);

  // If/Else conditionals check for END GAME.
  endGame(myScore, aiScore, gameLimit);
});

btnPaper.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const btnPaperText = btnPaper.textContent;
  const btnPaperTextFormatted = btnPaperText.toLowerCase();
  let roundPlayed = playRound(btnPaperTextFormatted, computerChoice);
  answer.textContent = `The player chooses ${computerChoice}! ${roundPlayed}`;

  // Updating the player score and the PC score.
  updateScores(roundPlayed);

  // Updating how many rounds are left.
  updateRoundsLeft(roundPlayed);

  // If/Else conditionals check for END GAME.
  endGame(myScore, aiScore, gameLimit);
});

btnScissors.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  const btnScissorsText = btnScissors.textContent;
  const btnScissorsTextFormatted = btnScissorsText.toLowerCase();
  let roundPlayed = playRound(btnScissorsTextFormatted, computerChoice);
  answer.textContent = `The player chooses ${computerChoice}! ${roundPlayed}`;

  // Updating the player score and the PC score.
  updateScores(roundPlayed);

  // Updating how many rounds are left.
  updateRoundsLeft(roundPlayed);

  // If/Else conditionals check for END GAME.
  endGame(myScore, aiScore, gameLimit);
});



// a function that updates the variables myScore and aiScore (also the HTML element, visually) based of an occurence of a string.
function updateScores(round) {

  let occurenceOne = 'You';
  let resultOne = round.includes(occurenceOne); // this returrns true or false.

  let occurenceTwo = 'The';
  let resultTwo = round.includes(occurenceTwo); // this returrns true or false.

  if (resultOne) {
    myScore++ ;
  }
  else if (resultTwo) {
    aiScore++ ;
  }

  playerScore.textContent = `Player score : ${myScore}`;
  computerScore.textContent = `Computer score : ${aiScore}`;
}


// A function that determines the endgame by taking the playerScore, aiScore and the gameLimit as arguments. "Play again" button is added at the end.
function endGame(my_score, ai_score, game_limit) {

  if (my_score > ai_score && game_limit == 0) {
    answer.textContent = "Congratulations, YOU WON!";
  
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  
    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "play-again";
    playAgainBtn.textContent = "Play another game?";
    document.querySelector(".mama").appendChild(playAgainBtn);
      
    playAgainBtn.addEventListener('click', playAgainButtonClicked);
  }

  else if (my_score < ai_score && game_limit == 0) {
    answer.textContent = "I'm sorry, YOU LOST! The PC won!";
  
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  
    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "play-again";
    playAgainBtn.textContent = "Play another game?";
    document.querySelector(".mama").appendChild(playAgainBtn);
    
    playAgainBtn.addEventListener('click', playAgainButtonClicked);
  }

  else if (my_score == ai_score && game_limit == 0) {
    answer.textContent = "IT IS A TIE!";
  
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  
    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "play-again";
    playAgainBtn.textContent = "Play another game?";
    document.querySelector(".mama").appendChild(playAgainBtn);
  
    playAgainBtn.addEventListener('click', playAgainButtonClicked);
  };
}

// Play again button function.
function playAgainButtonClicked() {
  const existingPlayAgainBtn = document.querySelector(".play-again");

  if (existingPlayAgainBtn) {
    existingPlayAgainBtn.remove();
  }

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
}

// A function to increment or decrement the gameLimit variable, and to update its HTML element.
function updateRoundsLeft(round) {
  if (round === 'Wrong input, try again' || round === "It's a tie!") {
    // If it's a wrong input or it is a tie, the gameLimit remains unchanged.
  } else {
    gameLimit-- ;
  }
  limitOfGame.textContent = `Rounds left : ${gameLimit}`;
}


// A function to return a random string result from the AI player .
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





