
// Keeping track of the global scores.
let myScore = 0;
let aiScore = 0;
let gameLimit = 5;

// a function to return a random result from the ai player .
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

  if (playerOne == 'rock' && aiPLayer == 'rock') {
    result = "It's a tie!";
  } 
  else if (playerOne == 'rock' && aiPLayer == 'scissors') {
    result = "You win! rock beats scissors!";
  }
  else if (playerOne == 'rock' && aiPLayer == 'paper') {
    result = 'The AI player wins. paper beats rock.';
  }
  else if (playerOne == 'paper' && aiPLayer == 'rock') {
    result = 'You win! paper beats rock!';
  }
  else if (playerOne == 'paper' && aiPLayer == 'paper') {
    result = "It's a tie!";
  }
  else if (playerOne == 'paper' && aiPLayer == 'scissors') {
    result = 'The AI player wins. scissors beats paper.';
  }
  else if (playerOne == 'scissors' && aiPLayer == 'rock') {
    result = 'The AI player wins. rock beats scissors.';
  }
  else if (playerOne == 'scissors' && aiPLayer == 'paper') {
    result = 'You win! scissors beats paper.';
  }
  else if (playerOne == 'scissors' && aiPLayer == 'scissors') {
    result = 'It is a tie!';
  }
  else {
    result = 'Wrong input, try again';
  }
  
  if (result != 'Wrong input, try again') {
    alert(`The AI player has chosen: ${aiPLayer}!`)
  }

  return result;
}

//main function game
function game() {
  
  const myAnswer = prompt('Enter: "Rock", "Paper", or "Scissors".');
  const myAnswerFormatted = myAnswer.toLowerCase();

  let aRound = playRound(myAnswerFormatted, getComputerChoice());
  alert(aRound);

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
  
  alert(`Your score: ${myScore}\nComputer score: ${aiScore}`);

  // checking to see if i need to decrement or increment the global 'gameLimit' variable.
  if (aRound == 'Wrong input, try again') {
    gameLimit-- ;
    gameLimit++ ;
  } else {
    gameLimit-- ;
  }
  

  alert(`${gameLimit} rounds left!`);

  // if/else conditionals check for end game.
  if (myScore > aiScore && gameLimit == 0) {
    alert('YOU WON!');
  }
  else if (myScore < aiScore && gameLimit == 0) {
    alert('THE PC WON!');
  }
  else if (myScore == aiScore && gameLimit == 0) {
    alert('It is a tie!');
  }

}

// the official function called 5 times since i suck at loops.
game();
game();
game();
game();
game();



